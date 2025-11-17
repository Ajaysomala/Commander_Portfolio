import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Globe, Star } from "lucide-react";

/**
 * Commander Portfolio - Single-file React component
 * - Uses TailwindCSS utility classes (assumes Tailwind is configured in the app)
 * - Uses framer-motion for smooth animations
 * - Uses lucide-react for icons
 * - Contains: navbar, hero, about, projects, certifications (animated), mini-game, chatbot modal (links to resume/LinkedIn/Naukri/Instagram), contact
 *
 * Color psychology & palette (intent in comments):
 * - Deep Navy (#0f172a) background: trust, professionalism
 * - Teal/Cyan accent (#06b6d4): creativity, clarity
 * - Warm Orange accent (#fb923c): call-to-action / energy
 * - Soft off-white (#f8fafc) for readable text
 *
 * Deployment notes (bottom of file) explain how to publish to GitHub Pages / Cloudflare Pages.
 */

const SOCIAL = {
  email: "mailto:jaydeveloper010@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajaysomala-8a806b213",
  github: "https://github.com/Ajaysomala",
  naukri: "https://www.naukri.com/", // Replace with your profile link
  instagram: "https://www.instagram.com/", // Replace with your handle
  resume: "/Somala-Ajay-Resume.pdf", // put resume in public/
};

