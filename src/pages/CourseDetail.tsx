
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import { courses } from '../../data/courses';
import type { Course } from '../../data/courses';


const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const found = courses.find(c => c.slug === slug);
    if (!found) {
      navigate('/academy');
      return;
    }
    setCourse(found);
  }, [slug, navigate]);

  if (!course) return <div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <Link to="/academy" className="inline-flex items-center text-cyan-400 text-sm font-bold mb-10 hover:text-cyan-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO CATALOG
          </Link>
        </FadeInSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <FadeInSection>
              <div className="relative h-96 rounded-3xl overflow-hidden mb-8 cyber-border">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="px-3 py-1 bg-cyan-500 text-slate-950 text-[10px] font-black rounded uppercase tracking-widest mb-4 inline-block">
                    {course.category} • {course.level}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-orbitron font-black text-slate-50">{course.title}</h1>
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">{course.fullDescription}</p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-orbitron font-bold text-slate-50 mb-8 flex items-center">
                <span className="w-2 h-8 bg-cyan-500 mr-4"></span>
                Learning Objectives
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 text-sm font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-orbitron font-bold text-slate-50 mb-8 flex items-center">
                <span className="w-2 h-8 bg-purple-500 mr-4"></span>
                Course Curriculum
              </h2>
              <div className="space-y-6">
                {course.curriculum.map((section, i) => (
                  <div key={i} className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden">
                    <div className="bg-slate-900 p-5 font-bold text-slate-50 border-b border-slate-800">
                      {section.title}
                    </div>
                    <div className="p-0">
                      {section.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-center justify-between p-4 border-b border-slate-800/50 last:border-0 hover:bg-cyan-500/5 transition-colors">
                          <div className="flex items-center space-x-3">
                            <span className="text-slate-600 font-orbitron text-[10px]">0{j + 1}</span>
                            <span className="text-slate-400 text-sm">{lesson}</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Video + Lab</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-orbitron font-bold text-slate-50 mb-8 flex items-center">
                <span className="w-2 h-8 bg-emerald-500 mr-4"></span>
                Your Instructor
              </h2>
              <div className="p-8 rounded-3xl glass cyber-border flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-32 h-32 rounded-2xl object-cover border-2 border-slate-800 shadow-xl" />
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-slate-50 mb-1">{course.instructor.name}</h4>
                  <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{course.instructor.role}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{course.instructor.bio}</p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <FadeInSection delay={300}>
                <div className="p-8 rounded-3xl glass border-2 border-cyan-500 shadow-2xl shadow-cyan-500/10">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Enrollment Fee</div>
                  <div className="text-5xl font-orbitron font-black text-slate-50 mb-8 flex items-baseline">
                    ${course.price}
                    <span className="text-sm font-normal text-slate-500 ml-2">USD</span>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {[
                      { l: 'Duration', v: course.duration },
                      { l: 'Certification', v: 'Verified' },
                      { l: 'Resources', v: 'Lifetime Access' },
                      { l: 'Support', v: '24/7 Mentorship' },
                    ].map((feat, i) => (
                      <li key={i} className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">{feat.l}</span>
                        <span className="text-slate-300 font-bold">{feat.v}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all transform hover:scale-[1.02] shadow-xl shadow-cyan-500/20 uppercase tracking-widest text-sm mb-4">
                    Secure Seat Now
                  </button>
                  <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
                    Limited Availability • Secure Payment
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={400}>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <h4 className="text-slate-50 font-bold mb-3 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 10-2 0v1a1 1 0 102 0zM13 16v-1a1 1 0 10-2 0v1a1 1 0 102 0zM16.464 16.464a1 1 0 101.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707z" />
                    </svg>
                    Corporate Training?
                  </h4>
                  <p className="text-slate-500 text-xs mb-4">Scale your team's skills with our custom enterprise packages and bulk enrollment.</p>
                  <Link to="/contact" className="text-cyan-400 text-xs font-bold hover:underline">Get a Custom Quote →</Link>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
