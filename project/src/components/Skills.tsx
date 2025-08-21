import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Technologies",
      skills: [
        { 
          name: "C++", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
          color: "from-blue-500 to-purple-600" 
        },
        { 
          name: "HTML5", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
          color: "from-orange-400 to-red-600" 
        },
        { 
          name: "CSS3", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
          color: "from-blue-400 to-cyan-500" 
        },
        { 
          name: "JavaScript", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
          color: "from-yellow-300 to-orange-500" 
        },
        { 
          name: "TypeScript", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
          color: "from-blue-500 to-indigo-600" 
        },
        { 
          name: "SQL", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
          color: "from-blue-500 to-teal-600" 
        },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { 
          name: "React", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
          color: "from-cyan-300 to-blue-500" 
        },
        { 
          name: "Node.js", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
          color: "from-green-400 to-emerald-600" 
        },
        { 
          name: "Express.js", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", 
          color: "from-gray-500 to-slate-700" 
        },
        { 
          name: "TailwindCSS", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", 
          color: "from-teal-300 to-cyan-600" 
        },
        { 
          name: "MongoDB", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
          color: "from-green-400 to-lime-600" 
        },
        { 
          name: "JWT", 
          image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop", 
          color: "from-purple-400 to-pink-600" 
        },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { 
          name: "VS Code", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 
          color: "from-blue-400 to-indigo-600" 
        },
        { 
          name: "Git", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
          color: "from-orange-400 to-red-600" 
        },
        { 
          name: "GitHub", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
          color: "from-gray-600 to-slate-800" 
        },
        { 
          name: "Canva", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", 
          color: "from-purple-400 to-violet-600" 
        },
        { 
          name: "API", 
          image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop", 
          color: "from-indigo-400 to-purple-600" 
        },
        { 
          name: "Responsive", 
          image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop", 
          color: "from-green-300 to-teal-600" 
        },
      ]
    }
  ];

  const SkillCard = ({ name, image, color }: { name: string; image: string; color: string }) => (
    <div className="group relative">
      <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-110 transform perspective-1000 hover:-rotate-y-12 hover:-rotate-x-6" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
        {/* 3D Background Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
        
        {/* Image Container with 3D Effect */}
        <div className="relative mb-4 transform group-hover:scale-125 transition-all duration-500">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transform group-hover:rotate-12 transition-transform duration-500"
              onError={(e) => {
                // Fallback to a generic tech icon if image fails to load
                e.currentTarget.src = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop";
              }}
            />
          </div>
          
          {/* Floating Shadow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
        </div>
        
        {/* Skill Name */}
        <span className="text-gray-800 text-sm font-semibold text-center relative z-10 group-hover:text-gray-900 transition-colors duration-300">
          {name}
        </span>
        
        {/* Subtle Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-15 blur-xl transition-all duration-700`}></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4 mx-auto w-24"></div>
            </div>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              I love to learn new things and experiment with new technologies.
            </p>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto">
              These are some of the major languages, technologies, tools and platforms I have worked with:
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center">
                <div className="mb-16">
                  <h3 className="text-4xl font-bold text-gray-800 mb-4">
                    {category.title}
                  </h3>
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64 mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      name={skill.name}
                      image={skill.image}
                      color={skill.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-24 text-center">
            <div className="inline-flex space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;