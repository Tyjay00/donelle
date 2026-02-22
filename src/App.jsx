import React, { useState, useEffect } from 'react';
import { Shield, Clock, Heart, Feather, Sparkles, ArrowDown, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import image1 from './assets/Image1.jpg';
import image2 from './assets/Image2.jpg';
import image3 from './assets/Image3.jpg';
import image4 from './assets/Image4.jpg';
import image5 from './assets/Image5.jpg';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Book State
  const [bookPage, setBookPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const bookPages = [
    {
      chapter: "Chapters 40-55",
      title: "Trusting in God's Power",
      text: "Known as the \"Book of Comfort,\" these chapters emphasize God’s sovereignty over creation and history, encouraging the exiled Israelites to trust in His promise of restoration."
    },
    {
      chapter: "Chapter 7",
      title: "The Call to Stand Firm",
      text: "Isaiah tells King Ahaz to \"stand firm in faith, or you won't stand at all,\" emphasizing that active, daily trust in God is required for stability."
    },
    {
      chapter: "Chapter 53",
      title: "The Suffering Servant",
      text: "This chapter highlights faith in a promised messiah who bears the sins of the people, a foundational text for Christian faith in Jesus."
    },
    {
      chapter: "Chapter 40",
      title: "The Promise of Renewal",
      text: "Isaiah 40:31 offers comfort to the exhausted, promising renewed strength to those who wait upon and trust in the Lord."
    },
    {
      chapter: "Chapter 43",
      title: "God's Faithfulness",
      text: "God promises to be with His people through trials, such as walking through fire or water, ensuring that faith replaces fear."
    }
  ];

  const turnPage = (direction) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === 'next' && bookPage < bookPages.length - 1) setBookPage(p => p + 1);
      if (direction === 'prev' && bookPage > 0) setBookPage(p => p - 1);
      setIsFlipping(false);
    }, 400); // halfway point for the animation
  };

  const slides = [
    { 
      image: image1, 
      text: '"The least of you will become a thousand,' 
    },
    { 
      image: image2, 
      text: 'the smallest a mighty nation.' 
    },
    { 
      image: image3, 
      text: 'I am the LORD;' 
    },
    { 
      image: image4, 
      text: 'in its time,' 
    },
    { 
      image: image5, 
      text: 'I will do this swiftly."' 
    }
  ];

  useEffect(() => {
    setLoaded(true);
    
    // Auto-advance the scriptures every 5 seconds
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Background ambient accents */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-stone-100 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <Feather className="w-8 h-8 text-amber-700/60" strokeWidth={1.5} />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4">From Tyrone To</p>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6 tracking-tight">
            Donelle
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg mx-auto">
            I see a truly remarkable girl who deserves to know she doesn't have to carry it all alone.
          </p>
        </div>
        
        <button 
          onClick={() => smoothScroll('the-promise')}
          className="absolute bottom-12 animate-bounce p-3 rounded-full bg-white shadow-sm border border-stone-100 text-stone-400 hover:text-amber-700 hover:shadow-md transition-all"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </section>

      {/* The Anchor Verse - Flowing Images Section */}
      <section id="the-promise" className="py-24 px-6 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Clock className="w-8 h-8 text-amber-500/80 mx-auto mb-6" strokeWidth={1.5} />
            <p className="text-sm tracking-widest uppercase text-stone-400 font-semibold">
              Isaiah 60:22
            </p>
          </div>

          {/* Image Slider */}
          <div className="relative h-[60vh] md:h-[75vh] w-full rounded-3xl overflow-hidden shadow-2xl group">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activeSlide === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                }`}
              >
                {/* Background Image */}
                <div 
                  className={`absolute inset-0 bg-cover ${index === 0 ? 'bg-top' : 'bg-center'}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Scripture Text */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16 text-center">
                  <h2 className={`text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight transition-all duration-1000 delay-300 ${
                    activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.text}
                  </h2>
                </div>
              </div>
            ))}

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    activeSlide === index ? 'bg-amber-500 w-8' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Book of Comfort - Interactive Bible Section */}
      <section className="py-24 px-6 bg-stone-100 overflow-hidden relative border-y border-stone-200">
        {/* Subtle background texture/pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <BookOpen className="w-8 h-8 text-amber-700/60 mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">The Book of Comfort</h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Messages from Isaiah to remind you that even in exhaustion, there is a promise of renewal, strength, and unwavering faithfulness.
            </p>
          </div>

          {/* Physical Book Container */}
          <div className="relative w-full max-w-4xl mx-auto min-h-[400px] bg-[#FDFBF7] shadow-2xl rounded-sm border border-stone-200 flex flex-col md:flex-row">
            
            {/* Center Book Spine */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-16 -ml-8 bg-gradient-to-r from-transparent via-stone-300/40 to-transparent z-10 pointer-events-none"></div>
            
            {/* Left Page (Fixed Title/Chapter) */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-200 relative">
              <div className="absolute top-6 left-6 text-stone-300">
                <Feather size={20} strokeWidth={1.5} />
              </div>
              
              <div className={`transition-all duration-400 ${isFlipping ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <p className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4">
                  {bookPages[bookPage].chapter}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif text-stone-800 leading-tight">
                  {bookPages[bookPage].title}
                </h3>
              </div>
            </div>

            {/* Right Page (Text Content) */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
              <div className={`transition-all duration-400 ${isFlipping ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <p className="text-stone-600 leading-relaxed text-lg md:text-xl font-serif italic text-justify">
                  "{bookPages[bookPage].text}"
                </p>
              </div>

               {/* Page Number */}
               <div className="absolute bottom-6 right-8 text-stone-400 text-sm font-serif italic">
                 Page {bookPage + 1} of {bookPages.length}
               </div>
            </div>

          </div>

          {/* Book Controls */}
          <div className="mt-12 flex justify-center items-center space-x-8">
            <button 
              onClick={() => turnPage('prev')} 
              disabled={bookPage === 0} 
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white shadow-sm border border-stone-200 text-stone-600 hover:text-amber-700 hover:shadow-md disabled:opacity-40 disabled:hover:shadow-sm disabled:hover:text-stone-600 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider uppercase">Turn Back</span>
            </button>
            <button 
              onClick={() => turnPage('next')} 
              disabled={bookPage === bookPages.length - 1} 
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white shadow-sm border border-stone-200 text-stone-600 hover:text-amber-700 hover:shadow-md disabled:opacity-40 disabled:hover:shadow-sm disabled:hover:text-stone-600 transition-all"
            >
              <span className="text-sm font-medium tracking-wider uppercase">Turn Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* The Conversation - Breaking it down */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-2xl mx-auto space-y-24">
          
          {/* On Being Tired */}
          <div className="space-y-6">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 shadow-sm">
              <Sparkles className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-stone-800">Declaring the circle over.</h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              You mentioned that you've been going through a difficult period for years, that you needed help, and that you simply got tired. 
              <br/><br/>
              It takes a profound amount of strength to say, <em>"I'm declaring this circle over."</em> Going ghost wasn't a cliché; it was a necessary retreat. God honors our rest. When we are too tired to build, He asks us to just sit still while He works on our behalf.
            </p>
          </div>

          {/* On Walls */}
          <div className="space-y-6">
            <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6 border border-stone-200 shadow-sm">
              <Shield className="w-6 h-6 text-stone-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-stone-800">The walls you've built.</h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              "I have walls up for a variety of reasons. I'm not an easy person to read."
              <br/><br/>
              Walls aren't always a bad thing. They are placed there to protect a heart that is valuable, a spirit that has been through a lot. I don't expect you to tear them down overnight, and I don't expect you to be easy to read. You are allowed to take your time. 
            </p>
          </div>

          {/* On "Why Me?" */}
          <div className="space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 border border-rose-100 shadow-sm">
              <Heart className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-stone-800">"But what makes you so sure it's me?"</h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              Because beneath the tiredness, the walls, and the ghosting, I see someone deeply anchored in her faith. I see a woman who is self-aware enough to break toxic cycles, and honest enough to say she's exhausted. 
              <br/><br/>
              I'm sure, because I'm not looking for an "easy" read. I'm looking at someone who trusts that in Isaiah 60:22, the Lord will hasten things in His time. And I am perfectly willing to wait on that time with you.
            </p>
          </div>

        </div>
      </section>

      {/* Footer / Outro */}
      <footer className="py-24 px-6 text-center border-t border-stone-100 bg-white">
        <div className="max-w-xl mx-auto">
          <h4 className="font-serif text-xl text-stone-800 mb-4">You Special and Deserve the Best.</h4>
          <p className="text-stone-500 mb-8">
            No pressure. No rushing.. 
          </p>
          <div className="w-16 h-px bg-stone-200 mx-auto"></div>
          <p className="mt-8 text-sm text-stone-400">
            Made with patience and prayer, for Donelle.
          </p>
        </div>
      </footer>
    </div>
  );
}