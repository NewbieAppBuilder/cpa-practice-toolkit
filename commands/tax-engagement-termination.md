Draft a professional engagement termination letter to formally disengage from a client.

## Usage

```
/tax:engagement-termination [client name] | [reason option] | [tax year]
```

**Reason options:** `A` (scope/information issues), `B` (professional judgment), `C` (client-initiated), `D` (custom)

**Example:**
```
/tax:engagement-termination Sarah Chen | A | 2024
```

If the client name or reason option is missing, ask for them before proceeding.

## Instructions

The user will provide:
- **Client name** — The client's full name or business name
- **Reason option** — One of the four options (A, B, C, or D); if D, ask for the custom language
- **Tax year** — The affected tax year, if applicable

Use the `engagement-termination` skill to generate the letter.

Before generating, ask the user for any missing variables from this list:
- Effective date of termination
- Work completed (or "None")
- Work in progress but not delivered (or "None")
- Returns filed on behalf of this client (or "None")
- Outstanding balance owed (or "None")
- Any upcoming filing deadlines the client should be aware of
- Whether an extension was filed on the client's behalf

Once all inputs are confirmed, generate the complete termination letter using the firm's template.

After generating the letter, ask: "Would you like me to save this as a Word document, copy-ready text, or paste-ready portal format?"
