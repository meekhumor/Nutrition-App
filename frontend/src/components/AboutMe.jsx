import { useState } from 'react';
import { Instagram, Heart, Award, Leaf, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

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
    { value: "150K+", label: "Followers" },
    { value: "500+", label: "Transformations" },
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Custom Programs" }
  ];

  // Journey milestones for timeline
  const journeyMilestones = [
    {
      year: "2018",
      title: "Personal Transformation",
      description: "Began my own fitness journey and lost 30kg through sustainable methods."
    },
    {
      year: "2019",
      title: "Education & Certification",
      description: "Earned my Personal Training certification and Nutrition coaching credentials."
    },
    {
      year: "2020",
      title: "First Online Program",
      description: "Launched my first 30-day transformation program helping 100+ clients."
    },
    {
      year: "2022",
      title: "Expanded Reach",
      description: "Grew my community to 100K followers and launched additional specialized programs."
    },
    {
      year: "2024",
      title: "Today",
      description: "Working with clients worldwide and continuously expanding my knowledge and methods."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-900 text-gray-700 dark:text-gray-200">
      {/* Hero Section with Mobile Optimization */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-700 py-16 md:py-24 px-4">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white dark:text-teal-200">Prathamesh Bhosale</h1>
              <p className="text-lg md:text-xl text-emerald-50 dark:text-teal-300 mb-4">Fitness Coach & Nutrition Specialist</p>
              <p className="text-emerald-100 dark:text-gray-300 mb-6 max-w-lg mx-auto md:mx-0">
                Helping you transform your life through sustainable fitness and nutrition strategies that work with your lifestyle, not against it.
              </p>
              
              {/* Social and CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://www.instagram.com/prathameshbhosale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white dark:bg-gray-700 text-emerald-600 dark:text-teal-400 py-2 px-6 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Follow on Instagram</span>
                </a>
                <button className="bg-amber-500 dark:bg-amber-400 hover:bg-amber-600 dark:hover:bg-amber-500 text-white py-2 px-6 rounded-full font-medium transition-colors">
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-teal-50 dark:bg-gray-800/70 py-4 md:py-6 px-4 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-teal-400">{stat.value}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap rounded-lg overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md border border-teal-100 dark:border-teal-900/30">
          <button 
            onClick={() => setActiveTab('story')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'story' 
                ? 'bg-teal-500 text-white dark:bg-teal-600 dark:text-teal-200' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
            }`}
          >
            <span>My Story</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('philosophy')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'philosophy' 
                ? 'bg-teal-500 text-white dark:bg-teal-600 dark:text-teal-200' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
            }`}
          >
            <span>Philosophy</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Story Tab Content */}
          <div className={`${activeTab === 'story' ? 'block' : 'hidden'}`}>
            <div className="p-6 md:p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800/70 backdrop-blur-sm border border-teal-100 dark:border-teal-900/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-emerald-600 dark:text-teal-400">My Journey</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-teal-500 dark:to-teal-400 mx-auto rounded-full"></div>
              </div>
              
              {/* Visual Timeline */}
              <div className="relative pb-12">
                {journeyMilestones.map((milestone, index) => (
                  <div key={index} className="relative mb-12 last:mb-0">
                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
                        <div className={`px-6 py-2 rounded-full font-bold text-white dark:text-teal-200 text-center z-10 mb-4 md:mb-0 ${
                          index === journeyMilestones.length - 1 
                            ? 'bg-amber-500 dark:bg-amber-400' 
                            : 'bg-teal-600 dark:bg-teal-600'
                        }`}>
                          {milestone.year}
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 shadow-md transform transition-transform duration-300 hover:scale-105 border border-teal-100 dark:border-teal-900/30">
                          <h4 className="text-xl font-semibold mb-2 text-amber-500 dark:text-amber-400">{milestone.title}</h4>
                          <p className="text-gray-600 dark:text-gray-200">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* My Mission Today */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-teal-100 dark:border-teal-900/30">
                <div className="h-12 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-400"></div>
                <div className="p-6 md:p-8 bg-white dark:bg-gray-800/70 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold mb-4 text-amber-500 dark:text-amber-400">My Mission Today</h4>
                  <div className="md:flex gap-8 flex-row-reverse">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <p className="mb-4 text-lg text-gray-600 dark:text-gray-200">
                        Today, I'm dedicated to cutting through the noise in the fitness industry. There's too much 
                        misinformation and too many quick fixes that set people up for failure. My mission is to 
                        educate and empower you with sustainable approaches to fitness and nutrition.
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-200">
                        I believe that transformation is not just physical—it's mental and emotional too. When you work 
                        with me, we focus on building habits that enhance your entire life, not just how you look.
                      </p>
                    </div>
                    <div className="md:w-1/2 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 dark:from-teal-500/20 dark:to-emerald-500/20 rounded-lg"></div>
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="Coaching Session" 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Credentials Section */}
              <div className="mt-12">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2 text-teal-600 dark:text-teal-400">Credentials & Education</h4>
                  <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-500 dark:from-teal-500 dark:to-teal-400 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md border border-teal-100 dark:border-teal-900/30 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-500 dark:text-teal-400">
                          <Award className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-1 text-gray-700 dark:text-gray-200">Certified Personal Trainer (CPT)</h5>
                        <p className="text-gray-600 dark:text-gray-300">National Academy of Sports Medicine</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md border border-teal-100 dark:border-teal-900/30 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-500 dark:text-teal-400">
                          <Award className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-1 text-gray-700 dark:text-gray-200">Precision Nutrition Level 2 Coach</h5>
                        <p className="text-gray-600 dark:text-gray-300">Advanced Nutritional Coaching Certification</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md border border-teal-100 dark:border-teal-900/30 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-500 dark:text-teal-400">
                          <Award className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-1 text-gray-700 dark:text-gray-200">Bachelor's Degree in Exercise Science</h5>
                        <p className="text-gray-600 dark:text-gray-300">University of Health Sciences</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md border border-teal-100 dark:border-teal-900/30 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-500 dark:text-teal-400">
                          <Award className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg mb-1 text-gray-700 dark:text-gray-200">Functional Training Specialist</h5>
                        <p className="text-gray-600 dark:text-gray-300">International Sports Sciences Association</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Tab Content */}
          <div className={`${activeTab === 'philosophy' ? 'block' : 'hidden'}`}>
            <div className="p-6 md:p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800/70 backdrop-blur-sm border border-teal-100 dark:border-teal-900/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-emerald-600 dark:text-teal-400">My Approach & Philosophy</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-teal-500 dark:to-teal-400 mx-auto rounded-full"></div>
              </div>
              
              {/* Core Values */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl shadow-lg text-center transition-transform duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-gray-700 border border-teal-100 dark:border-teal-900/30"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-5">
                      <div className="absolute inset-0 bg-emerald-500 dark:bg-teal-600 opacity-10 rounded-full transform scale-110"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-emerald-600 dark:text-teal-400">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-emerald-700 dark:text-teal-300">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-200">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* Final CTA Section */}
              <section className="px-4 py-12 mt-12 md:py-16 bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-teal-100 dark:border-teal-900/30">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white dark:text-teal-200">Your Transformation Starts Here</h3>
                  <p className="text-emerald-100 dark:text-gray-200 mb-6 max-w-xl mx-auto">
                    Take the first step toward a healthier, happier you. Let me guide you with personalized coaching and a supportive community.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link 
                      to="/programs" 
                      className="bg-amber-500 dark:bg-amber-400 hover:bg-amber-600 dark:hover:bg-amber-500 text-white py-3 px-8 rounded-full font-medium transition-colors transform hover:scale-105"
                    >
                      Start Your Free Consultation
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white dark:bg-gray-800/50 text-emerald-600 dark:text-teal-400 py-3 px-8 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors transform hover:scale-105"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}