import React from 'react';
import { Bolt, Smartphone, Lock, Download, Layers, ShieldCheck, Play, CheckCircle2, Menu, X, Facebook, MessageCircle } from 'lucide-react';

// Simple Navbar Component
function Navbar({ setPage }: { setPage: (page: string) => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => setPage('landing')} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-xl">Z</span>
          </div>
          <span className="font-black text-2xl tracking-tighter">ZAAB</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
          <button onClick={() => { setPage('landing'); setTimeout(() => document.getElementById('features')?.scrollIntoView(), 100); }} className="hover:text-black/50 transition-colors">Features</button>
          <button onClick={() => { setPage('landing'); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView(), 100); }} className="hover:text-black/50 transition-colors">How it Works</button>
          <button onClick={() => { setPage('landing'); setTimeout(() => document.getElementById('security')?.scrollIntoView(), 100); }} className="hover:text-black/50 transition-colors">Security</button>
          <a href="#download" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black/80 transition-all">Download</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-black/5 p-6 flex flex-col gap-4 font-bold text-sm uppercase tracking-widest">
          <button onClick={() => { setPage('landing'); setIsOpen(false); setTimeout(() => document.getElementById('features')?.scrollIntoView(), 100); }}>Features</button>
          <button onClick={() => { setPage('landing'); setIsOpen(false); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView(), 100); }}>How it Works</button>
          <button onClick={() => { setPage('landing'); setIsOpen(false); setTimeout(() => document.getElementById('security')?.scrollIntoView(), 100); }}>Security</button>
          <a href="#download" onClick={() => setIsOpen(false)} className="text-center bg-black text-white py-4 rounded-lg">Download</a>
        </div>
      )}
    </nav>
  );
}

// Simple Footer Component
function Footer({ setPage }: { setPage: (page: string) => void }) {
  return (
    <footer className="bg-neutral-50 py-20 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">Z</span>
            </div>
            <span className="font-black text-xl tracking-tighter">ZAAB</span>
          </div>
          <p className="text-black/50 max-w-sm mb-8 font-medium">
            Automate your USSD payments directly from your phone with ZAAB's kinetic automation engine.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-black/40">Product</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li><button onClick={() => { setPage('landing'); setTimeout(() => document.getElementById('features')?.scrollIntoView(), 100); }} className="hover:underline">Features</button></li>
            <li><button onClick={() => { setPage('landing'); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView(), 100); }} className="hover:underline">How it Works</button></li>
            <li><button onClick={() => { setPage('landing'); setTimeout(() => document.getElementById('security')?.scrollIntoView(), 100); }} className="hover:underline">Security</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-black/40">Legal</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li><button onClick={() => { setPage('terms'); window.scrollTo(0, 0); }} className="hover:underline">Terms of Service</button></li>
            <li><button onClick={() => { setPage('privacy'); window.scrollTo(0, 0); }} className="hover:underline">Privacy Policy</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-black/30 uppercase tracking-widest">
        <p>© 2026 ZAAB Automation. All rights reserved.</p>
        <p>Built for the kinetic economy.</p>
      </div>
    </footer>
  );
}

