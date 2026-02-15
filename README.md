<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Synergia 2026 - BVRIT Hyderabad College Fest

An immersive, high-performance web portal for the Synergia college fest featuring a dynamic mosaic hero section and a bento-style event showcase.

## Tech Stack

- React 19 + TypeScript
- Vite
- Framer Motion (animations)
- Lucide React (icons)

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm run preview
```

## For Event Coordinators

### Adding Registration Links

Edit `components/EventModal.tsx` and replace the button's `onClick` with your Google Form link:

```tsx
// Change this:
<button onClick={() => alert('...')}>Register Now</button>

// To this:
<a href="YOUR_GOOGLE_FORM_LINK" target="_blank" rel="noopener noreferrer">
  Register Now
</a>
```

### Updating Event Data

All events are in `constants.ts`. Edit the `EVENTS_DATA` array:

```typescript
{
  id: 'unique-id',
  title: 'Event Name',
  category: EventCategory.TECHNICAL, // or CULTURAL or WORKSHOPS
  date: 'March 31, 2026',
  fee: '₹200',
  description: 'Event description...',
  image: 'https://your-image-url.jpg',
  accentColor: 'emerald', // color theme
  featured: true, // optional
  hostedBy: 'Club Name',
}
```

### Changing Images

Replace image URLs in `constants.ts` with your own:
- Use high-quality images (1200x800px recommended)
- Optimize images before uploading (use TinyPNG or similar)
- Host on a CDN for best performance

### Updating Contact Info

Edit `CONTACT_INFO` in `constants.ts`:

```typescript
export const CONTACT_INFO = [
  { name: 'Name', role: 'Role', phone: '+91 XXXXXXXXXX' },
  // Add more contacts...
];
```
