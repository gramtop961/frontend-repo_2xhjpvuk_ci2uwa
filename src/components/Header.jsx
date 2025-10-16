import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center shadow-lg shadow-blue-600/30">
          <Rocket className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight">Hello World</p>
          <p className="text-xs text-gray-500 -mt-0.5">A tiny starter page</p>
        </div>
      </div>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
        <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
        <a href="#get-started" className="hover:text-gray-900 transition-colors">Get Started</a>
        <a href="#footer" className="hover:text-gray-900 transition-colors">Contact</a>
      </nav>
    </header>
  );
}
