© 2026 Aakash Shah, CPA
Contact: aakash@aakashshahcpa.com

DISCLAIMER: This plugin generates draft documents and 
templates to assist licensed tax professionals. All 
output should be reviewed by a qualified CPA or tax 
professional before use with clients. This plugin does 
not constitute legal, tax, or financial advice and does 
not replace professional judgment.

---

# CPA Practice Toolkit

A Claude Cowork plugin for solo CPAs and small firms. Automates the most repetitive communication and preparation tasks in a tax practice — in English and Spanish.

> **Note**: All outputs should be reviewed and edited by the CPA before sending to clients or using in official documents. Tax law changes annually — verify that checklist items, form references, and deadline language reflect the current tax year.

---

## Bilingual Support / Soporte Bilingüe

Every skill in this plugin supports English and Spanish. After generating any document, Claude will ask:

> "What language would you like this document in?
> 1. English
> 2. Spanish / Español
> 3. Both (English + Spanish / Inglés + Español)"

Spanish output uses formal, neutral Spanish (*español neutro*) appropriate for all Spanish-speaking communities.

---

## Installation

```
claude plugins add cpa-practice-toolkit
```

---

## Commands

| Command | Description |
|---------|-------------|
| `/tax:client-checklist` | Generate a personalized document checklist based on the client's filing profile (W-2, 1099, single-member LLC, or combo) |
| `/tax:engagement-letter` | Draft an individual or business engagement letter with IRC §7216 language, portal-only submission, and fee range variables |
| `/tax:engagement-termination` | Draft a professional termination or declination letter with four reason options, work product status, and deadline warnings |
| `/tax:missing-docs-followup` | Write a polite but firm follow-up email for outstanding documents |
| `/tax:return-status-email` | Draft a status update email at any stage of the return workflow |
| `/llc:monthly-summary` | Categorize and summarize a list of business transactions into a monthly P&L with observations |

---

## Skills

| Skill | Description |
|-------|-------------|
| `client-checklist` | Document categories and items sourced from the firm's actual intake questionnaire — covers W-2, 1099, LLC, combo, foreign accounts, IP PINs, estimated payments, HSA, energy credits, education, and prior-year notices. English + Spanish. |
| `engagement-letter` | Individual and business engagement letter templates sourced from the firm's actual letters — includes IRC §7216 confidentiality, Form 8879 e-file authorization, portal-only submission, fee range variables, and termination clause. English + Spanish. |
| `engagement-termination` | Professional termination letter template with four reason options, work product status, outstanding fees, document return policy, transition-to-new-preparer guidance, and deadline warnings. English + Spanish. |
| `missing-docs-followup` | Tone calibration by urgency, plain-language document descriptions, and common follow-up scenarios. English + Spanish. |
| `return-status-email` | Email structure and language for all five return statuses: in-progress, awaiting-docs, ready-for-review, filed, and extended. English + Spanish. |
| `llc-monthly-summary` | Schedule C-aligned expense categories, P&L output format, observation framework, and estimated tax reminders. English + Spanish. |

---

## Pricing / Disponibilidad

| | Free | Pro |
|---|---|---|
| `/tax:client-checklist` | ✅ | ✅ |
| `/tax:missing-docs-followup` | ✅ | ✅ |
| `/tax:return-status-email` | ✅ | ✅ |
| `/tax:engagement-letter` | — | ✅ |
| `/tax:engagement-termination` | — | ✅ |
| `/llc:monthly-summary` | — | ✅ |
| Bilingual (English + Spanish) | — | ✅ |

**Pro version**: [GUMROAD LINK COMING SOON]

---

## Example Workflows

### Onboarding a New Client

1. Run `/tax:client-checklist llc` to generate an LLC owner document checklist
2. Run `/tax:engagement-letter "Jane Doe" | individual | 2024 | "$850" | "$1,050"` to draft the engagement letter
3. Upload both to the client portal to kick off the engagement

### Managing an Active Return

1. Run `/tax:return-status-email "Marcus Rivera" | in-progress | "W-2s and brokerage statements processed" | "waiting on K-1 from partnership"` to send a proactive update
2. When a document is missing: `/tax:missing-docs-followup "Marcus Rivera" | "K-1 from Riverside Partners LLC" | "April 3"`
3. When the return is done: `/tax:return-status-email "Marcus Rivera" | ready-for-review | "Federal 1040 and NY return drafted, refund $1,840" | "signature on Form 8879"`

### Ending an Engagement

1. Run `/tax:engagement-termination "Sarah Chen" | A | 2024`
2. Supply effective date, work status, outstanding balance, and deadline notes when prompted
3. Review the letter and upload to the client portal

### Monthly LLC Bookkeeping Check-In

1. Have the client send a list or export of the month's transactions
2. Run `/llc:monthly-summary [paste transactions]`
3. Review the categorized P&L and observations before sharing with the client

---

## Output Format Options

After generating any document, Claude will ask:

> "Would you like me to save this as a Word document, copy-ready text, or paste-ready portal format?"

---

## Customization

These skills use the firm's actual templates as a source of truth. To personalize further:

- **Hardcode your firm name and contact info** in the engagement letter and termination letter templates so variables are pre-filled
- **Adjust fee ranges** in the engagement letter skill to reflect your actual rate tiers
- **Add NYC-specific items** (Form NYC-202, MCTMT, PTET) to the checklist skill as your client base grows
- **Add state-specific disclosures** if you expand beyond New York

---

## About

**Author**: Aakash Shah, CPA — Aakash Shah CPA PPLC

Built for a solo CPA practice in New York serving personal tax clients and single-member LLC owners. Engagement letter and checklist skills are sourced from the firm's actual client-facing documents. Bilingual support added to serve Spanish-speaking clients with the same professional quality.
