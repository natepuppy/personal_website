export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Nathan Clark. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/nathan-clark-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/natepuppy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:nathan.clark.dev@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
