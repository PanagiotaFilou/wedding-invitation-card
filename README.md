# Wedding Invitation - Σπύρος & Παναγιώτα

A beautiful, modern wedding invitation website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Elegant design with watercolor floral decorations
- ⏱️ Live countdown timer to the wedding date
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🌹 Hand-crafted SVG floral illustrations
- 📞 Click-to-call phone numbers
- 🇬🇷 Greek language support

## Wedding Details

- **Date:** Saturday, December 20, 2025 at 19:15
- **Ceremony:** Δημοτική Πινακοθήκη Πειραιά
- **Reception:** Nyn Esti at ΕΜΣΤ
- **RSVP Deadline:** November 20, 2025

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── WeddingInvitation.tsx  # Main invitation component
│   ├── CountdownTimer.tsx      # Countdown timer component
│   └── FloralDecoration.tsx    # SVG floral decorations
├── App.tsx                     # Root component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles and animations
```

## Customization

To customize the wedding details, edit the values in `src/components/WeddingInvitation.tsx`:

- Names
- Date and time
- Venue information
- Family names
- Best men names
- Reception details
- Contact information

## License

This project is created for personal use.

---

Made with ❤️ for Σπύρος & Παναγιώτα
