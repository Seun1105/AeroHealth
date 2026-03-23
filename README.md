# AeroHealth Intelligence Network (AHIN)

A professional website for the AeroHealth Intelligence Network — a real-time pollen monitoring, predictive forecasting, and early-warning platform designed to help healthcare providers, public-health agencies, and communities prevent asthma exacerbations.

## File Structure

```
ahin/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive layout
├── main.js         # Navigation, scroll animations, form handling
└── README.md       # This file
```

## How to Use

### Viewing locally
Open `index.html` directly in your browser. All three files must be in the same folder.

### Deploying to GitHub Pages
1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/your-repo-name`

## Adding Your Images

Two image placeholders are included in the site. To replace them:

**Hero image** — find this comment in `index.html`:
```html
<!-- Replace the placeholder div below with an <img> tag once you have your hero image -->
```
Replace the `<div class="hero-img-placeholder">...</div>` block with:
```html
<img src="your-hero-image.jpg" alt="AHIN hero" style="width:100%;height:100%;object-fit:cover;opacity:0.55;filter:saturate(0.6);">
```

**About image** — find this comment in `index.html`:
```html
<!-- Replace the placeholder div below with an <img> tag once you have your about image -->
```
Replace the `<div class="about-img-placeholder">...</div>` block with:
```html
<img src="your-about-image.jpg" alt="About AHIN">
```

## Tech Stack
- Vanilla HTML, CSS, JavaScript — no frameworks or dependencies
- Google Fonts: Cormorant Garamond + Outfit
- Fully responsive (mobile, tablet, desktop)
- Scroll-reveal animations via IntersectionObserver
