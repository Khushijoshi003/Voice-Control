
---

# 🎤 Video Voice Controller Chrome Extension

Control your YouTube videos and open your favorite websites using just your voice. No more clicking around—just say what you want, and let your browser do the rest!

---

## 🚀 Features

- **🎬 Video Controls (on YouTube):**
  - “Pause” / “Play”
  - “Slower” / “Faster” / “Increase speed” / “Decrease speed”
  - “Mute” / “Unmute”
  - “Volume [number]” (e.g., “volume 50”)
  - “Fullscreen”
  - “Screenshot” (takes a snapshot of the video)
  - “Brighter” / “Darker” / “Dimmer”
  - “Loop” / “No loop”
  - “Show subtitles” / “Hide subtitles”
  - “Speed [number]” (e.g., “speed 1.5”)

- **🌐 Open Websites Instantly:**
  - “Open instagram”
  - “Open gfg os notes”
  - “Open leetcode”
  - “Open github”
  - “Open youtube”
  - “Open striver binary search playlist”
  - ...and more! (You can add custom keywords in the code.)

- **🔎 Smart Search:**
  - If you say “open [something]” and it’s not a custom keyword, it will search YouTube for you!

- **🗣️ Continuous Voice Listening:**
  - Just click “Start Listening” in the popup and give your commands—no need to keep clicking.

---

## 🛠️ How to Install

1. **Download or Clone the Repo**
   ```bash
   git clone https://github.com/Khushijoshi003/Voice-Control.git
   ```

2. **Open Chrome and Go to Extensions**
   - Visit `chrome://extensions/`
   - Enable “Developer mode” (top right)

3. **Load Unpacked Extension**
   - Click “Load unpacked”
   - Select the folder where you downloaded/cloned the extension

4. **Ready to Go!**
   - You’ll see the extension icon in your Chrome bar.

---

## 🤖 How to Use

1. **Open YouTube or Any Supported Website**
2. **Click the Extension Icon**
3. **Hit “Start Listening”**
4. **Speak Your Command**
   - Example: “Pause”, “Open instagram”, “Volume 80”, “Open gfg os notes”, “Screenshot”, etc.

**Tip:** You can add more custom keywords and URLs in the code if you want to open more sites!

---

## 📝 Customizing Keywords

Want to add your own commands?  
Just edit the `CUSTOM_URLS` object in `content.js`:

```js
const CUSTOM_URLS = {
  "instagram": "https://www.instagram.com",
  "gfg os notes": "https://www.geeksforgeeks.org/operating-system-notes-set-1-introduction/",
  // Add more like this:
  "my blog": "https://myblog.com"
};
```

---

## 🧪 Testing Checklist

- [ ] Voice commands work for video controls on YouTube
- [ ] “Open [site]” commands open the correct websites
- [ ] Custom keywords open your chosen pages
- [ ] YouTube search fallback works for unknown commands
- [ ] Screenshot feature works on YouTube videos
- [ ] Extension keeps listening after each command

---

## 🙋 FAQ

**Q: Can I control sites other than YouTube?**  
A: You can open any site with a custom keyword, but video controls are only on YouTube (for now).

**Q: Do I need to keep Chrome open?**  
A: Yes! The extension works when Chrome is open and the extension is loaded.

**Q: Can I add more sites?**  
A: Absolutely—just add them to `CUSTOM_URLS` in the code.

---

## 💡 Credits

Made with patience, curiosity, and a bit of fun by [Khushi Joshi](https://github.com/Khushijoshi003).

---

Ready to give your voice the power? Try it out and enjoy hands-free browsing! 😎🎤

---

Want to add or change anything? Just ask!  
#-#-#[easy action start]
{"easy_action":"selector","data": ["Looks great, I’ll use this!", "Add more usage examples", "Make it even shorter", "Add troubleshooting tips"]}
[easy action end]#-#-#
