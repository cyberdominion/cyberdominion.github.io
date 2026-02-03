
import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academy',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Academy', message: '' });
      setErrors({});
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <FadeInSection>
            <h1 className="font-orbitron text-5xl font-black text-slate-50 mb-8">Get In <span className="text-cyan-400 underline decoration-cyan-500/30">Touch</span></h1>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Whether you're looking to jumpstart your career or secure your business infrastructure, our team of experts is ready to assist.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 border border-slate-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-300 font-bold">Email Us</h4>
                  <p className="text-slate-500">cyberdominions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-purple-400 border border-slate-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-300 font-bold">HQ Location</h4>
                  <p className="text-slate-500">No. 1 Okon Essien Lane, Uyo.</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="p-10 rounded-3xl glass cyber-border">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-slate-50 mb-2">Transmission Received</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-cyan-400 underline font-bold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-orbitron font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'} rounded-lg px-4 py-3 text-slate-50 focus:outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-orbitron font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'} rounded-lg px-4 py-3 text-slate-50 focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-orbitron font-bold text-slate-400 uppercase tracking-widest mb-2">Select Inquiry Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-lg px-4 py-3 text-slate-50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="Academy">Join the Academy</option>
                      <option value="Development">Web/Software Development</option>
                      <option value="Security">Cybersecurity Services</option>
                      <option value="Other">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-orbitron font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'} rounded-lg px-4 py-3 text-slate-50 focus:outline-none transition-colors`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span>INITIATE TRANSMISSION</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
