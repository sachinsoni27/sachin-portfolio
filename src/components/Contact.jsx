import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // REPLACETHIS: Create a free account at https://formspree.io, 
  // create a form, and paste your 8-character ID below.
  const FORMSPREE_ID = "xaqlrapq"; 

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        // Reset success state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: "sachinsoniofficial2003@gmail.com", link: "mailto:sachinsoniofficial2003@gmail.com", color: "text-purple-400" },
    { icon: <FaPhoneAlt />, text: "+91-9936503035", link: "tel:+919936503035", color: "text-cyan-400" },
    { icon: <FaLinkedin />, text: "LinkedIn Profile", link: "https://www.linkedin.com/in/sachin-soni-82539036a/", color: "text-blue-500" },
    { icon: <FaGithub />, text: "sachinsoni27", link: "https://github.com/sachinsoni27", color: "text-white" },
  ];

  return (
    <section className="min-h-[85vh] w-full flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="w-full max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-full mb-4">
          <FaEnvelope className="text-cyan-400 text-2xl" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white text-center">Get In Touch</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          Have a question or want to work together? Feel free to reach out through the form or any of my social channels.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/3 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
          {contactInfo.map((info, i) => (
            <a 
              key={i}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/5 transition-all group"
            >
              <span className={`text-xl ${info.color} group-hover:scale-110 transition-transform`}>{info.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{info.text}</span>
            </a>
          ))}
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-2/3"
        >
          <form onSubmit={handleSubmit} className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
            {/* Animated Glow Border Idea */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 mb-8 relative z-10">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                placeholder="Hi Sachin, I'd like to talk about..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4 font-medium animate-pulse">{error}</p>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting || submitted}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all relative z-10 ${
                submitted 
                ? "bg-green-500 text-white cursor-default" 
                : "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? (
                <span className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></span>
              ) : submitted ? (
                <>Success! Message Sent</>
              ) : (
                <>Send Message <FaPaperPlane className="text-sm" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
