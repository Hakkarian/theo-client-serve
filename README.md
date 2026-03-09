# Labs 3-4, 5-6, 7-9, 11-12 & 13-14: Cyberpunk Web Applications

A collection of interactive web pages with cyberpunk aesthetics, featuring custom audio player, canvas animations, SVG graphics, cursor tracking, file operations, and contact management.

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

## Lab 7-9: Cursor Position Tracker

**Location**: `lab_7-9.html`

Real-time mouse cursor position tracking with visual feedback.

### Features

- **Two Text Fields (X and Y)** – Display real-time cursor screen coordinates
- **Visual Cursor Indicator** – Glowing circle that follows cursor position
- **Multiple Coordinate Systems** – Shows relative, absolute, and page coordinates
- **Cyberpunk Styling** – Neon-styled input fields with glow effects
- **Responsive Tracking Area** – Updates instantly as cursor moves

## Lab 11-12: File Copy Utility

**Location**: `lab_11-12.html`

Web-based file copying utility with split-panel interface and drag-and-drop support.

### Features

- **Split-Panel Layout** – Left panel for source file selection, right panel for destination directory
- **Drag and Drop Support** – Drag files directly into the source panel
- **File System Access API** – Save files directly to selected directories (in supported browsers)
- **Fallback Download** – Automatic fallback to browser downloads for unsupported browsers
- **File Information Display** – Shows file name and size after selection
- **Status Messages** – Real-time feedback on operations
- **Modern Browser Support** – Uses HTML5 File API and File System Access API

## Lab 13-14: Contact Manager

**Location**: `lab_13-14.html`

Telephone network contact management application with full CRUD operations and navigation.

### Features

- **Contact Storage** – Uses JavaScript Map (HashMap equivalent) with phone number as key
- **Input Form** – Five text fields for: phone number, last name, first name, patronymic, address
- **Add Functionality** – "Додати" button to add new contacts with validation
- **Sort Functionality** – "Сортувати" button to sort contacts by phone number (ascending)
- **View Functionality** – "Перегляд" button shows first contact
- **Navigation** – "<" (previous) and ">" (next) buttons to browse through contacts
- **Contact Display** – Shows current contact with all details in a styled card
- **Position Indicator** – Shows current position (e.g., "2 / 5")
- **Real-time Validation** – Prevents duplicate phone numbers and empty fields
- **Notifications** – Toast-style notifications for all operations

### Keyboard Controls (All Labs)

- `←` `→` – Navigate between labs (Lab 3-4 ↔ Lab 5-6 ↔ Lab 7-9 ↔ Lab 11-12 ↔ Lab 13-14)
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
- **Lab 7-9**: [http://localhost:3000/lab_7-9.html](http://localhost:3000/lab_7-9.html)
- **Lab 11-12**: [http://localhost:3000/lab_11-12.html](http://localhost:3000/lab_11-12.html)
- **Lab 13-14**: [http://localhost:3000/lab_13-14.html](http://localhost:3000/lab_13-14.html)

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
├── lab_7-9.html        # Lab 7-9: Cursor position tracker
├── lab_11-12.html      # Lab 11-12: File copy utility
├── lab_13-14.html      # Lab 13-14: Contact manager
├── scss/               # SCSS source files
│   └── styles.scss     # Main stylesheet (cyberpunk theme)
├── css/                # Compiled CSS
│   └── styles.css      # Generated from SCSS (do not edit directly)
├── assets/             # Media files
│   ├── profile.png     # Profile avatar image
│   └── Fur_Vijay.mp3   # Background music track
├── package.json        # Project dependencies and scripts
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## File Locations Guide

### HTML Pages
- **Lab 3-4**: Open `index.html` in browser
- **Lab 5-6**: Open `lab_5-6.html` in browser
- **Lab 7-9**: Open `lab_7-9.html` in browser
- **Lab 11-12**: Open `lab_11-12.html` in browser
- **Lab 13-14**: Open `lab_13-14.html` in browser
- All pages share the same CSS and navigation system

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
