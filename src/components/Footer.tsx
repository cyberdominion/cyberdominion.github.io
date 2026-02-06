import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center cyber-glow transition-transform">
                <span className="font-orbitron font-bold text-slate-950 text-xl">CD</span>
              </div>
              <span className="font-orbitron text-xl font-bold tracking-tighter text-slate-50">
                CYBER<span className="text-cyan-400">DOMINION</span>
              </span>
            </Link>

            <p className="text-slate-500 max-w-sm mb-6">
              Empowering the next generation of engineers and securing the digital future of enterprise.
              Elite tech education and professional services combined.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-slate-50 mb-6 uppercase text-xs tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'Academy', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-slate-50 mb-6 uppercase text-xs tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Security Protocols'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Cyber Dominion. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/cyber_dominions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-slate-600 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
            >
              <Twitter size={25} />
            </a>

            <a
              href="https://linkedin.com/company/cyber-dominion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
            >
              <Linkedin size={25} />
            </a>

            <a
              href="https://github.com/cyberdominion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
            >
              <Github size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
