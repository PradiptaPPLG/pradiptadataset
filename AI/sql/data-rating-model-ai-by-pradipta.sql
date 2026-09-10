-- ============================================================
-- DATABASE: RATING MODEL AI
-- File: rating_model_ai.sql
-- Konversi lengkap dari php.txt (rating/skor benchmark)
-- ============================================================

-- ==================== TABEL: CHATBOT ARENA ELO ====================
DROP TABLE IF EXISTS rating_chatbot_arena;
CREATE TABLE rating_chatbot_arena (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    elo INT,
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_elo (elo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_chatbot_arena (nama, elo, organisasi, rilis) VALUES
('Gemini 2.5 Pro', 1440, 'Google DeepMind', 2025),
('GPT-4.5', 1420, 'OpenAI', 2025),
('GPT-4o (2024-11)', 1400, 'OpenAI', 2024),
('Claude 3.7 Sonnet', 1390, 'Anthropic', 2025),
('Claude 3.5 Sonnet (2024-10)', 1380, 'Anthropic', 2024),
('Grok-3', 1380, 'xAI', 2025),
('DeepSeek-R1', 1360, 'DeepSeek', 2025),
('Gemini 2.0 Flash', 1350, 'Google DeepMind', 2024),
('GPT-4o mini', 1310, 'OpenAI', 2024),
('Qwen 2.5 Max', 1300, 'Alibaba', 2025),
('Claude 3.5 Haiku', 1290, 'Anthropic', 2024),
('Llama 3.1 405B', 1280, 'Meta AI', 2024),
('Llama 3.3 70B', 1270, 'Meta AI', 2024),
('Gemini 1.5 Pro', 1260, 'Google DeepMind', 2024),
('GPT-4', 1250, 'OpenAI', 2023),
('Mistral Large 2', 1250, 'Mistral AI', 2024),
('Claude 3 Opus', 1240, 'Anthropic', 2024),
('Command R+', 1230, 'Cohere', 2024),
('GPT-3.5 Turbo', 1150, 'OpenAI', 2023);

-- ==================== TABEL: MMLU ====================
DROP TABLE IF EXISTS rating_mmlu;
CREATE TABLE rating_mmlu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_mmlu (nama, skor, organisasi, rilis) VALUES
('GPT-5', 92.0, 'OpenAI', 2025),
('Claude 4 Opus', 92.0, 'Anthropic', 2025),
('GPT-4.5', 90.0, 'OpenAI', 2025),
('Gemini 2.5 Pro', 90.0, 'Google DeepMind', 2025),
('Qwen 3', 90.0, 'Alibaba', 2025),
('Llama 4', 90.0, 'Meta AI', 2025),
('DeepSeek-R1', 90.8, 'DeepSeek', 2025),
('Grok-3', 89.0, 'xAI', 2025),
('Claude 3.7 Sonnet', 89.0, 'Anthropic', 2025),
('GPT-4o', 88.7, 'OpenAI', 2024),
('Claude 3.5 Sonnet', 88.7, 'Anthropic', 2024),
('Llama 3.1 405B', 88.6, 'Meta AI', 2024),
('DeepSeek-V3', 88.5, 'DeepSeek', 2024),
('Grok-2', 87.5, 'xAI', 2024),
('Claude 3 Opus', 86.8, 'Anthropic', 2024),
('GPT-4 Turbo', 86.5, 'OpenAI', 2023),
('GPT-4', 86.4, 'OpenAI', 2023),
('Qwen 2.5 72B', 86.1, 'Alibaba', 2024),
('Llama 3.3 70B', 86.0, 'Meta AI', 2024),
('Gemini 1.5 Pro', 85.9, 'Google DeepMind', 2024),
('Phi-4', 84.8, 'Microsoft', 2024),
('Mistral Large 2', 84.0, 'Mistral AI', 2024),
('Command R+', 75.7, 'Cohere', 2024);

-- ==================== TABEL: GPQA DIAMOND ====================
DROP TABLE IF EXISTS rating_gpqa;
CREATE TABLE rating_gpqa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_gpqa (nama, skor, organisasi, rilis) VALUES
('GPT-5', 85.0, 'OpenAI', 2025),
('Gemini 2.5 Pro', 84.0, 'Google DeepMind', 2025),
('Claude 4 Opus', 83.0, 'Anthropic', 2025),
('o3', 83.0, 'OpenAI', 2025),
('DeepSeek-R1', 71.5, 'DeepSeek', 2025),
('Claude 3.7 Sonnet', 78.0, 'Anthropic', 2025),
('GPT-4.5', 71.4, 'OpenAI', 2025),
('GPT-4o', 53.6, 'OpenAI', 2024),
('Claude 3.5 Sonnet', 65.0, 'Anthropic', 2024),
('Llama 3.1 405B', 51.1, 'Meta AI', 2024),
('Qwen 2.5 72B', 49.0, 'Alibaba', 2024),
('Grok-3', 75.0, 'xAI', 2025);

-- ==================== TABEL: HUMANEVAL ====================
DROP TABLE IF EXISTS rating_humaneval;
CREATE TABLE rating_humaneval (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_humaneval (nama, skor, organisasi, rilis) VALUES
('Claude 4 Opus', 96.0, 'Anthropic', 2025),
('GPT-5', 95.0, 'OpenAI', 2025),
('Claude 3.7 Sonnet', 93.0, 'Anthropic', 2025),
('DeepSeek-V3', 92.0, 'DeepSeek', 2024),
('GPT-4o', 90.2, 'OpenAI', 2024),
('Claude 3.5 Sonnet', 92.0, 'Anthropic', 2024),
('Llama 3.1 405B', 89.0, 'Meta AI', 2024),
('Qwen 2.5 Coder', 90.0, 'Alibaba', 2024),
('DeepSeek-Coder-V2', 90.2, 'DeepSeek', 2024),
('Codestral', 81.1, 'Mistral AI', 2024),
('GPT-4', 67.0, 'OpenAI', 2023),
('Code Llama 70B', 67.8, 'Meta AI', 2024);

-- ==================== TABEL: MATH ====================
DROP TABLE IF EXISTS rating_math;
CREATE TABLE rating_math (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_math (nama, skor, organisasi, rilis) VALUES
('GPT-5', 98.0, 'OpenAI', 2025),
('Claude 4 Opus', 97.0, 'Anthropic', 2025),
('Gemini 2.5 Pro', 95.0, 'Google DeepMind', 2025),
('DeepSeek-R1', 97.3, 'DeepSeek', 2025),
('o3', 96.7, 'OpenAI', 2025),
('Claude 3.7 Sonnet', 96.0, 'Anthropic', 2025),
('GPT-4o', 76.6, 'OpenAI', 2024),
('Claude 3.5 Sonnet', 78.3, 'Anthropic', 2024),
('Llama 3.1 405B', 73.8, 'Meta AI', 2024),
('Qwen 2.5 Math', 83.0, 'Alibaba', 2024),
('Mathstral', 56.6, 'Mistral AI', 2024),
('GPT-4', 52.9, 'OpenAI', 2023);

-- ==================== TABEL: SWE-BENCH VERIFIED ====================
DROP TABLE IF EXISTS rating_swebench;
CREATE TABLE rating_swebench (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_swebench (nama, skor, organisasi, rilis) VALUES
('Claude 4 Opus', 72.5, 'Anthropic', 2025),
('GPT-5', 75.0, 'OpenAI', 2025),
('Claude 3.7 Sonnet', 62.3, 'Anthropic', 2025),
('Claude 3.5 Sonnet', 49.0, 'Anthropic', 2024),
('GPT-4o', 38.0, 'OpenAI', 2024),
('DeepSeek-V3', 42.0, 'DeepSeek', 2024),
('DeepSeek-R1', 49.2, 'DeepSeek', 2025),
('Qwen 2.5 Coder', 40.0, 'Alibaba', 2024),
('Llama 3.1 405B', 24.5, 'Meta AI', 2024),
('GPT-4', 18.0, 'OpenAI', 2023);

-- ==================== TABEL: ARC-AGI ====================
DROP TABLE IF EXISTS rating_arcagi;
CREATE TABLE rating_arcagi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_arcagi (nama, skor, organisasi, rilis) VALUES
('o3 (high compute)', 87.5, 'OpenAI', 2025),
('o3 (low compute)', 75.7, 'OpenAI', 2025),
('Claude 3.7 Sonnet', 21.0, 'Anthropic', 2025),
('GPT-4o', 5.0, 'OpenAI', 2024),
('Claude 3.5 Sonnet', 14.0, 'Anthropic', 2024),
('Gemini 2.5 Pro', 30.0, 'Google DeepMind', 2025),
('DeepSeek-R1', 15.0, 'DeepSeek', 2025);

-- ==================== TABEL: LIVEBENCH ====================
DROP TABLE IF EXISTS rating_livebench;
CREATE TABLE rating_livebench (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_livebench (nama, skor, organisasi, rilis) VALUES
('Gemini 2.5 Pro', 78.0, 'Google DeepMind', 2025),
('Claude 4 Opus', 77.0, 'Anthropic', 2025),
('GPT-5', 76.0, 'OpenAI', 2025),
('Claude 3.7 Sonnet', 72.0, 'Anthropic', 2025),
('GPT-4o', 65.0, 'OpenAI', 2024),
('DeepSeek-R1', 68.0, 'DeepSeek', 2025),
('Llama 3.3 70B', 60.0, 'Meta AI', 2024),
('Qwen 2.5 72B', 62.0, 'Alibaba', 2024);

-- ==================== TABEL: MMMU (VISION / MULTIMODAL) ====================
DROP TABLE IF EXISTS rating_mmmu;
CREATE TABLE rating_mmmu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_mmmu (nama, skor, organisasi, rilis) VALUES
('Gemini 2.5 Pro', 82.0, 'Google DeepMind', 2025),
('GPT-4o', 69.1, 'OpenAI', 2024),
('Claude 3.7 Sonnet', 78.0, 'Anthropic', 2025),
('Claude 3.5 Sonnet', 68.3, 'Anthropic', 2024),
('Gemini 1.5 Pro', 62.2, 'Google DeepMind', 2024),
('GPT-4V', 56.8, 'OpenAI', 2023),
('Qwen2-VL', 64.5, 'Alibaba', 2024),
('InternVL 2.5', 70.0, 'Shanghai AI Lab', 2024),
('LLaVA 1.6', 51.0, 'Microsoft', 2024);

-- ==================== TABEL: IMAGE GENERATION (GenEval / HPSv2) ====================
DROP TABLE IF EXISTS rating_image_gen;
CREATE TABLE rating_image_gen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    metrik VARCHAR(50),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_image_gen (nama, skor, metrik, organisasi, rilis) VALUES
('DALL-E 3', 0.67, 'GenEval', 'OpenAI', 2023),
('Stable Diffusion 3.5 Large', 0.71, 'GenEval', 'Stability AI', 2024),
('Flux.1 Pro', 0.74, 'GenEval', 'Black Forest Labs', 2024),
('Imagen 3', 0.68, 'GenEval', 'Google', 2024),
('Midjourney v6', 0.65, 'GenEval', 'Midjourney', 2023),
('SDXL', 0.55, 'GenEval', 'Stability AI', 2023),
('GPT Image 1', 0.80, 'GenEval', 'OpenAI', 2025),
('Seedream 3.0', 0.78, 'GenEval', 'ByteDance', 2025);

-- ==================== TABEL: SPEECH-TO-TEXT (WER) ====================
DROP TABLE IF EXISTS rating_asr;
CREATE TABLE rating_asr (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    wer DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_wer (wer)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_asr (nama, wer, organisasi, rilis) VALUES
('Whisper Large V3', 7.4, 'OpenAI', 2023),
('Whisper Large V3 Turbo', 7.8, 'OpenAI', 2024),
('Deepgram Nova-3', 6.8, 'Deepgram', 2025),
('AssemblyAI Universal-2', 6.9, 'AssemblyAI', 2024),
('Speechmatics', 7.1, 'Speechmatics', 2024),
('Wav2Vec 2.0', 8.5, 'Meta AI', 2020),
('Conformer', 9.0, 'Google', 2020);

-- ==================== TABEL: TEXT-TO-SPEECH (MOS) ====================
DROP TABLE IF EXISTS rating_tts;
CREATE TABLE rating_tts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    mos DECIMAL(3,1),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_mos (mos)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_tts (nama, mos, organisasi, rilis) VALUES
('ElevenLabs v3', 4.7, 'ElevenLabs', 2025),
('OpenAI TTS', 4.5, 'OpenAI', 2023),
('Play.ht', 4.3, 'Play.ht', 2021),
('XTTS v2', 4.2, 'Coqui', 2024),
('Kokoro TTS', 4.4, 'Hexgrad', 2024),
('F5-TTS', 4.3, 'SWivid', 2024),
('Tortoise TTS', 4.1, 'Neonbjb', 2023),
('Bark', 3.9, 'Suno AI', 2023);

-- ==================== TABEL: TEXT-TO-VIDEO (VBench) ====================
DROP TABLE IF EXISTS rating_video_gen;
CREATE TABLE rating_video_gen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    vbench DECIMAL(5,2),
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_vbench (vbench)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_video_gen (nama, vbench, organisasi, rilis) VALUES
('Sora', 84.0, 'OpenAI', 2024),
('Veo 3', 86.0, 'Google', 2025),
('Kling AI 2.0', 82.0, 'Kuaishou', 2025),
('Runway Gen-4', 81.0, 'Runway', 2025),
('Luma Ray 2', 79.0, 'Luma AI', 2024),
('CogVideoX-5B', 75.0, 'Tsinghua', 2024),
('HunyuanVideo', 77.0, 'Tencent', 2024),
('Wan 2.1', 78.0, 'Alibaba', 2025),
('Mochi 1', 74.0, 'Genmo', 2024);

-- ==================== TABEL: RANKING GABUNGAN (OVERALL) ====================
DROP TABLE IF EXISTS rating_overall;
CREATE TABLE rating_overall (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    skor DECIMAL(5,2),
    peringkat INT,
    organisasi VARCHAR(255),
    rilis YEAR,
    INDEX idx_nama (nama),
    INDEX idx_skor (skor),
    INDEX idx_peringkat (peringkat)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO rating_overall (nama, skor, peringkat, organisasi, rilis) VALUES
('Gemini 2.5 Pro', 96.0, 1, 'Google DeepMind', 2025),
('Claude 4 Opus', 95.0, 2, 'Anthropic', 2025),
('GPT-5', 94.0, 3, 'OpenAI', 2025),
('o3', 92.0, 4, 'OpenAI', 2025),
('Claude 3.7 Sonnet', 90.0, 5, 'Anthropic', 2025),
('Grok-3', 89.0, 6, 'xAI', 2025),
('DeepSeek-R1', 88.0, 7, 'DeepSeek', 2025),
('GPT-4.5', 87.0, 8, 'OpenAI', 2025),
('Claude 3.5 Sonnet', 85.0, 9, 'Anthropic', 2024),
('GPT-4o', 84.0, 10, 'OpenAI', 2024),
('Gemini 2.0 Flash', 80.0, 11, 'Google DeepMind', 2024),
('Qwen 2.5 Max', 78.0, 12, 'Alibaba', 2025),
('Llama 3.3 70B', 76.0, 13, 'Meta AI', 2024),
('Mistral Large 2', 74.0, 14, 'Mistral AI', 2024),
('Command R+', 70.0, 15, 'Cohere', 2024);

-- ============================================================
-- SELESAI
-- Semua rating dari php.txt sudah dikonversi ke SQL
-- ============================================================