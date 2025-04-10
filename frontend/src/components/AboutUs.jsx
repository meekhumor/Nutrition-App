import { useState } from 'react';
import { Instagram, Heart, Award, Leaf, Clock, ChevronRight, Users } from 'lucide-react';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('story');
  const [expandedProgram, setExpandedProgram] = useState(null);

  // Fitness programs data
  const fitnessPrograms = [
    {
      id: 1,
      name: "30-Day Transformation",
      description: "My signature program designed to help you achieve remarkable results in just 30 days through balanced nutrition and targeted workouts.",
      participants: "2,500+",
      duration: "30 days"
    },
    {
      id: 2,
      name: "Clean Eating Blueprint",
      description: "A comprehensive nutrition guide that teaches you how to fuel your body properly with delicious, whole foods for sustainable energy and weight management.",
      participants: "3,200+",
      duration: "Ongoing"
    },
    {
      id: 3,
      name: "Home Workout Revolution",
      description: "Transform your body without a gym with my equipment-free workout program designed for busy individuals who want results without compromise.",
      participants: "1,800+",
      duration: "8 weeks"
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainable Fitness",
      description: "I believe in creating healthy habits that last a lifetime, not quick fixes that fail in the long run."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Balanced Approach",
      description: "My philosophy centers on finding the perfect balance between effective workouts, proper nutrition, and mental wellbeing."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Evidence-Based",
      description: "I cut through the fitness myths and focus on scientifically-proven methods that deliver real results."
    }
  ];

  // Transformation statistics
  const stats = [
    { value: "10K+", label: "Followers" },
    { value: "500+", label: "Transformations" },
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Custom Programs" }
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      {/* Hero Section with Mobile Optimization */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-gray-800 dark:to-gray-700 py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* Profile Image */}
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="/api/placeholder/256/256" 
                  alt="Prathamesh Bhosale" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="md:w-2/3 md:pl-10 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">Prathamesh Bhosale</h1>
              <p className="text-lg md:text-xl text-emerald-50 dark:text-gray-300 mb-4">Fitness Coach & Nutrition Specialist</p>
              <p className="text-emerald-100 dark:text-gray-400 mb-6 max-w-lg mx-auto md:mx-0">
                Helping you transform your life through sustainable fitness and nutrition strategies that work with your lifestyle, not against it.
              </p>
              
              {/* Social and CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://www.instagram.com/prathameshbhosale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 text-emerald-600 dark:text-teal-400 py-2 px-6 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Follow on Instagram</span>
                </a>
                <button className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-white py-2 px-6 rounded-full font-medium transition-colors">
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white dark:bg-gray-800 py-4 md:py-6 px-4 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-teal-400">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation - Mobile Friendly */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md">
          <button 
            onClick={() => setActiveTab('story')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 ${
              activeTab === 'story' 
                ? 'bg-teal-500 text-white dark:bg-gray-700 dark:text-teal-400' 
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            My Story
          </button>
          <button 
            onClick={() => setActiveTab('programs')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 ${
              activeTab === 'programs' 
                ? 'bg-teal-500 text-white dark:bg-gray-700 dark:text-teal-400' 
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            Programs
          </button>
          <button 
            onClick={() => setActiveTab('philosophy')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 ${
              activeTab === 'philosophy' 
                ? 'bg-teal-500 text-white dark:bg-gray-700 dark:text-teal-400' 
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            Philosophy
          </button>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Story Tab Content */}
          <div className={`${activeTab === 'story' ? 'block' : 'hidden'}`}>
            <div className="p-6 md:p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-teal-400">My Journey</h3>
              
              <div className="space-y-6">
                <div className="p-5 md:p-6 rounded-lg bg-emerald-50 dark:bg-gray-700">
                  <h4 className="text-xl font-semibold mb-3 text-amber-500 dark:text-amber-400">Where It All Began</h4>
                  <p className="mb-3">
                    My fitness journey started when I was struggling with my own health and body image. 
                    After years of inconsistent routines and fad diets that never worked, I decided to 
                    educate myself on proper nutrition and exercise principles.
                  </p>
                  <p>
                    What began as a personal transformation soon became my passion. As friends and family 
                    noticed my results, they started asking for advice. Helping others achieve their fitness 
                    goals became the most rewarding experience of my life.
                  </p>
                </div>
                
                <div className="p-5 md:p-6 rounded-lg bg-emerald-50 dark:bg-gray-700">
                  <h4 className="text-xl font-semibold mb-3 text-amber-500 dark:text-amber-400">My Mission Today</h4>
                  <p className="mb-3">
                    Today, I'm dedicated to cutting through the noise in the fitness industry. There's too much 
                    misinformation and too many quick fixes that set people up for failure. My mission is to 
                    educate and empower you with sustainable approaches to fitness and nutrition.
                  </p>
                  <p>
                    I believe that transformation is not just physical—it's mental and emotional too. When you work 
                    with me, we focus on building habits that enhance your entire life, not just how you look.
                  </p>
                </div>
              </div>
              
              {/* Credentials Section */}
              <div className="mt-8 p-5 md:p-6 rounded-lg bg-teal-50 dark:bg-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Credentials & Education</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-teal-500 dark:text-teal-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <span>Certified Personal Trainer (CPT) - National Academy of Sports Medicine</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-teal-500 dark:text-teal-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <span>Precision Nutrition Level 2 Coach</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-teal-500 dark:text-teal-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <span>Bachelor's Degree in Exercise Science</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-teal-500 dark:text-teal-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <span>Functional Training Specialist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Programs Tab Content */}
          <div className={`${activeTab === 'programs' ? 'block' : 'hidden'}`}>
            <div className="p-6 md:p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-8 text-emerald-600 dark:text-teal-400">My Programs</h3>
              
              <div className="space-y-4">
                {fitnessPrograms.map((program) => (
                  <div 
                    key={program.id} 
                    className={`p-5 md:p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                      expandedProgram === program.id 
                        ? 'bg-emerald-50 dark:bg-gray-700' 
                        : 'bg-gray-50 hover:bg-emerald-50 dark:bg-gray-750 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg md:text-xl font-semibold text-emerald-700 dark:text-white">{program.name}</h4>
                      <ChevronRight className={`transition-transform duration-300 ${
                        expandedProgram === program.id ? 'rotate-90' : ''
                      } text-gray-500 dark:text-gray-400`} />
                    </div>
                    
                    <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                      expandedProgram === program.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2" />
                          <span className="text-sm">{program.participants} Participants</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-amber-500 dark:text-amber-400 mr-2" />
                          <span className="text-sm">{program.duration}</span>
                        </div>
                      </div>
                      
                      <button className="mt-6 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-lg transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonials */}
              <div className="mt-10 p-5 md:p-6 rounded-lg bg-amber-50 dark:bg-gray-700">
                <h4 className="text-xl font-semibold mb-6 text-amber-600 dark:text-amber-400">What My Clients Say</h4>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-600">
                    <p className="italic text-gray-600 dark:text-gray-300">
                      "Prathamesh's approach changed my relationship with fitness completely. For the first time, 
                      I'm enjoying my workouts and seeing consistent results without extreme dieting."
                    </p>
                    <p className="mt-3 font-medium">— Priya M., lost 15kg in 4 months</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-600">
                    <p className="italic text-gray-600 dark:text-gray-300">
                      "The nutrition plan was a game-changer for me. I've tried so many diets before, 
                      but this is the first one I've been able to stick with long-term."
                    </p>
                    <p className="mt-3 font-medium">— Rahul S., gained 8kg of muscle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Tab Content */}
          <div className={`${activeTab === 'philosophy' ? 'block' : 'hidden'}`}>
            <div className="p-6 md:p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-8 text-emerald-600 dark:text-teal-400">My Approach & Philosophy</h3>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="p-5 md:p-6 rounded-lg text-center transition-transform duration-300 transform hover:scale-105 bg-emerald-50 hover:bg-emerald-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-emerald-100 text-emerald-600 dark:bg-gray-600 dark:text-amber-400">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-700 dark:text-white">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Fitness Philosophy */}
              <div className="mt-8 p-5 md:p-6 rounded-lg bg-teal-50 dark:bg-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">The 5 Pillars of My Approach</h4>
                
                <ol className="space-y-4 mt-4">
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-600 text-white flex items-center justify-center mr-3">1</span>
                    <div>
                      <h5 className="font-medium text-lg">Sustainable Habits</h5>
                      <p className="text-gray-600 dark:text-gray-300">Small, consistent changes deliver better long-term results than extreme approaches.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-600 text-white flex items-center justify-center mr-3">2</span>
                    <div>
                      <h5 className="font-medium text-lg">Nutrition First</h5>
                      <p className="text-gray-600 dark:text-gray-300">You can't out-train a poor diet. Nutrition forms the foundation of any successful fitness journey.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-600 text-white flex items-center justify-center mr-3">3</span>
                    <div>
                      <h5 className="font-medium text-lg">Progressive Training</h5>
                      <p className="text-gray-600 dark:text-gray-300">Safely increasing intensity over time leads to continuous improvement without injury.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-600 text-white flex items-center justify-center mr-3">4</span>
                    <div>
                      <h5 className="font-medium text-lg">Mind-Body Connection</h5>
                      <p className="text-gray-600 dark:text-gray-300">Understanding how your mindset impacts your physical results is crucial for transformation.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-600 text-white flex items-center justify-center mr-3">5</span>
                    <div>
                      <h5 className="font-medium text-lg">Community Support</h5>
                      <p className="text-gray-600 dark:text-gray-300">Surrounding yourself with like-minded individuals multiplies your chances of success.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              {/* Call to Action */}
              <div className="mt-8 p-5 md:p-6 rounded-lg bg-amber-50 dark:bg-gray-700 text-center">
                <h4 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400">Ready to Transform?</h4>
                <p className="mb-6 max-w-lg mx-auto">
                  Whether you're just starting your fitness journey or looking to break through a plateau, 
                  I'm here to guide you every step of the way.
                </p>
                <button className="px-8 py-3 rounded-lg font-medium bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}