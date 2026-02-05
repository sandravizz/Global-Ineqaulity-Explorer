import { Github, ExternalLink, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020b0c] border-t border-[#0a6167]/20 mt-3 sm:mt-4">
      <div className="max-w-container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Data Sources */}
          <div>
            <h3 className="text-[0.65rem] text-gray-400 mb-1.5 uppercase tracking-wide font-medium">
              Data Sources
            </h3>
            <a
              href="https://wid.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#1CB0BA] transition-colors group"
            >
              <span>World Inequality Database</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-[0.65rem] text-gray-500 mt-1">
              Income & wealth inequality data.
            </p>
          </div>

          {/* GitHub */}
          <div>
            <h3 className="text-[0.65rem] text-gray-400 mb-1.5 uppercase tracking-wide font-medium">
              Project
            </h3>
            <a
              href="https://github.com/sandravizz/Global-Ineqaulity-Explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#1CB0BA] transition-colors group"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
            </a>
            <p className="text-[0.65rem] text-gray-500 mt-1">
              Open source & contributions welcome.
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-[0.65rem] text-gray-400 mb-1.5 uppercase tracking-wide font-medium">
              Work with Me
            </h3>
            <a
              href="https://www.sandraviz.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#1CB0BA] transition-colors group"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
            <p className="text-[0.65rem] text-gray-500 mt-1">
              Collaboration & feedback welcome.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0a6167]/20 mt-2 sm:mt-3 pt-2 sm:pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5">
          <p className="text-[0.65rem] text-gray-500">
            © {new Date().getFullYear()} Sandraviz.com
          </p>
          <p className="text-[0.65rem] text-gray-500">
            Built with React, D3 accelerated by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
