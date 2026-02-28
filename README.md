# Lab 3-4: Cyberpunk Profile Page

A modern, interactive profile page with custom audio player, featuring cyberpunk aesthetics, glassmorphism effects, and smooth animations.

## Features

- **Cyberpunk UI** – Neon colors, glitch effects, and animated backgrounds
- **Glassmorphism Card** – 3D tilt effect that follows cursor movement
- **Custom Audio Player** – Play/pause, seek, time display with neon styling
- **Canvas Drawing Pad** – Paint with rainbow neon strokes
- **Page Transitions** – Smooth fade and slide animations
- **Keyboard Controls** – `←` `→` to switch pages, `Space` to toggle music
- **URL Parameters** – Dynamic audio loading via query strings

## Quick Start

```bash
# Install dependencies
npm install

# Build CSS from SCSS
npm run build

# Start local server on localhost:3000
npm run serve
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

```bash
# Watch SCSS for changes (auto-compile)
npm run watch

# In another terminal, run the server
npm run serve
```

## Project Structure

```
lab_3-4_badarla/
├── index.html          # Profile page
├── audio.html          # Audio player page
├── scss/               # SCSS source files
│   └── styles.scss
├── css/                # Compiled CSS
│   └── styles.css
├── assets/             # Images and audio files
│   ├── profile.png
│   └── Fur_Vijay.mp3
└── package.json
```

## Tech Stack

- HTML5
- SCSS/CSS3 (with animations, transitions, glassmorphism)
- Vanilla JavaScript
- Google Fonts (Orbitron, Share Tech Mono)

## License

MIT
