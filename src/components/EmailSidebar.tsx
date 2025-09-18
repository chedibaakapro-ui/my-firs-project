'use client';

const EmailSidebar = () => {
  return (
    <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-10">
      <a
        href="mailto:brittany.chiang@gmail.com"
        className="social-link mono text-sm tracking-wider"
        style={{ writingMode: 'vertical-rl' }}
      >
       chedibaaka.pro@gmail.com
      </a>

      {/* Vertical line */}
      <div className="w-px h-24 bg-slate-600"></div>
    </div>
  );
};

export default EmailSidebar;