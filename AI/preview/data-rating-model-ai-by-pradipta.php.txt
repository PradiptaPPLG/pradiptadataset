<?php

// ==================== RATING MODEL AI ====================
// Catatan: Skor berasal dari berbagai benchmark (MMLU, GPQA, HumanEval, MATH,
// SWE-bench, Chatbot Arena Elo, LiveBench, ARC-AGI, dll).
// Angka bersifat perkiraan/representatif per 2025.

// ==================== CHATBOT ARENA ELO (LMArena) ====================
$ratingChatbotArena = [
  ["nama" => "Gemini 2.5 Pro", "elo" => 1440, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "GPT-4.5", "elo" => 1420, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "GPT-4o (2024-11)", "elo" => 1400, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.7 Sonnet", "elo" => 1390, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "Claude 3.5 Sonnet (2024-10)", "elo" => 1380, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Grok-3", "elo" => 1380, "organisasi" => "xAI", "rilis" => 2025],
  ["nama" => "DeepSeek-R1", "elo" => 1360, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "Gemini 2.0 Flash", "elo" => 1350, "organisasi" => "Google DeepMind", "rilis" => 2024],
  ["nama" => "GPT-4o mini", "elo" => 1310, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Qwen 2.5 Max", "elo" => 1300, "organisasi" => "Alibaba", "rilis" => 2025],
  ["nama" => "Claude 3.5 Haiku", "elo" => 1290, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Llama 3.1 405B", "elo" => 1280, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Llama 3.3 70B", "elo" => 1270, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Gemini 1.5 Pro", "elo" => 1260, "organisasi" => "Google DeepMind", "rilis" => 2024],
  ["nama" => "GPT-4", "elo" => 1250, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Mistral Large 2", "elo" => 1250, "organisasi" => "Mistral AI", "rilis" => 2024],
  ["nama" => "Claude 3 Opus", "elo" => 1240, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Command R+", "elo" => 1230, "organisasi" => "Cohere", "rilis" => 2024],
  ["nama" => "GPT-3.5 Turbo", "elo" => 1150, "organisasi" => "OpenAI", "rilis" => 2023],
];

// ==================== MMLU (Massive Multitask Language Understanding) ====================
$ratingMMLU = [
  ["nama" => "GPT-5", "skor" => 92.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 4 Opus", "skor" => 92.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-4.5", "skor" => 90.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Gemini 2.5 Pro", "skor" => 90.0, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "Qwen 3", "skor" => 90.0, "organisasi" => "Alibaba", "rilis" => 2025],
  ["nama" => "Llama 4", "skor" => 90.0, "organisasi" => "Meta AI", "rilis" => 2025],
  ["nama" => "DeepSeek-R1", "skor" => 90.8, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "Grok-3", "skor" => 89.0, "organisasi" => "xAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 89.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-4o", "skor" => 88.7, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 88.7, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Llama 3.1 405B", "skor" => 88.6, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "DeepSeek-V3", "skor" => 88.5, "organisasi" => "DeepSeek", "rilis" => 2024],
  ["nama" => "Grok-2", "skor" => 87.5, "organisasi" => "xAI", "rilis" => 2024],
  ["nama" => "Claude 3 Opus", "skor" => 86.8, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "GPT-4 Turbo", "skor" => 86.5, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "GPT-4", "skor" => 86.4, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Qwen 2.5 72B", "skor" => 86.1, "organisasi" => "Alibaba", "rilis" => 2024],
  ["nama" => "Llama 3.3 70B", "skor" => 86.0, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Gemini 1.5 Pro", "skor" => 85.9, "organisasi" => "Google DeepMind", "rilis" => 2024],
  ["nama" => "Phi-4", "skor" => 84.8, "organisasi" => "Microsoft", "rilis" => 2024],
  ["nama" => "Mistral Large 2", "skor" => 84.0, "organisasi" => "Mistral AI", "rilis" => 2024],
  ["nama" => "Command R+", "skor" => 75.7, "organisasi" => "Cohere", "rilis" => 2024],
];

// ==================== GPQA DIAMOND (Graduate-Level QA) ====================
$ratingGPQA = [
  ["nama" => "GPT-5", "skor" => 85.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Gemini 2.5 Pro", "skor" => 84.0, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "Claude 4 Opus", "skor" => 83.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "o3", "skor" => 83.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "DeepSeek-R1", "skor" => 71.5, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 78.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-4.5", "skor" => 71.4, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "GPT-4o", "skor" => 53.6, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 65.0, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Llama 3.1 405B", "skor" => 51.1, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Qwen 2.5 72B", "skor" => 49.0, "organisasi" => "Alibaba", "rilis" => 2024],
  ["nama" => "Grok-3", "skor" => 75.0, "organisasi" => "xAI", "rilis" => 2025],
];

// ==================== HUMANEVAL (Coding) ====================
$ratingHumanEval = [
  ["nama" => "Claude 4 Opus", "skor" => 96.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-5", "skor" => 95.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 93.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "DeepSeek-V3", "skor" => 92.0, "organisasi" => "DeepSeek", "rilis" => 2024],
  ["nama" => "GPT-4o", "skor" => 90.2, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 92.0, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Llama 3.1 405B", "skor" => 89.0, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Qwen 2.5 Coder", "skor" => 90.0, "organisasi" => "Alibaba", "rilis" => 2024],
  ["nama" => "DeepSeek-Coder-V2", "skor" => 90.2, "organisasi" => "DeepSeek", "rilis" => 2024],
  ["nama" => "Codestral", "skor" => 81.1, "organisasi" => "Mistral AI", "rilis" => 2024],
  ["nama" => "GPT-4", "skor" => 67.0, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Code Llama 70B", "skor" => 67.8, "organisasi" => "Meta AI", "rilis" => 2024],
];

// ==================== MATH (Matematika) ====================
$ratingMATH = [
  ["nama" => "GPT-5", "skor" => 98.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 4 Opus", "skor" => 97.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "Gemini 2.5 Pro", "skor" => 95.0, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "DeepSeek-R1", "skor" => 97.3, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "o3", "skor" => 96.7, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 96.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-4o", "skor" => 76.6, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 78.3, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Llama 3.1 405B", "skor" => 73.8, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Qwen 2.5 Math", "skor" => 83.0, "organisasi" => "Alibaba", "rilis" => 2024],
  ["nama" => "Mathstral", "skor" => 56.6, "organisasi" => "Mistral AI", "rilis" => 2024],
  ["nama" => "GPT-4", "skor" => 52.9, "organisasi" => "OpenAI", "rilis" => 2023],
];

// ==================== SWE-BENCH VERIFIED (Software Engineering) ====================
$ratingSWEBench = [
  ["nama" => "Claude 4 Opus", "skor" => 72.5, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-5", "skor" => 75.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 62.3, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 49.0, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "GPT-4o", "skor" => 38.0, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "DeepSeek-V3", "skor" => 42.0, "organisasi" => "DeepSeek", "rilis" => 2024],
  ["nama" => "DeepSeek-R1", "skor" => 49.2, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "Qwen 2.5 Coder", "skor" => 40.0, "organisasi" => "Alibaba", "rilis" => 2024],
  ["nama" => "Llama 3.1 405B", "skor" => 24.5, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "GPT-4", "skor" => 18.0, "organisasi" => "OpenAI", "rilis" => 2023],
];

// ==================== ARC-AGI (Abstraction & Reasoning) ====================
$ratingARCAGI = [
  ["nama" => "o3 (high compute)", "skor" => 87.5, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "o3 (low compute)", "skor" => 75.7, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 21.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-4o", "skor" => 5.0, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 14.0, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Gemini 2.5 Pro", "skor" => 30.0, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "DeepSeek-R1", "skor" => 15.0, "organisasi" => "DeepSeek", "rilis" => 2025],
];

// ==================== LiveBench (Overall) ====================
$ratingLiveBench = [
  ["nama" => "Gemini 2.5 Pro", "skor" => 78.0, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "Claude 4 Opus", "skor" => 77.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-5", "skor" => 76.0, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 72.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-4o", "skor" => 65.0, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "DeepSeek-R1", "skor" => 68.0, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "Llama 3.3 70B", "skor" => 60.0, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Qwen 2.5 72B", "skor" => 62.0, "organisasi" => "Alibaba", "rilis" => 2024],
];

// ==================== VISION / MULTIMODAL BENCHMARK (MMMU) ====================
$ratingMMMU = [
  ["nama" => "Gemini 2.5 Pro", "skor" => 82.0, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "GPT-4o", "skor" => 69.1, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 78.0, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 68.3, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "Gemini 1.5 Pro", "skor" => 62.2, "organisasi" => "Google DeepMind", "rilis" => 2024],
  ["nama" => "GPT-4V", "skor" => 56.8, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Qwen2-VL", "skor" => 64.5, "organisasi" => "Alibaba", "rilis" => 2024],
  ["nama" => "InternVL 2.5", "skor" => 70.0, "organisasi" => "Shanghai AI Lab", "rilis" => 2024],
  ["nama" => "LLaVA 1.6", "skor" => 51.0, "organisasi" => "Microsoft", "rilis" => 2024],
];

// ==================== IMAGE GENERATION (GenEval / HPSv2) ====================
$ratingImageGen = [
  ["nama" => "DALL-E 3", "skor" => 0.67, "metrik" => "GenEval", "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Stable Diffusion 3.5 Large", "skor" => 0.71, "metrik" => "GenEval", "organisasi" => "Stability AI", "rilis" => 2024],
  ["nama" => "Flux.1 Pro", "skor" => 0.74, "metrik" => "GenEval", "organisasi" => "Black Forest Labs", "rilis" => 2024],
  ["nama" => "Imagen 3", "skor" => 0.68, "metrik" => "GenEval", "organisasi" => "Google", "rilis" => 2024],
  ["nama" => "Midjourney v6", "skor" => 0.65, "metrik" => "GenEval", "organisasi" => "Midjourney", "rilis" => 2023],
  ["nama" => "SDXL", "skor" => 0.55, "metrik" => "GenEval", "organisasi" => "Stability AI", "rilis" => 2023],
  ["nama" => "GPT Image 1", "skor" => 0.80, "metrik" => "GenEval", "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Seedream 3.0", "skor" => 0.78, "metrik" => "GenEval", "organisasi" => "ByteDance", "rilis" => 2025],
];

// ==================== SPEECH-TO-TEXT (WER - Word Error Rate, makin rendah makin baik) ====================
$ratingASR = [
  ["nama" => "Whisper Large V3", "wer" => 7.4, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Whisper Large V3 Turbo", "wer" => 7.8, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Deepgram Nova-3", "wer" => 6.8, "organisasi" => "Deepgram", "rilis" => 2025],
  ["nama" => "AssemblyAI Universal-2", "wer" => 6.9, "organisasi" => "AssemblyAI", "rilis" => 2024],
  ["nama" => "Speechmatics", "wer" => 7.1, "organisasi" => "Speechmatics", "rilis" => 2024],
  ["nama" => "Wav2Vec 2.0", "wer" => 8.5, "organisasi" => "Meta AI", "rilis" => 2020],
  ["nama" => "Conformer", "wer" => 9.0, "organisasi" => "Google", "rilis" => 2020],
];

// ==================== TEXT-TO-SPEECH (MOS - Mean Opinion Score, 1-5) ====================
$ratingTTS = [
  ["nama" => "ElevenLabs v3", "mos" => 4.7, "organisasi" => "ElevenLabs", "rilis" => 2025],
  ["nama" => "OpenAI TTS", "mos" => 4.5, "organisasi" => "OpenAI", "rilis" => 2023],
  ["nama" => "Play.ht", "mos" => 4.3, "organisasi" => "Play.ht", "rilis" => 2021],
  ["nama" => "XTTS v2", "mos" => 4.2, "organisasi" => "Coqui", "rilis" => 2024],
  ["nama" => "Kokoro TTS", "mos" => 4.4, "organisasi" => "Hexgrad", "rilis" => 2024],
  ["nama" => "F5-TTS", "mos" => 4.3, "organisasi" => "SWivid", "rilis" => 2024],
  ["nama" => "Tortoise TTS", "mos" => 4.1, "organisasi" => "Neonbjb", "rilis" => 2023],
  ["nama" => "Bark", "mos" => 3.9, "organisasi" => "Suno AI", "rilis" => 2023],
];

// ==================== TEXT-TO-VIDEO (VBench) ====================
$ratingVideoGen = [
  ["nama" => "Sora", "vbench" => 84.0, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Veo 3", "vbench" => 86.0, "organisasi" => "Google", "rilis" => 2025],
  ["nama" => "Kling AI 2.0", "vbench" => 82.0, "organisasi" => "Kuaishou", "rilis" => 2025],
  ["nama" => "Runway Gen-4", "vbench" => 81.0, "organisasi" => "Runway", "rilis" => 2025],
  ["nama" => "Luma Ray 2", "vbench" => 79.0, "organisasi" => "Luma AI", "rilis" => 2024],
  ["nama" => "CogVideoX-5B", "vbench" => 75.0, "organisasi" => "Tsinghua", "rilis" => 2024],
  ["nama" => "HunyuanVideo", "vbench" => 77.0, "organisasi" => "Tencent", "rilis" => 2024],
  ["nama" => "Wan 2.1", "vbench" => 78.0, "organisasi" => "Alibaba", "rilis" => 2025],
  ["nama" => "Mochi 1", "vbench" => 74.0, "organisasi" => "Genmo", "rilis" => 2024],
];

// ==================== RANKING GABUNGAN (Overall / Composite) ====================
$ratingOverall = [
  ["nama" => "Gemini 2.5 Pro", "skor" => 96.0, "peringkat" => 1, "organisasi" => "Google DeepMind", "rilis" => 2025],
  ["nama" => "Claude 4 Opus", "skor" => 95.0, "peringkat" => 2, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "GPT-5", "skor" => 94.0, "peringkat" => 3, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "o3", "skor" => 92.0, "peringkat" => 4, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.7 Sonnet", "skor" => 90.0, "peringkat" => 5, "organisasi" => "Anthropic", "rilis" => 2025],
  ["nama" => "Grok-3", "skor" => 89.0, "peringkat" => 6, "organisasi" => "xAI", "rilis" => 2025],
  ["nama" => "DeepSeek-R1", "skor" => 88.0, "peringkat" => 7, "organisasi" => "DeepSeek", "rilis" => 2025],
  ["nama" => "GPT-4.5", "skor" => 87.0, "peringkat" => 8, "organisasi" => "OpenAI", "rilis" => 2025],
  ["nama" => "Claude 3.5 Sonnet", "skor" => 85.0, "peringkat" => 9, "organisasi" => "Anthropic", "rilis" => 2024],
  ["nama" => "GPT-4o", "skor" => 84.0, "peringkat" => 10, "organisasi" => "OpenAI", "rilis" => 2024],
  ["nama" => "Gemini 2.0 Flash", "skor" => 80.0, "peringkat" => 11, "organisasi" => "Google DeepMind", "rilis" => 2024],
  ["nama" => "Qwen 2.5 Max", "skor" => 78.0, "peringkat" => 12, "organisasi" => "Alibaba", "rilis" => 2025],
  ["nama" => "Llama 3.3 70B", "skor" => 76.0, "peringkat" => 13, "organisasi" => "Meta AI", "rilis" => 2024],
  ["nama" => "Mistral Large 2", "skor" => 74.0, "peringkat" => 14, "organisasi" => "Mistral AI", "rilis" => 2024],
  ["nama" => "Command R+", "skor" => 70.0, "peringkat" => 15, "organisasi" => "Cohere", "rilis" => 2024],
];