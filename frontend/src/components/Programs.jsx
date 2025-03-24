import { useState, useEffect } from "react";
import { ChevronRight, Clock, Calendar, Users, Brain, Heart, ShoppingBasket } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Programs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsIntersecting(true);
  }, []);

  const programFeatures = [
    { icon: Calendar, text: "70-day structured program" },
    { icon: Clock, text: "5-hour comprehensive onboarding" },
    { icon: Users, text: "Daily 30-min Q&A sessions" }
  ];

  const programs = [
    {
      title: "Foundation Program",
      description: "Nutrition is a key pillar of a healthy life, and this 70-day program sets you up for a sustainable lifestyle shift.",
      features: ["Personalized meal planning", "Daily group coaching", "Progress tracking tools"],
      buttonText: "Start Now",
      colorClass: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400"
    },
    {
      title: "Continuation Program",
      description: "A continuation to the Foundation Program, this focuses on forming healthy eating habits for life, with emotional well-being.",
      features: ["Advanced nutrition concepts", "One-on-one mentoring", "Lifestyle integration support"],
      buttonText: "Continue Now",
      colorClass: "from-yellow-500 to-amber-500 dark:from-yellow-400 dark:to-amber-400"
    }
  ];

  return (
    <div className="w-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className={`w-full transition-all duration-1000 transform ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <div className="relative mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Transform Your Lifestyle
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-300 mb-10 font-light">
                Choose your path to wellness with our specialized programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {programFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80">
                  <feature.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="text-gray-700 dark:text-gray-200">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 transition-all hover:shadow-xl hover:-translate-y-1">
                  <h2 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${program.colorClass}`}>{program.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`bg-gradient-to-r ${program.colorClass} text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center`}>
                    {program.buttonText}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
