import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Linkedin, Github, ChevronDown, GraduationCap, Briefcase, Copy, Check, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, SOCIALS } from './constants';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Filter state
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  // Typewriter state
  const [typedName, setTypedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Email copy state
  const [isCopied, setIsCopied] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Filter Projects Logic
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  // Typewriter Effect
  useEffect(() => {
    const text = PERSONAL_INFO.name;
    let i = 0;
    const speed = 100; // Typing speed in ms

    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setTypedName(text.slice(0, i));
        i++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, []);

  // Scroll Handling (Reveal, Active Section, Back To Top)
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility - Show after 500px scroll
      setShowBackToTop(window.scrollY > 500);

      // Active Section Detection
      const sections = ['about', 'projects', 'skills', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial Reveal Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [selectedProject, filter]); // Re-run if filter changes to catch new elements

  return (
    <div className="min-h-screen bg-cream text-textBody selection:bg-dustyRose selection:text-white relative font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-md z-30 border-b border-paleBlush/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold tracking-tight text-textDark cursor-pointer"
            onClick={scrollToTop}
          >
            Kazimla<span className="text-dustyRose">.</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-textBody">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`
                  transition-all duration-300 uppercase tracking-wider relative
                  ${activeSection === item.toLowerCase() ? 'text-dustyRose font-semibold' : 'hover:text-dustyRose'}
                `}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-dustyRose rounded-full animate-fade-in"></span>
                )}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-textDark hover:text-dustyRose transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-paleBlush absolute w-full shadow-lg animate-in slide-in-from-top-5">
            <div className="flex flex-col p-6 space-y-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`
                    text-left py-2 font-medium transition-colors
                    ${activeSection === item.toLowerCase() ? 'text-dustyRose' : 'text-textBody hover:text-dustyRose'}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-textDark tracking-tight leading-tight min-h-[1.2em]">
            Hi, I'm <span className="text-dustyRose">{typedName}</span><span className="cursor"></span>
          </h1>
          <p className="text-xl md:text-2xl text-textBody mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {PERSONAL_INFO.title} specializing in AI-driven web applications and user-centric problem solving.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-textDark text-white rounded-full font-semibold hover:bg-dustyRose transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Projects
            </button>
            <a 
              href={PERSONAL_INFO.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-textDark border border-paleBlush hover:border-dustyRose rounded-full font-semibold hover:bg-paleBlush transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="text-dustyRose group-hover:text-textDark transition-colors" />
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-20 text-dustyRose animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16 max-w-6xl mx-auto">
             <div className="w-full md:w-1/3 relative reveal sticky top-24">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-linen relative z-10 shadow-lg border-4 border-white">
                   <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={`${PERSONAL_INFO.name} Profile`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800"; // Fallback placeholder
                    }}
                   />
                </div>
                {/* Decorative element - Using Dusty Rose */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dustyRose rounded-2xl -z-0"></div>
             </div>
             
             <div className="w-full md:w-2/3 reveal" style={{ transitionDelay: '200ms' }}>
               <h2 className="text-3xl font-bold mb-6 text-textDark flex items-center gap-3">
                 <span className="w-12 h-[2px] bg-dustyRose"></span>
                 About Me
               </h2>
               <p className="text-lg text-textBody leading-relaxed mb-8">
                 {PERSONAL_INFO.about}
               </p>
               
               <div className="grid md:grid-cols-2 gap-6">
                 {/* Experience Column */}
                 <div className="p-6 bg-linen rounded-xl border-l-2 border-dustyRose h-full hover:shadow-md transition-shadow">
                   <h3 className="font-bold text-textDark mb-4 flex items-center gap-2 text-lg">
                     <Briefcase className="text-dustyRose" size={24} strokeWidth={1.5} />
                     Experience
                   </h3>
                   <div className="space-y-6">
                      {PERSONAL_INFO.experience.map((exp, index) => (
                        <div key={index} className="flex gap-4">
                           <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-dustyRose animate-pulse' : 'bg-stone-300'}`}></div>
                              {index !== PERSONAL_INFO.experience.length - 1 && <div className="w-[1px] h-full bg-stone-300 my-1"></div>}
                           </div>
                           <div className="pb-2">
                             <h4 className="font-bold text-textDark leading-tight">{exp.role}</h4>
                             <p className="text-textBody text-sm mt-1">{exp.company}</p>
                             <span className="inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold text-stone-500 bg-white px-2 py-1 rounded-full border border-stone-200">
                               {exp.year}
                             </span>
                           </div>
                        </div>
                      ))}
                   </div>
                 </div>

                 {/* Education Column */}
                 <div className="p-6 bg-linen rounded-xl border-l-2 border-dustyRose h-full hover:shadow-md transition-shadow">
                   <h3 className="font-bold text-textDark mb-4 flex items-center gap-2 text-lg">
                     <GraduationCap className="text-dustyRose" size={24} strokeWidth={1.5} />
                     Education
                   </h3>
                   <div className="space-y-6">
                      {PERSONAL_INFO.education.map((edu, index) => (
                        <div key={index} className="flex gap-4">
                           <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-dustyRose' : 'bg-stone-300'}`}></div>
                              {index !== PERSONAL_INFO.education.length - 1 && <div className="w-[1px] h-full bg-stone-300 my-1"></div>}
                           </div>
                           <div className="pb-2">
                             <h4 className="font-bold text-textDark leading-tight">{edu.institution}</h4>
                             <p className="text-textBody text-sm mt-1">{edu.qualification}</p>
                             <span className="inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold text-stone-500 bg-white px-2 py-1 rounded-full border border-stone-200">
                               {edu.year}
                             </span>
                           </div>
                        </div>
                      ))}
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
           <h2 className="text-3xl font-bold mb-12 text-center reveal text-textDark">Technical Proficiency</h2>
           <div className="grid md:grid-cols-2 gap-8">
             {SKILLS.map((skillGroup, idx) => (
               <div 
                  key={idx} 
                  className="bg-white p-8 rounded-2xl shadow-sm border border-paleBlush reveal hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${idx * 200}ms` }}
               >
                 <h3 className="text-xl font-bold mb-6 text-dustyRose border-b border-linen pb-3">
                   {skillGroup.category}
                 </h3>
                 <div className="flex flex-wrap gap-3">
                   {skillGroup.items.map((skill, sIdx) => (
                     <span 
                        key={sIdx} 
                        className="px-4 py-2 bg-linen text-textBody rounded-lg text-sm font-medium hover:bg-paleBlush hover:text-textDark transition-colors cursor-default"
                     >
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textDark">Featured Projects</h2>
            <p className="text-textBody max-w-2xl mx-auto mb-8">
              A curated selection of AI models and web applications developed during the CAPACITI AI bootcamp.
            </p>
            
            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`
                    px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${filter === cat 
                      ? 'bg-dustyRose text-white shadow-md' 
                      : 'bg-linen text-textBody hover:bg-paleBlush hover:text-textDark'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 min-h-[400px]">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="reveal h-full animate-fade-in-up"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationFillMode: 'both' 
                }}
              >
                <ProjectCard 
                  project={project} 
                  onOpenModal={setSelectedProject}
                />
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-20 text-stone-400">
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-textDark text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-stone-300 mb-10 text-lg">
            Tech talks &gt; small talk.<br />
            Questions, feedback, or curiosity? Reach out anytime.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 backdrop-blur-sm shadow-xl max-w-xl mx-auto">
             <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-dustyRose to-[#b08d8a] text-white rounded-xl shadow-lg transform rotate-3">
                   <Mail size={24} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-2">
                   <p className="text-stone-400 text-xs font-medium tracking-widest uppercase">
                     Direct Email
                   </p>
                   <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight break-all selection:bg-dustyRose selection:text-white">
                     {PERSONAL_INFO.email}
                   </h3>
                </div>

                <p className="text-stone-400 text-xs max-w-sm mx-auto leading-relaxed">
                  Copy my email address below and reach out via your preferred mail client.
                </p>

                <div className="mt-2">
                   <button 
                     onClick={copyEmail}
                     className="group flex items-center justify-center gap-2 bg-dustyRose hover:bg-[#b08d8a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-dustyRose/20 min-w-[200px]"
                   >
                     {isCopied ? <Check size={16} /> : <Copy size={16} />}
                     <span>{isCopied ? 'Copied!' : 'Copy Email Address'}</span>
                   </button>
                </div>
             </div>
          </div>

          <div className="flex justify-center gap-8 border-t border-white/10 pt-12">
            {SOCIALS.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-dustyRose transition-colors flex flex-col items-center gap-2 group"
              >
                 <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                    {social.icon === 'linkedin' ? <Linkedin size={24} /> : <Github size={24} />}
                 </div>
                <span className="text-xs tracking-wider uppercase font-medium">{social.platform}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-stone-600 text-sm">
            © {new Date().getFullYear()} Kazimla Nkabalaza. All rights reserved.
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-6 z-30 p-3 bg-white text-dustyRose rounded-full shadow-lg border border-paleBlush
          transition-all duration-500 transform hover:bg-dustyRose hover:text-white hover:-translate-y-1
          ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Modals & Overlays */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;