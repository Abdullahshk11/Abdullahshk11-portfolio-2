"use client"

import React from 'react';
// Types for Tech Stack items
interface TechStackItem {
  id: string;
  name: string;
}

// Types for Navigation CTA links
interface ActionButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

// Developer profile object contract
interface DeveloperConfig {
  name: string;
  role: string;
  skills: string[];
  passionateAbout: string;
  hardWorker: boolean;
  buildApp: () => string;
}

const TECH_STACK: TechStackItem[] = [
  { id: '1', name: 'React / Next.js' },
  { id: '2', name: 'Node.js' },
  { id: '3', name: 'Express' },
  { id: '4', name: 'MongoDB' },
  { id: '5', name: 'Tailwind CSS' },
];

const ACTION_BUTTONS: ActionButton[] = [
  { label: 'View Projects', href: '#projects', variant: 'primary' },
  { label: 'Get in Touch', href: '#contact', variant: 'secondary' },
];

const DEVELOPER_DATA: DeveloperConfig = {
  name: 'Full Stack Developer',
  role: 'MERN / Full Stack Engineer',
  skills: ['React', 'Node.js', 'Express', 'MongoDB'],
  passionateAbout: 'Clean Code & Performance',
  hardWorker: true,
  buildApp: () => 'Frontend UI + Backend API + Database',
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#092328] text-slate-100 flex items-center justify-center overflow-hidden px-6 py-20">
      
      {/* Background Glow Effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline and Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium w-fit backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Available for Freelance & Full-Time Roles
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Building scalable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              full-stack web apps
            </span>{' '}
            that perform.
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            I’m a Full-Stack Engineer specializing in building responsive frontend interfaces, high-performance backends, and robust database architectures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {ACTION_BUTTONS.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={
                  btn.variant === 'primary'
                    ? 'px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-[#092328] font-semibold text-sm hover:shadow-lg hover:shadow-teal-500/25 hover:scale-[1.02] transition-all duration-200'
                    : 'px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-slate-700/60 font-semibold text-sm backdrop-blur-md hover:scale-[1.02] transition-all duration-200'
                }
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mr-2">
              Tech Stack:
            </span>
            {TECH_STACK.map((tech) => (
              <span
                key={tech.id}
                className="px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 cursor-pointer"
              >
                {tech.name}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive TypeScript Window Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden group">
            
            {/* Header / Window Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-400 font-mono">developer.config.ts</span>
            </div>

            {/* Code Content */}
            <div className="pt-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2 overflow-x-auto">
              <p>
                <span className="text-purple-400">interface</span>{' '}
                <span className="text-yellow-300">Developer</span> {'{'}
              </p>
              <p className="pl-4">
                <span className="text-teal-400">skills</span>: <span className="text-purple-400">string</span>[];
              </p>
              <p className="pl-4">
                <span className="text-teal-400">hardWorker</span>: <span className="text-purple-400">boolean</span>;
              </p>
              <p>{'}'}</p>
              <p className="pt-2">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-300">developer</span>: <span className="text-yellow-300">Developer</span> = {'{'}
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">skills</span>: [
                {DEVELOPER_DATA.skills.map((skill, i) => (
                  <span key={i} className="text-amber-200">
                    '{skill}'{i < DEVELOPER_DATA.skills.length - 1 ? ', ' : ''}
                  </span>
                ))}
                ],
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">hardWorker</span>:{' '}
                <span className="text-teal-400">{String(DEVELOPER_DATA.hardWorker)}</span>,
              </p>
              <p>{'};'}</p>
            </div>

            {/* Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;