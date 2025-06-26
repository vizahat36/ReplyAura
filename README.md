ReplyAura: AI-Powered Email Reply Generator
markdown
Copy
Edit
# 💌 ReplyAura

ReplyAura is an AI-powered email assistant that helps you generate professional, friendly, or casual replies to emails with just one click. It combines a beautifully animated React frontend with a powerful Spring Boot backend using Spring AI.

---

## 🚀 Features

- 🧠 **AI-Powered Replies** – Generates contextual replies to email content.
- 🎨 **Modern UI** – Built with Material UI and glassmorphic 3D design.
- 🌗 **Dark/Light Mode Toggle**
- ⚡ **Framer Motion Animations**
- 🧩 **Chrome Extension** – Easily generate replies from Gmail or any email page.
- 🛡️ **Tone Selector** – Choose between professional, friendly, or casual tones.

---

## 🛠️ Tech Stack

### 🌐 Frontend
- **React.js** (Vite)
- **Material UI**
- **Framer Motion** for animations
- **Custom CSS** (glassmorphism + 3D fantasy)

### 🔧 Backend
- **Java** (17+)
- **Spring Boot**
- **Spring AI** (integrated with a language model for natural language generation)
- **REST API** for reply generation

### 🧩 Browser Extension
- **Manifest V3**
- Injects the AI engine into Gmail or any open mail tab
- Allows generating replies on selected emails

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/replyaura.git
cd replyaura
2. Frontend Setup (React)
bash
Copy
Edit
cd frontend
npm install
npm run dev
3. Backend Setup (Spring Boot)
bash
Copy
Edit
cd backend
./mvnw spring-boot:run
Make sure your backend is running on http://localhost:8080.

🧪 Example API Call
http
Copy
Edit
POST /api/email/generate
Content-Type: application/json

{
  "emailContent": "Hi, I need a meeting scheduled for Monday.",
  "tone": "professional"
}
🧩 Chrome Extension
Go to chrome://extensions/

Enable "Developer mode"

Click Load Unpacked

Select the chrome-extension/ folder inside the project

Now visit Gmail or any mail tab — the extension will appear and allow one-click reply generation via ReplyAura!

📷 Screenshots
[Insert screenshots of the UI, dark mode, and extension here]

🧠 Powered By
OpenAI / Gemini / Spring AI backend integration

Designed with ❤️ for productivity and simplicity

📃 License
MIT License © 2025 [Your Name]

css
Copy
Edit
