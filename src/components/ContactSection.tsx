'use client';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Number */}
          <p className="numbered-section mono text-teal text-base mb-4">
            What's Next?
          </p>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-8">
            Let's Build Something That Converts
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-lg mx-auto">
            Got a business challenge that needs solving? Ready to turn your digital presence 
            into a revenue engine? I'm currently available for new projects and would love to 
            discuss how we can grow your business together.
          </p>

          {/* Updated CTA Button */}
          <a
            href="https://calendar.app.google/CLSLRgvkLvPJnjc48"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block text-lg px-8 py-4"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;