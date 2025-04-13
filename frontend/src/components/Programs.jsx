import { useState, useEffect, useRef } from "react";
import { ChevronRight, Clock, Calendar, Users, Brain, Heart, ShoppingBasket, Check, Star, Shield, Trophy, MessageCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("foundation");
  const [isIntersecting, setIsIntersecting] = useState({
    hero: false,
    features: false,
    programs: false,
    testimonials: false
  });
  const { theme } = useTheme();
  
  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    programs: useRef(null),
    testimonials: useRef(null)
  };

  useEffect(() => {
    const observers = {};
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(prev => ({ ...prev, [key]: true }));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
        observers[key] = observer;
      }
    });
    
    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const programFeatures = [
    { 
      icon: Calendar, 
      title: "Structured Process",
      text: "70-day comprehensive program designed for sustainable results" 
    },
    { 
      icon: Brain, 
      title: "Expert Guidance",
      text: "Personalized coaching from certified nutrition specialists" 
    },
    { 
      icon: Users, 
      title: "Community Support",
      text: "Daily Q&A sessions and private community access" 
    },
    { 
      icon: Heart, 
      title: "Holistic Approach",
      text: "Focus on physical and mental well-being for complete transformation" 
    }
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      image: "/api/placeholder/64/64",
      text: "This program changed my relationship with food completely. I've lost 12kg and gained so much energy!",
      stars: 5
    },
    {
      name: "Michael T.",
      image: "/api/placeholder/64/64",
      text: "After trying countless diets, this was the first approach that actually worked for me long-term.",
      stars: 5
    },
    {
      name: "Priya M.",
      image: "/api/placeholder/64/64",
      text: "The daily coaching made all the difference. I finally have sustainable eating habits.",
      stars: 5
    }
  ];

  const programs = [
    {
      id: "foundation",
      title: "Foundation Program",
      subtitle: "Begin Your Transformation Journey",
      price: "₹19,999",
      originalPrice: "₹24,999",
      description: "A comprehensive 70-day program designed to transform your relationship with food and establish sustainable nutrition habits that last a lifetime.",
      features: [
        "Personalized nutrition assessment & meal planning",
        "Daily group coaching sessions (30 minutes)",
        "24/7 chat support with nutrition experts",
        "Weekly progress tracking & adjustments",
        "Exclusive recipe collection & meal prep guides",
        "Lifetime access to program materials"
      ],
      highlights: [
        "5-hour comprehensive onboarding session",
        "Access to private community",
        "Regular body composition analysis"
      ],
      buttonText: "Enroll Now (20% Off)",
      colorClass: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-500",
      bgClass: "bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-gray-800 dark:to-gray-700"
    },
    {
      id: "continuation",
      title: "Continuation Program",
      subtitle: "Take Your Results to the Next Level",
      price: "₹24,999",
      originalPrice: "₹29,999",
      description: "For graduates of our Foundation Program, this advanced course focuses on optimizing your nutrition and integrating healthy habits for life.",
      features: [
        "Everything in the Foundation Program",
        "One-on-one mentoring sessions (weekly)",
        "Advanced nutrition protocols & customization",
        "Emotional eating & mindfulness training",
        "Long-term lifestyle integration strategies",
        "Maintenance plan development"
      ],
      highlights: [
        "Exclusive workshops with nutrition experts",
        "Lifetime access to advanced resources",
        "Personalized supplement recommendations"
      ],
      buttonText: "Continue Your Journey (16% Off)",
      colorClass: "from-yellow-500 to-amber-500 dark:from-yellow-500 dark:to-amber-500",
      bgClass: "bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-gray-800 dark:to-gray-700"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      text: "If you're not seeing results in the first 14 days, we'll refund your investment completely."
    },
    {
      icon: MessageCircle,
      title: "Unlimited Support",
      text: "Get answers to all your questions with direct access to our nutrition experts."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      text: "Join over 5,000+ clients who have successfully transformed their nutrition habits."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-900 overflow-x-hidden">
    
      {/* Programs Section */}
      <div
        id="programs"
        ref={sectionRefs.programs}
        className="py-20"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className={`transition-all duration-1000 transform ${isIntersecting.programs ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
                  Choose Your Transformation Path
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Select the program that best matches your current needs and goals
              </p>
            </div>
            
            {/* Program selector tabs for mobile */}
            <div className="flex justify-center mb-8 lg:hidden">
              <div className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm">
                {programs.map(program => (
                  <button
                    key={program.id}
                    onClick={() => setActiveTab(program.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === program.id 
                        ? `bg-gradient-to-r ${program.colorClass} text-white shadow-sm`
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    {program.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile view shows only active program */}
            <div className="lg:hidden">
              {programs.map(program => (
                activeTab === program.id && (
                  <div 
                    key={program.id} 
                    className={`p-6 rounded-2xl ${program.bgClass} shadow-xl border border-teal-100 dark:border-teal-900/30 backdrop-blur-sm`}
                  >
                    <div className="text-center mb-6">
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{program.subtitle}</p>
                      <h3 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${program.colorClass}`}>
                        {program.title}
                      </h3>
                      <div className="flex justify-center items-baseline mb-6">
                        <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{program.price}</span>
                        <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">{program.originalPrice}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{program.description}</p>
                    
                    <div className="mb-8">
                      <p className="font-semibold mb-3 text-gray-700 dark:text-gray-200">What's included:</p>
                      <ul className="space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8 p-4 rounded-lg bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm">
                      <p className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Program highlights:</p>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                            <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <button 
                        className={`bg-gradient-to-r ${program.colorClass} text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-full`}
                      >
                        {program.buttonText}
                      </button>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Limited spots available. Enrollment closes soon.
                      </p>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            {/* Desktop view shows both programs side by side */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div 
                  key={program.id} 
                  className={`p-8 rounded-2xl ${program.bgClass} shadow-xl border border-teal-100 dark:border-teal-900/30 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <div className="text-center mb-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{program.subtitle}</p>
                    <h3 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${program.colorClass}`}>
                      {program.title}
                    </h3>
                    <div className="flex justify-center items-baseline mb-6">
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{program.price}</span>
                      <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">{program.originalPrice}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{program.description}</p>
                  
                  <div className="mb-8">
                    <p className="font-semibold mb-3 text-gray-700 dark:text-gray-200">What's included:</p>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8 p-4 rounded-lg bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm">
                    <p className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Program highlights:</p>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                          <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      className={`bg-gradient-to-r ${program.colorClass} text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-full`}
                    >
                      {program.buttonText}
                    </button>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      Limited spots available. Enrollment closes soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        ref={sectionRefs.features}
        className="container mx-auto max-w-7xl px-4 py-20"
      >
        <div className={`transition-all duration-1000 transform ${isIntersecting.features ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
                What Makes Our Program Different
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our scientifically-backed approach focuses on sustainable habit formation, not quick fixes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl shadow-md border border-teal-100 dark:border-teal-900/30 bg-white dark:bg-gray-800/70 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                <div className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-900/30 w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;