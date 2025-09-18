# Sebastian Rivas - Personal Website

A modern, responsive personal website showcasing academic background, skills, and campus involvement at the University of Miami.

## Features

- **Modern Design**: Clean, Apple-inspired aesthetic with smooth animations
- **Color Scheme**: Grey, white, and forest green accents as requested
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle hover effects and scroll animations
- **Clean Icons**: Font Awesome icons throughout the site
- **LinkedIn Integration**: Direct links to your LinkedIn profile

## Sections

1. **Hero Section**: Name, title, and photo placeholder
2. **About Me**: Personal story and skills showcase
3. **Academic Focus**: Computer Science major and Mathematics minor details
4. **Projects**: Personal website project showcasing GitHub Pages and AI Codespace tools
5. **Campus Involvement**: Organizations including ColorStack, Kappa Theta Pi, and more
6. **Contact**: LinkedIn and email links

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive elements and smooth scrolling

## Customization

### Adding Your Photo
Replace the image placeholder in the hero section by:
1. Add your photo file to the website folder
2. Update the `.image-placeholder` section in `index.html`:
   ```html
   <div class="hero-image">
       <img src="your-photo.jpg" alt="Sebastian Edger" class="profile-image">
   </div>
   ```
3. Add corresponding CSS for `.profile-image` in `styles.css`

### Updating Contact Information
- Update the LinkedIn URL in the buttons (search for `href="https://linkedin.com"`)
- Update the email address in the contact section
- Add your actual University of Miami email

### Color Customization
All colors are defined as CSS variables in `:root` in `styles.css`:
- `--primary-color`: Forest green
- `--secondary-color`: Lighter forest green
- `--background-color`: Light grey background
- `--card-background`: White colors

## Running Locally

1. Open terminal in the website folder
2. Run: `python3 -m http.server 8000`
3. Open browser to `http://localhost:8000`

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## Performance Features

- Smooth scrolling with CSS `scroll-behavior`
- Intersection Observer for efficient animations
- Optimized animations using `transform` and `opacity`
- Responsive images and layouts
- Minimal JavaScript bundle

---

Built with modern web standards for a fast, accessible, and beautiful experience.