
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import { courses } from '../../data/courses';

const Academy: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Cybersecurity' | 'Development' | 'Architecture'>('All');
  const [levelFilter, setLevelFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [sortBy, setSortBy] = useState<'Default' | 'PriceLow' | 'PriceHigh' | 'Duration'>('Default');

  const filteredCourses = useMemo(() => {
    let result = courses.filter(c => 
      (filter === 'All' || c.category === filter) &&
      (levelFilter === 'All' || c.level === levelFilter)
    );

    if (sortBy === 'PriceLow') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'PriceHigh') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'Duration') result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));

    return result;
  }, [filter, levelFilter, sortBy]);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-400 font-orbitron text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Dominion Forge</span>
          <h1 className="font-orbitron text-4xl md:text-6xl font-black text-slate-50 mb-8">Course <span className="text-cyan-400">Catalog</span></h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Select your specialization. Each path is a rigorous journey towards technical supremacy.
          </p>
        </FadeInSection>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between p-6 rounded-2xl glass border border-slate-800">
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Category</label>
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
                {['All', 'Cybersecurity', 'Development', 'Architecture'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${filter === cat ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Level</label>
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
                {['All', 'Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl as any)}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${levelFilter === lvl ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2 w-full md:w-auto">
            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full md:w-48 bg-slate-950 border border-slate-800 text-slate-300 text-xs font-bold p-2.5 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="Default">Recently Added</option>
              <option value="PriceLow">Price: Low to High</option>
              <option value="PriceHigh">Price: High to Low</option>
              <option value="Duration">Course Duration</option>
            </select>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, i) => (
              <FadeInSection key={course.id} delay={i * 50}>
                <Link to={`/academy/course/${course.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden glass cyber-border border-slate-800 flex flex-col group-hover:border-cyan-500/40 transition-all group-hover:translate-y-[-4px]">
                    <div className="relative h-48 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur rounded text-[10px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-500/20">
                        {course.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                          course.level === 'Advanced' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                          course.level === 'Intermediate' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 
                          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          {course.level}
                        </span>
                        <span className="text-slate-300 font-orbitron text-lg font-bold">${course.price}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-6">{course.shortDescription}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {course.instructor.name}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-t border-slate-800/50 bg-slate-950/30 flex justify-between items-center group-hover:bg-cyan-500/5 transition-all">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">View Details</span>
                      <svg className="w-4 h-4 text-cyan-500 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="text-slate-500 font-orbitron text-xl">No courses match your active filters.</div>
              <button onClick={() => {setFilter('All'); setLevelFilter('All');}} className="mt-4 text-cyan-400 font-bold hover:underline">Reset Filters</button>
            </div>
          )}
        </div>

        <FadeInSection className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-cyan-950/40 to-slate-950 border border-cyan-500/30 text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-black text-slate-50 mb-6">Outcome & Benefits</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            92% of our graduates land professional roles within 4 months. You don't just get a certificate; you gain a portfolio of verified work and direct access to our hiring network.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { val: '92%', label: 'Placement Rate' },
              { val: '24wk', label: 'Average Program' },
              { val: '10+', label: 'Real Projects' },
              { val: 'Life', label: 'LMS Access' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl font-orbitron font-bold text-cyan-400">{stat.val}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="px-12 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 hover:scale-105 transition-all cyber-glow uppercase tracking-widest text-sm">
            Talk to a Mentor
          </button>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Academy;
