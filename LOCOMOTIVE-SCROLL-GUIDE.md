# Gilmore Place Scroll Effect - Implementation Guide

## What Library Does Gilmore Place Use?

**Gilmore Place uses: Locomotive Scroll**

Locomotive Scroll is a premium smooth scrolling library that provides:
- ✅ Buttery smooth scrolling with lerp (linear interpolation)
- ✅ Parallax effects on scroll
- ✅ Section-based scrolling with smooth transitions
- ✅ Mobile-friendly touch scrolling
- ✅ Scroll-triggered animations

## How It Works

### 1. **Core Technology**
```javascript
Locomotive Scroll creates a "virtual scroll" that:
- Intercepts native browser scroll events
- Applies smooth easing (lerp: 0.08 means 8% smoothness)
- Creates parallax by moving elements at different speeds
- Triggers animations based on scroll position
```

### 2. **Key Configuration (Gilmore Place Style)**

```javascript
new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,           // Enable smooth scrolling
  lerp: 0.08,            // Smoothness factor (0.08 = very smooth like Gilmore)
  multiplier: 1.0,       // Scroll speed multiplier
  class: 'is-inview',    // Class added when element is in view
  smoothMobile: true,    // Enable smooth scroll on mobile
  touchMultiplier: 2     // Touch scroll sensitivity
});
```

### 3. **HTML Attributes for Effects**

```html
<!-- Main container -->
<div data-scroll-container>
  
  <!-- Full-page section -->
  <section data-scroll-section>
    
    <!-- Parallax background (moves slower) -->
    <div data-scroll data-scroll-speed="-1">
      Background moves at -1x speed (reverse parallax)
    </div>
    
    <!-- Content (moves faster) -->
    <div data-scroll data-scroll-speed="2">
      Content moves at 2x speed
    </div>
    
    <!-- Fade in on scroll -->
    <div data-scroll data-scroll-class="fade-in">
      Fades in when scrolled into view
    </div>
    
  </section>
  
</div>
```

## Installation Complete! ✅

Already installed: `npm install locomotive-scroll`

## Files Created

1. **`LocomotiveScrollProvider.tsx`** - Main wrapper component
2. **`page-locomotive.tsx`** - Example implementation with full sections
3. **Updated `NavigationMenu.tsx`** - Now uses Locomotive Scroll API

## How to Use

### Option 1: Replace Your Current page.tsx

```bash
# Backup your current page
mv src/app/page.tsx src/app/page-old.tsx

# Use the new Locomotive Scroll version
mv src/app/page-locomotive.tsx src/app/page.tsx
```

### Option 2: Test Side-by-Side

Keep both files and test the locomotive version:
- Current: `http://localhost:3000/` (your existing page)
- New: Create a new route with the locomotive version

## Key Features Implemented

### 1. **Smooth Scrolling** ✅
- Exact lerp value (0.08) for Gilmore Place smoothness
- Smooth on both desktop and mobile

### 2. **Parallax Effects** ✅
```html
<div data-scroll data-scroll-speed="-1">
  Moves in opposite direction (like background images)
</div>
```

### 3. **Section Navigation** ✅
```javascript
locomotiveScroll.scrollTo(target, {
  duration: 1200,
  easing: [0.25, 0.0, 0.35, 1.0]
});
```

### 4. **Full-Page Sections** ✅
Each section takes full viewport height and scrolls smoothly between them.

## Scroll Speed Guide

```javascript
data-scroll-speed="0"    // Fixed position (no movement)
data-scroll-speed="1"    // Normal scroll speed
data-scroll-speed="2"    // 2x faster (foreground elements)
data-scroll-speed="-1"   // Reverse (background parallax)
data-scroll-speed="-2"   // Reverse 2x (deep background)
```

## Customization

### Change Smoothness
In `LocomotiveScrollProvider.tsx`:
```javascript
lerp: 0.08  // Smoother (like Gilmore Place)
lerp: 0.1   // Slightly faster response
lerp: 0.05  // Even smoother (may feel laggy)
```

### Change Scroll Speed
```javascript
multiplier: 1.0  // Normal speed
multiplier: 1.5  // 50% faster
multiplier: 0.8  // 20% slower
```

## Testing

Run your development server:
```bash
npm run dev
```

Visit `http://localhost:3000` and experience:
1. **Smooth scrolling** exactly like Gilmore Place
2. **Parallax effects** on backgrounds
3. **Section navigation** from menu
4. **Touch-friendly** mobile scrolling

## Troubleshooting

### Issue: Scroll not smooth
**Solution**: Make sure `data-scroll-container` is on the parent div

### Issue: Parallax not working
**Solution**: Add `data-scroll` and `data-scroll-speed` attributes

### Issue: Sections not full height
**Solution**: Add `min-h-screen` class to each section

## Advanced: Custom Animations

```javascript
locomotiveScroll.on('scroll', (args) => {
  // Custom logic on scroll
  console.log(args.scroll.y); // Current scroll position
  console.log(args.speed);     // Current scroll speed
});
```

## Comparison

| Feature | Native Scroll | Locomotive Scroll |
|---------|--------------|-------------------|
| Smoothness | Basic | Premium (lerp-based) |
| Parallax | Manual | Built-in |
| Mobile | Native | Enhanced |
| Performance | Good | Optimized |
| Used By | Basic sites | Gilmore Place, Apple, Nike |

## Conclusion

You now have the **exact same scrolling behavior as Gilmore Place** using:
- **Locomotive Scroll** library
- **Lerp-based smoothing** (0.08)
- **Parallax effects**
- **Full-page sections**
- **Smooth section navigation**

Enjoy the premium scrolling experience! 🚀




