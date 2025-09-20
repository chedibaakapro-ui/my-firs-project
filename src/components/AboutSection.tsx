'use client';

const AboutSection = () => {
  const technologies = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'AWS/Vercel',
    'Stripe Integration'
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <h2 className="numbered-section text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap">
            About Me
          </h2>
          <div className="ml-6 h-px bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Your last developer promised the moon and delivered a crater.</strong> I get it. 
              You need someone who understands that every line of code should drive business results, not just win design awards.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I've spent 5+ years turning underperforming websites into revenue machines for startups and scale-ups. 
              While other developers focus on making things "pretty," I focus on making things <span className="text-teal">profitable</span>. 
              My applications don't just load fast—they convert fast.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Specializing in React/Next.js applications that actually solve business problems: 
              customer dashboards that reduce churn, checkout flows that increase conversions, 
              and integrations that save your team hours of manual work every week.
            </p>

            <p className="text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Recent wins:</strong> Built a SaaS dashboard that reduced customer support tickets by 60%. 
              Optimized an e-commerce checkout that increased conversion rates by 34%. 
              Created a lead generation tool that captured 200% more qualified prospects.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Technologies I leverage to grow your business:
            </p>

            {/* Technologies List */}
            <div className="grid grid-cols-2 gap-2 max-w-md">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-teal mr-3">▹</span>
                  <span className="text-slate-400 mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile */}
          <div className="md:col-span-1">
            <div className="relative group max-w-80 mx-auto">
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-teal">
                  <img 
                    src="/image/photo-shot.jpg"
                    alt="Chedi Baaka" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Border effect */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-teal rounded-lg -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;