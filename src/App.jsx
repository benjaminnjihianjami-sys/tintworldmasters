import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CarFront,
  MapPin,
  Phone,
  ChevronRight,
  Play,
  CheckCircle2,
  Crosshair,
  Award,
  Instagram,
  Facebook,
} from 'lucide-react';

const WHATSAPP_NUMBER = '254705876931';
const INSTAGRAM_URL = 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Ftint%2520world%2520masters%2520shop%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExcmo1bm4xNVdHTFFVZTM0aHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7RxzY3Nx5MZn97VeKWWOkUrF8WmvJ1plqe0S7wQLm5pxp7gk6jYkXY48LJig_aem_41axiBUknT2ESLbySxOq9A&h=AUClGZWoC-DMw2vILf6RJ05kTwVdghhxh_61t20KRSr04pR_7nriRoO0Yi2rGBhnqZA4eyL99qJ5wZ7dv5_xwBCHRW_8tMHlmMyWt8S5Cy3QhHR_dOmDkaZwStNwtqjbxYui';
const FACEBOOK_URL = 'https://web.facebook.com/profile.php?id=61552693102325';

const IMGS = {
  logo:      './tintmasters%20pics/tint%20world%20masters%20logo.jpg',
  tintSim:   './tintmasters%20pics/IMG-20260507-WA0015.jpg',
  ceramic:   './tintmasters%20pics/IMG-20260507-WA0018.jpg',
  carbon:    './tintmasters%20pics/IMG-20260507-WA0021.jpg',
  hero:      './tintmasters%20pics/IMG-20260507-WA0027.jpg',
  bookingBg: './tintmasters%20pics/IMG-20260507-WA0045.jpg',
  security:  './tintmasters%20pics/IMG-20260507-WA0049.jpg',
};

const HERO_SLIDES = [
  IMGS.hero,
  IMGS.ceramic,
  IMGS.carbon,
  IMGS.security,
  IMGS.tintSim,
  IMGS.bookingBg,
];

