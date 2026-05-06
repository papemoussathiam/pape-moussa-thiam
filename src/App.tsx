/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  Download, 
  Send, 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award,
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Git & GitHub", level: 80 },
    { name: "IA & Prompt Engineering", level: 85 },
    { name: "Responsive Design", level: 85 },
    { name: "Bases de données (SQL)", level: 60 },
  ];

  const languages = [
    { name: "Français", level: "Nativo", flag: "🇫🇷" },
    { name: "Inglés", level: "Medio", flag: "🇬🇧" },
    { name: "Español", level: "B2", flag: "🇪🇸" },
    { name: "Wolof", level: "Nativo", flag: "🇸🇳" },
    { name: "Serere", level: "Nativo", flag: "🇸🇳" },
    { name: "Árabe", level: "Básico", flag: "🇦🇪" },
  ];

  const projects = [
    {
      title: "Portafolio Personal",
      description: "Sitio web personal moderno para mostrar mis habilidades, proyectos y mi trayectoria.",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Landing Page IA",
      description: "Página de aterrizaje responsiva creada con ayuda de IA para un servicio digital.",
      tags: ["HTML", "CSS", "Tailwind"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Mini Blog",
      description: "Blog simple con sistema de artículos y diseño limpio.",
      tags: ["HTML", "CSS", "JS", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const interests = [
    "Desarrollo Web", "Inteligencia Artificial", "Aprendizaje continuo", 
    "Tecnología", "Deporte & Lectura", "Viajes & Descubrimiento"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-300 selection:bg-brand selection:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-2xl overflow-hidden min-h-screen bg-surface">
        
        {/* Sidebar */}
        <aside className="w-full md:w-80 lg:w-96 bg-black border-r border-white/5 p-8 flex flex-col gap-10">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square w-48 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                  alt="Pape Moussa Thiam"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 w-full">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                <User size={14} /> Contacto
              </h3>
              <div className="space-y-3">
                <ContactItem icon={<Mail size={16} />} text="papemoussathiam77@gmail.com" />
                <ContactItem icon={<Phone size={16} />} text="623 434 201" />
                <ContactItem icon={<MapPin size={16} />} text="Las Palmas de Gran Canaria, España" />
                <ContactItem icon={<Linkedin size={16} />} text="linkedin.com/in/papamoussa-thiam" />
                <ContactItem icon={<Github size={16} />} text="github.com/papamoussa-thiam" />
              </div>
            </div>
          </motion.div>

          {/* Competences */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              <Code2 size={14} /> Compétencias
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span>{skill.name}</span>
                    <span className="text-orange-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-orange-500/80"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              <Globe size={14} /> Idiomas
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              <Sparkles size={14} /> Centros de Interés
            </h3>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-wider">
              {interests.map((interest) => (
                <span key={interest} className="px-2 py-1 bg-white/5 border border-white/10 rounded uppercase">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-surface-lighter p-8 lg:p-14 overflow-y-auto">
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4 uppercase">
              PAPE MOUSSA <span className="text-orange-500">THIAM</span>
            </h1>
            <p className="text-xl lg:text-2xl font-bold text-orange-500 uppercase tracking-widest mb-8">
              Desarrollador Web Junior
            </p>
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
              Estudiante apasionado por el desarrollo web y la inteligencia artificial. 
              Creo sitios web modernos, rápidos y accesibles. 
              Motivado, curioso y siempre listo para aprender nuevas tecnologías y asumir nuevos retos.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-all font-bold text-sm uppercase group">
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Descargar CV
              </button>
              <button className="flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3 rounded-lg transition-all font-bold text-sm uppercase">
                <Mail size={18} />
                Contactarme
              </button>
            </div>
          </motion.header>

          <div className="space-y-20">
            {/* About Me */}
            <section className="space-y-6">
              <SectionHeader icon={<User size={20} />} title="Sobre Mí" />
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                Estoy en formación en desarrollo web con la ayuda de la inteligencia artificial. 
                Aprendo cada día a construir soluciones web útiles y modernas. 
                Mi objetivo es trabajar en un equipo técnico dinámico y contribuir a proyectos innovadores.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="space-y-8">
              <SectionHeader icon={<Code2 size={20} />} title="Habilidades Técnicas" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <TechStackItem name="Google" icon="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
                <TechStackItem name="ChatGPT" icon="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" isSVG />
                <TechStackItem name="HTML" icon="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" isSVG />
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-8">
              <SectionHeader icon={<Briefcase size={20} />} title="Proyectos" />
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <motion.div 
                    key={project.title}
                    whileHover={{ y: -5 }}
                    className="group relative bg-black/50 border border-white/5 rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <p className="text-sm text-slate-400 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase py-1 px-2 bg-orange-500/10 text-orange-500 rounded border border-orange-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-8">
              <SectionHeader icon={<GraduationCap size={20} />} title="Formación" />
              <div className="relative pl-8 border-l border-white/10 ml-2 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Formación en Desarrollo Web con IA</h4>
                    <p className="text-orange-500 font-bold uppercase text-sm">En curso - 2024</p>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                      Aprendizaje de tecnologías web modernas con inteligencia artificial para crear sitios web eficientes e innovadores.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="space-y-6">
              <SectionHeader icon={<Award size={20} />} title="Certificaciones" />
              <div className="space-y-3">
                <CertItem title="Introducción a la Inteligencia Artificial – OpenClassrooms" />
                <CertItem title="Responsive Web Design – freeCodeCamp" />
                <CertItem title="JavaScript Algorithms – freeCodeCamp" />
              </div>
            </section>

            {/* Footer CTA */}
            <section className="pt-20">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative overflow-hidden group rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-400/10 group-hover:from-orange-600/30 transition-all duration-500"></div>
                <div className="relative border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">¿LISTO PARA COLABORAR EN TU PRÓXIMO PROYECTO?</h3>
                    <p className="text-slate-400">Estoy disponible para oportunidades de prácticas o empleo.</p>
                  </div>
                  <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition-all font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20">
                    Contactarme
                  </button>
                </div>
              </motion.div>
              
              <footer className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-slate-500 font-medium uppercase tracking-[0.2em]">
                © 2024 Pape Moussa Thiam – Todos los derechos reservados.
              </footer>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group cursor-default">
      <div className="text-orange-500 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-sm font-medium break-all">{text}</span>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="p-3 bg-white/5 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h2 className="text-2xl font-black uppercase tracking-tight text-white">{title}</h2>
      <div className="h-px bg-white/10 flex-1 ml-4"></div>
    </div>
  );
}

function TechStackItem({ name, icon, isSVG }: { name: string, icon: string, isSVG?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-black/40 border border-white/5 rounded-2xl grayscale hover:grayscale-0 hover:border-orange-500/30 transition-all duration-500 group">
      {isSVG ? (
        <img src={icon} alt={name} className="h-16 w-16" />
      ) : (
        <img src={icon} alt={name} className="h-12 object-contain" />
      )}
      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-orange-500 transition-colors">{name}</span>
    </div>
  );
}

function CertItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <ChevronRight size={16} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
      <span className="text-slate-400 group-hover:text-white transition-colors">{title}</span>
    </div>
  );
}
