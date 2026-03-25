import React from 'react';
import { motion } from 'motion/react';
import { Lock, EyeOff, Trash2 } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        {/* Hero Header Section */}
        <section className="mb-16">
          <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant font-headline text-[10px] tracking-widest uppercase mb-4">Privacy Framework</span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
            Our Privacy <span className="text-primary-container bg-on-surface px-2">Commitment</span>
          </h1>
          <p className="text-secondary leading-relaxed text-xl">
            At ZAAB, we believe privacy is a fundamental human right. Our policies are designed to be transparent, readable, and built with your security as our north star.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-secondary">
            <span>Effective Date: June 15, 2024</span>
            <span className="w-1 h-1 bg-outline rounded-full"></span>
            <span>Version 2.1</span>
          </div>
        </section>

        {/* Spotlight Card */}
        <div className="mb-16 p-8 bg-surface-container-lowest relative overflow-hidden rounded-2xl shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
          <h2 className="font-headline font-bold text-lg mb-6">Key Highlights</h2>
          <ul className="space-y-6">
            {[
              { icon: <Lock />, text: "We never sell your personal data to third-party advertisers." },
              { icon: <EyeOff />, text: "Encryption is applied to all sensitive information at rest and in transit." },
              { icon: <Trash2 />, text: "You have the right to request full data deletion at any time." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="text-primary-container mt-0.5">
                  {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                </div>
                <p className="text-sm text-on-surface font-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Sections */}
        <article className="space-y-16">
          <section>
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-6 text-on-surface">1. Data Collection & Purpose</h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>We collect information that you provide directly to us when you create an account, use our services, or communicate with us. This includes your name, email address, and any preferences you set within the ZAAB platform.</p>
              <p>The primary purpose of this collection is to provide and improve our services, ensuring a tailored experience that respects your identity without intrusive tracking.</p>
              <div className="p-6 bg-surface-container-low rounded-2xl mt-4 border-l-4 border-primary-container">
                <h4 className="font-headline font-bold text-on-surface mb-2">Proactive Protection</h4>
                <p className="text-sm">ZAAB utilizes "Privacy by Design" principles, ensuring that data minimization is built into the architecture of every feature we release.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-6 text-on-surface">2. Information Sharing</h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>ZAAB does not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We only share information with service providers who perform functions on our behalf and are strictly bound by confidentiality agreements.</p>
              <ul className="list-none space-y-3 mt-4">
                {[
                  "Security partners for fraud detection and prevention.",
                  "Infrastructure providers for hosting and data storage."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary-container font-bold">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-6 text-on-surface">3. User Rights & Control</h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>You maintain full control over your data. Under various global privacy regulations (including GDPR and CCPA), you have the following rights:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  { title: "Access", desc: "Request a copy of the personal data we hold about you at any time." },
                  { title: "Portability", desc: "Request that we transfer your data to another service in a machine-readable format." },
                  { title: "Rectification", desc: "Correct any inaccuracies in your personal information through your settings." },
                  { title: "Erasure", desc: "Request the permanent deletion of your account and all associated data." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-surface-container-lowest border border-outline/10 rounded-xl hover:border-primary-container/30 transition-colors">
                    <h3 className="font-headline font-bold text-on-surface mb-2">{item.title}</h3>
                    <p className="text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-headline font-bold tracking-tight mb-6 text-on-surface">4. Security Infrastructure</h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>We employ industry-leading technical and organizational measures to protect your data. This includes end-to-end encryption for communication, multi-factor authentication, and regular third-party security audits.</p>
              <div className="mt-8 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-lg">
                <img 
                  src="src/images/Black and White Phone Mockup Webinar Promotion Instagram Story.png" 
                  alt="Secure data server" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>
        </article>

        {/* Final CTA */}
        <section className="mt-24 pt-16 border-t border-outline/20 text-center">
          <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Questions about your data?</h3>
          <p className="text-secondary mb-8 max-w-lg mx-auto">Our dedicated privacy team is ready to help you understand how we protect your information.</p>
          <button className="px-8 py-3 bg-on-surface text-white font-headline font-bold rounded-lg hover:bg-neutral-800 transition-colors">
            Contact Privacy Team
          </button>
        </section>
      </div>
    </main>
  );
}
