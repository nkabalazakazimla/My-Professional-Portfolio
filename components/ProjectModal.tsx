import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Database, Code, Wrench, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-textDark/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-stone-100 rounded-full text-stone-500 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="h-64 sm:h-80 w-full relative">
           <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">{project.name}</h2>
              <div className="flex gap-2 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Code size={14}/> {project.languages[0]}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Globe size={14}/> Web App</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-dustyRose mb-2 uppercase tracking-wide text-xs">Overview</h3>
                <p className="text-textBody leading-relaxed text-lg">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-dustyRose mb-3 uppercase tracking-wide text-xs">Tech Stack</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px] text-dustyRose"><Code size={20} /></div>
                        <div>
                            <span className="font-semibold text-textDark block mb-1">Languages</span>
                            <div className="flex flex-wrap gap-2">
                                {project.languages.map(lang => (
                                    <span key={lang} className="px-3 py-1 bg-linen text-textBody rounded-full text-sm border border-paleBlush">{lang}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px] text-dustyRose"><Wrench size={20} /></div>
                        <div>
                            <span className="font-semibold text-textDark block mb-1">Tools & Frameworks</span>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map(tool => (
                                    <span key={tool} className="px-3 py-1 bg-linen text-textBody rounded-full text-sm border border-paleBlush">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 space-y-4">
              <h3 className="text-lg font-bold text-dustyRose mb-2 uppercase tracking-wide text-xs">Actions</h3>
              <a 
                href={`https://${project.deploymentLink.replace('https://', '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-dustyRose hover:bg-[#b08d8a] text-white py-3 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white border-2 border-paleBlush hover:border-dustyRose hover:text-dustyRose text-textBody py-3 px-4 rounded-xl font-semibold transition-all"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;