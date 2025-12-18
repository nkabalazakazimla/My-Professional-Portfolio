import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Info } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isHovered && project.images && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images!.length);
      }, 1500); // Change image every 1.5 seconds
    } else {
      setCurrentImageIndex(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, project.images]);

  const displayImage = project.images && project.images.length > 0 
    ? project.images[currentImageIndex] 
    : project.imageUrl;

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-paleBlush flex flex-col h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative bg-linen">
        <img 
          src={displayImage} 
          alt={project.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transition-opacity"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-textDark font-sans">{project.name}</h3>
        </div>
        
        <p className="text-textBody mb-6 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.languages.concat(project.tools).slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-linen text-textBody text-xs rounded-md font-medium border border-paleBlush">
                {tech}
              </span>
            ))}
            {(project.languages.length + project.tools.length) > 4 && (
              <span className="px-2 py-1 bg-linen text-stone-500 text-xs rounded-md font-medium border border-paleBlush">
                +{(project.languages.length + project.tools.length) - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-linen">
            <a 
              href={`https://${project.deploymentLink.replace('https://', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-dustyRose hover:bg-[#b08d8a] text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <button 
              onClick={() => onOpenModal(project)}
              className="p-2 text-stone-400 hover:text-dustyRose transition-colors rounded-lg hover:bg-linen"
              aria-label="View Details"
            >
              <Info size={20} />
            </button>
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-textDark transition-colors rounded-lg hover:bg-linen"
                aria-label="View Code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;