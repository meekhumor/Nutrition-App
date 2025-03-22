import React, { useState, useEffect } from 'react';
import { 
  Facebook, Instagram, Youtube, Mountain, Users, Leaf, Clock, 
  ShoppingBasket,TrendingUp,Calendar,  Heart, Brain, AlertTriangle, ChevronLeft, ChevronRight 
} from 'lucide-react';

function Home() {
  // Testimonials data
  const testimonials = [
    {
      quote: 'Lost weight and managed psoriasis with community support.',
      detail: 'Learned about cortisol’s role in obesity.',
      name: 'Sarah M.',
      location: 'California'
    },
    {
      quote: 'Fibromyalgia pain reduced by 70% in 1500 days.',
      detail: 'From monthly agony to once every 6 months.',
      name: 'David K.',
      location: 'Toronto'
    },
    {
      quote: 'Diabetes transformed with a 13.9% A1C drop in 5 months.',
      detail: 'Regained strength and control.',
      name: 'Maria L.',
      location: 'Texas'
    },
    {
      quote: 'Sleep apnea symptoms disappeared after just 45 days.',
      detail: 'No more CPAP machine and I wake up refreshed.',
      name: 'James R.',
      location: 'New York'
    }
  ];

  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    setIsIntersecting(true);
  }, []);
  
  const features = [
    {
      icon: <Leaf className="w-5 h-5" />,
      text: "Nutrition vs Diet • Genetic vs Lifestyle"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Fad vs Habit • Obesity vs Insulin"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Solo vs Community Support"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features2 = [
    { 
      icon: Users, 
      colorClass: 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400',
      text: 'Community-driven lifestyle coaches'
    },
    { 
      icon: ShoppingBasket, 
      colorClass: 'bg-amber-50 text-amber-500 dark:bg-amber-900/30 dark:text-amber-400',
      text: 'Nutrition & sustainable living experts'
    },
    { 
      icon: Clock, 
      colorClass: 'bg-purple-50 text-purple-500 dark:bg-purple-900/30 dark:text-purple-400',
      text: 'Fasting and natural healing specialists'
    },
    { 
      icon: Heart, 
      colorClass: 'bg-green-50 text-green-500 dark:bg-green-900/30 dark:text-green-400',
      text: 'Gut health & sleep restoration guides'
    },
    { 
      icon: Brain, 
      colorClass: 'bg-orange-50 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400',
      text: 'Stress and adrenal fatigue educators'
    }
  ];

  const conditions = [
    'Type 2 Diabetes', 'Obesity', 'IBS', 'Blood Pressure', 'Cortisol Issues', 
    'Autoimmune', 'Thyroid', 'Migraine', 'Low Energy', 'Sleep Disorders'
  ];

  const programFeatures = [
    { icon: Calendar, text: '70-day structured program' },
    { icon: Clock, text: '5-hour comprehensive onboarding' },
    { icon: Users, text: 'Daily 30-min Q&A sessions' }
  ];
  

  // State for testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  // Navigation handlers
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 dark:bg-green-700 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 dark:bg-yellow-700 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
        
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Content Column */}
            <div className={`flex-1 transition-all duration-1000 transform ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="relative">
                {/* Accent line */}
                <div className="hidden md:block absolute left-0 top-0 w-1 h-32 bg-gradient-to-b from-green-400 to-teal-500 dark:from-green-500 dark:to-teal-600 rounded-full"></div>
                
                <div className="ml-0 md:ml-8">
                  <span className="inline-block text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase mb-2 px-3 py-1 bg-teal-50 dark:bg-teal-900/40 rounded-full">New Approach</span>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">Ready to Ditch Dieting</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-400 dark:to-amber-400">&amp; Embrace Nourishment?</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-teal-700 dark:text-teal-300 mb-10 font-light italic">
                    Discover the joy of a healthier you
                  </p>
                  
                  <div className="space-y-8 mb-10">
                    <h3 className="text-gray-700 dark:text-gray-200 font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" />
                      What you'll learn:
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {features.map((feature, index) => (
                        <div 
                          key={index} 
                          className={`transform transition-all duration-700 delay-${index * 200} ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-teal-100 dark:border-teal-900`}
                        >
                          <div className="flex items-center p-2">
                            <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400">
                              {feature.icon}
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-200">
                              {feature.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                      <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-600 dark:to-amber-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-yellow-500/20 dark:hover:shadow-yellow-600/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
                        Yes, I'm Ready!
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <p className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-0">
                        Join our <span className="text-yellow-500 dark:text-yellow-400 font-bold">FREE</span> intro session
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className={`flex-1 transition-all duration-1000 delay-300 transform ${isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                {/* Image wrapper with decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 dark:from-emerald-700/20 dark:to-cyan-700/20 rounded-2xl transform -rotate-3 scale-105"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="/healthy.jpg" 
                    alt="Healthy lifestyle" 
                    className="w-full object-cover h-96 lg:h-[500px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium mb-2">
                      Holistic Approach
                    </div>
                    <h3 className="text-white text-lg font-medium">Transform your relationship with food</h3>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-gradient-to-b from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 py-24 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-green-200/20 to-transparent dark:from-green-700/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-200/20 to-transparent dark:from-teal-700/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-3 px-4 py-1 bg-green-100/70 dark:bg-green-900/30 rounded-full text-xs uppercase tracking-wider font-semibold text-green-700 dark:text-green-300">Our Expertise</div>
            <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 ${isVisible ? 'opacity-100' : 'opacity-0'} transform transition-all duration-1000`}>
              Who Are We?
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 mb-6 bg-gradient-to-r from-green-400 to-teal-400 dark:from-green-500 dark:to-teal-500 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              We're a team of passionate wellness experts dedicated to helping you achieve holistic health through natural approaches
            </p>
          </div>
          
          {/* Feature grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {/* Top Row: 3 Items */}
              {features2.slice(0, 3).map((feature, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100/60 dark:border-green-900/30 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`${feature.colorClass} p-4 rounded-xl shadow-inner flex items-center justify-center relative group`}>
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 -z-10"></div>
                      <feature.icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">{feature.text}</p>
                  </div>
                </div>
              ))}
              {/* Bottom Row: 2 Items Centered */}
              <div className="md:col-span-3 flex justify-center gap-8">
                {features2.slice(3, 5).map((feature, index) => (
                  <div 
                    key={index + 3} 
                    className={`bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100/60 dark:border-green-900/30 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`${feature.colorClass} p-4 rounded-xl shadow-inner flex items-center justify-center relative group`}>
                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 -z-10"></div>
                        <feature.icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Brand statement */}
          <div className={`mt-20 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 dark:from-yellow-900/20 dark:to-amber-900/20 backdrop-blur-sm p-8 rounded-2xl text-center transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-500`}>
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-400/30 dark:bg-yellow-500/20 rounded-full">
              <div className="w-8 h-8 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                CQ
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400">
              Nutrify
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Each wellness journey is unique. We guide you to conquer your personal summit.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/10 dark:bg-yellow-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/15 dark:bg-green-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`bg-white dark:bg-gray-800/70 backdrop-blur-sm border border-green-100 dark:border-green-900/30 p-8 md:p-10 rounded-3xl shadow-xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image column with decorative elements */}
            <div className="relative w-full lg:w-1/3">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 dark:from-green-500/20 dark:to-teal-500/20 rounded-xl transform rotate-3 scale-105"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/api/placeholder/400/600" 
                  alt="Community Support" 
                  className="w-full h-72 md:h-96 object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white text-sm mb-2">
                    <Users size={16} />
                    <span>300+ Success Stories</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content column */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full mb-3">TRANSFORM YOUR HEALTH</div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 mb-6">
                Join Our 70-Day Foundation
              </h2>
              
              <p className="text-gray-700 dark:text-gray-200 mb-6 text-lg">
                Transform your relationship with health through our comprehensive program designed to create lasting lifestyle changes, not quick fixes.
              </p>
              
              {/* Program features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {programFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400">
                      <feature.icon size={18} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="group bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-600 dark:to-amber-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-yellow-500/20 dark:hover:shadow-yellow-600/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Enroll Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
              Manage These Conditions:
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {conditions.map((condition, index) => (
                <span 
                  key={index} 
                  className={`bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/40 dark:to-teal-900/40 border border-green-100 dark:border-green-800/30 px-3 py-1 rounded-full text-gray-700 dark:text-gray-200 text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {condition}
                </span>
              ))}
            </div>
            
            <div className={`bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 border border-yellow-100 dark:border-yellow-800/30 p-4 md:p-5 rounded-xl mt-6 flex items-start transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="min-w-fit p-2 bg-yellow-100 dark:bg-yellow-800/50 rounded-lg mr-4">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">Not For Quick Fixes</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  This program is ideal for those committed to sustainable lifestyle changes and long-term health transformation. Results require dedication and active participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Testimonials - Enhanced with Animation */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl text-green-700 dark:text-green-300 italic text-center mb-4 animate-fade-in">Healing Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Real results from real people who committed to their health journey with our guidance
          </p>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md p-2 text-green-600 dark:text-green-300 hover:text-orange-500 dark:hover:text-orange-400 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-gray-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md p-2 text-green-600 dark:text-green-300 hover:text-orange-500 dark:hover:text-orange-400 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-gray-600"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Testimonial Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)`, opacity: isAnimating ? 0.5 : 1 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-6">
                        {testimonial.image ? (
                          <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-green-200 dark:border-green-600" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 flex items-center justify-center mr-4 text-white text-xl font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h4 className="text-lg font-medium text-green-700 dark:text-green-300">{testimonial.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="text-yellow-500 dark:text-yellow-400 text-5xl">"</div>
                      <p className="text-gray-700 dark:text-gray-200 text-lg font-medium mb-4">{testimonial.quote}</p>
                      <p className="text-gray-600 dark:text-gray-300">{testimonial.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-yellow-500 dark:bg-yellow-400 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-600 dark:bg-green-700 text-white font-medium py-3 px-8 rounded-full hover:bg-green-700 dark:hover:bg-green-800 transform hover:scale-105 transition-all duration-300">
              Read More Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;