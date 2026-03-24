import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import VaultLogo from '../components/VaultLogo';

interface Source {
  url: string;
  title: string;
  description: string;
}

interface SourceCategory {
  id: string;
  label: string;
  color: string;
  sources: Source[];
}

const categories: SourceCategory[] = [
  {
    id: 'direct',
    label: 'Direct Competitors',
    color: '#0019FF',
    sources: [
      { url: 'https://www.interlace.money/affiliate-partners', title: 'Interlace Affiliate Partners', description: 'Partner program landing page and application' },
      { url: 'https://landing.interlaced.io/referral', title: 'Interlace Referral Landing', description: 'Referral program terms and sign-up' },
      { url: 'https://reap.global/blog/win-6-500-in-reap-credits-join-spend-refer', title: 'Reap Credits Referral', description: 'Credits-based referral program details ($6,500 max)' },
      { url: 'https://walletto.eu/frequently-asked-questions/', title: 'Walletto FAQ', description: 'EMI platform FAQ and partnership info' },
      { url: 'https://walletto.eu/mass-payments/', title: 'Walletto Mass Payments', description: 'B2B payment infrastructure' },
      { url: 'https://wallester.com/affiliate-program', title: 'Wallester Affiliate Program', description: 'Most transparent BaaS affiliate program: PPL, RevShare, White-label' },
      { url: 'https://wallester.com/blog/company/wallester-exclusive-affiliate-program', title: 'Wallester Exclusive Program', description: 'Detailed breakdown of affiliate commission structure' },
      { url: 'https://wallester.com/blog/company/wallester-affiliate-program', title: 'Wallester Affiliate Blog', description: 'Program launch announcement and partner benefits' },
      { url: 'https://wallester.com/affiliate-agreement', title: 'Wallester Affiliate Agreement', description: 'Legal terms and conditions for affiliates' },
      { url: 'https://www.finci.com/en/referral-program', title: 'FINCI Referral Program', description: 'Lithuanian EMI B2B referral program' },
      { url: 'https://www.monavate.com/', title: 'Monavate', description: 'BaaS platform overview (no partner program detected)' },
      { url: 'https://www.monavate.com/contact', title: 'Monavate Contact', description: 'Partnership inquiries contact page' },
      { url: 'https://www.monavate.com/post/monavate-partners-with-cyjax-to-power-next-generation-payment-fraud-protection', title: 'Monavate x Cyjax', description: 'Strategic technology partnership example' },
      { url: 'https://www.monavate.com/post/shipmoney-announces-strategic-partnership-with-monavate', title: 'Monavate x Shipmoney', description: 'Enterprise partnership case study' },
      { url: 'https://www.tribepayments.com/partnerships', title: 'TRIBE Partnerships', description: 'B2B technology partnerships (no referral program)' },
      { url: 'https://www.rain.com/offers/rain-affiliate-program', title: 'Rain Affiliate Program', description: 'Up to 60% revenue share affiliate model' },
      { url: 'https://rewards.rain.us/', title: 'Rain Rewards', description: 'US rewards and referral portal' },
      { url: 'https://www.wasabicard.com/en/referral', title: 'Wasabicard Referral', description: '$5/referral B2C-only program' },
      { url: 'https://www.wasabicard.com/en/terms', title: 'Wasabicard Terms', description: 'Referral program legal terms' },
      { url: 'https://www.openpayd.com/partnership/', title: 'OpenPayd Partnership', description: 'Introducer program application' },
      { url: 'https://www.openpayd.com/', title: 'OpenPayd', description: 'BaaS platform overview' },
      { url: 'https://noah.com/', title: 'NOAH', description: 'Bitcoin banking platform (historical referral program)' },
      { url: 'https://docs.noah.com/', title: 'NOAH Documentation', description: 'Platform API and integration docs' },
    ],
  },
  {
    id: 'indirect',
    label: 'Indirect Competitors',
    color: '#6152F4',
    sources: [
      { url: 'https://uppromote.com/affiliate-program-directory/revolut/', title: 'Revolut Affiliate Directory', description: 'Third-party analysis of Revolut affiliate program' },
      { url: 'https://www.revolut.com/legal/businessreferralspromo/', title: 'Revolut Business Referrals', description: 'Official B2B referral program terms' },
      { url: 'https://help.crypto.com/en/articles/3124990-app-referral-programme', title: 'Crypto.com App Referral', description: 'Consumer referral program: up to $2,000/referral' },
      { url: 'https://help.crypto.com/en/articles/12442009-crypto-com-exchange-sub-affiliate-programme', title: 'Crypto.com Sub-Affiliate', description: 'Exchange sub-affiliate program with trading fee share' },
      { url: 'https://crypto.com/en/affiliate', title: 'Crypto.com Affiliate', description: '50% trading fee share, tiered rewards' },
      { url: 'https://nexo.com/referral', title: 'Nexo Referral', description: 'Up to $5,000 in BTC referral rewards' },
      { url: 'https://nexo.com/affiliate', title: 'Nexo Affiliate', description: '10% interest + 0.2% volume commission' },
      { url: 'https://www.wirexapp.com/help/article/what-is-wirexs-refer-a-friend-program-1322', title: 'Wirex Refer-a-Friend', description: '$10-$30 CPA per referral' },
    ],
  },
  {
    id: 'benchmarks',
    label: 'Industry Benchmarks & Major Players',
    color: '#10B981',
    sources: [
      { url: 'https://docs.stripe.com/partners', title: 'Stripe Partners', description: 'Official partner program: Verified \u2192 Premier tiers' },
      { url: 'https://docs.stripe.com/partners/platforms', title: 'Stripe Platform Partners', description: 'Platform-specific partnership model' },
      { url: 'https://docs.stripe.com/partners/training-and-certification', title: 'Stripe Partner Certification', description: 'Training and certification requirements' },
      { url: 'https://stripe.com/connect/pricing', title: 'Stripe Connect Pricing', description: 'Revenue share pricing for platform partners' },
      { url: 'https://stripe.com/resources/more/embedded-finance-vs-banking-as-a-service', title: 'Stripe: EF vs BaaS', description: 'Industry positioning and definitions' },
      { url: 'https://stripe.com/startups/partners', title: 'Stripe Startup Partners', description: 'Startup-focused partnership track' },
      { url: 'https://www.adyen.com/knowledge-hub/partner-program', title: 'Adyen Partner Program', description: 'Revenue-driven partner model details' },
      { url: 'https://www.adyen.com/en_AU/partners', title: 'Adyen Partners Portal', description: 'Technology and service partner tracks' },
      { url: 'https://docs.adyen.com/platforms/quickstart-guide/payouts', title: 'Adyen Payouts Guide', description: 'Partner payout mechanics' },
      { url: 'https://www.affiliateprogramdb.com/brands/airwallex-affiliate-program/', title: 'Airwallex Affiliate Program', description: 'Silver/Gold/Platinum tiers: 10-20% rev share' },
      { url: 'https://www.airwallex.com/us/blog/compare-embedded-finance-solutions', title: 'Airwallex EF Comparison', description: 'Embedded finance market positioning' },
      { url: 'https://www.marqeta.com/payment-solutions/partnerships', title: 'Marqeta Partnerships', description: 'Enterprise-only partnership model' },
      { url: 'https://www.marqeta.com/docs/developer-guides/partner-integrations', title: 'Marqeta Partner Integrations', description: 'Technical integration guide for partners' },
      { url: 'https://www.rapyd.net/blog/rapyd-certified-partner/', title: 'Rapyd Certified Partners', description: 'Maverick \u2192 Legend \u2192 Icon gamified tiers' },
      { url: 'https://docs.galileo-ft.com/pro/docs/partners-programs-and-products', title: 'Galileo Partner Programs', description: 'Card issuing partner program structure' },
      { url: 'https://www.galileo-ft.com/platform/trusted-partners/', title: 'Galileo Trusted Partners', description: 'Strategic partner ecosystem' },
      { url: 'https://www.railsr.com/partners', title: 'Railsr Partners', description: 'BaaS partner program' },
      { url: 'https://www.checkout.com/blog/revenue-gains-issuer-collaboration-partnership', title: 'Checkout.com Partnership Revenue', description: 'Revenue gains from issuer partnership model' },
    ],
  },
  {
    id: 'tiers',
    label: 'Partnership Tier Structure',
    color: '#F59E0B',
    sources: [
      { url: 'https://insider.crossbeam.com/entry/partner-tiers-cheat-sheet', title: 'Partner Tiers Cheat Sheet', description: 'Crossbeam guide to structuring partnership tiers' },
      { url: 'https://partner.visa.com/site/programs/partner-programs.html', title: 'Visa Partner Programs', description: 'Visa tiered partner program structure' },
      { url: 'https://partner.visa.com/site/programs/visa-ready.html', title: 'Visa Ready', description: 'Technology certification program' },
      { url: 'https://www.mastercard.com/global/en/business/support/network-enablement-partners.html', title: 'Mastercard Network Partners', description: 'Network enablement partnership model' },
      { url: 'https://www.finastra.com/partners/partnering-with-finastra', title: 'Finastra Partner Program', description: 'Banking technology partner tiers' },
      { url: 'https://www.kiflo.com/blog/partner-program-tiers', title: 'Partner Program Tiers Guide', description: 'Best practices for structuring partner tiers' },
    ],
  },
  {
    id: 'financial',
    label: 'Financial Model & Unit Economics',
    color: '#EF4444',
    sources: [
      { url: 'https://www.bain.com/insights/embedded-finance/', title: 'Bain: Embedded Finance', description: 'Market sizing and growth projections' },
      { url: 'https://www.mckinsey.com/industries/financial-services/our-insights/embedded-finance-the-choices-and-trade-offs-for-us-banks', title: 'McKinsey: Embedded Finance', description: 'Strategic choices and trade-offs analysis' },
      { url: 'https://www.grandviewresearch.com/industry-analysis/us-embedded-finance-market-report', title: 'Grand View: EF Market', description: 'US embedded finance market size and forecast' },
      { url: 'https://www.mordorintelligence.com/industry-reports/embedded-finance-market', title: 'Mordor: EF Market', description: 'Global embedded finance market analysis' },
      { url: 'https://www.precedenceresearch.com/embedded-finance-market', title: 'Precedence: EF Market', description: 'Market growth and regional analysis' },
      { url: 'https://www.saastr.com/what-are-typical-commission-ranges-for-referral-partners-for-enterprise-b2b-saas/', title: 'SaaStr: Commission Ranges', description: 'Typical B2B SaaS referral partner commissions' },
      { url: 'https://www.poweredbysearch.com/learn/b2b-saas-cac-benchmarks/', title: 'B2B SaaS CAC Benchmarks', description: 'Customer acquisition cost industry benchmarks' },
      { url: 'https://www.phoenixstrategy.group/blog/ltv-vs-cac-key-ratios-explained', title: 'LTV vs CAC Ratios', description: 'Key SaaS unit economics ratios explained' },
      { url: 'https://support.partnerstack.com/hc/en-us/articles/14657461808275-Recruiting-partners-step-2-Build-your-partner-commission-structure', title: 'PartnerStack: Commission Structure', description: 'Building effective partner commission structures' },
      { url: 'https://partnerstack.com/articles/partner-rewards-and-commissions', title: 'PartnerStack: Rewards', description: 'Partner rewards and commission models' },
      { url: 'https://www.scaleo.io/blog/channel-partner-commission-structure-a-full-guide-to-fair-revshare-compensation/', title: 'Scaleo: Channel Partner Guide', description: 'Full guide to fair rev share compensation' },
      { url: 'https://www.getmonetizely.com/articles/channel-partner-contracts-flat-fee-vs-revenue-share-models---which-is-right-for-your-saas-business', title: 'Flat Fee vs Revenue Share', description: 'Comparison of partner compensation models' },
      { url: 'https://www.gsquaredcfo.com/blog/sales-commission-accounting', title: 'Sales Commission Accounting', description: 'ASC 340-40 accounting for sales commissions' },
      { url: 'https://dart.deloitte.com/USDART/home/publications/archive/deloitte-publications/accounting-spotlight/2019/revenue-recognition-accounting-for-costs-obtaining', title: 'Deloitte: Revenue Recognition', description: 'IFRS 15 accounting for acquisition costs' },
      { url: 'https://www.edgardunn.com/articles/fintech-briefing-baas-as-the-engine-of-embedded-finance', title: 'Edgar Dunn: BaaS Engine', description: 'BaaS as embedded finance growth driver' },
      { url: 'https://vodeno.com/unleashing-the-power-of-baas-four-revenue-streams-to-boost-your-bottom-line/', title: 'Vodeno: BaaS Revenue Streams', description: 'Four revenue streams in Banking-as-a-Service' },
      { url: 'https://www.pymnts.com/news/b2b-payments/2026/54percent-of-b2b-platforms-report-revenue-gains-from-embedded-finance/', title: 'PYMNTS: EF Revenue Gains', description: '54% of B2B platforms report revenue gains from embedded finance' },
      { url: 'https://www.rewardful.com/articles/affiliate-commission-explained', title: 'Rewardful: Commission Explained', description: 'Affiliate commission models and best practices' },
    ],
  },
  {
    id: 'bestpractices',
    label: 'Best Practices & Metrics',
    color: '#8B5CF6',
    sources: [
      { url: 'https://www.referralcandy.com/blog/referral-program-benchmarks-whats-a-good-conversion-rate-in-2025', title: 'Referral Conversion Benchmarks', description: 'Referral program conversion rates and benchmarks' },
      { url: 'https://www.prefinery.com/blog/10-key-referral-program-metrics-to-track-2024/', title: '10 Key Referral Metrics', description: 'Essential metrics for tracking referral program success' },
      { url: 'https://growsurf.com/examples/fintech-referral-programs/', title: 'Fintech Referral Examples', description: 'Curated examples of fintech referral programs' },
      { url: 'https://www.prefinery.com/blog/referral-programs/examples/fintech-2/', title: 'Fintech Referral Programs 2', description: 'Additional fintech referral program case studies' },
      { url: 'https://www.deeto.com/blog-post/b2b-referral-marketing-program', title: 'B2B Referral Marketing', description: 'B2B referral marketing program strategies' },
      { url: 'https://customergauge.com/blog/b2b-referral-program-best-practices', title: 'B2B Referral Best Practices', description: 'Industry best practices for B2B referral programs' },
      { url: 'https://www.expando.ai/blogs/guide-to-b2b-referral-partner-programs', title: 'B2B Referral Partner Guide', description: 'Comprehensive guide to building B2B partner programs' },
      { url: 'https://referralhero.com/blog/paying-referral-fees-to-individuals', title: 'Paying Referral Fees', description: 'Structures and legal considerations for referral fees' },
      { url: 'https://partnerstack.com/resources/guides/anatomy-of-a-referral-program', title: 'Anatomy of Referral Program', description: 'Complete anatomy and structure of effective referral programs' },
      { url: 'https://demandzen.com/developing-partner-program-pt-3/', title: 'Developing Partner Program', description: 'Multi-part guide to building partner programs' },
      { url: 'https://partnershipleaders.com/post/top-metrics-kpis-partnership-resources/', title: 'Partnership KPIs', description: 'Top metrics and KPIs for partnerships' },
      { url: 'https://www.rivo.io/blog/calculating-referral-program-success', title: 'Referral Program ROI', description: 'Calculating referral program success metrics' },
      { url: 'https://impact.com/referral/referral-tracking/', title: 'Impact.com Tracking', description: 'Referral tracking and attribution technology' },
      { url: 'https://support.partnerstack.com/hc/en-us/articles/360051787293-Tracking-partner-traffic-through-UTMs', title: 'PartnerStack UTM Tracking', description: 'Partner traffic tracking via UTM parameters' },
      { url: 'https://www.thisforthat.biz/p/hyper-scaling-partnerships-in-payments', title: 'Hyper-Scaling Partnerships', description: 'Scaling payment partnerships strategies' },
      { url: 'https://www.nextsaaspilot.com/blogs/saas-partner-programs', title: 'SaaS Partner Programs', description: 'Overview of SaaS partner program models' },
    ],
  },
  {
    id: 'legal',
    label: 'Legal & Compliance',
    color: '#EC4899',
    sources: [
      { url: 'https://www.complif.com/us/blog/compliance-for-fintechs-meeting-bank-expectations-in-baas', title: 'BaaS Compliance Guide', description: 'Meeting bank compliance expectations in BaaS' },
      { url: 'https://www.fca.org.uk/firms/innovation/digital-sandbox', title: 'FCA Digital Sandbox', description: 'UK financial regulatory sandbox for fintech' },
      { url: 'https://www.lb.lt/en/fintech-and-innovation', title: 'Bank of Lithuania: Fintech', description: 'Lithuanian fintech regulatory framework' },
      { url: 'https://www.adgm.com/business-areas/fintech', title: 'ADGM Fintech', description: 'Abu Dhabi Global Market fintech regulation' },
      { url: 'https://legalnodes.com/article/gpdr-compliance-fintech', title: 'GDPR for Fintech', description: 'GDPR compliance requirements for fintech companies' },
      { url: 'https://clickup.com/p/templates/service-agreement/fintech-referral-partner-services-agreement', title: 'Referral Agreement Template', description: 'Fintech referral partner services agreement template' },
      { url: 'https://www.unnax.com/electronic-money-license-partner/', title: 'EMI License Partnering', description: 'Electronic money institution licensing and partnerships' },
    ],
  },
  {
    id: 'academic',
    label: 'Academic & Research Papers',
    color: '#14B8A6',
    sources: [
      { url: 'https://www.yalejournal.org/publications/the-synapse-collapse', title: 'Yale: Synapse Collapse', description: 'Case study on BaaS platform failure and partner management' },
      { url: 'https://www.pymnts.com/business/2024/synapses-downfall-provides-case-study-in-b2b-partner-management/', title: 'PYMNTS: Synapse Case Study', description: 'Lessons in B2B partner management from Synapse' },
      { url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5501338', title: 'SSRN: Embedded Finance', description: 'Academic paper on embedded finance economics' },
      { url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5106992', title: 'SSRN: BaaS Models', description: 'Research on Banking-as-a-Service business models' },
      { url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5198563', title: 'SSRN: Fintech Partnerships', description: 'Academic analysis of fintech partnership structures' },
      { url: 'https://link.springer.com/content/pdf/10.1007/978-3-658-36056-6.pdf', title: 'Springer: Digital Banking', description: 'Comprehensive digital banking ecosystem research' },
      { url: 'https://www.kansascityfed.org/Payments%20Systems%20Research%20Briefings/documents/10072/PaymentsSystemResearchBriefing24AlcazarBairdCronenwethHayashiIsaacson0327.pdf', title: 'Kansas City Fed: Payments', description: 'Federal Reserve payments system research briefing' },
      { url: 'https://scholarship.claremont.edu/cmc_theses/3758/', title: 'Claremont: Fintech Thesis', description: 'Academic thesis on fintech business models' },
      { url: 'https://www.ingentaconnect.com/content/hsp/jrmfi/2025/00000018/00000003/art00005', title: 'Journal of Risk Management', description: 'Risk management in financial institution partnerships' },
      { url: 'https://web-assets.bcg.com/a9/4e/eeb7ae814bfb98d918fac0fcc4ce/2024-fintech-report-june-2024-edit-03.pdf', title: 'BCG: Fintech Report 2024', description: 'BCG global fintech market report' },
      { url: 'https://assets.kpmg.com/content/dam/kpmgsites/sg/pdf/2022/11/embedded-finance-partnering-platforms-for-success.pdf', title: 'KPMG: Embedded Finance', description: 'Partnering platforms for embedded finance success' },
      { url: 'https://www.jpmorgan.com/content/dam/jpmorgan/documents/cb/insights/payments/jpm-mmbsi-ie-embedded-payments-report-2025.pdf', title: 'JPMorgan: Embedded Payments', description: 'Embedded payments market report 2025' },
    ],
  },
];

export default function SourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const totalSources = categories.reduce((sum, cat) => sum + cat.sources.length, 0);

  const filteredCategories = categories
    .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
    .map(cat => ({
      ...cat,
      sources: cat.sources.filter(s =>
        !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.url.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(cat => cat.sources.length > 0);

  return (
    <div className="min-h-screen bg-vault-dark text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-vault-dark/80 backdrop-blur-xl border-b border-vault-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-vault-muted hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <VaultLogo className="h-6 w-auto" />
          </Link>
          <Link
            to="/research"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-vault-card text-vault-muted border border-vault-border hover:border-vault-border-hover hover:text-white transition-all"
          >
            <BookOpen size={14} />
            Full Research
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Research Sources</h1>
          <p className="text-vault-muted">
            {totalSources} sources across {categories.length} categories, consolidated from three independent research streams.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-vault-muted" />
            <input
              type="text"
              placeholder="Search sources..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-vault-card border border-vault-border text-white placeholder:text-vault-muted text-sm focus:outline-none focus:border-vault-primary"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-vault-primary to-vault-secondary text-white'
                  : 'bg-vault-card text-vault-muted border border-vault-border hover:border-vault-border-hover hover:text-white'
              }`}
            >
              All ({totalSources})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'text-white shadow-lg'
                    : 'bg-vault-card text-vault-muted border border-vault-border hover:border-vault-border-hover hover:text-white'
                }`}
                style={activeCategory === cat.id ? { background: cat.color } : {}}
              >
                {cat.label} ({cat.sources.length})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sources list */}
        {filteredCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.05 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
              <h2 className="text-lg font-semibold text-white">{cat.label}</h2>
              <span className="text-xs text-vault-muted">({cat.sources.length})</span>
            </div>

            <div className="space-y-2">
              {cat.sources.map((source, i) => (
                <motion.a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-vault-card/50 border border-vault-border/30 hover:border-vault-border-hover hover:bg-vault-card-hover transition-all group"
                >
                  <ExternalLink size={14} className="text-vault-muted group-hover:text-vault-primary transition-colors mt-0.5 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white group-hover:text-vault-primary transition-colors truncate">
                      {source.title}
                    </div>
                    <div className="text-xs text-vault-muted mt-0.5">{source.description}</div>
                    <div className="text-[11px] text-vault-muted/60 mt-1 truncate">{source.url}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-vault-border bg-vault-dark/80 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <VaultLogo className="h-5 w-auto" />
          <p className="text-xs text-vault-muted">
            {totalSources} sources consolidated from three independent research streams. March 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
