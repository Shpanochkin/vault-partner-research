import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, DollarSign, Shield } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const insights = [
  {
    icon: AlertTriangle,
    title: 'Massively Underserved Market',
    description: 'BaaS partner programs are a glaring blind spot. Most competitors either have no formal program, or limit it to basic referral links with minimal incentives.',
    color: '#FF6B35',
    bg: 'rgba(255, 107, 53, 0.1)',
    borderColor: 'rgba(255, 107, 53, 0.2)',
  },
  {
    icon: Shield,
    title: 'Only 1 of 11 Transparent',
    description: 'Wallester is the sole direct competitor with a publicly documented, multi-tier partner program. This represents a massive strategic opportunity for Vault.',
    color: '#0019FF',
    bg: 'rgba(0, 25, 255, 0.1)',
    borderColor: 'rgba(0, 25, 255, 0.2)',
  },
  {
    icon: TrendingUp,
    title: '16-37% Higher LTV',
    description: 'Clients referred through partner channels consistently demonstrate 16-37% higher lifetime value and 18-25% lower churn rates compared to direct-acquired clients.',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  {
    icon: DollarSign,
    title: '30-50% CAC Reduction',
    description: 'Partner-driven acquisition can reduce customer acquisition costs by 30-50% versus direct sales, while simultaneously improving client quality and retention.',
    color: '#6152F4',
    bg: 'rgba(97, 82, 244, 0.1)',
    borderColor: 'rgba(97, 82, 244, 0.2)',
  },
];

export default function ExecutiveSummary() {
  return (
    <SectionWrapper id="executive-summary">
      <SectionHeading
        number="01"
        title="Executive Summary"
        subtitle="A strategic window exists in the BaaS market for Vault to differentiate through a world-class partner program."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {insights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card p-6 md:p-8 group cursor-default"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.bg, border: `1px solid ${item.borderColor}` }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-vault-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom highlight bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 p-6 rounded-2xl border border-vault-primary/20 bg-vault-primary/5"
      >
        <p className="text-center text-vault-text text-base md:text-lg font-medium">
          <span className="text-white font-semibold">The bottom line:</span>{' '}
          Launching a structured, multi-tier partner program positions Vault to capture partner-driven revenue that competitors are actively leaving on the table.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
