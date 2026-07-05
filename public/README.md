# Birthday Surprise Website - Asset Instructions

## Quick Start

This birthday website is ready to use! Just unlock it with the password **0607** (July 6th).

## Adding Your Personal Content

### Photos
Place your photos in the `public/images/` folder:
- `photo1.jpg` through `photo8.jpg` - For the main photo gallery
- `memory1.jpg` through `memory5.jpg` - For the floating photo frames section
- `video-thumb1.jpg` through `video-thumb3.jpg` - Video thumbnails (optional)

**Recommended formats:** JPG, PNG, WEBP
**Recommended size:** 800x800px or larger for best quality

### Videos
Place your videos in the `public/videos/` folder:
- `video1.mp4` - First video memory
- `video2.mp4` - Second video memory
- `video3.mp4` - Third video memory

**Recommended format:** MP4 (H.264)
**Recommended resolution:** 1080p or 720p for optimal loading

### Music
Place your background music in the `public/music/` folder:
- `birthday-song.mp3` - This will be the background music (suggested: "Tu" by Talwiinder)

**Supported formats:** MP3, WAV, OGG
**Note:** The music player includes play/pause and volume controls.

## Personalizing the Content

### Changing Names and Messages
Edit the following files to personalize:

1. **src/App.tsx** - Main birthday name and date
2. **src/components/Sections/Timeline.tsx** - Life timeline events
3. **src/components/Sections/GiftBox.tsx** - Gift box message
4. **src/components/Sections/BirthdayCard.tsx** - Card message
5. **src/components/Sections/FutureDreams.tsx** - Dreams and aspirations
6. **src/components/Sections/NightSky.tsx** - Night sky wishes
7. **src/components/Sections/FinalCelebration.tsx** - Final celebration message

### Changing the Password
In `src/App.tsx`, find line with:
```typescript
const correctPassword = '0607';
```
Change '0607' to your desired 4-digit password.

### Changing Colors
The primary colors are defined in `tailwind.config.js`:
- Gold theme with luxurious black backgrounds
- Modify the `gold` color palette for different accent colors

## Features

- Password protected entry (0607 = July 6th)
- Beautiful welcome animation with name reveal
- Floating balloons, confetti, and particle effects
- Interactive birthday cake with blow-out candles
- Photo gallery with lightbox view
- Video memories section
- Life timeline (19 years)
- Interactive gift box with hidden message
- Digital birthday card (flip to read)
- Countdown to July 6th
- Night sky with shooting stars
- Future dreams and aspirations section
- Final celebration with fireworks
- Background music player with controls
- Fully responsive design (mobile + desktop)
- Elegant black and gold luxury theme

## Folder Structure

```
public/
  images/
    photo1.jpg      # Gallery photo 1
    photo2.jpg      # Gallery photo 2
    ...
    photo8.jpg      # Gallery photo 8
    memory1.jpg     # Floating frame 1
    ...
    memory5.jpg     # Floating frame 5
    video-thumb1.jpg # Video thumbnail (optional)
  videos/
    video1.mp4      # Video memory 1
    video2.mp4      # Video memory 2
    video3.mp4      # Video memory 3
  music/
    birthday-song.mp3 # Background music
```

## Technical Notes

- Built with React + TypeScript + Vite
- Tailwind CSS for styling
- Lucide React for icons
- Pure CSS animations (no external animation libraries)
- Fully responsive design

## Deployment

The website can be deployed to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply run `npm run build` and deploy the `dist` folder.

---

Made with love for Shahzaib's 19th Birthday
July 6, 2024
