Draft a polite but firm follow-up email to a client who has not yet provided outstanding documents.

## Usage

```
/tax:missing-docs-followup [client name] | [missing documents] | [deadline]
```

**Example:**
```
/tax:missing-docs-followup Marcus Rivera | brokerage 1099-B, health insurance premiums paid | April 10
```

If any of the three inputs are missing, ask for them before proceeding.

## Instructions

The user will provide:
- **Client name** — The client's first name or full name
- **Missing documents** — A comma-separated list of outstanding items
- **Deadline** — The date by which documents are needed (filing deadline, extension date, or internal cutoff)

Use the `missing-docs-followup` skill to write the follow-up email.

Tone: Warm and professional. Assume the client is not ignoring you — they are busy. The email should feel like a helpful reminder, not a collection notice. At the same time, be clear about the consequence of missing the deadline (extension may be required, additional fees may apply).

Output a ready-to-send email with:
1. Subject line
2. Greeting
3. Opening that acknowledges the progress made so far
4. Clear list of outstanding items
5. Specific deadline and consequence if not met
6. Easy call-to-action (reply, upload link placeholder, or call)
7. Professional sign-off
