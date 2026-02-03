
import React from 'react';
import FadeInSection from '../components/FadeInSection';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Web & Software Development",
      description: "We build digital platforms that aren't just pretty, but resilient and high-performing.",
      items: [
        {
          name: "Custom Web Applications",
          desc: "Bespoke SaaS solutions, internal tools, and complex web platforms built with React and modern backends.",
          for: "Growing startups and mid-market enterprises."
        },
        {
          name: "E-Commerce Systems",
          desc: "Secure, conversion-optimized shopping experiences with integrated inventory and payment solutions.",
          for: "Retail brands seeking digital dominance."
        },
        {
          name: "Mobile App Development",
          desc: "Native and cross-platform apps that provide seamless experiences across iOS and Android devices.",
          for: "Service providers and digital products."
        }
      ]
    },
    {
      title: "Cybersecurity Services",
      description: "Proactive defense and rapid response services to keep your digital assets under lockdown.",
      items: [
        {
          name: "Penetration Testing",
          desc: "Controlled ethical attacks to identify and patch vulnerabilities before real threats find them.",
          for: "Compliance-heavy businesses and tech startups."
        },
        {
          name: "Security Audits",
          desc: "Comprehensive review of codebases, server configurations, and operational security workflows.",
          for: "Firms handling sensitive user or financial data."
        },
        {
          name: "DevSecOps Integration",
          desc: "Automating security checks into your development pipeline to ensure safe deployments.",
          for: "Agile dev teams and enterprise software houses."
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <FadeInSection className="max-w-3xl mb-20">
          <h1 className="font-orbitron text-4xl md:text-6xl font-black text-slate-50 mb-8">
            Professional <br /> <span className="text-purple-400">Tech Services</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            From architecture to deployment, Cyber Dominion provides elite engineering and defensive solutions for organizations that cannot afford compromise.
          </p>
        </FadeInSection>

        <div className="space-y-32">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="relative">
              <FadeInSection>
                <div className="mb-12">
                  <h2 className="font-orbitron text-3xl font-bold text-slate-50 mb-4">{category.title}</h2>
                  <p className="text-slate-400 max-w-xl">{category.description}</p>
                </div>
              </FadeInSection>

              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((service, sIdx) => (
                  <FadeInSection key={sIdx} delay={sIdx * 100}>
                    <div className="h-full p-8 rounded-2xl glass cyber-border border-slate-800 flex flex-col justify-between hover:bg-slate-900/40 transition-all">
                      <div>
                        <h3 className="font-orbitron text-xl font-bold text-slate-50 mb-4">{service.name}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                        <div className="mb-8 p-3 rounded bg-slate-950/50 border border-slate-800">
                          <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Target Client</span>
                          <span className="text-xs text-slate-300 font-medium">{service.for}</span>
                        </div>
                      </div>
                      <button className={`w-full py-3 rounded font-bold text-sm tracking-widest uppercase transition-all ${idx === 0 ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'bg-purple-600 text-white hover:bg-purple-500'}`}>
                        Inquire Now
                      </button>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}
        </div>

        <FadeInSection className="mt-32 p-16 rounded-[40px] bg-slate-900/50 border border-slate-800 text-center">
          <h2 className="font-orbitron text-3xl font-bold text-slate-50 mb-8">Don't see exactly what you need?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            We provide custom consulting for complex technical challenges. Let's discuss your specific infrastructure or product requirements.
          </p>
          <a href="#/contact" className="inline-block px-12 py-4 border-2 border-slate-50 text-slate-50 font-bold rounded-lg hover:bg-slate-50 hover:text-slate-950 transition-all uppercase tracking-widest">
            Custom Consultation
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Services;
