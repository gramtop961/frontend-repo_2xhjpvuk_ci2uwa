import { Star, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Clean design",
    description: "Minimal, elegant layout with sensible defaults so you can move fast.",
  },
  {
    icon: Zap,
    title: "Fast by default",
    description: "Built on a modern toolchain for instant feedback and snappy UX.",
  },
  {
    icon: Star,
    title: "Ready to extend",
    description: "Add sections, components, and animations whenever you need them.",
  },
];

export default function FeatureList() {
  return (
    <section id="features" className="py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-4">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
