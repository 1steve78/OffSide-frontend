# ⚽ OffSide Landing Page

A stunning, modern landing page for the **OffSide Football Match Simulator & AI Prediction Platform**. Built with Next.js for seamless Vercel deployment.

![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek dark UI with vibrant green-cyan gradient accents
- 🌀 **Parallax Scrolling** - Multi-layer parallax effects for immersive depth
- ✨ **Smooth Animations** - Fade-in, slide-up, bounce, and pulse effects
- 🔄 **Rotating Tech Orbit** - Animated tech stack display
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⬇️ **Download Section** - Direct ZIP download link with quick-start instructions
- 🚀 **Optimized for Vercel** - Zero-config deployment

## 🖥️ Demo

Visit the live site: [Your Vercel URL]

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: CSS Modules
- **Fonts**: Google Fonts (Outfit, Inter)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yasinULLAH/OffSide-frontend.git
   cd OffSide-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yasinULLAH/OffSide-frontend)

### Option 2: Manual Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and deploys!

## 📁 Project Structure

```
OffSide-frontend/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js             # Main landing page component
│   ├── globals.css         # Global styles & CSS variables
│   └── page.module.css     # Component-specific styles
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies & scripts
└── README.md
```

## 🎨 Customization

### Update Download Link

Edit `app/page.js` line ~375:
```javascript
<a href="https://github.com/YOUR_USERNAME/YOUR_REPO/archive/refs/heads/main.zip" ...>
```

### Modify Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: #00ff88;      /* Main accent color */
  --secondary: #00d4ff;    /* Secondary accent */
  --dark: #0a0f1c;         /* Background color */
}
```

### Add Sections

The page uses CSS Modules. Add new sections in `app/page.js` and corresponding styles in `app/page.module.css`.

## 📄 License

MIT License - feel free to use this for your own projects!

## 🙏 Credits

- Built for [OffSide](https://github.com/yasinULLAH/OffSide) - Football Match Simulator & AI Prediction Platform
- Data powered by [StatsBomb Open Data](https://github.com/statsbomb/open-data)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Made with ❤️ by [MD YASIN ALAM](https://github.com/1steve78) & [SHREEJAN DOLAI](https://github.com/spyke7)

