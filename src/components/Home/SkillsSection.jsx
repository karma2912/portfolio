import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiSocketdotio } from 'react-icons/si';
import { SiGreensock } from 'react-icons/si';
import { IoLogoWebComponent } from 'react-icons/io5';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const skills = [
    {
      name: 'React',
      icon: FaReact,
      description: 'Building interactive user interfaces with reusable components and hooks.',
      projects: [
        { name: 'E-commerce Dashboard', link: '#' },
        { name: 'Portfolio Website', link: '#' }
      ],
      specialFeatures: ['Hooks', 'Context API', 'React Router'],
      color: "blue-400"
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      description: 'Creating scalable server-side applications with JavaScript runtime.',
      projects: [
        { name: 'REST API Service', link: '#' },
        { name: 'Real-time Chat App', link: '#' }
      ],
      specialFeatures: ['Event Loop', 'Streams', 'Cluster Module'],
      color:"green-400"
    },
    {
      name: 'MongoDB',
      icon: FaDatabase,
      description: 'Working with NoSQL database for flexible, scalable data storage.',
      projects: [
        { name: 'User Management System', link: '#' },
        { name: 'Analytics Dashboard', link: '#' }
      ],
      specialFeatures: ['Aggregation', 'Indexing', 'Transactions'],
      color:"green-500"
    },
    {
        name: 'GSAP',
        icon: SiGreensock, 
        description: 'Crafting high-performance animations with precise control using timelines and tweens.',
        projects: [
          { name: 'Animated Portfolio Loader', link: '#' },
          { name: 'Hero Section Animations', link: '#' }
        ],
        specialFeatures: ['Timelines', 'ScrollTrigger', 'Ease Functions'],
        color:"violet-500"
      },      
    {
      name: 'WebRTC',
      icon: IoLogoWebComponent,
      description: 'Implementing real-time peer-to-peer communication in the browser.',
      projects: [
        { name: 'Video Chat App', link: '#' },
        { name: 'Screen Sharing Tool', link: '#' }
      ],
      specialFeatures: ['Peer Connections', 'Media Streams', 'Data Channels'],
      color:"red-500"
    },
    {
      name: 'Socket.io',
      icon: SiSocketdotio,
      description: 'Enabling real-time, bidirectional event-based communication.',
      projects: [
        { name: 'Live Collaboration Tool', link: '#' },
        { name: 'Multiplayer Game', link: '#' }
      ],
      specialFeatures: ['Rooms', 'Namespaces', 'Broadcasting'],
      color:"white"
    }
  ];

  return (
    <div className="w-full mx-auto px-4 py-12 bg-white">
       <span className='md:text-[5vw] text-[10vw] yashs text-black flex items-baseline'>My Development Skill<p className='text-2xl ml-2'>s</p></span>
      
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;