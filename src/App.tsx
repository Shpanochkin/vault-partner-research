import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExecutiveSummary from './components/ExecutiveSummary';
import MarketLandscape from './components/MarketLandscape';
import Benchmarks from './components/Benchmarks';
import RecommendedModel from './components/RecommendedModel';
import FinancialImpact from './components/FinancialImpact';
import Roadmap from './components/Roadmap';
import Takeaways from './components/Takeaways';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-vault-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <ExecutiveSummary />
        <MarketLandscape />
        <Benchmarks />
        <RecommendedModel />
        <FinancialImpact />
        <Roadmap />
        <Takeaways />
      </main>
      <Footer />
    </div>
  );
}
