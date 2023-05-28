
---
layout: post
title: Experimenting with OpenAI models for transcription and redaction of presentations in the legal field (using a text user interface front-end)
date: 2023-05-27 23:00:00 +0200
author: dr. Homoki Péter
image: "cicada_in_jungle.jpg"
tags:
- large language models
- AI4Lawyers
- artificial intelligence
- transcription
- redaction
---

I've spent a little bit of time with a front-end for using Whisper, the free transcription model from OpenAI and trying to combine it with OpenAI chat completion (GPT-4) API to use it for transcribing audio files to readable text files.

It's very promising and it's multilingual. 

See an example result in the previous [blogpost](https://homoki.net/en/2023/04/27/Transcript-of-the-presentation-Digital-Justice-on-the-guide-on-the-use-of-AI-tools.html). The only bad experience I had is with the usability of GPT-4 API in terms of receiving too many "out of time" requests for it to be usable, at least from this particular point of Earth (probably not the most important place for OpenAI), for any production purposes at this moment. 

But this is not a theoretical limitation of course, and I hope it will be sorted in out by some AIs in the coming months...

See a more technical description in the GitHub directory README of the application itself [here](https://github.com/Homoki-Ugyvedi-Iroda/transcribe_redact_TUI/blob/main/README.md).