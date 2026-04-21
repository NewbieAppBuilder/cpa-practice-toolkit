Generate a personalized tax document checklist based on the client's filing profile.

## Usage

```
/tax:client-checklist [client type]
```

**Client types:** `w2`, `1099`, `llc`, `combo`

If no client type is provided, ask the user to specify before proceeding.

## Instructions

The user will provide one or more of the following client types:
- **W-2** — Traditional employee with wage income
- **1099** — Self-employed individual or independent contractor
- **Single-member LLC** — Business owner with a disregarded entity (Schedule C or S-Corp election)
- **Combo** — Any combination of the above (e.g., W-2 employee who also does freelance work)

Use the `client-checklist` skill to generate a complete, personalized document checklist.

Output the checklist as a clean, copy-pasteable document the CPA can send directly to the client. Use plain language the client will understand — avoid jargon like "Form 8889"; say "HSA contribution and distribution statements" instead.

Structure the output with:
1. A brief intro line (one sentence, professional tone)
2. Sections by category, each with a short header and bulleted items
3. A closing line noting the deadline or next step if one is known
