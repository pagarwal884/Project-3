// ===== React Entry Point =====
// This is where the React application starts
// StrictMode helps detect potential issues during development

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // React 18 way to mount app
import './index.css' // Global styles (Tailwind CSS and custom styles)
import App from './App.jsx' // Main App component

// Render the App component into the HTML element with id="root"
// StrictMode runs checks in development to find issues
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
