import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Кейсы', path: '/cases' },
    { name: 'Чат', path: '/chat' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100 h-16">
      <div className="flex justify-between items-center h-full px-8 max-w-[1440px] mx-auto">
        <Link to="/" className="text-lg font-bold tracking-tighter text-zinc-900 uppercase">
          Чат Ботаник
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-px bg-zinc-900"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-all active:scale-95 duration-200">
          Начать проект
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
