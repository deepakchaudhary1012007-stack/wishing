# 🪔 त्यौहार अपनों के साथ (Festive Greeting Web Application)

A mobile-first, interactive festive greeting web application built with **React** and **Tailwind CSS**. The app celebrates the golden trio of Indian festivals — **Diwali**, **Govardhan Pooja**, and **Bhai Dooj** — with smooth transitions, glassmorphism UI, floating festive particles, and personalized audio/visual greetings for family members.

---

## 🌟 Features

1. **State Management & 4-Screen Flow**:
   - `currentScreen`: tracks progress from 0 (Welcome) through 3 (Bhai Dooj).
   - `selectedUser`: dynamically tracks and binds the chosen family member.
   - Screen 0 (**त्यौहार अपनों के साथ**): Interactive glassmorphic selection grid for family members. Tapping a member immediately plays their greeting audio and advances to Screen 1.
   - Screen 1 (**Happy Diwali**): Glowing circular golden portrait, floating Diyas (🪔) & Sparklers (🎇), and a pulsing "Aage Badhein" button.
   - Screen 2 (**Happy Govardhan Pooja**): Preserves photo and audio seamlessly, floating Cows (🐄) & Leaves (🌿), and pulsing "Aage Badhein" button.
   - Screen 3 (**Happy Bhai Dooj**): Preserves photo and audio, floating Sacred Flowers (💮) & Tika (🔴), and a "Shuruat Se Dekhein" button to reset state and stop music. Includes WhatsApp sharing!

2. **Personalized Family Data**:
   - Pre-configured for:
     - **Vishnu Bhai** (`brother`)
     - **Krishna Bhai** (`brother`)
     - **Kamlesh Didi** (`sister`)
     - **Vimlesh Didi** (`sister`)
     - **Membati Didi** (`sister`)
     - **Family** (`all`)

3. **Audio Architecture**:
   - Floating Play/Pause/Mute toggle in the top-right corner with real-time dancing equalizer bars.
   - Starts automatically on Screen 0 upon member selection.
   - Seamless continuous playback through Screens 1, 2, and 3.
   - Stops and resets when "Shuruat Se Dekhein" is clicked on Screen 3.
   - Built-in **Web Audio API Synthesizer Fallback** (plays a soothing Indian Sitar/Tanpura festive chime if external MP3 URLs are blocked by network or CORS).

4. **Glassmorphism & Mobile-First Design**:
   - Deep festive gradient: dark maroon (`#190206`) to deep crimson-gold.
   - Cards styled with `bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl`.
   - Perfectly centered on all mobile viewports without horizontal scrolling (`overflow-x-hidden`).
   - Celebratory confetti cannons on screen transitions.

---

## 🚀 How to Run

### Method 1: Instant Browser Launch (Zero Setup)
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Brave, Opera, or your phone's browser).
- Double-click `index.html` in Windows Explorer.
- Everything runs immediately out of the box!

### Method 2: Development Server (Vite)
If you have Node.js installed:
```bash
npm install
npm run dev
```

---

## 🎨 How to Replace Photos & Audio

Edit `src/data.js` or the `INITIAL_FAMILY_MEMBERS` array in `index.html`:

```javascript
{
  id: 'vishnu',
  name: 'Vishnu Bhai',
  type: 'brother',
  photo: 'YOUR_PHOTO_URL_OR_LOCAL_PATH.jpg',
  audio: 'YOUR_AUDIO_URL_OR_LOCAL_PATH.mp3'
}
```

You can use local files (e.g. `./photos/vishnu.jpg` and `./audio/vishnu.mp3`) or any image/cloud hosting link (Cloudinary, Imgur, Google Drive direct link, etc.).

