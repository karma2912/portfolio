import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-black border border-black rounded-lg p-6 shadow-white shadow-md hover:shadow-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-gray-700 mr-4">
          <skill.icon className="h-8 w-8 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
      </div>
      
      <p className="text-gray-300 opacity-50 text-lg mb-4">{skill.description}</p>
      
      <div className="mt-4">
        <h4 className="text-xl font-semibold text-white mb-2">Projects using {skill.name}:</h4>
        <ul className="space-y-2">
          {skill.projects.map((project, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 text-lg"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {skill.specialFeatures && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-white mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {skill.specialFeatures.map((feature, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-700 text-purple-400  rounded-full text-lg"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;