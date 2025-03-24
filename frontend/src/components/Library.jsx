import { useState, useEffect } from "react";
import { ChevronRight, BookOpen, Search, BookMarked, Users, Brain, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Library = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsIntersecting(true);
  }, []);

  const libraryFeatures = [
    { icon: BookOpen, text: "Extensive collection of wellness articles" },
    { icon: Search, text: "Easy search and categorization" },
    { icon: BookMarked, text: "Bookmark your favorite resources" }
  ];

  const libraryResources = [
    {
      title: "Wellness Articles",
      description: "Access our comprehensive collection of articles covering nutrition, lifestyle, and holistic health approaches.",
      features: ["Research-backed content", "Expert contributions", "Regular updates"],
      buttonText: "Browse Articles",
      colorClass: "from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
    },
    {
      title: "Resource Guides",
      description: "Detailed guides and educational materials to support your wellness journey with practical insights.",
      features: ["Step-by-step guides", "Downloadable resources", "Video content"],
      buttonText: "View Guides",
      colorClass: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400"
    }
  ];

  return (
    <div className="w-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className={`w-full transition-all duration-1000 transform ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <div className="relative mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Wellness Library
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-300 mb-10 font-light">
                Explore our collection of wellness resources and knowledge base
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {libraryFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80">
                  <feature.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-200">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {libraryResources.map((resource, index) => (
                <div key={index} className="p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 transition-all hover:shadow-xl hover:-translate-y-1">
                  <h2 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${resource.colorClass}`}>
                    {resource.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
                  <ul className="space-y-3 mb-8">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`bg-gradient-to-r ${resource.colorClass} text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center`}>
                    {resource.buttonText}
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

export default Library;