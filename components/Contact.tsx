import React from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { profile } from '../data/profile';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Info & Map */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            I'm currently available for freelance projects and full-time opportunities.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <a href={`mailto:${profile.email}`} className="text-slate-900 dark:text-white font-semibold hover:text-accent transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Phone</p>
                <p className="text-slate-900 dark:text-white font-semibold">
                  {profile.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-slate-900 dark:text-white font-semibold">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700">
            <iframe
              src="https://www.google.com/maps?q=Gajraula,Amroha,UP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form
            action={`https://formsubmit.co/${profile.email}`}
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit Config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="Mayank Maurya"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="mayank@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <select
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white"
              >
                <option>Hiring Opportunity</option>
                <option>Freelance Project</option>
                <option>Collaboration</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-accent text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};