const App = () => {
  const [form, setForm] = useState({ car: '', phone: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const reels = [
    "https://web.facebook.com/reel/933910015841579",
    "https://web.facebook.com/reel/1058581886464269",
    "https://web.facebook.com/reel/1317518542933079"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi Tint World Masters! I'd like to book a tinting slot.\n\n` +
      `Car: ${form.car}\n` +
      `Phone: ${form.phone}\n` +
      `Film: Nano Ceramic Korean Tint\n\n` +
      `Please confirm my slot.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_24px_rgba(34,197,94,0.6)] transition-all hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <img
            src={IMGS.logo}
            alt="Tint World Masters"
            className="h-16 w-auto object-contain"
          />
          <a
            href="#book"
            className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded font-bold uppercase tracking-tight transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
          >
            <Phone size={18} />
            <span>Book Now</span>
          </a>
        </div>
      </nav>

      {/* HERO WITH CAROUSEL */}
      <header className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Carousel background */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Tint World Masters installation ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: idx === currentSlide ? 0.4 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950"></div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-6 h-2 bg-red-500'
                  : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-600/30 bg-red-600/10 text-red-400 text-sm font-bold uppercase tracking-widest mb-6">
            <MapPin size={14} />
            <span>Nairobi's #1 Tint Specialists</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Unmatched{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600 drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">
              Privacy.
            </span>
            <br />
            Elite Style.
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 font-medium">
            Dominate the Kenyan sun. Upgrade your ride with shatter-proof, heat-rejecting nano-ceramic films. Look like a boss, stay cool.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#book"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded font-black uppercase tracking-tight text-lg hover:bg-red-500 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] group"
            >
              Get a Quote
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded font-bold uppercase tracking-tight text-lg hover:bg-zinc-800 transition-all"
            >
              View Our Tints
            </a>
          </div>
        </div>
      </header>

      {/* SOCIAL PROOF STATS */}
      <section className="border-y border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl font-black text-amber-400 tracking-tighter">500+</span>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm mt-1">Cars Tinted</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl font-black text-white tracking-tighter">99%</span>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm mt-1">UV Protection</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl font-black text-white tracking-tighter">3</span>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm mt-1">Nairobi Locations</span>
              <span className="text-zinc-600 text-xs mt-1">Lavington | Westlands | Nairobi West</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 relative overflow-hidden" id="why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Why Tint World Masters?</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Precision Installation", desc: "Your car deserves protection. At our shop, every tint is installed with precision — no bubbles, no shortcuts. Just clean, professional work." },
              { icon: Award, title: "Workmanship First", desc: "Quality tinting is not just about the film, it's about the workmanship. We take the time to make every installation flawless." },
              { icon: Crosshair, title: "We Perfect, Not Rush", desc: "We don't rush jobs. We perfect them. Experience clean, professional car tint installation every single time." },
              { icon: CarFront, title: "Factory-Finish Standard", desc: "A good tint should look like it came with the car. That's the standard we work by — no exceptions." },
              { icon: CheckCircle2, title: "Attention to Detail", desc: "Attention to detail is what separates average tinting from professional tinting. We take that seriously." },
            ].map((prop, idx) => (
              <div
                key={idx}
                className={`bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-red-600/50 transition-colors group relative overflow-hidden${idx === 3 ? ' md:col-start-1 lg:col-start-auto' : ''}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500">
                  <prop.icon size={120} />
                </div>
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center text-amber-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <prop.icon size={28} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-white">{prop.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-zinc-900/20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">Our Film</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <article className="bg-zinc-950 border border-amber-400/30 rounded-xl overflow-hidden flex flex-col shadow-[0_0_40px_rgba(251,191,36,0.08)]">
              <div className="h-64 bg-zinc-800 relative">
                <img src={IMGS.ceramic} alt="Nano Ceramic Korean Tint installation" className="w-full h-full object-cover opacity-70" />
                <div className="absolute top-4 right-4 bg-amber-400 text-black px-3 py-1 rounded font-bold text-xs uppercase tracking-wider">Premium Korean Film</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-black uppercase text-white mb-3">Nano Ceramic Korean Tint</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  High-performance nano ceramic film sourced from Korea — engineered for clarity, privacy, and long-lasting protection under the Kenyan sun.
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    'Crystal-clear visibility from inside — day and night',
                    'Maximum privacy from outside',
                    'UV & heat rejection without blocking signals',
                    'Deep, clean black finish that lasts',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start text-zinc-300 gap-3">
                      <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="block text-center w-full bg-red-600 hover:bg-red-500 text-white border border-red-600 transition-colors py-4 rounded font-black uppercase tracking-wide text-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                >
                  Book Now
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* REELS */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">See The Results</h2>
            <p className="text-zinc-400 font-medium">Check out our latest installations in action.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {reels.map((url, index) => {
              const encodedUrl = encodeURIComponent(url);
              const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=267&autoplay=true&mute=true`;

              return (
                <div key={index} className="w-full max-w-[300px] aspect-[9/16] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 z-0">
                    <div className="animate-pulse flex flex-col items-center">
                      <Play className="text-red-500 mb-2" size={32} />
                      <span className="text-xs uppercase text-zinc-500 font-bold">Loading Reel...</span>
                    </div>
                  </div>
                  <iframe
                    src={embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="relative z-10 w-full h-full object-cover"
                    title={`Tint World Masters Reel ${index + 1}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section
        id="book"
        className="py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${IMGS.bookingBg}')` }}
      >
        <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-zinc-900/60 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-4">
                <Crosshair className="text-red-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-white">Book Your Slot</h2>
              <p className="text-amber-400 font-bold uppercase tracking-widest text-sm">Lock in your upgrade today.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Car Model</label>
                  <div className="relative">
                    <CarFront className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
                    <input
                      type="text"
                      placeholder="e.g. Toyota Land Cruiser"
                      value={form.car}
                      onChange={(e) => setForm({ ...form, car: e.target.value })}
                      className="w-full bg-zinc-950/50 border border-zinc-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
                    <input
                      type="tel"
                      placeholder="0705 876931"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-zinc-950/50 border border-zinc-700 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-medium"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Selected Film</label>
                <div className="w-full bg-zinc-950/50 border border-zinc-700 text-amber-400 px-4 py-4 rounded-lg font-bold flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                  Nano Ceramic Korean Tint
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white py-5 rounded-lg font-black uppercase tracking-tight text-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] mt-4"
              >
                Secure My Spot via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={IMGS.logo} alt="Tint World Masters" className="h-20 w-auto object-contain mb-4" />
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
                Premium automotive styling and protection for Nairobi's finest vehicles. Don't settle for less than the masters.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-zinc-400">
                  <Phone size={20} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium">+254 705 876931</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400">
                  <MapPin size={20} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-medium">Nairobi West, Kenya, 00100<br />(Serving Lavington &amp; Westlands)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">Operating Hours</h4>
              <ul className="space-y-2 text-zinc-400 font-medium">
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>Saturday:</span> <span>9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-zinc-600">
                  <span>Sunday:</span> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm font-medium">
              &copy; {new Date().getFullYear()} Tint World Masters. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-600 hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-wider">Privacy Policy</a>
              <a href="#" className="text-zinc-600 hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-wider">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