export default function CommanderPortfolio() {
  const [chatOpen, setChatOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071029] via-[#081127] to-[#04121b] text-slate-100">
      <header className="fixed w-full z-40 backdrop-blur-md bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#fb923c] flex items-center justify-center text-black font-bold shadow-2xl">SJ</div>
            <div>
              <div className="font-semibold">Somala Ajay</div>
              <div className="text-xs text-slate-300">Python • SQL • Backend • AI</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-[#06b6d4] transition">About</a>
            <a href="#projects" className="hover:text-[#06b6d4] transition">Projects</a>
            <a href="#certs" className="hover:text-[#06b6d4] transition">Certifications</a>
            <a href="#game" className="hover:text-[#06b6d4] transition">Mini Game</a>
            <button
              onClick={() => setChatOpen(true)}
              className="ml-2 px-3 py-1 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#fb923c] text-black font-semibold shadow-lg"
            >
              Open Chatbot
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="px-2 py-1 rounded bg-white/5 text-sm"
            >
              {theme === "dark" ? "Dark" : "Light"}
            </button>
            <div className="md:hidden">
              <button onClick={() => setChatOpen(true)} className="px-3 py-1 rounded bg-gradient-to-r from-[#06b6d4] to-[#fb923c] text-black">
                Chat
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Somala Ajay
              <span className="block text-2xl md:text-3xl font-medium text-slate-300 mt-2">Customer Support → Aspiring Software & AI Developer</span>
            </h1>

            <p className="mt-6 text-slate-300 max-w-xl">
              Backend-focused developer with strong Python & SQL skills, experience in web scraping, API integrations, and building small-scale AI solutions. I build tools that make data useful and repeatable.
            </p>

            <div className="mt-6 flex gap-3">
              <a href={SOCIAL.resume} className="px-4 py-2 rounded-md bg-white/8 hover:bg-white/12 transition">Download Resume</a>
              <a href={SOCIAL.github} className="px-4 py-2 rounded-md border border-white/10 hover:border-[#06b6d4] transition">GitHub</a>
              <a href={SOCIAL.linkedin} className="px-4 py-2 rounded-md border border-white/10 hover:border-[#fb923c] transition">LinkedIn</a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-400">
              <div className="text-xs uppercase tracking-wide">Contact</div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={SOCIAL.email} className="underline">jaydeveloper010@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col gap-3 h-full">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">Resume Snapshot</div>
                  <div className="text-sm text-slate-400">Live preview</div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3">
                  <CardMini title="Experience" lines={["Tech Mahindra — Customer Support", "Trylogic — AI Data Scientist (Intern)"]} />
                  <CardMini title="Skills" lines={["Python, SQL, Flask", "Web Scraping, APIs"]} />
                  <CardMini title="Projects" lines={["Mail Whisperer", "ATS Resume Screener"]} />
                  <CardMini title="Education" lines={["B.Tech - ECE, Aditya University"]} />
                </div>

                <div className="text-xs text-slate-400">Tip: Click "Open Chatbot" to access full resume + profiles.</div>
              </div>
            </div>

            <BlobDecoration />
          </motion.div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">About</motion.h2>
          <div className="mt-4 text-slate-300 max-w-4xl">
            <p>
              I bring practical experience in data pipelines, automation, and problem-solving from real-world projects and internships. I am actively building portfolio projects and preparing for developer roles — focusing on backend and AI-enabled tooling.
            </p>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">Selected Projects</motion.h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projectsData.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>

        <section id="certs" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">Certifications</motion.h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {certs.map((c) => (
              <motion.div key={c.title} whileHover={{ scale: 1.03 }} className="p-4 rounded-lg bg-white/5 border border-white/6">
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-slate-400">{c.issuer}</div>
                <div className="mt-2 text-xs text-slate-300">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="game" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold">Mini Game — Click Trainer</motion.h2>
          <div className="mt-6">
            <ClickGame />
          </div>
        </section>

        <footer className="mt-12 py-10 bg-white/3">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="font-semibold">Somala Ajay</div>
              <div className="text-sm text-slate-300">Hyderabad, Telangana • Open to remote/in-office roles</div>
            </div>

            <div className="flex items-center gap-3">
              <a href={SOCIAL.linkedin} aria-label="LinkedIn"><Linkedin /></a>
              <a href={SOCIAL.github} aria-label="GitHub"><Github /></a>
              <a href={SOCIAL.naukri} aria-label="Naukri">Naukri</a>
            </div>
          </div>
        </footer>
      </main>

      {chatOpen && <ChatbotModal onClose={() => setChatOpen(false)} />}

      <style>{`
        /* floating blob */
        .blob { position: absolute; right: -60px; top: -40px; opacity: 0.18 }
      `}</style>
    </div>
  );
}

/* -------------------- Reusable UI pieces -------------------- */
function CardMini({ title, lines }) {
  return (
    <div className="p-3 rounded-md bg-white/3 border border-white/6">
      <div className="font-semibold text-sm">{title}</div>
      <div className="text-xs text-slate-300 mt-2">
        {lines.map((l) => (
          <div key={l}>• {l}</div>
        ))}
      </div>
    </div>
  );
}

function BlobDecoration() {
  return (
    <svg className="blob w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#06b6d4" d="M43.3,-66.6C57.5,-56.7,70.6,-47.7,72.9,-36.3C75.2,-24.9,66.6,-11,62.5,3.9C58.4,18.8,58.7,35.6,50.5,44.8C42.4,54,25.8,55.6,9.2,55.8C-7.3,56,-14.6,54.8,-29.6,49.8C-44.6,44.9,-67.2,36.1,-73.8,20.5C-80.4,4.8,-70.9,-18.8,-57.3,-32.9C-43.8,-47.1,-26.2,-51.9,-9.9,-47.1C6.4,-42.4,12.8,-28.6,43.3,-66.6Z" transform="translate(100 100)"/>
    </svg>
  );
}

const projectsData = [
  {
    title: "Mail Whisperer",
    desc: "Automated email summarizer with TTS and NLP-based highlights ",
    tags: ["Python", "Flask", "NLP"],
    live: "#",
    repo: "https://github.com/Ajaysomala/mail-whisperer",
  },
  {
    title: "ATS Resume Screener",
    desc: "Resume parser that scores ATS match and suggests edits",
    tags: ["Python", "NLP"],
    live: "#",
    repo: "https://github.com/Ajaysomala/ats-resume-screener",
  },
  {
    title: "Web Scraper Toolkit",
    desc: "Collection of scrapers for structured datasets",
    tags: ["Python", "BeautifulSoup", "Requests"],
    live: "#",
    repo: "https://github.com/Ajaysomala",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="block p-5 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/6 shadow-lg"
      href={project.repo}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center justify-between">
        <div className="font-semibold text-lg">{project.title}</div>
        <div className="text-sm text-slate-400">#{index + 1}</div>
      </div>

      <div className="mt-3 text-slate-300 text-sm">{project.desc}</div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/6">{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

const certs = [
  { title: "AI Data Scientist", issuer: "NASSCOM", desc: "Practical AI & data projects" },
  { title: "Programming for Everybody", issuer: "HackerRank", desc: "Python fundamentals" },
  { title: "Generative AI Introduction", issuer: "Microsoft", desc: "Concepts & use-cases" },
];

/* -------------------- Simple Click Game -------------------- */
function ClickGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ top: 40, left: 40 });

  useEffect(() => {
    let t;
    if (active && timeLeft > 0) {
      t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    } else if (timeLeft === 0) {
      setActive(false);
    }
    return () => clearTimeout(t);
  }, [active, timeLeft]);

  function start() {
    setScore(0);
    setTimeLeft(20);
    setActive(true);
    move();
  }

  function move() {
    setPos({ top: Math.random() * 70 + 10, left: Math.random() * 70 + 10 });
  }

  function hit() {
    if (!active) return;
    setScore((s) => s + 1);
    move();
  }

  return (
    <div className="p-6 rounded-lg bg-white/5 border border-white/6 max-w-xl">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">Click Trainer</div>
          <div className="text-sm text-slate-400">Score more hits in the time limit — simple reflex trainer</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{score}</div>
          <div className="text-sm text-slate-400">{timeLeft}s</div>
        </div>
      </div>

      <div className="relative mt-6 h-64 bg-black/10 rounded">
        <div style={{ position: 'absolute', top: `${pos.top}%`, left: `${pos.left}%` }}>
          <button onClick={hit} className="w-14 h-14 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#fb923c] text-black shadow-lg" />
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button onClick={start} className="px-4 py-2 rounded bg-gradient-to-r from-[#06b6d4] to-[#fb923c] text-black">Start</button>
        <button onClick={() => setActive(false)} className="px-4 py-2 rounded border border-white/6">Stop</button>
      </div>
    </div>
  );
}

