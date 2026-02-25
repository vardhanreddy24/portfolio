/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Terminal, 
  Shield, 
  Network, 
  Lock, 
  Cpu, 
  ExternalLink,
  Award,
  Code2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const skills = {
    languages: ["Python (Scapy, Cryptography)", "Bash Scripting", "SQL", "Regex"],
    frameworks: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "Metasploit", "UFW Firewall", "Flask"],
    tools: ["Linux (Ubuntu/Kali)", "GitHub", "VirtualBox/VMware", "Jupyter Notebook", "VS Code"],
    soft: ["Decision-making", "Teamwork", "Adaptability"]
  };

  const projects = [
    {
      title: "File Encryption & Decryption Tool",
      tech: "Python, Cryptography (Fernet AES)",
      period: "July 2024 - Sep 2024",
      description: "Built a secure file encryption–decryption utility to safeguard sensitive data through strong symmetric encryption. Enabled CLI-based key generation and decryption workflows supporting any file type.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Secure Login System",
      tech: "Python, Flask, SQLite",
      period: "Jan 2024 - July 2024",
      description: "Developed a secure user authentication system with hashed password storage, session management, and database-backed registration. Designed modular structure with protected routes and SQL injection safeguards.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Firewall Automation Script",
      tech: "Python, Linux UFW",
      period: "Jan 2025 - Feb 2025",
      description: "Simplified security management on Linux servers through automated UFW rule handling. Features include enabling/disabling firewall, port management, and active rule monitoring via interactive CLI.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Network Packet Sniffer",
      tech: "Python, Scapy",
      period: "May 2025 - July 2025",
      description: "Real-time network packet sniffer capturing and summarizing live traffic. Displays protocol info, source/destination IPs, and suspicious patterns for basic network monitoring.",
      icon: <Network className="w-5 h-5" />
    }
  ];

  const education = [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science & Engineering",
      location: "Phagwara, Punjab",
      period: "Aug 2023 - Present",
      stats: "CGPA: 6.0"
    },
    {
      school: "Sri Chaithanya Junior Collage",
      degree: "Intermediate",
      location: "Tirupati, Andhra Pradesh",
      period: "June 2021 - Mar 2023",
      stats: "Percentage: 70"
    },
    {
      school: "Ushodaya High School",
      degree: "Matriculation",
      location: "Proddatur, Andhra Pradesh",
      period: "May 2020 - Apr 2021",
      stats: "Percentage: 100"
    }
  ];

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden">
      <div className="scanline" />
      
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Terminal className="text-black w-5 h-5" />
            </div>
            <span className="font-mono font-bold text-zinc-100 tracking-tighter">GURU_VARDHAN_REDDY</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
            <a href="#about" className="hover:text-emerald-400 transition-colors">01. About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">02. Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">03. Projects</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">04. Education</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="mailto:bollaguruvardhanreddy@gmail.com" className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/vardhanreddy24" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Status: Operational
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-[0.9]">
              Securing the <span className="text-emerald-500 terminal-glow italic">Digital</span> Frontier.
            </h1>
            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
              Cybersecurity enthusiast and developer focused on building secure systems, network analysis tools, and automated security workflows. Currently pursuing B.Tech at LPU.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://linkedin.com/in/vardhanreddy22/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-100 text-black font-semibold rounded-lg hover:bg-emerald-500 transition-all flex items-center gap-2 group"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 rounded-lg transition-all flex items-center gap-2"
              >
                View Repository
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-auto md:h-[500px] bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-48 h-48 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-700" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Active Session</span>
                <span className="text-[10px] font-mono text-emerald-500">ENCRYPTED</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-emerald-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono">
                <div>IP: 192.168.1.24</div>
                <div className="text-right">PORT: 443</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/5 pb-6">
            <div className="space-y-2">
              <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Capabilities</span>
              <h2 className="text-3xl font-bold text-zinc-100">Technical Arsenal</h2>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Updated: Feb 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-zinc-900/30 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors group"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                      <span className="text-emerald-500/50">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="space-y-2">
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Operations</span>
            <h2 className="text-3xl font-bold text-zinc-100">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-zinc-900/30 rounded-2xl border border-white/5 hover:bg-zinc-900/50 transition-all"
              >
                <div className="absolute top-8 right-8 p-2 bg-emerald-500/10 rounded-lg text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity">
                  {project.icon}
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.period}</span>
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.split(', ').map(t => (
                      <span key={t} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-zinc-500">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href="https://github.com/vardhanreddy24" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-emerald-500 hover:text-emerald-400 transition-colors">
                      VIEW_SOURCE_CODE <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certificates */}
        <div className="grid lg:grid-cols-3 gap-12">
          <section id="education" className="lg:col-span-2 space-y-12">
            <div className="space-y-2">
              <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Timeline</span>
              <h2 className="text-3xl font-bold text-zinc-100">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div 
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/5"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-zinc-100">{edu.school}</h3>
                      <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">{edu.period}</span>
                    </div>
                    <p className="text-emerald-500/80 text-sm font-medium">{edu.degree}</p>
                    <div className="flex justify-between text-xs text-zinc-500 font-mono pt-2">
                      <span>{edu.location}</span>
                      <span className="text-zinc-300">{edu.stats}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <div className="space-y-2">
              <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Validation</span>
              <h2 className="text-3xl font-bold text-zinc-100">Certificates</h2>
            </div>
            <div className="space-y-4">
              {[
                "Master Generative AI Tools",
                "Build GenAI Apps (No-Code)",
                "ChatGPT Made Easy"
              ].map((cert, idx) => (
                <motion.div 
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-zinc-900/30 rounded-lg border border-white/5 flex items-center gap-4 group hover:border-emerald-500/30 transition-colors"
                >
                  <div className="p-2 bg-emerald-500/10 rounded text-emerald-500">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">{cert}</p>
                    <p className="text-[10px] font-mono text-zinc-500">UDEMY • AUG 2025</p>
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Achievements</span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <Code2 className="w-4 h-4 text-emerald-500" />
                      HackerRank: 3-Star (SQL, Python)
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <Award className="w-4 h-4 text-emerald-500" />
                      InnovateX Hackathon Participant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                <Terminal className="text-black w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-zinc-100 tracking-tighter">GVR.SYS</span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">© 2026 Guru Vardhan Reddy. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              bollaguruvardhanreddy@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              +91-6300011744
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/vardhanreddy24" className="text-zinc-500 hover:text-emerald-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/vardhanreddy22/" className="text-zinc-500 hover:text-emerald-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
