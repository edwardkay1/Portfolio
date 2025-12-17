import React from 'react';
import type { Project } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react'; 

interface ProjectCardProps {
  project: Project;
  isDesign?: boolean; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDesign = false }) => {
  const buttonBaseClasses = "flex items-center space-x-2 text-sm font-medium transition-colors duration-300";
  const demoButtonClasses = `px-4 py-2 bg-teal-500 text-black hover:bg-teal-400 rounded-md ${buttonBaseClasses}`;
  const githubButtonClasses = `px-4 py-2 text-gray-400 hover:text-white rounded-md ${buttonBaseClasses}`;

  if (isDesign) {
    return (
      /* Changed w-96 to max-w-sm and w-full to ensure it fits mobile screens */
      <div className="flex flex-col w-full max-w-sm p-4 mx-auto">
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 transition-transform duration-500 hover:scale-[1.03] group">
          <img 
            src={project.imagePath} 
            alt={project.title} 
            /* h-48 or similar fixed height prevents layout shift while maintaining aspect ratio */
            className="object-cover w-full h-48 transition-opacity duration-500 opacity-80 group-hover:opacity-100"
          />
        </div>
        <p className="mb-1 text-xs tracking-widest text-gray-400 uppercase">{project.client}</p>
        <h4 className="mb-2 text-xl font-semibold text-white">{project.title}</h4>
        <p className="mb-4 text-sm text-gray-500">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mt-2">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={demoButtonClasses}>
                <ExternalLink className="w-4 h-4" />
                <span>View Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={githubButtonClasses}>
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 transition-colors duration-500 border-b border-gray-800 group hover:border-teal-500">
      {/* Changed to flex-col-reverse for mobile so text comes before/after image, then md:flex-row */}
      <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row">
        <div className="flex-1 w-full">
          <p className="mb-1 text-sm tracking-widest text-gray-400 uppercase">{project.client}</p>
          <h4 className="mb-2 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-teal-400">
            {project.title}
          </h4>
          <p className="max-w-lg text-base text-gray-500">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={demoButtonClasses}>
                <ExternalLink className="w-4 h-4" />
                <span>View Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={githubButtonClasses}>
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Responsive Image Container: Full width on mobile, w-56 on desktop */}
        <div className="w-full md:w-56 h-48 md:h-32 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
          <img 
             src={project.imagePath} 
             alt={project.title} 
             className="object-cover w-full h-full transition-opacity duration-500 opacity-80 group-hover:opacity-100" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;