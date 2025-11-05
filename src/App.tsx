import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-100 to-teal-50 overflow-x-hidden font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 shadow-lg z-50 backdrop-blur-sm bg-opacity-95">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md"
          >
            🌍 EcoSphere
          </motion.div>
          <ul
            className={`md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto 
            bg-emerald-700 md:bg-transparent shadow-lg md:shadow-none py-6 md:py-0 px-6 md:px-0 
            transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'block' : 'hidden md:flex'
            }`}
          >
            {[
              ['#home', '🏠 Home'],
              ['#features', '✨ Features'],
              ['#sdg', '🎯 SDG Goals'],
              ['#portal', '🌎 Communities'],
            ].map(([href, text]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-2 md:py-0 text-teal-100 text-lg font-medium hover:text-white transition-colors"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="md:hidden text-teal-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=60')] bg-cover bg-center bg-fixed relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 to-emerald-800/80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg"
          >
            EcoSphere — Nature’s Digital Home 🌿
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Unite plant enthusiasts and animal lovers to grow, protect, and thrive together in one digital ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-white via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12 tracking-tight"
          >
            EcoSphere Features 🌿🐾
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              ['🌱', 'Plant & Pet Trackers', 'Monitor health, growth, and wellness seamlessly.'],
              ['🗨️', 'Community Hub', 'Share experiences and inspire sustainable living.'],
              ['📚', 'Guides & Resources', 'Learn through expert articles and tutorials.'],
              ['🛒', 'Eco Marketplace', 'Buy, sell, and trade eco-friendly items.'],
              ['🐕', 'Adoption & Rescue', 'Adopt pets and help reunite lost companions.'],
              ['📅', 'Events Calendar', 'Join workshops and eco-driven meetups.'],
              ['💸', 'Donations', 'Support local green and rescue initiatives.'],
              ['🧩', 'DIY Projects', 'Craft sustainable solutions at home.'],
            ].map(([emoji, title, desc]) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-emerald-200 transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="text-4xl sm:text-5xl mb-4">{emoji}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section id="sdg" className="py-20 bg-gradient-to-r from-emerald-100 via-teal-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight"
          >
            Aligned with UN Sustainable Development Goals 🎯
          </motion.h2>

          <p className="text-center text-base sm:text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Every EcoSphere initiative supports a greener, healthier, and more compassionate planet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              ['🏙️', 'Sustainable Cities', 'Encouraging eco-conscious urban life.'],
              ['🌡️', 'Climate Action', 'Empowering communities to fight climate change.'],
              ['🌿', 'Life on Land', 'Protecting biodiversity and green habitats.'],
              ['🍎', 'Zero Hunger', 'Promoting urban farming and self-sustenance.'],
              ['❤️', 'Good Health', 'Improving wellness through nature.'],
              ['🎓', 'Education', 'Spreading sustainability awareness.'],
              ['♻️', 'Responsible Consumption', 'Encouraging eco-friendly choices.'],
              ['🤝', 'Partnerships', 'Collaborating for positive change.'],
            ].map(([emoji, title, desc]) => (
              <motion.div
                key={title}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-emerald-200 text-center hover:shadow-xl transition-all"
              >
                <div className="text-4xl sm:text-5xl mb-4">{emoji}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Section */}
      <section id="portal" className="py-20 bg-gradient-to-b from-teal-50 via-emerald-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 tracking-tight"
          >
            Explore Our Communities 🌎 
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              ['🌿', 'UrbanRoots', 'Your space for urban gardening and plant care.', 'https://urbanroots.wuaze.com', 'from-emerald-600 to-teal-600'],
              ['🐾', 'Pawtopias', 'Join animal lovers for adoption, rescue, and care.', 'https://pawtopia.wuaze.com', 'from-teal-600 to-emerald-600'],
            ].map(([emoji, title, desc, link, gradient]) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl border border-emerald-200 transition-all"
              >
                <div className="text-5xl sm:text-6xl mb-4">{emoji}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">{desc}</p>
                <a
                  href={link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block bg-gradient-to-r ${gradient} text-white px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90`}
                >
                  Visit {title}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-center text-teal-100 shadow-inner">
        <p className="text-base sm:text-lg">
          Made with ❤️ by{' '}
          <a
            href="https://www.linkedin.com/in/jexan-joel-139993293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-white font-medium hover:underline"
          >
            Jexan Joel
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
