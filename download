import React from 'react';
import { motion } from 'motion/react';
import { Bolt, Smartphone, Lock, Download, Layers, ShieldCheck, Play, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-black"
          >
            Automate your <span className="text-black underline decoration-primary decoration-8 underline-offset-8">USSD payments</span> directly from your phone
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-black/70 mb-10 max-w-2xl leading-relaxed"
          >
            No brokers. No delays. Fully controlled by you. Take back control of your transaction workflows with ZAAB's kinetic automation engine.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a 
              href="https://mega.nz/file/K1IGkYbD#6KhSGKSZSMJax4GgCC8ALq0Ev9GowtQfSoz8oNjjx2U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-black font-bold text-lg px-10 py-5 rounded-xl flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
            >
              👉 Download APK
            </a>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[900px] mt-10"
          >
            <div className="relative z-10 p-4 bg-white rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
              <img 
                src="phone-mockup.png" 
                alt="ZAAB App Interface" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-neutral-50" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bolt className="w-8 h-8 text-black" />,
                title: "Automates manual USSD process",
                desc: "Eliminate repetitive typing and manual errors. Our engine handles complex USSD strings with millisecond precision."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-black" />,
                title: "Runs directly on your phone",
                desc: "No external servers or cloud dependencies. The entire orchestration happens on your local hardware for zero latency."
              },
              {
                icon: <Lock className="w-8 h-8 text-black" />,
                title: "Uses your own SIM (secure)",
                desc: "Keep your data private. ZAAB operates using your existing SIM credentials, ensuring bank-level security protocols."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-2xl flex flex-col justify-between border border-black/5 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-black/60 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-black">How it Works</h2>
            <p className="text-black/60">Simple setup, powerful results. Be up and running in minutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { step: "01", icon: <Download />, title: "Install app", desc: "Download and install the secure ZAAB APK on your Android device." },
              { step: "02", icon: <Layers />, title: "Choose plan", desc: "Select a tier that matches your transaction volume and automation needs." },
              { step: "03", icon: <ShieldCheck />, title: "Get approval", desc: "Fast identity verification to ensure secure SIM access permissions." },
              { step: "04", icon: <Play fill="currentColor" />, title: "Start automation", desc: "Deploy your payment flows and watch ZAAB handle the rest effortlessly.", active: true }
            ].map((item, i) => (
              <div key={i} className="relative p-8 flex flex-col items-center text-center">
                <div className="text-6xl font-headline font-black text-black/5 absolute top-4 left-4">{item.step}</div>
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 border border-black/10",
                  item.active ? "bg-primary border-none shadow-sm" : "bg-white"
                )}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-black" })}
                </div>
                <h4 className="font-headline text-xl font-bold mb-2 text-black">{item.title}</h4>
                <p className="text-sm text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-6 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6 text-black">Real-time automation in action</h2>
              <p className="text-black/60 mb-8 leading-relaxed text-lg">
                See how ZAAB transforms a complex 12-step USSD sequence into a single background task. No manual input, no waiting for menus to load.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-black/5">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-black font-medium">99.9% Transaction Success Rate</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-black/5">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-black font-medium">Sub-second USSD menu parsing</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white rounded-2xl overflow-hidden border border-black/5 shadow-2xl relative group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWbc40kwAacEL9ZB7-FrxupoUWY-SMkW5mwf51yoqDcNjkuzWPIK8WxL1llNVK8krqJCqindVAR3tAt2VyNlXtdfkwlKBolZ1ZmeAl3BJvZ_SUO_sbhW6ShlBwayxhL_I7I3Lgm-9CP8uZT0s5zAH43jA08drgbKviqmg1oiOxPiXvJMQWGdkeDmql-EVNZ6jJaYJzzCr1SANgabPWboMNvVEITemP4fNpJ8SUgb3UXqppDcm2bT6c6Rp42CFOUAq-q2wRfxFRrqM" 
                  alt="Data visualization" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-black" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-white" id="security">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-headline text-black/40 font-bold tracking-widest text-sm mb-4 block uppercase">Security Foundation</span>
            <h2 className="font-headline text-4xl font-bold text-black">Engineered for absolute trust</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "ZAAB does NOT hold your money", desc: "We are a software automation layer. Your funds remain entirely within your bank or mobile money account." },
              { title: "Works only on your device", desc: "All logic, keys, and processing stay locally stored on your smartphone. No external database of your secrets." },
              { title: "No remote access", desc: "The app cannot be controlled remotely. It only executes patterns that you have explicitly configured and authorized." },
              { title: "Fully user-controlled", desc: "Stop, pause, or delete your automation flows instantly. You have the ultimate 'kill switch' at all times." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-neutral-50 rounded-xl flex items-start gap-4 border border-black/5">
                <ShieldCheck className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1 text-black">{item.title}</h4>
                  <p className="text-sm text-black/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6" id="download">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">
              Ready to scale your <br className="hidden md:block"/> payment operations?
            </h2>
            <div className="flex flex-col items-center gap-6 relative z-10">
              <a 
                href="https://mega.nz/file/K1IGkYbD#6KhSGKSZSMJax4GgCC8ALq0Ev9GowtQfSoz8oNjjx2U" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-black font-headline text-2xl font-bold px-12 py-6 rounded-xl hover:scale-105 transition-all shadow-xl"
              >
                👉 Download APK
              </a>
              <p className="text-white/60 font-medium">Join 5,000+ businesses automating with ZAAB.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
