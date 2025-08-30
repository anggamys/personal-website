# Simple Personal Website

# Personal Website - Moh Angga

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful dark/light theme toggle, smooth animations, and optimized performance.

![Website Preview](https://img.shields.io/badge/status-live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with smooth animations
- **🌙 Theme Toggle**: Persistent dark/light mode with system preference detection
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Performance Optimized**: Lazy loading, efficient scroll handling, and optimized animations
- **♿ Accessible**: WCAG compliant with proper ARIA labels and focus management
- **🔧 Error Handling**: Comprehensive error boundaries and graceful fallbacks
- **🎯 SEO Optimized**: Meta tags, Open Graph, and structured data

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (ready)

## 🛠️ Recent Improvements

### Theme System Enhancements

- ✅ Fixed theme toggle persistence with localStorage
- ✅ Added system preference detection
- ✅ Implemented theme context for better state management
- ✅ Improved theme transitions with smooth animations

### Performance Optimizations

- ✅ Throttled scroll event handlers
- ✅ Optimized re-renders with useCallback and useMemo
- ✅ Added lazy loading for media content
- ✅ Improved animation performance

### Accessibility & UX

- ✅ Enhanced focus indicators
- ✅ Added proper ARIA labels
- ✅ Implemented reduced motion support
- ✅ Better keyboard navigation
- ✅ Improved error handling with Error Boundaries

### Code Quality

- ✅ Separated concerns with custom hooks
- ✅ Added proper TypeScript types
- ✅ Implemented error boundaries
- ✅ Better component organization
- ✅ Enhanced loading states

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/anggamys/personal-website.git
cd personal-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Background.tsx
│   ├── BackToTopButton.tsx
│   ├── ErrorBoundary.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Introduction.tsx
│   ├── LoadingSpinner.tsx
│   ├── ModeToggle.tsx
│   ├── Project.tsx
│   └── Skills.tsx
├── contexts/            # React contexts
│   ├── ThemeContext.tsx
│   └── theme-context.ts
├── hooks/               # Custom hooks
│   ├── use-local-storage.ts
│   └── use-theme.ts
├── constants/           # App constants & data
│   ├── data.json
│   └── types.ts
└── assets/              # Static assets
```

## 🎨 Design System

The website uses a consistent color palette and design tokens:

### Colors

- **Primary**: `#16697a` (Teal)
- **Secondary**: `#489fb5` (Light Blue)
- **Accent**: `#f7be16` (Golden Yellow)
- **Background**: `#e8f1f2` (Light) / `#202a2d` (Dark)

### Typography

- **Font**: Plus Jakarta Sans
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

## 📊 Performance Features

- **Lazy Loading**: Images and iframes load only when visible
- **Optimized Animations**: Use `transform` and `opacity` for 60fps animations
- **Efficient Scrolling**: Throttled scroll events with `requestAnimationFrame`
- **Bundle Optimization**: Tree-shaking and code splitting ready
- **Web Vitals Optimized**: Focus on Core Web Vitals metrics

## 🔧 Configuration

### Environment Variables

The app supports Vite environment variables. Create a `.env.local` file:

```env
VITE_APP_TITLE="Personal Website"
VITE_ANALYTICS_ID="your-analytics-id"
```

### Theme Customization

Modify the theme colors in `src/index.css`:

```css
:root {
  --color-primary: #16697a;
  --color-secondary: #489fb5;
  --color-accent: #f7be16;
  /* ... */
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang](https://v3.brittanychiang.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact

Moh Angga - [anggayunus139@gmail.com](mailto:anggayunus139@gmail.com)

Project Link: [https://github.com/anggamys/personal-website](https://github.com/anggamys/personal-website)

---

⭐ If you found this project helpful, please give it a star!

## Features

- Responsive and clean design
- Project and skills showcase
- Easy to customize and deploy

## Tech Stack

- Vite
- React + TypeScript (TSX)
- Tailwind CSS

## Getting Started

Clone the repository and run locally:

```bash
git clone https://github.com/anggamys/personal-website.git
cd personal-website
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Version History

This website has gone through several iterations with design improvements.

- **v1:** First version, adapted and inspired by [brittanychiang.com v3](https://v3.brittanychiang.com).
