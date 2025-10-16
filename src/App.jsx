import Header from "./components/Header";
import HelloHero from "./components/HelloHero";
import FeatureList from "./components/FeatureList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-72 w-72 rounded-full bg-blue-200/40 blur-3xl absolute -top-16 -left-16" />
        <div className="h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl absolute top-24 -right-16" />
      </div>

      <div className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <Header />
          <HelloHero />
          <FeatureList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
