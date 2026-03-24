import { HashRouter, Routes, Route } from 'react-router-dom';
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
import ResearchPage from './pages/ResearchPage';
import SourcesPage from './pages/SourcesPage';

function PresentationPage() {
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PresentationPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/sources" element={<SourcesPage />} />
      </Routes>
    </HashRouter>
  );
}
