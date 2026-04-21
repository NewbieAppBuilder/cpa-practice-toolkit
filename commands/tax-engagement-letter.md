Draft a professional tax engagement letter for a new or returning client.

## Usage

```
/tax:engagement-letter [client name] | [services] | [fee amount]
```

**Example:**
```
/tax:engagement-letter Sarah Chen | 1040 with Schedule C, NY state return | $850
```

If any of the three inputs are missing, ask for them before proceeding.

## Instructions

The user will provide:
- **Client name** — Individual's name or business owner's name
- **Services** — Description of tax services to be performed this engagement (e.g., "Federal 1040, Schedule C, New York IT-201")
- **Fee amount** — The agreed flat fee or estimated fee range for the engagement

Use the `engagement-letter` skill to produce a complete, professional engagement letter.

Output the letter ready to copy into email or a Word document. Do not add placeholder brackets like [DATE] — use the current date. Do not leave any fields blank.

The letter must include:
1. Date and client address block (use client name; note that mailing address can be added)
2. Salutation
3. Scope of services paragraph
4. Responsibilities of the CPA paragraph
5. Responsibilities of the client paragraph
6. Fee and payment terms paragraph
7. Limitation of liability and no-audit disclaimer
8. Signature block for the CPA and client acknowledgment line
