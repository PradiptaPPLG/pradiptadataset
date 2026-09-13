import pandas as pd
import os
import json

output_dir = r"c:\Projects\dataset\songs"
path = r"C:\Users\user\.cache\kagglehub\datasets\kylefengkfeng209\most-streamed-spotify-songs-2025\versions\1\most_streamed_spotify_2025.csv"

try:
    df = pd.pd.read_csv(path)
except:
    import kagglehub
    path_dir = kagglehub.dataset_download("kylefengkfeng209/most-streamed-spotify-songs-2025")
    csv_files = [f for f in os.listdir(path_dir) if f.endswith('.csv')]
    path = os.path.join(path_dir, csv_files[0])
    df = pd.read_csv(path)

php_file_path = os.path.join(output_dir, "data-most-streamed-spotify-songs-2025.php")

print("Mulai konversi ke PHP...")
try:
    with open(php_file_path, "w", encoding="utf-8") as f:
        f.write("<?php\n\n")
        f.write("$spotify_songs_2025 = [\n")
        
        safe_columns = [str(col).strip().replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "").replace(".", "_").lower() for col in df.columns]
        
        count = 0
        for i, row in df.iterrows():
            f.write("    [\n")
            for col_name, val in zip(safe_columns, row.values):
                if pd.isna(val):
                    f.write(f"        '{col_name}' => null,\n")
                elif isinstance(val, (int, float, bool)):
                    # For boolean in pandas it might be numpy.bool_
                    if isinstance(val, bool) or type(val).__name__ == 'bool_':
                        f.write(f"        '{col_name}' => {'true' if val else 'false'},\n")
                    else:
                        f.write(f"        '{col_name}' => {val},\n")
                else:
                    escaped_val = str(val).replace("'", "\\'")
                    f.write(f"        '{col_name}' => '{escaped_val}',\n")
            f.write("    ],\n")
            count += 1
            
        f.write("];\n\n?>")
            
    print(f"Berhasil! {count} baris data telah disimpan ke dalam {php_file_path}")
except Exception as e:
    print(f"Error saat menulis file PHP: {e}")
