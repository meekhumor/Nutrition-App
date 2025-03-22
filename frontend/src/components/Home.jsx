import React from 'react';
import { 
  Facebook, Instagram, Youtube, Mountain, Users, Leaf, Clock, 
  ShoppingBasket, Heart, Brain, AlertTriangle 
} from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 animate-fade-in-up">
            <div className="w-1 h-20 mx-auto mb-6 bg-green-400 rounded-full"></div>
            <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4 leading-tight">
                Ready to Ditch Dieting &<br />
                <span className="text-yellow-500">Embrace Nourishment?</span>
              </h1>
              <p className="text-2xl italic text-green-700 mb-8 animate-pulse-slow">
                Discover the joy of a healthier you
              </p>
              <p className="text-gray-600 mb-6">What you'll learn:</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                {[
                  "Nutrition vs Diet • Genetic vs Lifestyle",
                  "Fad vs Habit • Obesity vs Insulin",
                  "Solo vs Community Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center animate-slide-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transform hover:scale-110 transition-all duration-300">
                Yes, I'm Ready!
              </button>
              <p className="text-gray-600 mt-4">
                Join our <span className="text-yellow-500 font-bold">FREE</span> intro session
              </p>
            </div>
          </div>
          <div className="flex-1 animate-fade-in-right">
            <img 
              src="/api/placeholder/500/600" 
              alt="Healthy ingredients" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover transform hover:rotate-2 transition-transform duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-green-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl text-green-700 italic text-center mb-12 animate-fade-in">Who Are We?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: Users, color: 'blue', text: 'Community-driven lifestyle coaches' },
              { Icon: ShoppingBasket, color: 'yellow', text: 'Nutrition & sustainable living experts' },
              { Icon: Clock, color: 'purple', text: 'Fasting and natural healing specialists' },
              { Icon: Heart, color: 'green', text: 'Gut health & sleep restoration guides' },
              { Icon: Brain, color: 'orange', text: 'Stress and adrenal fatigue educators' },
            ].map(({ Icon, color, text }, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-fade-in-up" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-${color}-100 p-4 rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300`}>
                  <Icon size={32} className={`text-${color}-500`} />
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-bounce-slow">
            <h3 className="text-2xl text-yellow-500 font-semibold">
              CqMyOE = Conquering My Own Everest
            </h3>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-green-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="/api/placeholder/180/400" 
                alt="Community" 
                className="rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" 
              />
              <div>
                <h2 className="text-3xl text-green-700 italic mb-4">Join Our 70-Day Foundation</h2>
                <p className="text-gray-700 mb-4">
                  Transform your life with our comprehensive program: 5-hour onboarding, daily 30-min Q&A, and ongoing support.
                </p>
                <button className="bg-yellow-500 text-white font-medium py-3 px-8 rounded-full hover:bg-yellow-600 transform hover:scale-110 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl text-green-700 italic mb-4">Manage These Conditions:</h3>
              <div className="flex flex-wrap gap-2 text-gray-700 text-sm">
                {[
                  'Type 2 Diabetes', 'Obesity', 'IBS', 'Blood Pressure', 'Cortisol Issues', 
                  'Autoimmune', 'Thyroid', 'Migraine', 'Low Energy', 'Sleep Disorders'
                ].map((condition, index) => (
                  <span key={index} className="bg-gray-100 px-2 py-1 rounded-full animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {condition}
                  </span>
                ))}
                <span className="text-gray-500 italic">+ many more</span>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg mt-6 flex items-start animate-pulse-slow">
                <AlertTriangle className="text-yellow-600 mr-3 mt-1" size={20} />
                <p className="text-gray-700">
                  Perfect for those seeking sustainable change, not quick fixes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl text-green-700 italic text-center mb-12 animate-fade-in">Healing Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Lost weight and managed psoriasis with community support.',
                detail: 'Learned about cortisol’s role in obesity.'
              },
              {
                quote: 'Fibromyalgia pain reduced by 70% in 1500 days.',
                detail: 'From monthly agony to once every 6 months.',
                image: '/api/placeholder/120/120'
              },
              {
                quote: 'Diabetes transformed with a 13.9% A1C drop in 5 months.',
                detail: 'Regained strength and control.'
              }
            ].map(({ quote, detail, image }, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-yellow-500 text-4xl mb-2">"</div>
                {image && (
                  <img src={image} alt="Testimonial" className="w-24 h-24 mx-auto rounded-full mb-4" />
                )}
                <p className="text-gray-700 mb-4 font-medium">{quote}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;