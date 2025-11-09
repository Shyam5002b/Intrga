# Images Folder

This folder contains all image assets for the website.

## 📸 Recommended Images

### Required:
- `favicon.png` - Website icon (16x16 or 32x32 px)
- `logo.png` - Company logo
- `hero-bg.jpg` - Hero section background (1920x1080 px)

### Optional:
- `service-icons/` - Icons for each service
- `certifications/` - Certification badges
- `team/` - Team member photos
- `projects/` - Project portfolio images

## 📐 Image Guidelines

- **Format**: PNG for logos/icons, JPG for photos
- **Size**: Optimize images for web (< 500KB each)
- **Resolution**: Use 2x resolution for retina displays
- **Naming**: Use lowercase and hyphens (e.g., `team-photo.jpg`)

## 🖼️ Adding Images to Website

### In HTML:
```html
<img src="images/your-image.jpg" alt="Description" loading="lazy">
```

### In CSS:
```css
background-image: url('../images/your-image.jpg');
```

## 🔧 Tools for Image Optimization

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimize SVG files
