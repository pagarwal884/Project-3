# 🚀 Modern Web Frontend - Agency Website

A beautiful, modern frontend website built by following a YouTube tutorial. This project is a practice/portfolio piece that showcases a professional landing page for a creative agency with multiple sections and interactive features.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [What's Included](#whats-included)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [What I Learned](#what-i-learned)
- [Commands](#commands)

## 📖 About the Project

This is a **frontend-only learning project** created by following a YouTube tutorial. It demonstrates a modern, responsive agency website with multiple sections:
- **Hero Section** - Eye-catching landing page introduction
- **Services** - Display of services offered
- **Trusted Clients** - Client logos and testimonials
- **Portfolio** - Showcase of projects/work
- **Team Members** - Team member profiles
- **Contact Section** - Contact information or form
- **Dark/Light Theme** - Theme toggle for user preference

This project is great for practicing React, component-based architecture, and modern CSS styling with Tailwind!

## 🎯 What's Included

```
Project-3/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Navbar.jsx       # Navigation header
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Services.jsx     # Services showcase
│   │   ├── ServiceCard.jsx  # Individual service card
│   │   ├── TrustedBy.jsx    # Client testimonials
│   │   ├── OurWork.jsx      # Portfolio/projects
│   │   ├── MeetTeam.jsx     # Team members section
│   │   ├── Reach.jsx        # Contact section
│   │   ├── Footer.jsx       # Footer
│   │   └── ThemeToggleBtn.jsx # Dark/Light mode toggle
│   ├── assets/              # Images and assets
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── package.json             # Project dependencies
├── vite.config.js          # Vite configuration
└── eslint.config.js        # Code quality rules
```

## 💻 Tech Stack

- **React 19.2** - Modern JavaScript library for building user interfaces
- **Vite 8.1** - Fast build tool and development server
- **Tailwind CSS 4.3** - Utility-first CSS framework for styling
- **React Hot Toast** - Toast notifications for user feedback
- **ESLint** - Code quality checker

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation & Running

1. **Clone/Open the project** (already done!)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:5173` (or another port shown in terminal)

4. **Build for production:**
   ```bash
   npm run build
   ```
   This creates an optimized version in the `dist/` folder

## 📁 Project Structure Explained

### Components
Each component is a reusable piece of the website:
- **Navbar** - Header with navigation links and theme toggle
- **Hero** - Main landing section with headline and call-to-action
- **Services** - Grid display of services offered
- **ServiceCard** - Individual service card component
- **TrustedBy** - Client logos and testimonials section
- **OurWork** - Portfolio/projects showcase
- **MeetTeam** - Team member profiles
- **Reach** - Contact form or contact information
- **Footer** - Bottom section with links and info

### Styling
- Uses **Tailwind CSS** for all styling - a modern approach that lets you style without writing custom CSS
- **Dark/Light theme** system saved in localStorage (browser's local storage)
- Custom cursor animation following mouse movement

## ✨ Key Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Dark/Light Mode** - Users can toggle between themes
✅ **Custom Cursor Animation** - Interactive cursor that reacts to hoverable elements
✅ **Fast Performance** - Built with Vite for quick loading
✅ **Component-Based** - Reusable components make code clean and maintainable
✅ **Modern Styling** - Tailwind CSS for beautiful, consistent design
✅ **Toast Notifications** - User feedback with react-hot-toast

## 📚 What I Learned

### 1. **React Fundamentals**
   - Building components and managing component structure
   - Using hooks like `useState` and `useEffect`
   - Managing state and props effectively
   - Creating reusable components

### 2. **Vite & Build Tools**
   - How modern build tools like Vite speed up development
   - Hot Module Replacement (HMR) - seeing changes instantly without refresh
   - Building for production optimization

### 3. **Styling with Tailwind CSS**
   - Utility-first CSS approach (using pre-made classes vs. writing CSS)
   - Responsive design with Tailwind's breakpoints
   - Creating themes and consistent design systems
   - Dark mode implementation

### 4. **Advanced JavaScript Concepts**
   - Using `useRef` hook to access DOM elements directly
   - Event listeners and mouse tracking
   - localStorage for persistent data (theme preference)
   - CSS animations and transitions

### 5. **User Experience (UX)**
   - Creating interactive cursor effects
   - Building intuitive navigation
   - Toast notifications for user feedback
   - Theme toggling for accessibility

### 6. **Code Organization**
   - Structuring React projects properly
   - Separating concerns with components
   - Keeping code clean and maintainable

### 7. **Web Development Best Practices**
   - ESLint for code quality
   - Component composition patterns
   - Performance optimization
   - Responsive web design

## 📝 Available Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production (optimized)
npm run build

# Check code quality
npm run lint

# Preview production build locally
npm run preview
```

## 🎨 Customization Tips

- **Change colors** - Edit Tailwind classes in components
- **Add sections** - Create new components in `src/components/`
- **Update content** - Modify text and images in each component
- **Add pages** - Import components in different arrangements in App.jsx
- **Change theme colors** - Look for color classes like `bg-primary`, `text-primary` in components

## 📞 Next Steps

1. Customize the content for your business
2. Replace placeholder images with your own
3. Add your contact information
4. Deploy to a hosting platform (Vercel, Netlify, GitHub Pages)

---

**Happy coding! 🎉** This project is a great foundation for a professional business website.
