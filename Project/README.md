# Portfolio Website

A professional portfolio website for Abinesh B, showcasing skills, projects, and certifications with a beautiful neumorphic design.

## Features

- Responsive design that works on all devices
- Dark/light theme toggle
- Interactive 3D background with Three.js
- Smooth animations with Framer Motion
- Neumorphic design system
- Project showcase with hover effects
- Skills section with progress bars
- Contact form
- Certifications display

## Tech Stack

- React.js
- Three.js for 3D background
- Framer Motion for animations
- React Scroll for smooth navigation
- React Intersection Observer for scroll animations
- Lucide React for icons
- Custom CSS with BEM naming convention

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # CSS files
│   ├── App.js            # Main App component
│   └── main.js           # Entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Customization

- Update personal information in the component files
- Modify the color scheme in `src/styles/index.css`
- Add or remove sections by editing `App.js`
- Update project details in `Projects.js`
- Change skills and certifications in their respective component files

## License

MIT