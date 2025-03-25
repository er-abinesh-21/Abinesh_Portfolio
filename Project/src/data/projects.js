import { MessageSquare, Cloud, Shield } from 'lucide-react';

/**
 * Project configuration data
 * Add your projects here following the structure below
 */
export const projects = [
  {
    id: 'bytetalk',
    title: 'ByteTalk - Realtime Chat App',
    description: 'A real-time chat application featuring room-based messaging and scalable architecture.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000&auto=format&fit=crop',
    tech: ['React.js', 'Node.js', 'Socket.IO', 'CSS'],
    icon: MessageSquare,
    github: 'https://github.com/your-username/ByteTalk',
    demo: 'https://bytetalk-demo.example.com', // Add your demo URL
    features: [
      'Real-time messaging using Socket.IO',
      'Room-based chat functionality',
      'Responsive and modern UI design',
      'User presence indicators'
    ]
  },
  {
    id: 'rainorshine',
    title: 'Rain or Shine - Weather App',
    description: 'A responsive weather application with dynamic search and real-time updates.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2000&auto=format&fit=crop',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'OpenWeatherMap API'],
    icon: Cloud,
    github: 'https://github.com/your-username/RainOrShine',
    demo: 'https://rainorshine-demo.example.com', // Add your demo URL
    features: [
      'Dynamic weather data from OpenWeatherMap API',
      'Location-based weather information',
      'Responsive design with Bootstrap',
      'Interactive weather icons'
    ]
  },
  {
    id: 'sitesentry',
    title: 'SiteSentry - Web Extension',
    description: 'A Chrome extension for tracking online habits and boosting productivity.',
    image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2000&auto=format&fit=crop',
    tech: ['JavaScript', 'Chrome Extensions API', 'HTML5', 'CSS3'],
    icon: Shield,
    github: 'https://github.com/your-username/SiteSentry',
    demo: 'https://sitesentry-demo.example.com', // Add your demo URL
    features: [
      'Website tracking functionality',
      'Distraction blocking features',
      'Productivity reports generation',
      'Customizable blocking rules'
    ]
  }
];