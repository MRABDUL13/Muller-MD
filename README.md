
<h1 align="center">🚀 pedii-the-confuser</h1>

<p align="center">
  <img src="https://files.catbox.moe/v1en58.jpeg" width="300"/><br>
  <b>Fast, Powerful, and Stylish WhatsApp Bot built for fun and performance.</b>
</p>

<p align="center">
  <a href="https://github.com/MRABDUL13/Muller-MD"><img src="https://img.shields.io/github/stars/Crazynotdev/TERRA-XMD?style=flat-square&color=yellow"></a>
  <a href="https://github.com/MRABDUL13/Muller-MD/fork"><img src="https://img.shields.io/github/forks/MRABDUL13/Muller-MD?style=flat-square&color=lightblue"></a>
  <a href="https://whatsapp.com/channel/0029VbBiO8PEKyZ9i8Skkc3C"><img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=flat-square&logo=whatsapp"></a>
  <a href="https://github.com/MRABDUL13"><img src="https://img.shields.io/badge/MULLER-TECH-blueviolet?style=flat-square"></a>
</p>

**SESSION ID💫**

[![Get Session](https://img.shields.io/badge/Get%20Session-pediitheconfuser-blueviolet?style=for-the-badge&logo=linktree)](https://pedii-the-confuser-session-id.onrender.com/)
---

🧠 Features

- 🔁 Auto Restart & Baileys Multi-Device Support  
- 🔌 Dynamic Plugin Loader  
- 🔐 Private/Group Commands  
- 🖥️ Console Interface & Live Logs  
- ☁️ Deployable on Multiple Platforms  

---

🚀 One-Click Deploy Options

⚡ Katabump
[![Deploy with Katabump](https://img.shields.io/badge/Deploy%20Now-KATABUMP-2ecc71?style=for-the-badge)](https://katabump.com)

🌐 Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/MRABDUL13/Muller-MD.git)

☁️ Koyeb

[![Koyeb](https://img.shields.io/badge/Deploy-Koyeb-00C2FF?style=for-the-badge&logo=koyeb)](https://www.koyeb.com)

🛰️ Talkdrove

[![Talkdrove](https://img.shields.io/badge/Deploy-Talkdrove-orange?style=for-the-badge)](#)

🔄 GitHub Actions
Deploy automatically using `.yml` workflow inside GitHub Actions.


**GITHUB DEPLOYMENT** ⭐️

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

---

🧰 Manual Installation

```bash
git clone https://github.com/MRABDUL13/Muller-MD
cd Muller-MD
npm install
node .
```

---

🔗 c3C))
---

👑 Credits

> Made with ❤️ by *pedii the confusser*  
> Contact: `2349166255902`

---

*©️ 2025 – pedii the confuser| All Rights Reserved.*