/* -------------------- Conversational Chatbot Modal (links + resume) -------------------- */
function ChatbotModal({ onClose }) {
  const [messages, setMessages] = React.useState([
    { from: "bot", text: "Hi Commander — I'm your portfolio assistant. Ask me for your resume, links, or a quick project summary. Try: 'Show resume', 'Open GitHub', or 'Tell me about Mail Whisperer'." },
  ]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    // auto-scroll
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing]);

  function pushMessage(from, text) {
    setMessages((m) => [...m, { from, text }]);
  }

  function generateBotResponse(text) {
    const t = text.toLowerCase();

    // quick intent rules
    if (/(resume|cv|pdf)/.test(t)) {
      return `You can download the resume here: ${SOCIAL.resume}`;
    }
    if (/(github|repo|code)/.test(t)) {
      return `Open my GitHub: ${SOCIAL.github}`;
    }
    if (/(linkedin|profile)/.test(t)) {
      return `LinkedIn profile: ${SOCIAL.linkedin}`;
    }
    if (/(naukri)/.test(t)) {
      return `Naukri: ${SOCIAL.naukri}`;
    }
    if (/(instagram|insta)/.test(t)) {
      return `Instagram: ${SOCIAL.instagram}`;
    }
    if (/(mail whisperer|mail|email)/.test(t)) {
      return `Mail Whisperer: An email summarizer (Python + Flask). It fetches messages, summarizes important points using simple NLP, and can read them aloud.`;
    }
    if (/(game|play|mini game|click)/.test(t)) {
      return `Want to play the Click Trainer? Open the Mini Game section from the nav or say 'start game' and I'll jump you there.`;
    }
    if (/(help|what can you do)/.test(t)) {
      return `I can share quick links (resume, GitHub, LinkedIn, Naukri, Instagram), give short summaries of projects/certs, and point you to the mini-game. Try asking 'show projects' or 'open resume'.`;
    }

    // small talk
    if (/(hi|hello|hey|yo)\b/.test(t)) return "Hello! How can I help you today?";
    if (/thank/.test(t)) return "You're welcome — Commander.";

    // fallback
    return "I can help with links, project summaries, and opening the mini-game. If you want a long-form answer or code samples, I can fetch them for you — say 'detailed' after the request.";
  }

  function handleSend(e) {
    e && e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushMessage("user", text);
    setInput("");
    setTyping(true);

    // simulate thinking
    setTimeout(() => {
      const reply = generateBotResponse(text);
      pushMessage("bot", reply);
      setTyping(false);

      // actions based on intent
      const t = text.toLowerCase();
      if (/(start game|play|mini game|click trainer)/.test(t)) {
        window.location.hash = "#game";
        setTimeout(() => onClose && onClose(), 400);
      } else if (/(resume|cv|pdf)/.test(t)) {
        window.open(SOCIAL.resume, "_blank");
      } else if (/(github|repo|code)/.test(t)) {
        window.open(SOCIAL.github, "_blank");
      } else if (/(linkedin|profile)/.test(t)) {
        window.open(SOCIAL.linkedin, "_blank");
      }
    }, 600 + Math.random() * 800);
  }

  function quickAsk(q) {
    pushMessage("user", q);
    setTyping(true);
    setTimeout(() => {
      pushMessage("bot", generateBotResponse(q));
      setTyping(false);

      // quick action handling for buttons
      const t = q.toLowerCase();
      if (/(start game|play|mini game|click trainer)/.test(t)) {
        window.location.hash = "#game";
        setTimeout(() => onClose && onClose(), 400);
      } else if (/(show resume|resume|cv|pdf)/.test(t)) {
        window.open(SOCIAL.resume, "_blank");
      } else if (/(open github|github|repo)/.test(t)) {
        window.open(SOCIAL.github, "_blank");
      }
    }, 400);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 p-4">
      <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }} className="w-full md:w-3/4 lg:w-2/4 bg-[#04121b] rounded-2xl p-4 border border-white/6 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Commander Chatbot — Conversational</div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-3 py-1 rounded bg-white/5">Close</button>
          </div>
        </div>

        <div ref={listRef} className="flex-1 overflow-auto p-3 space-y-3 bg-white/2 rounded-lg border border-white/6 mb-3" style={{ maxHeight: '50vh' }}>
          {messages.map((m, i) => (
            <div key={i} className={m.from === 'bot' ? 'text-left' : 'text-right'}>
              <div className={`inline-block max-w-[85%] px-4 py-2 rounded-lg ${m.from === 'bot' ? 'bg-white/6 text-slate-100' : 'bg-gradient-to-br from-[#06b6d4] to-[#fb923c] text-black'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="text-left">
              <div className="inline-block max-w-[40%] px-3 py-2 rounded-lg bg-white/6 text-slate-100">Typing...</div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something like: 'Show resume' or 'Tell me about Mail Whisperer'" className="flex-1 px-4 py-2 rounded bg-black/10 outline-none" />
          <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-[#06b6d4] to-[#fb923c] text-black">Send</button>
        </form>

        <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-slate-300">
          <button onClick={() => quickAsk('Show resume')} className="p-2 rounded bg-white/5">Show resume</button>
          <button onClick={() => quickAsk('Open GitHub')} className="p-2 rounded bg-white/5">Open GitHub</button>
          <button onClick={() => quickAsk('Start game')} className="p-2 rounded bg-white/5">Start game</button>
        </div>
      </motion.div>
    </div>
  );
}

function QuickLink({ title, href }) {
  return (
    <a className="p-3 rounded-md bg-white/5 flex items-center justify-between" href={href} target="_blank" rel="noreferrer">
      <div>{title}</div>
      <div className="text-sm text-slate-400">Open</div>
    </a>
  );
}

/* -------------------- Deployment & Usage Notes -------------------- */
/*
  TO DEPLOY (simple steps):

  1) Create a new GitHub repository (e.g. commander-portfolio). Place this React component as the main page in a small React app.
     - npx create-react-app commander-portfolio
     - Replace src/App.jsx with this file (adjust imports) and add required packages:
         npm install framer-motion lucide-react
     - Ensure TailwindCSS is configured. Alternatively, use a simple CSS build if you prefer.

  2) For quick hosting: use GitHub Pages or Cloudflare Pages (recommended for global reach):
     - Cloudflare Pages: link your repo in the Cloudflare Pages dashboard and select `npm run build` as build command and `build` as build output folder. Cloudflare provides a fast global CDN.

  3) Custom domain (optional, free): register a free domain at providers like Freenom (availability varies) or use a cheap domain and connect via Cloudflare DNS. Cloudflare offers free TLS and global CDN.

  4) Make sure to add your resume PDF to the public/ directory so the link "/Somala-Ajay-Resume.pdf" works.

  5) Accessibility & international readiness:
     - Provide alt text for images and SVGs
     - Keep font sizes readable and ensure contrast (this template uses high contrast colors)
     - Translate content or provide language toggle if you want multi-lingual support in future

  6) SEO & social sharing:
     - Add meta tags, og:title, og:description and images for pleasant link previews
     - Deploy to Cloudflare Pages or Netlify and configure a robots.txt

  7) Analytics & contact forms:
     - Use simple Google Analytics or Plausible for tracking
     - Use form handling services (Formspree / Netlify forms) for contact if you don't want a backend.

  NOTES: This single-file component is meant as a starting point — you can break it into smaller components, add routing, and connect to a simple backend later if needed.
*/

