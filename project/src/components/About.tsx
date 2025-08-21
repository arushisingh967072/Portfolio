import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import profilePic from '../assets/photo 1.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "Clean Code",
      description:
        "Writing maintainable, efficient, and well-documented code that follows best practices and industry standards.",
    },
    {
      icon: <Palette className="w-10 h-10 text-teal-500" />,
      title: "Beautiful Design",
      description:
        "Creating visually stunning interfaces with meticulous attention to detail and exceptional user experience.",
    },
    {
      icon: <Zap className="w-10 h-10 text-orange-500" />,
      title: "Performance",
      description:
        "Building lightning-fast, optimized applications that deliver seamless and responsive user experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl ml-auto mr-0 pl-12">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto"></div>
          </div>

          {/* Main content with profile */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile photo */}
            <div className="order-2 lg:order-1 flex justify-start">
              <div className="relative group">
                <div className="relative">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-80 h-80 object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hello! I’m <b>Arushi Singh</b>, pursuing my <b>B.Tech in Computer Science</b> at <i>Ajay Kumar Garg Engineering College, Ghaziabad</i>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I have a strong foundation in <b>C++</b>, <b>Data Structures & Algorithms</b>, and hands-on experience in <b>frontend web development</b>. With an academic performance of around <b>80%</b> and a <b>certificate for 100% attendance</b>, I value both consistency and dedication.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyond academics, I was the <b>winner of Volleyball Fit India</b> in college, which strengthened my teamwork and leadership skills.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I’m passionate about <b>learning new technologies</b>, building real-world projects, and growing as a professional while contributing positively to teams.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights section */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {highlight.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>

                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
