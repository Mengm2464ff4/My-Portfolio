// export const projectsData = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     category: "fullstack",
//     description: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
//     longDescription: "A complete e-commerce solution built with MERN stack. Features include product management, shopping cart, order processing, Stripe payment integration, user reviews, and an admin panel for inventory management. The platform handles thousands of products and processes hundreds of orders daily.",
//     image: "/images/projects/project1.jpg",
//     images: [
//       "/images/projects/project1-1.jpg",
//       "/images/projects/project1-2.jpg",
//       "/images/projects/project1-3.jpg"
//     ],
//     tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux Toolkit", "Tailwind CSS"],
//     liveUrl: "https://ecommerce-demo.com",
//     githubUrl: "https://github.com/username/ecommerce-platform",
//     features: [
//       "User authentication & authorization (JWT)",
//       "Product search, filters & sorting",
//       "Shopping cart & wishlist",
//       "Secure payment integration with Stripe",
//       "Order tracking & history",
//       "Admin dashboard with analytics",
//       "Product reviews & ratings",
//       "Email notifications",
//       "Responsive design"
//     ],
//     challenges: [
//       "Implementing secure payment processing",
//       "Managing real-time inventory updates",
//       "Optimizing database queries for performance"
//     ],
//     solutions: [
//       "Used Stripe webhooks for payment confirmation",
//       "Implemented optimistic updates with Redux",
//       "Added indexes and aggregation pipelines in MongoDB"
//     ],
//     date: "2024",
//     client: "Fashion Retail Co.",
//     role: "Lead Full-stack Developer"
//   },
//   {
//     id: 2,
//     title: "Weather App",
//     category: "frontend",
//     description: "Real-time weather application with 5-day forecast and interactive maps.",
//     longDescription: "A comprehensive weather application that provides real-time weather data, 5-day forecast, interactive radar maps, and weather alerts. Uses OpenWeatherMap API and Leaflet for interactive maps. Features include location search, temperature unit toggle, and beautiful weather animations.",
//     image: "/images/projects/project2.jpg",
//     images: [
//       "/images/projects/project2-1.jpg",
//       "/images/projects/project2-2.jpg"
//     ],
//     tech: ["React", "OpenWeather API", "Chart.js", "Leaflet", "Axios", "React Router"],
//     liveUrl: "https://weather-app-demo.com",
//     githubUrl: "https://github.com/username/weather-app",
//     features: [
//       "Current weather conditions",
//       "5-day weather forecast",
//       "Interactive radar maps",
//       "Location search with autocomplete",
//       "Temperature unit toggle (°C/°F)",
//       "Weather alerts & notifications",
//       "Favorite locations",
//       "Weather charts & trends",
//       "Beautiful weather animations"
//     ],
//     challenges: [
//       "Handling API rate limits",
//       "Rendering weather data efficiently",
//       "Implementing smooth map interactions"
//     ],
//     solutions: [
//       "Implemented caching with localStorage",
//       "Used React.memo for performance optimization",
//       "Integrated Leaflet with custom weather layers"
//     ],
//     date: "2024",
//     client: "Personal Project",
//     role: "Frontend Developer"
//   },
//   {
//     id: 3,
//     title: "Task Manager",
//     category: "fullstack",
//     description: "Productivity app with drag-and-drop and team collaboration features.",
//     longDescription: "A powerful task management application with real-time updates, team collaboration, file attachments, and progress tracking. Built with React, Firebase, and Tailwind CSS. Supports multiple workspaces, task assignments, due dates, and comments.",
//     image: "/images/projects/project3.jpg",
//     images: [
//       "/images/projects/project3-1.jpg",
//       "/images/projects/project3-2.jpg",
//       "/images/projects/project3-3.jpg"
//     ],
//     tech: ["React", "Firebase", "Tailwind CSS", "React DnD", "Framer Motion", "React Query"],
//     liveUrl: "https://taskmanager-demo.com",
//     githubUrl: "https://github.com/username/task-manager",
//     features: [
//       "Drag-and-drop task management",
//       "Real-time updates with Firestore",
//       "Team collaboration & roles",
//       "File attachments & previews",
//       "Progress tracking & reports",
//       "Email & push notifications",
//       "Comments & activity feed",
//       "Due dates & reminders",
//       "Custom labels & filters"
//     ],
//     challenges: [
//       "Syncing real-time updates across users",
//       "Implementing drag-and-drop with complex lists",
//       "Managing offline data synchronization"
//     ],
//     solutions: [
//       "Used Firebase real-time listeners",
//       "Implemented react-beautiful-dnd with custom hooks",
//       "Added offline persistence with IndexedDB"
//     ],
//     date: "2023",
//     client: "StartUp Inc.",
//     role: "Full-stack Developer"
//   },
//   {
//     id: 4,
//     title: "Social Media Dashboard",
//     category: "frontend",
//     description: "Analytics dashboard for social media metrics with data visualization.",
//     longDescription: "A comprehensive dashboard that aggregates social media metrics from multiple platforms. Features include real-time data, customizable widgets, and detailed analytics reports. Built with React, Chart.js, and Material-UI.",
//     image: "/images/projects/project4.jpg",
//     tech: ["React", "Chart.js", "Material-UI", "Redux", "Socket.io", "Jest"],
//     liveUrl: "https://dashboard-demo.com",
//     githubUrl: "https://github.com/username/social-dashboard",
//     features: [
//       "Multi-platform integration",
//       "Real-time metrics updates",
//       "Customizable dashboard widgets",
//       "Advanced data filtering",
//       "Export reports (PDF/CSV)",
//       "Team collaboration features",
//       "Automated scheduled reports",
//       "Performance benchmarks"
//     ],
//     challenges: [
//       "Handling large datasets efficiently",
//       "Real-time data synchronization",
//       "Creating responsive data visualizations"
//     ],
//     solutions: [
//       "Implemented data pagination and virtualization",
//       "Used WebSocket for real-time updates",
//       "Created custom Chart.js components with optimization"
//     ],
//     date: "2023",
//     client: "Marketing Agency",
//     role: "Frontend Lead"
//   },
//   {
//     id: 5,
//     title: "AI Image Generator",
//     category: "fullstack",
//     description: "AI-powered image generation app using OpenAI's DALL-E API.",
//     longDescription: "An innovative application that generates unique images from text descriptions using OpenAI's DALL-E API. Features include prompt history, image variations, and community gallery. Built with React, Node.js, and MongoDB.",
//     image: "/images/projects/project5.jpg",
//     tech: ["React", "Node.js", "OpenAI API", "MongoDB", "Cloudinary", "Express"],
//     liveUrl: "https://ai-image-generator.com",
//     githubUrl: "https://github.com/username/ai-image-generator",
//     features: [
//       "Text-to-image generation",
//       "Multiple image styles & sizes",
//       "Prompt history & favorites",
//       "Community gallery",
//       "Image download & sharing",
//       "User authentication",
//       "Credit system",
//       "API key management"
//     ],
//     challenges: [
//       "Managing API costs and rate limits",
//       "Storing and serving generated images efficiently",
//       "Implementing responsive image gallery"
//     ],
//     solutions: [
//       "Implemented user credits and caching system",
//       "Used Cloudinary for image optimization and CDN",
//       "Created virtualized gallery with lazy loading"
//     ],
//     date: "2024",
//     client: "AI Startup",
//     role: "Lead Developer"
//   },
//   {
//     id: 6,
//     title: "Portfolio Website",
//     category: "frontend",
//     description: "Modern portfolio website with animations and responsive design.",
//     longDescription: "A stunning portfolio website showcasing creative work with smooth animations and interactive elements. Features include custom cursor, dark mode, and project filtering. Built with React, Tailwind CSS, and Framer Motion.",
//     image: "/images/projects/project6.jpg",
//     tech: ["React", "Tailwind CSS", "Framer Motion", "React Router", "EmailJS"],
//     liveUrl: "https://portfolio-demo.com",
//     githubUrl: "https://github.com/username/portfolio",
//     features: [
//       "Custom cursor effects",
//       "Smooth page transitions",
//       "Dark/Light mode toggle",
//       "Project filtering & search",
//       "Contact form with EmailJS",
//       "Responsive design",
//       "SEO optimized",
//       "Performance optimized"
//     ],
//     challenges: [
//       "Creating smooth animations without performance issues",
//       "Implementing custom cursor that works on all devices",
//       "Optimizing for mobile devices"
//     ],
//     solutions: [
//       "Used Framer Motion with GPU acceleration",
//       "Implemented fallback for touch devices",
//       "Created mobile-first responsive design"
//     ],
//     date: "2024",
//     client: "Personal Project",
//     role: "Designer & Developer"
//   }
// ];

// // Helper function to get project by ID
// export const getProjectById = (id) => {
//   return projectsData.find(project => project.id === parseInt(id));
// };

// // Helper function to get projects by category
// export const getProjectsByCategory = (category) => {
//   if (category === 'all') return projectsData;
//   return projectsData.filter(project => project.category === category);
// };

// // Helper function to get unique categories
// export const getCategories = () => {
//   const categories = ['all', ...new Set(projectsData.map(project => project.category))];
//   return categories;
// };

// // Helper function to get featured projects (first 3)
// export const getFeaturedProjects = () => {
//   return projectsData.slice(0, 3);
// };

// // Helper function to search projects
// export const searchProjects = (query) => {
//   const searchTerm = query.toLowerCase();
//   return projectsData.filter(project => 
//     project.title.toLowerCase().includes(searchTerm) ||
//     project.description.toLowerCase().includes(searchTerm) ||
//     project.tech.some(tech => tech.toLowerCase().includes(searchTerm))
//   );
// };

// export default projectsData;