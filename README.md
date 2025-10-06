# Chouhan Park View

A modern, responsive real estate website built with Next.js, TypeScript, and Tailwind CSS. This project replicates the design and functionality of the Gilmore Place website with enhanced animations and modern web technologies.

## Features

- 🏠 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎨 **Beautiful Animations**: Framer Motion animations and smooth transitions
- 🎯 **Interactive Elements**: Hover effects, parallax scrolling, and interactive components
- 📧 **Contact Forms**: Functional contact forms with validation
- 🖼️ **Gallery**: Interactive image gallery with modal views
- 🏢 **Multiple Sections**: Discover, Tower Collection, Penthouse Collection, Commercial, Gallery, About, and Contact

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chouhan-park-view
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
chouhan-park-view/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── DiscoverSection.tsx
│       ├── TowerCollection.tsx
│       ├── PenthouseCollection.tsx
│       ├── CommercialSection.tsx
│       ├── GallerySection.tsx
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── SmoothScroll.tsx
├── public/
├── package.json
└── README.md
```

## Sections

### 1. Hero Section
- Animated background with gradient effects
- Call-to-action buttons
- Smooth scroll indicator
- Parallax scrolling effects

### 2. Discover Section
- Location features and amenities
- Interactive feature cards
- Map placeholder
- Animated icons and text

### 3. Tower Collection
- Property showcase cards
- Unit specifications
- Pricing information
- Interactive hover effects

### 4. Penthouse Collection
- Luxury property displays
- Premium features highlighting
- Virtual tour integration
- Exclusive access messaging

### 5. Commercial Section
- Business space options
- Investment opportunities
- Contact forms
- Professional presentation

### 6. Gallery Section
- Image grid with categories
- Modal image viewer
- Virtual tour integration
- Filter functionality

### 7. About Section
- Company information
- Statistics and achievements
- Values and mission
- Team highlights

### 8. Contact Section
- Contact information
- Interactive contact form
- Quick action buttons
- Multiple contact methods

## Customization

### Colors
The color scheme can be customized in `src/app/globals.css`:
- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Yellow (#fbbf24)

### Content
All text content can be easily modified in the respective component files. The structure is designed to be content-manageable.

### Images
Replace placeholder images with actual property photos. Update image paths in the components.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Responsive images and layouts
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.

---

Built with ❤️ using Next.js and modern web technologies.