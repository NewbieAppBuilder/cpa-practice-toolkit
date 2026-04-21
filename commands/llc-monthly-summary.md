Generate a clean, categorized Profit & Loss summary from a list of income and expense transactions.

## Usage

```
/llc:monthly-summary [transactions]
```

Transactions can be provided as:
- A pasted list (date, description, amount)
- A CSV or tab-delimited export from a bank or accounting tool
- A freeform list of line items

**Example input:**
```
3/1 Client payment - ABC Corp $3,500
3/3 Notion subscription $16
3/5 Client payment - freelance project $1,200
3/8 Home office supplies - Staples $47
3/12 LinkedIn Premium $39.99
3/15 Mileage reimbursement $0 (tracked separately)
3/18 Client payment - retainer $2,000
3/22 Intuit QuickBooks $30
3/28 Professional development - online course $199
```

If no transactions are provided, ask the user to paste them before proceeding.

## Instructions

Use the `llc-monthly-summary` skill to categorize, total, and summarize the transactions.

Output:
1. **Income section** — all revenue line items, subtotaled
2. **Expense section** — categorized expense line items (see skill for standard categories), subtotaled
3. **Net income** — Income minus Expenses
4. **Observations** — 3–5 brief, practical observations about the month (notable income concentration, deductible expenses to document, anything that looks like it needs follow-up)
5. **Questions for the CPA** — flag any transactions that are ambiguous or may need clarification (e.g., a payment that could be personal or business, a large one-time expense)

Format as a clean table or structured report that a client could read, or that the CPA could drop into a client file.
