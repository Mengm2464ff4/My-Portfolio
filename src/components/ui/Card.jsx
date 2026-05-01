import { motion } from 'framer-motion';

const Card = ({ 
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  const variants = {
    default: 'bg-white/5 backdrop-blur-sm',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm',
    dark: 'bg-gray-900/50 backdrop-blur-sm',
  };

  const hoverClasses = hover ? 'hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      className={`rounded-xl overflow-hidden ${variants[variant]} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Card subcomponents
const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 pb-0 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold mb-2 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-400 text-sm ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardImage = ({ src, alt, className = '' }) => (
  <div className="relative h-48 overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-full object-cover transition-transform duration-300 hover:scale-110 ${className}`}
    />
  </div>
);

// Attach subcomponents to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;