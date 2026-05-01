/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Mail, 
  MessageSquare, 
  MessageCircle,
  ExternalLink, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Briefcase, 
  Award, 
  Zap,
  CheckCircle2,
  DollarSign,
  Smartphone
} from 'lucide-react';

const AdsterraSlot = ({ id, label }: { id: string, label: string }) => {
  const adContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the script is already loaded for this container to avoid duplicates
    if (adContainerRef.current && adContainerRef.current.innerHTML === '') {
      const atOptionsScript = document.createElement('script');
      atOptionsScript.type = 'text/javascript';
      atOptionsScript.innerHTML = `
        atOptions = {
          'key' : '10baec4cdaf3dc60155e9ec22f008e76',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;
      
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = "https://bowlsharp.com/10baec4cdaf3dc60155e9ec22f008e76/invoke.js";

      adContainerRef.current.appendChild(atOptionsScript);
      adContainerRef.current.appendChild(invokeScript);
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4 border border-dashed border-white/10 rounded-xl bg-white/5 flex flex-col items-center justify-center min-h-[120px] overflow-hidden">
      <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">{label}</span>
      <div id={id} ref={adContainerRef} className="flex justify-center w-full min-h-[50px]">
        {/* Adsterra script will inject here */}
      </div>
    </div>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/2348108875736"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <MessageCircle size={28} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-sm whitespace-nowrap">
      WhatsApp Me
    </span>
  </motion.a>
);

const colors = {
  bg: '#0a0a0a',
  surface: '#121212',
  accent: '#3b82f6', // Digital Blue
  ink: '#ffffff',
  muted: '#888888',
  border: '#2a2a2a'
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white font-bold text-xl tracking-tighter"
        >
          CHIBUENYIM<span className="text-blue-500">.</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {['Skills', 'Experience', 'Services', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#hire"
            className="bg-white text-black px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-blue-400 mb-6 tracking-widest uppercase">
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mb-8 px-2">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              CUSTOM
            </span> <br />
            WEBSITES.
          </h1>
          <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed font-light px-2">
            I am Chibuenyim, a expert website developer specializing in high-performance
            solutions built with HTML, CSS, JS, PHP, and MySQL. I transform complex ideas into 
            seamless digital realities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#services"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl flex items-center gap-2 group"
              whileHover={{ x: 5 }}
            >
              Explore Services
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.div className="flex items-center gap-6 ml-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="text-blue-400" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "JSON", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Layers className="text-indigo-400" />,
      skills: ["PHP", "MySQL", "Database Design", "Server Logic", "JSON APIs"]
    },
    {
      title: "Platforms",
      icon: <Cpu className="text-purple-400" />,
      skills: ["Brokerage Sites", "Consignment Systems", "E-commerce", "Portfolio Sites", "Blogs"]
    },
    {
      title: "Performance",
      icon: <Zap className="text-orange-400" />,
      skills: ["Page Speed Opt.", "Security Hardening", "SEO Best Practices", "Cross-Browser Fixes"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal.</h2>
            <p className="text-gray-500 max-w-md">My toolset is focused on reliability, performance, and modern user experience.</p>
          </div>
          <div className="text-8xl font-bold text-white/5 select-none hidden lg:block">SKILLS</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Stellar Web Labs",
      role: "Senior Web Developer",
      period: "2023 - Present",
      desc: "Leading the frontend team to build high-performance e-commerce platforms using Next.js and Headless CMS."
    },
    {
      company: "Innovate AI",
      role: "Full Stack Engineer",
      period: "2021 - 2023",
      desc: "Developed AI-powered dashboards and data visualization tools for enterprise clients."
    },
    {
      company: "Freelance",
      role: "Self-Employed",
      period: "2019 - 2021",
      desc: "Built custom web solutions for 50+ startups, focusing on landing pages and MVP development."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4">
          <Briefcase className="text-blue-500" /> Professional Journey
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="mb-2 flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-mono text-gray-500 px-2 py-1 bg-white/5 rounded-md">{exp.period}</span>
              </div>
              <div className="text-blue-400 text-sm mb-4">{exp.company}</div>
              <p className="text-gray-400 leading-relaxed text-sm">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const plans = [
    {
      title: "One-Page Website",
      price: "Custom Quote",
      features: [
        "HTML/CSS/JS Base",
        "Mobile Responsive",
        "Clean Modern Design",
        "WhatsApp Integration",
        "Fast Load Times"
      ],
      popular: false
    },
    {
      title: "Full Dynamic Site",
      price: "$800+",
      features: [
        "PHP & MySQL Management",
        "Admin Dashboard",
        "User Registration",
        "Database Integration",
        "Security Hardening"
      ],
      popular: true
    },
    {
      title: "Advanced Systems",
      price: "Inquire",
      features: [
        "Brokerage/Investment Sites",
        "Consignment Platforms",
        "E-commerce Multi-Vendor",
        "Custom JSON APIs",
        "Maintenance Support"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Something Great.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transparent pricing for top-tier development. Choose a package that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl border ${
                plan.popular ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-white/5'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="mb-6 self-start bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.title === "Consulting" && <span className="text-gray-500 text-sm">/hr</span>}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="text-sm text-gray-400 flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                id={`btn-plan-${idx}`}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white text-black hover:bg-gray-200'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/5 rounded-2xl text-blue-400">
              <DollarSign size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">Custom Requirements?</h4>
              <p className="text-gray-500 text-sm">Need a specialized solution? I offer custom quotes tailored to your unique scope.</p>
            </div>
          </div>
          <button className="text-white border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition-all font-medium">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            READY TO <br />
            <span className="text-blue-500">INITIATE?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Whether you have a vision or just an idea, I'm here to help turn it into digital reality. 
            Drop me a line or find me on social media.
          </p>
          
            <div className="space-y-6">
            <div className="flex items-center gap-4 text-white group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500 transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-sm md:text-xl break-all">hello@chibuenyim.dev</span>
            </div>
            <a 
              href="https://wa.me/2348108875736" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white group cursor-pointer"
            >
              <div className="p-3 rounded-full bg-[#25D366]/20 group-hover:bg-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </div>
              <span className="text-sm md:text-xl">Contact on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="flex-1 bg-white/5 p-10 rounded-3xl border border-white/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Name</label>
                <input type="text" className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email</label>
                <input type="email" className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Message</label>
              <textarea rows={4} className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white/30 text-xs font-mono tracking-widest">
          © 2026 CHIBUENYIM. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex gap-8 items-center">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Terms</a>
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <AdsterraSlot id="top-banner" label="Top Banner" />
      <Skills />
      <AdsterraSlot id="mid-banner" label="Mid Content Ad" />
      <Experience />
      <Services />
      <Contact />
      <AdsterraSlot id="footer-banner" label="Footer Banner" />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
