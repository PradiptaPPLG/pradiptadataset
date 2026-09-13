import kagglehub
import pandas as pd
import os

# Pastikan folder target ada
output_dir = r"c:\Projects\dataset\songs"
os.makedirs(output_dir, exist_ok=True)

print("Mengunduh dataset dari Kaggle...")
try:
    path = kagglehub.dataset_download("kylefengkfeng209/most-streamed-spotify-songs-2025")
    print(f"Dataset berhasil diunduh ke folder cache: {path}")
    
    # Cari file CSV pertama di folder tersebut
    csv_files = [f for f in os.listdir(path) if f.endswith('.csv')]
    if not csv_files:
        print("Tidak ada file CSV yang ditemukan dalam dataset.")
        exit(1)
        
    csv_path = os.path.join(path, csv_files[0])
    print(f"Membaca data dari: {csv_path}")
    df = pd.read_csv(csv_path)
    
except Exception as e:
    print(f"Error mengunduh atau membaca dataset: {e}")
    exit(1)

sql_file_path = os.path.join(output_dir, "data-most-streamed-spotify-songs-2025.sql")
table_name = "spotify_songs_2025"

print("Mulai konversi ke SQL...")
try:
    with open(sql_file_path, "w", encoding="utf-8") as f:
        # Generate CREATE TABLE
        f.write(f"CREATE TABLE `{table_name}` (\n")
        cols = []
        # Menyesuaikan nama kolom agar aman untuk SQL
        safe_columns = [str(col).strip().replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "").replace(".", "_").lower() for col in df.columns]
        
        for col_name, dtype in zip(safe_columns, df.dtypes):
            if "int" in str(dtype):
                cols.append(f"    `{col_name}` INT")
            elif "float" in str(dtype):
                cols.append(f"    `{col_name}` FLOAT")
            else:
                cols.append(f"    `{col_name}` TEXT")
        f.write(",\n".join(cols))
        f.write("\n);\n\n")

        # Generate INSERT INTO statements
        insert_prefix = f"INSERT INTO `{table_name}` ({', '.join([f'`{col}`' for col in safe_columns])}) VALUES "
        
        # Proses baris demi baris dan ubah ke statement SQL
        count = 0
        for i, row in df.iterrows():
            values = []
            for val in row.values:
                if pd.isna(val):
                    values.append("NULL")
                elif isinstance(val, (int, float, bool)):
                    values.append(str(val))
                else:
                    escaped_val = str(val).replace("'", "''")
                    values.append(f"'{escaped_val}'")
            
            f.write(f"{insert_prefix}({', '.join(values)});\n")
            count += 1
            
    print(f"Berhasil! {count} baris data telah disimpan ke dalam {sql_file_path}")
except Exception as e:
    print(f"Error saat menulis file SQL: {e}")
