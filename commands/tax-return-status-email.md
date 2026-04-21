Draft a professional status update email to keep a client informed about where their return stands.

## Usage

```
/tax:return-status-email [client name] | [status] | [what's done] | [what's pending]
```

**Statuses:** `in-progress`, `awaiting-docs`, `ready-for-review`, `filed`, `extended`

**Example:**
```
/tax:return-status-email Jennifer Tao | ready-for-review | Federal 1040 and NY return drafted, projected refund $1,240 | client signature on e-file authorization (Form 8879)
```

If inputs are missing, ask before proceeding.

## Instructions

The user will provide:
- **Client name** — The client's first name or full name
- **Status** — One of the five statuses listed above
- **What's done** — Completed work items (can be a short phrase or list)
- **What's pending** — Remaining items before the return is complete or filed

Use the `return-status-email` skill to write the status email.

Tone: Concise and professional. Clients do not need to understand every technical detail — summarize clearly. If the status is `ready-for-review` or `filed`, the tone should be positive. If `extended`, acknowledge the extension matter-of-factly without alarm.

Output a ready-to-send email with:
1. Subject line that includes the tax year and status (e.g., "Your 2024 Tax Return — Ready for Your Review")
2. Greeting
3. Clear status summary in plain language
4. Bulleted breakdown of what's complete and what's still needed
5. Specific next step and any deadline
6. Professional sign-off