function TermsContent() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8 tracking-tighter">Terms of Service</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-black/70 font-medium leading-relaxed">
        <p>Welcome to ZAAB. By using our application, you agree to the following terms:</p>
        <h2 className="text-2xl font-bold text-black pt-4">1. Use of Service</h2>
        <p>ZAAB provides automation software for USSD transactions. You are responsible for all transactions initiated through the app using your SIM card.</p>
        <h2 className="text-2xl font-bold text-black pt-4">2. Security</h2>
        <p>You must maintain the security of your device. ZAAB is not responsible for unauthorized access to your device or SIM card.</p>
        <h2 className="text-2xl font-bold text-black pt-4">3. Limitation of Liability</h2>
        <p>ZAAB is provided "as is". We are not liable for any financial losses resulting from the use or misuse of the automation engine.</p>
        <h2 className="text-2xl font-bold text-black pt-4">4. Privacy</h2>
        <p>Your data stays on your device. We do not collect or store your transaction details on our servers.</p>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-8 tracking-tighter">Privacy Policy</h1>
      <div className="prose prose-neutral max-w-none space-y-6 text-black/70 font-medium leading-relaxed">
        <p>Your privacy is our priority. This policy explains how we handle data:</p>
        <h2 className="text-2xl font-bold text-black pt-4">1. Local Processing</h2>
        <p>All USSD automation and transaction logic happens locally on your smartphone. We do not transmit your transaction data to our servers.</p>
        <h2 className="text-2xl font-bold text-black pt-4">2. Data Collection</h2>
        <p>We do not collect PII (Personally Identifiable Information) or financial data. The app only requires permissions necessary for USSD execution.</p>
        <h2 className="text-2xl font-bold text-black pt-4">3. Third Parties</h2>
        <p>We do not share any data with third parties, as we do not collect it in the first place.</p>
        <h2 className="text-2xl font-bold text-black pt-4">4. Security</h2>
        <p>We use industry-standard security practices to ensure the APK is secure and free from malicious code.</p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = React.useState('landing');

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-primary selection:text-black">
      <Navbar setPage={setPage} />

      <main>
        {page === 'landing' && (
          <>
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
              <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 max-w-4xl">
                  Automate your <span className="underline decoration-primary decoration-8 underline-offset-8">USSD payments</span> directly from your phone
                </h1>
                <p className="text-xl text-black/60 mb-10 max-w-2xl leading-relaxed font-medium">
                  No brokers. No delays. Fully controlled by you. Take back control of your transaction workflows with ZAAB's kinetic automation engine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                  <a 
                    href="https://mega.nz/file/K1IGkYbD#6KhSGKSZSMJax4GgCC8ALq0Ev9GowtQfSoz8oNjjx2U" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-black font-black text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)]"
                  >
                    👉 Download APK
                  </a>
                </div>

                {/* Phone Mockup */}
                <div className="w-full max-w-[900px] mt-10">
                  <div className="p-4 bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
                    <img 
                      src="src/images/Black and Purple Modern Hand Holding Phone Mockup Your Story.png" 
                      alt="ZAAB App Interface" 
                      className="w-full h-auto rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-neutral-50" id="features">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Bolt className="w-8 h-8" />,
                      title: "Automates manual USSD process",
                      desc: "Eliminate repetitive typing and manual errors. Our engine handles complex USSD strings with millisecond precision."
                    },
                    {
                      icon: <Smartphone className="w-8 h-8" />,
                      title: "Runs directly on your phone",
                      desc: "No external servers or cloud dependencies. The entire orchestration happens on your local hardware for zero latency."
                    },
                    {
                      icon: <Lock className="w-8 h-8" />,
                      title: "Uses your own SIM (secure)",
                      desc: "Keep your data private. ZAAB operates using your existing SIM credentials, ensuring bank-level security protocols."
                    }
                  ].map((feature, i) => (
                    <div 
                      key={i}
                      className="bg-white p-10 rounded-3xl flex flex-col justify-between border border-black/5 shadow-sm hover:shadow-xl transition-all"
                    >
                      <div>
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
                        <p className="text-black/50 leading-relaxed font-medium">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 bg-white" id="how-it-works">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">How it Works</h2>
                  <p className="text-black/50 font-medium">Simple setup, powerful results. Be up and running in minutes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: "01", icon: <Download />, title: "Install app", desc: "Download and install the secure ZAAB APK on your Android device." },
                    { step: "02", icon: <Layers />, title: "Choose plan", desc: "Select a tier that matches your transaction volume and automation needs." },
                    { step: "03", icon: <ShieldCheck />, title: "Get approval", desc: "Fast identity verification to ensure secure SIM access permissions." },
                    { step: "04", icon: <Play fill="currentColor" />, title: "Start automation", desc: "Deploy your payment flows and watch ZAAB handle the rest effortlessly.", active: true }
                  ].map((item, i) => (
                    <div key={i} className="relative p-8 flex flex-col items-center text-center bg-neutral-50 rounded-3xl border border-black/5">
                      <div className="text-7xl font-black text-black/5 absolute top-4 left-4 leading-none">{item.step}</div>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10 border ${item.active ? "bg-primary border-none shadow-lg" : "bg-white border-black/10"}`}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-black mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-black/50 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section className="py-24 px-6 bg-black text-white" id="security">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-primary font-black tracking-widest text-xs mb-4 block uppercase">Security Foundation</span>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Engineered for absolute trust</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "ZAAB does NOT hold your money", desc: "We are a software automation layer. Your funds remain entirely within your bank or mobile money account." },
                    { title: "Works only on your device", desc: "All logic, keys, and processing stay locally stored on your smartphone. No external database of your secrets." },
                    { title: "No remote access", desc: "The app cannot be controlled remotely. It only executes patterns that you have explicitly configured and authorized." },
                    { title: "Fully user-controlled", desc: "Stop, pause, or delete your automation flows instantly. You have the ultimate 'kill switch' at all times." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-3xl flex items-start gap-4 border border-white/10 hover:bg-white/10 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6" id="download">
              <div className="max-w-7xl mx-auto">
                <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                  <h2 className="text-4xl md:text-7xl font-black text-black mb-12 tracking-tighter leading-none">
                    Ready to scale your <br className="hidden md:block"/> payment operations?
                  </h2>
                  <div className="flex flex-col items-center gap-8">
                    <a 
                      href="https://mega.nz/file/K1IGkYbD#6KhSGKSZSMJax4GgCC8ALq0Ev9GowtQfSoz8oNjjx2U" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white font-black text-2xl px-16 py-8 rounded-2xl hover:scale-105 transition-all shadow-2xl"
                    >
                      👉 Download APK
                    </a>
                    <p className="text-black/60 font-bold text-lg">Join 5,000+ businesses automating with ZAAB.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {page === 'terms' && <TermsContent />}
        {page === 'privacy' && <PrivacyContent />}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
