# JaaNashheen Bakery Website

A modern, responsive bakery website built with **React**, **TypeScript**, and **Framer Motion**. Features a luxurious dark/light theme, dynamic animations, and seamless user experience across all devices.

## 🌟 Features

### Core Functionality
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme Support** - Toggle between themes with smooth transitions
- **Dynamic Animations**: Engaging transitions powered by Framer Motion
- **Professional UI/UX** - Modern design with elegant typography and animations
- **Multi-page Navigation** - Complete website structure with dedicated pages

### Pages & Sections
- **Landing Page** - Hero section, featured products, promotions, and company story
- **Products Page** - Comprehensive catalog with filtering and categorization
- **About Page** - Company story, values, and team information
- **Services Page** - Custom cakes, catering, event planning, and delivery services
- **Blog Page** - Articles, recipes, and bakery news with categories
- **Contact Page** - Contact form, location details, and business hours
- **FAQ Section** - Comprehensive frequently asked questions

### Framer Motion Animations
- Framer Motion was used to enhance the user experience with smooth, engaging animations across various pages and sections. Below is a summary of the implemented animations:

- **Fade-In Up Animation:** Applied to elements like hero section text, featured products, and blog post previews. Elements transition from an initial state of zero opacity and a 30px downward offset to full opacity and their final position over 0.6 seconds with an ease-out timing function.
- **Fade-In Left Animation:** Used for elements such as sidebar menus and team member profiles on the About page. Elements slide in from the left with a 30px offset, fading in over 0.6 seconds with ease-out.
- **Fade-In Right Animation:** Implemented for components like promotional banners and contact form fields, sliding in from the right with a 30px offset, fading in over 0.6 seconds with ease-out.
- **Staggered Container Animation:** Applied to container elements (e.g., product grids, blog article lists) to create a cascading effect, where child elements animate sequentially with a 0.15-second delay between each, enhancing the visual flow during page loads or section reveals.

### UI/UX Enhancements
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Professional Typography** - Playfair Display and Inter font combinations
- **Semantic Design System** - Consistent color palette and component styling
- **SEO Optimized** - Meta tags, semantic HTML, and structured content

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm 

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd keithston-bakery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🖥️ Usage Guide

### Development
- The development server runs on `http://localhost:8080`
- Hot reload is enabled for instant updates during development
- Use the theme toggle in the header to switch between light and dark modes

### Project Structure
```
src/
├── components/
│   ├── layout/          # Header, Footer components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   └── theme-provider.tsx
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── assets/            # Images and static assets
└── animations/        #framer motion animations
└── context/           #context    
  
```

### Customization
- **Colors & Themes**: Modify `src/index.css` and `tailwind.config.ts`
- **Typography**: Update font families in `tailwind.config.ts`
- **Content**: Edit page components in `src/pages/` and `src/components/sections/`
- **Assets**: Replace images in `src/assets/` folder

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & customizable icons

### Routing & State Management
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling and validation

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant management

### Theme & Animation
- **next-themes** - Theme switching functionality
- **tailwindcss-animate** - CSS animations
- **Framer Motion** (ready for implementation)

## 🤝 Contributing

We welcome contributions to improve the Keithston Bakery website! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly on different screen sizes
- Update documentation if needed
- Ensure all components are accessible and responsive

### Code Standards
- Use TypeScript for all new components
- Follow the established component structure
- Use semantic CSS classes and design tokens
- Ensure components work in both light and dark themes
- Add proper error handling and loading states

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Keithston Bakery](https://your-domain.com)
- **Documentation**: [Project Wiki](https://github.com/your-username/keithston-bakery/wiki)
- **Issues**: [Bug Reports & Feature Requests](https://github.com/mzainnasir010/bakehouse-weaver)

## 📞 Support

For questions, suggestions, or support:
- Create an issue on GitHub
- Contact us at: zainnasir6921@gmail.com

---
