# 方块学园声音素材

- `forest-morning.m4a`: 本项目以正弦波及自编五声音阶旋律合成的原创背景音乐。生成脚本：`scripts/compose-music.py`，无第三方采样。
- 其余 `.m4a`: 方块学园原创读题及引导文本，经 Kokoro-82M-v1.1-zh（Apache-2.0）本地合成；并非真人录音。使用 sherpa-onnx 的 int8 转换模型，speaker 3 / zf_001。网站运行时不向语音服务发送孩子的信息。
- 模型来源：https://huggingface.co/hexgrad/Kokoro-82M-v1.1-zh
- 推理与转换：https://github.com/k2-fsa/sherpa-onnx （Apache-2.0）
- 模型许可证全文见 `KOKORO-LICENSE.txt`。
