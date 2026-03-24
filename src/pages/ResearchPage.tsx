import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import VaultLogo from '../components/VaultLogo';

const sections = [
  {
    id: 'methodology',
    title: '1. Comparative Analysis of Research',
    content: `The synthesis of three independent research streams provides a comprehensive view of the market, with each source contributing its unique strengths:

**Wide-scope Research:** Provided maximum coverage (11 direct and 4 indirect competitors), in-depth legal analysis (GDPR, KYC/AML, FCA/ADGM), and detailed compensation model breakdowns.

**Business Analytics:** Contributed strong benchmarking (Airwallex, Rapyd, Nuvei), effectiveness metrics (LTV:CAC, conversions), and clear financial logic (impact on CAC and COGS). Identified Airwallex as the primary transparency benchmark.

**Program Mechanics Review:** Focused on program mechanics (hybrid, milestone-based), partnership classification (introducer vs affiliate vs ecosystem), and practical accounting nuances (ASC 340-40, IFRS 15). Highlighted the importance of anti-fraud measures and self-service portals.

**Key unified finding:** The BaaS partnership market is polarized. Most direct competitors either lack formal programs or hide their terms (relationship-driven). Meanwhile, large payment platforms (Stripe, Adyen, Airwallex) set the standard with transparent tiers, portals, and hybrid payouts. This creates a **first-mover advantage window** for Vault to launch a transparent and structured program.`,
  },
  {
    id: 'competitors',
    title: '2. Competitive Landscape',
    content: `Analysis of 11 direct competitors shows that **Wallester is the only benchmark** with a fully transparent and scalable affiliate program.

### 2.1 Direct Competitors (BaaS / Card Issuing)

| Company | Program Status | Compensation Model | Transparency |
|---|---|---|---|
| **Wallester** | Comprehensive | **Hybrid:** up to \u20AC200/lead OR 20-30% rev share. White Label: 5% of invoices for 2 years. | Full transparency via affiliate dashboard. |
| **Reap** | B2B Referral | **Credits:** $1,200 referrer + $800 referee (on $20K spend within 60 days). | Partial transparency, manual link distribution. |
| **Interlace** | B2B Partnership | Individual terms (up to $10,000 depending on company size). | Landing page with form, terms hidden. |
| **FINCI** | B2B Referral | Individual commission per successful onboarding. | Application form, rates hidden. |
| **OpenPayd** | Introducer | Individual rev share (visible from company job listings). | API tracking, rates hidden. |
| **Monavate / TRIBE** | Tech integrations only | No referral payouts. | Strategic partnerships only. |

### 2.2 Indirect Competitors (Consumer/Crypto Fintech)

Indirect competitors (Revolut, Crypto.com, Nexo, Wirex) demonstrate best practices in B2C and hybrid segments, actively using the **Impact.com** platform for affiliate management.

- **Revolut:** Clear separation between B2C (in-app) and B2B (Customer to Business) referral programs with limits and campaign windows.
- **Crypto.com:** Offers up to 50% of referee trading fees, but **limits payouts to 12 months** — standard practice to reduce long-term margin pressure.
- **Nexo:** Innovative model — percentage of portfolio (0.5% of balance) or installment payouts over 12 months.`,
  },
  {
    id: 'standards',
    title: '3. Industry Standards and Benchmarks',
    content: `In the Embedded Finance segment, three partnership classes stand out:

1. **Introducer / Referral (SMB):** Partner submits a lead, vendor closes the deal. Payment per lead (PPL) or hybrid.
2. **Reseller / Implementation (White Label):** Partner sells and implements. Payment — % of revenue (Rev Share).
3. **Ecosystem / Technology (BigFish):** Integrations, joint GTM. Payment — individual, often includes MDF (Market Development Funds).

### 3.1 Major Player Benchmarks

| Company | Tier Structure | Compensation Model | Key Innovation |
|---|---|---|---|
| **Airwallex** | Silver \u2192 Gold \u2192 Platinum | **10% \u2192 15% \u2192 20%** + $200 fixed (up to 3 years) | Most transparent rev share on the market. |
| **Stripe** | Verified \u2192 Premier | Rev share (hidden) + MDF for Premier | Certification as tier progression requirement. |
| **Adyen** | Technology / Service Partners | Referral rewards + Tech rev share | Lead routing through portal to Sales. |
| **Rapyd** | Maverick \u2192 Legend \u2192 Icon | Recurring commissions | Gamified tier naming. |

**Key insight:** The industry is moving away from "forever" payouts (lifetime rev share). The standard is becoming commissions payable over **12-36 months** or a hybrid model (fixed + percentage), which protects platform unit economics.`,
  },
  {
    id: 'financial',
    title: '4. Financial Model and Unit Economics',
    content: `### 4.1 P&L Accounting (ASC 340-40 / IFRS 15)

- **One-time payouts (Bounty / CPA):** Capitalized as customer acquisition costs (CAC) and amortized over client LTV. Reflected in P&L under Sales & Marketing.
- **Recurring Revenue Share:** Acts as a variable cost of revenue. Reflected as Gross Margin reduction (or in COGS). This is critically important: rev share permanently reduces margins over the entire payout horizon.

### 4.2 CAC and Economics by Segment

| Segment | Estimated Direct CAC | Target Partner CAC | Recommended Compensation Model |
|---|---|---|---|
| **SMB** (~1K users) | ~$1,450 | $500-$1,000 | **Fixed (Bounty):** $300-$750 per activated client. |
| **White Label** | ~$4,900 | $1,500-$3,000 | **Hybrid:** $1K-$3K fixed + 10-15% rev share (1-2 years). |
| **BigFish** (200K+ MAU) | ~$14,800 | $5,000-$10,000 | **Declining Rev Share:** 15% (Year 1) \u2192 10% (Year 2) \u2192 5% (Year 3). |

*Target LTV:CAC for the partner channel should be at least 3:1, ideally 4:1.*`,
  },
  {
    id: 'recommendation',
    title: '5. Recommended Program Structure for Vault',
    content: `Based on the transparency of Airwallex, the hybrid model of Wallester, and the ecosystem approach of Stripe, Vault should implement a **three-tier hybrid program**.

### 5.1 Partnership Tiers

| Parameter | Tier 1: Referral Partner | Tier 2: Growth Partner | Tier 3: Strategic Partner |
|---|---|---|---|
| **Requirements** | Registration, KYC/KYB | 5+ clients OR $50K ARR | 15+ clients OR $200K ARR |
| **Reward (SMB)** | $300 fixed per client | $500 fixed per client | $750 fixed per client |
| **Reward (White Label)** | $1,000 fixed + 10% (12 mo) | $2,000 fixed + 15% (12 mo) | $3,000 fixed + 20% (24 mo) |
| **Reward (BigFish)** | 10% rev share (12 mo) | 15% rev share (24 mo) | Individual (up to 36 mo) |
| **Support & GTM** | Self-service portal | Priority support | Dedicated AM, MDF budget, Co-marketing |

### 5.2 Payout Mechanics (Milestone-based)

To protect against fraud and empty registrations (as seen with Reap and Wallester), payouts should be tied to **proven value (activation)**:
- 30% of fixed payout — upon contract signing / KYB completion.
- 70% of fixed payout — upon reaching transaction threshold (e.g., $10K spend or 100 issued cards within the first 60 days).`,
  },
  {
    id: 'technical',
    title: '6. Technical and Legal Requirements',
    content: `### 6.1 Technical Infrastructure

- **Partner Dashboard:** Critical for transparency. Recommended to use ready-made SaaS solutions (PartnerStack for B2B or Impact.com) rather than building from scratch.
- **Lead Routing:** Portal integration with CRM (Zoho One — Zoho CRM + Zoho Campaigns). A lead from a partner should be automatically assigned to a Sales Manager (Adyen model).
- **Event Attribution:** API should transmit events (KYB passed, first funding) to the partner platform for automatic payout triggers.

### 6.2 Legal Framework (Compliance)

- **Partner Agreement:** Must include clear definition of a "qualified lead", brand usage rules (prohibition on paid search ads on brand keywords, as with Wirex), and anti-fraud provisions.
- **Clawback Clause:** Right to withhold or recover commission if the referred client churns within the first 90 days.
- **GDPR and Data Processing:** Partners act as data sources. DPA (Data Processing Agreements) required with all tracking platforms.
- **KYC/AML:** Partners (especially those receiving large payouts) must undergo KYB (Know Your Business) procedure, as implemented in Wallester's "Verified Partner" status.`,
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    content: `Launching a transparent, multi-tier partner program with a hybrid compensation model will allow Vault to stand out against competitors, most of whom operate under closed, manual schemes. The combination of fixed activation payouts (for quick incentives) and time-limited revenue share (for margin protection) will ensure scalable growth while keeping CAC within the target range of 30-50% of direct sales costs.

The window of opportunity is clear: only 1 of 11 direct competitors has a transparent partner program. By moving decisively, Vault can establish itself as the partner-friendly platform of choice in the BaaS/Embedded Finance space.`,
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-vault-dark text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-vault-dark/80 backdrop-blur-xl border-b border-vault-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-vault-muted hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <VaultLogo className="h-6 w-auto" />
          </Link>
          <Link
            to="/sources"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-vault-card text-vault-muted border border-vault-border hover:border-vault-border-hover hover:text-white transition-all"
          >
            <FileText size={14} />
            Sources
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="pill bg-vault-primary/10 text-vault-primary border border-vault-primary/25 text-xs">
              <BookOpen size={12} className="inline mr-1.5" />
              Full Research
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Partner & Referral Programs in BaaS/Embedded Finance
          </h1>
          <p className="text-lg text-vault-muted mb-6">
            Comprehensive research and strategy for Vault
          </p>
          <div className="flex items-center gap-4 text-sm text-vault-muted">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              March 2026
            </span>
            <span>Methodology: Synthesis of three independent research streams covering competitive analysis, industry benchmarks, and financial modeling.</span>
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 mb-12"
        >
          <h2 className="text-sm font-semibold text-vault-muted uppercase tracking-wider mb-4">Contents</h2>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm text-vault-text hover:text-white transition-colors py-1"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Sections */}
        {sections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-vault-border/50">
              {section.title}
            </h2>
            <div
              className="prose prose-invert max-w-none
                prose-p:text-vault-text prose-p:leading-relaxed
                prose-strong:text-white
                prose-h3:text-xl prose-h3:font-semibold prose-h3:text-white prose-h3:mt-8 prose-h3:mb-4
                prose-table:text-sm
                prose-th:text-vault-muted prose-th:font-semibold prose-th:uppercase prose-th:tracking-wider prose-th:text-xs prose-th:py-3 prose-th:px-4 prose-th:bg-vault-card/50 prose-th:border-vault-border
                prose-td:py-3 prose-td:px-4 prose-td:text-vault-text prose-td:border-vault-border/50
                prose-li:text-vault-text prose-li:leading-relaxed
                prose-ul:space-y-2
              "
              dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content) }}
            />
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-vault-border bg-vault-dark/80 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <VaultLogo className="h-5 w-auto" />
          <p className="text-xs text-vault-muted">
            Confidential. Prepared for internal strategic planning.
          </p>
        </div>
      </footer>
    </div>
  );
}

function markdownToHtml(md: string): string {
  let html = md;

  // Tables
  html = html.replace(/\n\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/g, (_match, header, body) => {
    const heads = header.split('|').map((h: string) => h.trim()).filter(Boolean);
    const rows = body.trim().split('\n').map((row: string) =>
      row.split('|').map((c: string) => c.trim()).filter(Boolean)
    );
    return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse">
      <thead><tr>${heads.map((h: string) => `<th class="text-left">${inlineFormat(h)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((row: string[]) => `<tr>${row.map((c: string) => `<td>${inlineFormat(c)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  });

  // H3
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');

  // Lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.+<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

  // Numbered lists
  html = html.replace(/^\d+\. \*\*(.+?)\*\*(.*)$/gm, '<li><strong>$1</strong>$2</li>');

  // Paragraphs (lines that aren't already wrapped)
  html = html.replace(/^(?!<[a-z]|$)(.+)$/gm, '<p>$1</p>');

  // Inline
  html = inlineFormat(html);

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');

  return html;
}

function inlineFormat(text: string): string {
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return text;
}
