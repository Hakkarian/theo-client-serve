# Labs 3-4 & 5-6: Cyberpunk Web Applications

A collection of interactive web pages with cyberpunk aesthetics, featuring custom audio player, canvas animations, and SVG graphics.

## Lab 3-4: Cyberpunk Profile Page

**Location**: `index.html`

Interactive profile page with custom audio player and drawing pad.

### Features

- **Cyberpunk UI** – Neon colors, glitch effects, and animated backgrounds
- **Glassmorphism Card** – 3D tilt effect that follows cursor movement
- **Custom Audio Player** – Play/pause, seek, time display with neon styling
- **Canvas Drawing Pad** – Paint with rainbow neon strokes
- **Page Transitions** – Smooth fade and slide animations

## Lab 5-6: Canvas & SVG Animations

**Location**: `lab_5-6.html`

Advanced animation showcase featuring multiple canvas and SVG demonstrations.

### Animations Included

1. **Bouncing Text Animation** – Text bounces horizontally and changes color on edge collision
2. **Rotating Triangles (SVG)** – Four triangles rotating in place with glow effects
3. **Diagonal Text Movement** – Text moves diagonally, changes character set at corners
4. **Circular Motion** – Dot orbits in circle with constant speed, adapts to window resize
5. **Rotating Triangles with Moving Center** – Three triangles orbit around horizontally moving center point
6. **Solar System Simulation** – Sun, planets with different orbital speeds, Earth's moon, and Mars synchronized with Earth (2:1 ratio)

### Keyboard Controls (Both Labs)

- `←` `→` – Switch between Lab 3-4 and Lab 5-6
- `Space` – Toggle background music on/off

## Quick Start

```bash
# Install dependencies
npm install

# Build CSS from SCSS
npm run build

# Start local server on localhost:3000
npm run serve
```

### Accessing the Labs

Once the server is running:
- **Lab 3-4**: [http://localhost:3000/index.html](http://localhost:3000/index.html)
- **Lab 5-6**: [http://localhost:3000/lab_5-6.html](http://localhost:3000/lab_5-6.html)

You can also navigate between labs using the navigation menu at the top or keyboard arrows.

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
├── index.html          # Lab 3-4: Profile page with audio player and drawing pad
├── lab_5-6.html        # Lab 5-6: Canvas & SVG animations showcase
├── scss/               # SCSS source files
│   └── styles.scss     # Main stylesheet (cyberpunk theme)
├── css/                # Compiled CSS
│   └── styles.css      # Generated from SCSS (do not edit directly)
├── assets/             # Media files
│   ├── profile.png     # Profile avatar image
│   └── Fur_Vijay.mp3   # Background music track
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## File Locations Guide

### HTML Pages
- **Lab 3-4**: Open `index.html` in browser
- **Lab 5-6**: Open `lab_5-6.html` in browser
- Both pages share the same CSS and navigation system

### Stylesheets
- **Source**: `scss/styles.scss` (edit this file)
- **Output**: `css/styles.css` (auto-generated, don't edit)
- Run `npm run build` after editing SCSS

### Assets
- **Audio**: Place `.mp3` files in `assets/` folder
- **Images**: Place images in `assets/` folder
- Audio can be changed via URL parameter: `?track=filename.mp3`

### Canvas Animations (Lab 5-6)

All canvas animations are located in `lab_5-6.html` in `<script>` tags at the bottom:

1. **animCanvas** – Bouncing text (lines ~208-290)
2. **diagonalCanvas** – Diagonal text movement (lines ~292-387)
3. **circularCanvas** – Circular motion (lines ~389-466)
4. **orbitCanvas** – Rotating triangles with moving center (lines ~468-568)
5. **solarCanvas** – Solar system simulation (lines ~570-674)

### SVG Graphics (Lab 5-6)

SVG triangles with rotation are in the HTML section (lines ~54-116):
- Triangle definitions with `<polygon>` elements
- SMIL animations using `<animateTransform>`
- Glow effects using SVG `<filter>` elements

## Tech Stack

- **HTML5** – Semantic markup and Canvas API
- **SCSS/CSS3** – Animations, transitions, glassmorphism effects
- **Vanilla JavaScript** – Canvas animations, SVG manipulation, DOM interaction
- **Canvas API** – 2D graphics rendering for animations
- **SVG** – Scalable vector graphics with SMIL animations
- **Google Fonts** – Orbitron (headings), Share Tech Mono (code)

## License

MIT
