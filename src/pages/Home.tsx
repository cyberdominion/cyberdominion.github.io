
import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
<section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden">
  <div className="container mx-auto px-6 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT — TEXT */}
      <FadeInSection>
        <div>
          <span className="inline-block py-1 px-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            Empowering the Next Gen of Engineers
          </span>

          <h1 className="font-orbitron text-4xl md:text-6xl xl:text-7xl font-black text-slate-50 leading-tight mb-8">
            Become{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              Elite
            </span>{' '}
            in <br />
            Cybersecurity & <br />
            Web Engineering
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Learn in-demand tech skills or hire Cyber Dominion to build and secure
            high-performance digital systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/academy"
              className="px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 hover:scale-105 transition-all cyber-glow"
            >
              Join the Academy
            </Link>

            <Link
              to="/services"
              className="px-10 py-4 border border-cyan-500/50 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
            >
              Request a Service
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* RIGHT — IMAGE */}
      <FadeInSection delay={200}>
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            alt="Cybersecurity Training"
            className="relative w-full rounded-3xl border border-slate-800 shadow-2xl"
          />
        </div>
      </FadeInSection>

    </div>
  </div>
</section>


      {/* 2. Trust & Authority Strip */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Hands-on Training', icon: 'M12 14l9-5-9-5-9 5 9 5z' },
              { label: 'Real-world Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { label: 'Security-first Mindset', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { label: 'Industry Curriculum', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100} className="flex items-center justify-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm font-semibold whitespace-nowrap">{item.label}</span>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Split Offer Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Academy Card */}
            <FadeInSection className="group h-full">
              <div className="relative p-10 h-full rounded-2xl cyber-border glass overflow-hidden transition-all group-hover:border-cyan-500/50">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                  </svg>
                </div>
                <h3 className="font-orbitron text-3xl font-bold text-slate-50 mb-6">Academy</h3>
                <ul className="space-y-4 mb-10 text-slate-400">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Cybersecurity training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Web & software development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Practical labs & projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Career-focused learning</span>
                  </li>
                </ul>
                <Link
                  to="/academy"
                  className="inline-flex items-center text-cyan-400 font-bold tracking-widest uppercase text-sm group-hover:translate-x-2 transition-transform"
                >
                  Explore the Academy
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeInSection>

            {/* Services Card */}
            <FadeInSection className="group h-full" delay={200}>
              <div className="relative p-10 h-full rounded-2xl cyber-border glass overflow-hidden transition-all group-hover:border-purple-500/50">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-orbitron text-3xl font-bold text-slate-50 mb-6">Services</h3>
                <ul className="space-y-4 mb-10 text-slate-400">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Secure websites & apps</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Software development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Cybersecurity audits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Technical consulting</span>
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-purple-400 font-bold tracking-widest uppercase text-sm group-hover:translate-x-2 transition-transform"
                >
                  View Services
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 4. Why Cyber Dominion */}
      <section className="py-24 bg-slate-900/40">
        <div className="container mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="font-orbitron text-4xl font-bold text-slate-50 mb-16">The Dominion Difference</h2>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Security-first', desc: 'Every line of code and every lesson taught is built with modern security protocols.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Practical Labs', desc: 'Forget passive watching. Our academy focuses on deep, practical, hands-on application.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.586.346l-2.388-.477A2 2 0 005.47 16.14l-.5 2.5a2 2 0 002.44 2.332l2.5-.5a2 2 0 001.414-.586L19.428 15.428z' },
              { title: 'Real Practitioners', desc: 'Learn from and work with engineers who build and defend systems daily.', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'Scalable Skills', desc: 'We focus on foundational logic and high-growth technologies that last.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group hover:cyber-glow transition-all">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-orbitron text-lg font-bold text-slate-50 mb-4">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20">
            {/* Students Flow */}
            <div className="flex-1">
              <FadeInSection>
                <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-10 flex items-center">
                  <span className="w-8 h-[2px] bg-cyan-400 mr-4"></span>
                  For Students
                </h3>
                <div className="space-y-12 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-800"></div>
                  {[
                    { step: '01', title: 'Enroll', desc: 'Choose your path and gain instant access to our platform.' },
                    { step: '02', title: 'Learn with Labs', desc: 'Engage with guided practical exercises and theoretical deep-dives.' },
                    { step: '03', title: 'Build Projects', desc: 'Construct a professional portfolio with real-world technical assignments.' },
                    { step: '04', title: 'Become Job-ready', desc: 'Graduate with the confidence and skills to enter the elite tech workforce.' },
                  ].map((step, i) => (
                    <div key={i} className="flex space-x-6 relative z-10">
                      <div className="w-10 h-10 bg-slate-900 border border-cyan-500/30 rounded-full flex items-center justify-center font-orbitron text-xs font-bold text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="text-slate-50 font-bold mb-2">{step.title}</h5>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>

            {/* Clients Flow */}
            <div className="flex-1">
              <FadeInSection delay={200}>
                <h3 className="font-orbitron text-2xl font-bold text-purple-400 mb-10 flex items-center">
                  <span className="w-8 h-[2px] bg-purple-400 mr-4"></span>
                  For Clients
                </h3>
                <div className="space-y-12 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-800"></div>
                  {[
                    { step: '01', title: 'Request Service', desc: 'Submit your requirements via our secure consultation form.' },
                    { step: '02', title: 'Strategy & Quote', desc: 'Receive a technical roadmap and a transparent pricing breakdown.' },
                    { step: '03', title: 'Build & Secure', desc: 'Our team develops your solution with rigorous security audits throughout.' },
                    { step: '04', title: 'Launch & Support', desc: 'Go live with a high-performance system and ongoing technical maintenance.' },
                  ].map((step, i) => (
                    <div key={i} className="flex space-x-6 relative z-10">
                      <div className="w-10 h-10 bg-slate-900 border border-purple-500/30 rounded-full flex items-center justify-center font-orbitron text-xs font-bold text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="text-slate-50 font-bold mb-2">{step.title}</h5>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-slate-50 mb-8">
              Your Future in <span className="text-cyan-400">Tech</span> Starts Here
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              Ready to transcend the ordinary? Join the elite few who master the dominion of digital space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/academy"
                className="w-full sm:w-auto px-12 py-5 bg-cyan-500 text-slate-950 font-black rounded hover:bg-cyan-400 transition-all uppercase tracking-tighter"
              >
                Start Learning
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-slate-50 text-slate-50 font-black rounded hover:bg-slate-50 hover:text-slate-950 transition-all uppercase tracking-tighter"
              >
                Talk to Us
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
