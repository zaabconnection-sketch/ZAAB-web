import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Ban, ShieldAlert, CloudOff, Gavel, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 bg-surface">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto px-8 mb-20 text-center">
        <div className="inline-block px-3 py-1 mb-6 bg-primary-container/10 border-l-4 border-primary-container">
          <span className="font-headline text-xs font-extrabold uppercase tracking-[0.2em] text-on-surface">Legal Framework</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-on-surface mb-8 font-headline">Terms of Service</h1>
        <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
          Last updated December 12, 2024. These terms govern your access to the ZAAB high-trust digital architecture and associated services.
        </p>
      </header>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 self-start">
          <nav className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-secondary mb-6">Contents</p>
            {[
              { id: "acceptance", label: "1. Acceptance", active: true },
              { id: "accounts", label: "2. Account Responsibility" },
              { id: "usage", label: "3. Prohibited Conduct" },
              { id: "intellectual", label: "4. Intellectual Property" },
              { id: "liability", label: "5. Limitation of Liability" },
              { id: "termination", label: "6. Termination" }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={cn(
                  "block text-sm transition-colors border-l-2 pl-4",
                  item.active ? "font-semibold text-on-surface border-primary-container" : "font-medium text-secondary hover:text-on-surface border-transparent"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Document Body */}
        <div className="lg:col-span-8 lg:col-start-5 space-y-16">
          <article id="acceptance" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">1. Acceptance of Terms</h2>
            <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
              <p className="text-on-surface leading-relaxed mb-4">
                By accessing or using ZAAB ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our services.
              </p>
              <p className="text-on-surface leading-relaxed">
                These terms constitute a legally binding agreement between you and ZAAB regarding your use of our digital architecture, APIs, and dashboard interfaces.
              </p>
            </div>
          </article>

          <article id="accounts" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">2. Account Responsibility</h2>
            <div className="space-y-6">
              <p className="text-secondary leading-relaxed">
                To access certain high-trust features of our architecture, you must register for an account. You represent and warrant that all information provided during registration is accurate and current.
              </p>
              <ul className="space-y-4">
                {[
                  "You are solely responsible for maintaining the confidentiality of your credentials.",
                  "ZAAB is not liable for unauthorized access resulting from user negligence.",
                  "Shared accounts are strictly prohibited unless explicitly authorized by an enterprise license."
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-primary-container mr-4 mt-1 w-5 h-5 flex-shrink-0" fill="currentColor" />
                    <span className="text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article id="usage" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">3. Prohibited Conduct</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Ban />, title: "Reverse Engineering", desc: "Attempting to decompile or extract source code from the ZAAB infrastructure is strictly forbidden." },
                { icon: <ShieldAlert />, title: "Security Breach", desc: "Probing, scanning, or testing the vulnerability of our systems without prior written consent." },
                { icon: <CloudOff />, title: "Service Disruption", desc: "Interfering with service to any user, host, or network, including via DoS attacks or malware." },
                { icon: <Gavel />, title: "Illegal Activities", desc: "Using the platform to facilitate illegal trade, fraud, or violation of international sanctions." }
              ].map((item, i) => (
                <div key={i} className="bg-surface-container-low p-6 rounded-xl">
                  <div className="text-on-surface mb-4">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="intellectual" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">4. Intellectual Property</h2>
            <div className="bg-surface-container-lowest p-8 border-l-4 border-zinc-200 rounded-r-2xl">
              <p className="text-on-surface leading-relaxed italic mb-4">
                "The 'ZAAB' brand, logo, and the underlying digital architecture are the exclusive property of ZAAB and its licensors."
              </p>
              <p className="text-secondary leading-relaxed">
                No license or right to use any trademark, logo, or service mark displayed on the Platform is granted without the prior written permission of ZAAB. Users retain ownership of their data uploaded to the Platform, but grant ZAAB a limited license to process such data for service delivery.
              </p>
            </div>
          </article>

          <article id="liability" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">5. Limitation of Liability</h2>
            <p className="text-secondary leading-relaxed mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZAAB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
            </p>
            <div className="p-6 bg-primary-container/5 rounded-2xl border border-primary-container/10">
              <p className="text-sm font-bold text-on-surface mb-2">Operational Disclaimer</p>
              <p className="text-sm text-secondary">Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including merchantability or fitness for a particular purpose.</p>
            </div>
          </article>

          <article id="termination" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">6. Termination</h2>
            <p className="text-on-surface leading-relaxed">
              ZAAB reserves the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </article>

          <div className="pt-12 border-t border-zinc-100">
            <p className="text-on-surface font-bold mb-4">Questions about these terms?</p>
            <a href="mailto:legal@zaab.io" className="inline-flex items-center text-on-surface font-semibold group">
              Contact Legal Team 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
