name: llc-monthly-summary

description: Categorize and summarize income and expense transactions for a single-member LLC, producing a clean monthly Profit & Loss report with observations. Use when a client provides a transaction list and needs it organized into a readable P&L with practical commentary.

user-invocable: false

# LLC Monthly P&L Summary

**Important**: This skill generates bookkeeping summaries to support tax preparation and client communication. These summaries are not a substitute for formal accounting records. The CPA should review all categorizations for accuracy and advise clients that deductions require adequate substantiation.

Categorization framework, output format, and observation guidance for producing monthly P&L summaries for single-member LLC clients.

---

## Language / Idioma

Before generating any summary, ask:

> "What language would you like this document in?
> 1. English
> 2. Spanish / Español
> 3. Both (English + Spanish / Inglés + Español)"

Generate the selected language version(s). For Spanish, use the categories, output format, and observation language in the **Español** section below. Use formal, neutral Spanish (*español neutro*) appropriate for all Spanish-speaking communities. Dollar amounts, IRS form numbers, and Schedule C line references remain in English/numeric form.

---

## Who This Is For

Single-member LLC owners who:
- Do their own informal bookkeeping (spreadsheet, bank export, or freeform list)
- Use this as a monthly check-in with their CPA
- Need a clean summary to understand their business finances
- Are preparing for estimated taxes or year-end tax preparation

This is not full-service bookkeeping. It's a structured summary to help the CPA and client stay on the same page month to month.

---

## Income Categories

Classify all revenue into one of the following buckets. If the client's business has a single income type, one line is sufficient; if there are multiple income streams, break them out.

| Category | Description |
|---|---|
| **Client Services / Fees** | Professional services, consulting fees, retainers, project-based work |
| **Product Sales** | Revenue from physical or digital products sold |
| **Commissions / Referral Fees** | Income earned for referring business or earning a percentage of a transaction |
| **Rental Income** | Income from renting equipment, space, or property within the business context |
| **Reimbursed Expenses** | Client payments that reimburse specific expenses (not profit — flag for CPA review) |
| **Other Business Income** | Any income that doesn't fit the above categories |

**Gross vs. Net Income Note:** If payment processors (Stripe, PayPal, Square) net out their fees before depositing, flag this. Income should be reported gross; processor fees are a separate expense. If the client only has deposit amounts, note the limitation.

---

## Expense Categories

Use Schedule C as the organizational framework since these will ultimately flow to the tax return. Standard categories:

| Category | Schedule C Line | Common Examples |
|---|---|---|
| **Advertising & Marketing** | Line 8 | Social media ads, Google Ads, business cards, website hosting, SEO tools |
| **Car & Truck (Mileage)** | Line 9 | Business miles at IRS rate; or actual vehicle expenses if that method is elected |
| **Commissions & Fees** | Line 10 | Amounts paid to subcontractors or referral partners; note: 1099-NEC may be required |
| **Contract Labor** | Line 11 | Payments to independent contractors for specific project work |
| **Depreciation** | Line 13 | Calculated separately — flag large equipment purchases for depreciation analysis |
| **Insurance** | Line 15 | Professional liability (E&O), general liability, business property insurance |
| **Legal & Professional Fees** | Line 17 | CPA/bookkeeping fees, attorney fees for business matters |
| **Office Expenses** | Line 18 | Office supplies, printer ink, postage, minor equipment under $2,500 |
| **Rent / Lease** | Line 20 | Coworking space, studio rental, equipment lease payments |
| **Repairs & Maintenance** | Line 21 | Repairs to business equipment or space |
| **Software & Subscriptions** | Line 22 (Other) | SaaS tools, apps, platforms used for business (QuickBooks, Zoom, Notion, Adobe, etc.) |
| **Meals (Business)** | Line 24b | 50% deductible; require business purpose and who was present |
| **Travel** | Line 24a | Airfare, hotel, transportation for business travel — not commuting |
| **Utilities** | Line 25 | Business phone, internet (business portion if also personal use) |
| **Wages & Payroll** | Line 26 | Wages paid to employees (not owner — owner draws are not deductible) |
| **Home Office** | Line 30 | If applicable: calculate based on dedicated workspace percentage of home |
| **Other Expenses** | Line 27 | Education/training, professional development, dues/subscriptions, bank fees, merchant processing fees |

### Categorization Rules

- **When in doubt, flag it** — add a "? - Needs Review" note rather than categorizing incorrectly
- **Mixed personal/business expenses** — do not assume a percentage; flag and ask the client for their business use estimate
- **Owner draws and transfers** — these are NOT business expenses; exclude from the P&L
- **Loan repayments** — principal payments are not expenses; interest is. Separate them if possible
- **Credit card payments** — these are transfers, not expenses; the underlying transactions are the expenses
- **Sales tax collected** — if the client collects sales tax, exclude it from income (it's a liability, not revenue)

---

## Output Format

### Section 1: Income Summary

```
INCOME
─────────────────────────────────────
Client Services / Fees        $5,200.00
Other Business Income            $75.00
─────────────────────────────────────
TOTAL INCOME                  $5,275.00
```

### Section 2: Expense Summary

Group by category, listed in Schedule C order where possible.

```
EXPENSES
─────────────────────────────────────
Software & Subscriptions        $85.99
  Notion                        $16.00
  QuickBooks                    $30.00
  LinkedIn Premium              $39.99
Advertising & Marketing         $45.00
Legal & Professional Fees          —
Office Expenses                 $47.00
Other Expenses                 $199.00
  Professional Development     $199.00
─────────────────────────────────────
TOTAL EXPENSES                 $376.99
```

Show subtotals by category and line items within each category if there are multiple items in a group.

### Section 3: Net Income

```
═════════════════════════════════════
NET INCOME                    $4,898.01
═════════════════════════════════════
```

### Section 4: Observations

3–5 concise, practical observations. These are the most valuable part of the summary for a solo CPA working with a client. Examples:

**Income observations:**
- "All income came from two clients — worth noting if either engagement ends. Consider whether income diversification is a priority."
- "This month's revenue is 40% higher than last month — is this a one-time project or a trend? May affect estimated tax payment for the quarter."

**Expense observations:**
- "Software subscriptions are the largest expense category at $86. Consider reviewing annually for unused tools."
- "No meal or travel expenses this month — if business meals occurred, make sure they're documented with date, attendees, and business purpose."
- "The $199 online course may qualify as a professional development deduction — confirm it's related to maintaining skills in your current profession, not starting a new career."

**Tax planning observations:**
- "Self-employment income of $4,898 this month would generate approximately $692 in self-employment tax. If this pace continues, check whether Q2 estimated payments are on track."
- "No home office deduction was identified. If you work from home in a dedicated space, this could be a meaningful deduction — let's calculate it."
- "A SEP-IRA or Solo 401(k) contribution could significantly reduce taxable income. Based on current year-to-date earnings, maximum contribution may be around $X — worth discussing before year-end."

### Section 5: Questions for the CPA

Flag any transactions that need clarification before the summary is finalized:

Examples:
- "Transaction on 3/14 for $250 at 'Amazon' — was this a business purchase? If so, what category?"
- "Payment to 'J. Smith Consulting' for $1,400 — is this a subcontractor? If so, a 1099-NEC may be required at year-end."
- "Deposit of $800 from 'Zelle' — is this business income or a personal transfer?"
- "Charge at 'Capital Grille' for $180 — business meal? If so, who was present and what was the business purpose?"

---

## Estimated Tax Reminder Language (Optional)

If the net income figure is significant, include a brief reminder:

"Based on this month's net income of $[X], your year-to-date business profit is trending toward $[X] annually. Self-employment tax runs approximately 15.3% on net earnings (up to the Social Security wage base), plus federal and state income tax. If you haven't made estimated payments recently, let's review whether a Q[X] payment is needed to avoid underpayment penalties."

---

## Notes for the CPA

- Month-to-month summaries are most useful when compared — note if this is the first month or if prior months are available for trend context
- The "Questions for the CPA" section should be removed before sharing the summary with a client, or handled as a separate discussion
- If the client has both LLC income and W-2 income, note that the full-year tax picture requires both
- S-Corp clients have additional considerations — owner W-2 wages, distributions, and basis are outside the scope of a simple monthly P&L summary

---

---

# Español / Spanish Templates

## Resumen Mensual de Pérdidas y Ganancias de LLC

### Categorías de Ingresos

Clasifique todos los ingresos en una de las siguientes categorías. Si el negocio del cliente tiene un solo tipo de ingreso, basta con una línea; si hay varias fuentes, desglóselas.

| Categoría | Descripción |
|---|---|
| **Servicios al Cliente / Honorarios** | Servicios profesionales, honorarios de consultoría, anticipos, trabajo por proyecto |
| **Ventas de Productos** | Ingresos por venta de productos físicos o digitales |
| **Comisiones / Honorarios por Referencia** | Ingresos ganados por referir negocios o por un porcentaje de una transacción |
| **Ingresos por Alquiler** | Ingresos por alquiler de equipo, espacio o propiedad dentro del contexto del negocio |
| **Gastos Reembolsados** | Pagos del cliente que reembolsan gastos específicos (no son utilidad — marcar para revisión del CPA) |
| **Otros Ingresos del Negocio** | Cualquier ingreso que no encaje en las categorías anteriores |

**Nota sobre Ingreso Bruto vs. Neto:** Si los procesadores de pago (Stripe, PayPal, Square) descuentan sus comisiones antes de depositar, márquelo. Los ingresos deben reportarse en bruto; las comisiones del procesador son un gasto separado. Si el cliente solo tiene los montos depositados, note la limitación.

---

### Categorías de Gastos

Use el Schedule C como marco organizativo, ya que estos gastos fluirán a la declaración de impuestos. Categorías estándar:

| Categoría | Línea del Schedule C | Ejemplos Comunes |
|---|---|---|
| **Publicidad y Mercadotecnia** | Línea 8 | Anuncios en redes sociales, Google Ads, tarjetas de presentación, hospedaje de sitio web, herramientas de SEO |
| **Automóvil y Camioneta (Millaje)** | Línea 9 | Millas de negocio a la tasa del IRS; o gastos reales del vehículo si se elige ese método |
| **Comisiones y Honorarios** | Línea 10 | Montos pagados a subcontratistas o socios de referencia; nota: puede requerir 1099-NEC |
| **Mano de Obra por Contrato** | Línea 11 | Pagos a contratistas independientes por trabajo específico |
| **Depreciación** | Línea 13 | Se calcula por separado — marcar compras grandes de equipo para análisis de depreciación |
| **Seguros** | Línea 15 | Responsabilidad profesional (E&O), responsabilidad general, seguro de propiedad del negocio |
| **Honorarios Legales y Profesionales** | Línea 17 | Honorarios de CPA/contabilidad, honorarios de abogado para asuntos del negocio |
| **Gastos de Oficina** | Línea 18 | Útiles de oficina, tinta de impresora, franqueo, equipo menor de menos de $2,500 |
| **Renta / Arrendamiento** | Línea 20 | Espacio de coworking, alquiler de estudio, pagos de arrendamiento de equipo |
| **Reparaciones y Mantenimiento** | Línea 21 | Reparaciones de equipo o espacio de negocio |
| **Software y Suscripciones** | Línea 22 (Otros) | Herramientas SaaS, aplicaciones, plataformas usadas para el negocio (QuickBooks, Zoom, Notion, Adobe, etc.) |
| **Comidas (de Negocios)** | Línea 24b | 50% deducible; requieren propósito comercial y quiénes estuvieron presentes |
| **Viajes** | Línea 24a | Boletos de avión, hotel, transporte para viajes de negocios — no para desplazamientos diarios |
| **Servicios Públicos** | Línea 25 | Teléfono de negocio, internet (porción del negocio si también es uso personal) |
| **Salarios y Nómina** | Línea 26 | Salarios pagados a empleados (no al dueño — los retiros del dueño no son deducibles) |
| **Oficina en Casa** | Línea 30 | Si aplica: calcular según el porcentaje del espacio dedicado del hogar |
| **Otros Gastos** | Línea 27 | Educación/capacitación, desarrollo profesional, cuotas/suscripciones, comisiones bancarias, comisiones de procesamiento |

### Reglas de Categorización

- **En caso de duda, márquelo** — agregue una nota "? - Requiere Revisión" en lugar de categorizar incorrectamente
- **Gastos mixtos personal/negocio** — no asuma un porcentaje; marque y pida al cliente su estimación de uso comercial
- **Retiros del dueño y transferencias** — NO son gastos del negocio; exclúyalos del P&L
- **Pagos de préstamos** — los pagos de capital no son gastos; los intereses sí lo son. Sepárelos si es posible
- **Pagos de tarjeta de crédito** — son transferencias, no gastos; las transacciones subyacentes son los gastos
- **Impuestos sobre ventas cobrados** — si el cliente cobra impuestos sobre ventas, exclúyalos de los ingresos (es un pasivo, no un ingreso)

---

### Formato de Salida

#### Sección 1: Resumen de Ingresos

```
INGRESOS
─────────────────────────────────────
Servicios al Cliente / Honorarios  $5,200.00
Otros Ingresos del Negocio            $75.00
─────────────────────────────────────
TOTAL DE INGRESOS                  $5,275.00
```

#### Sección 2: Resumen de Gastos

Agrupe por categoría, en el orden del Schedule C donde sea posible.

```
GASTOS
─────────────────────────────────────
Software y Suscripciones             $85.99
  Notion                             $16.00
  QuickBooks                         $30.00
  LinkedIn Premium                   $39.99
Publicidad y Mercadotecnia           $45.00
Honorarios Legales y Profesionales      —
Gastos de Oficina                    $47.00
Otros Gastos                        $199.00
  Desarrollo Profesional            $199.00
─────────────────────────────────────
TOTAL DE GASTOS                     $376.99
```

Muestre subtotales por categoría y partidas individuales dentro de cada categoría si hay varios conceptos.

#### Sección 3: Ingreso Neto

```
═════════════════════════════════════
INGRESO NETO                      $4,898.01
═════════════════════════════════════
```

#### Sección 4: Observaciones

De 3 a 5 observaciones concisas y prácticas. Ejemplos:

**Observaciones de Ingresos:**
- "Todos los ingresos provinieron de dos clientes — vale la pena notarlo si alguno de los compromisos termina. Considere si la diversificación de ingresos es una prioridad."
- "Los ingresos de este mes son 40% más altos que el mes pasado — ¿es un proyecto único o una tendencia? Puede afectar el pago de impuestos estimados del trimestre."

**Observaciones de Gastos:**
- "Las suscripciones de software son la categoría de gasto más grande con $86. Considere revisarlas anualmente para identificar herramientas sin uso."
- "No hubo gastos de comidas ni viajes este mes — si ocurrieron comidas de negocios, asegúrese de documentarlas con fecha, asistentes y propósito comercial."
- "El curso en línea de $199 puede calificar como deducción de desarrollo profesional — confirme que esté relacionado con mantener habilidades en la profesión actual, no con iniciar una nueva carrera."

**Observaciones de Planificación Fiscal:**
- "Ingresos por trabajo por cuenta propia de $4,898 este mes generarían aproximadamente $692 en impuestos sobre trabajo por cuenta propia. Si este ritmo continúa, verifique si los pagos estimados del Q2 están al día."
- "No se identificó una deducción por oficina en casa. Si trabaja desde casa en un espacio dedicado, esta podría ser una deducción significativa — calculémosla."
- "Una contribución a SEP-IRA o Solo 401(k) podría reducir significativamente los ingresos gravables. Según las ganancias acumuladas del año, la contribución máxima puede rondar los $X — vale la pena discutirlo antes de fin de año."

#### Sección 5: Preguntas para el CPA

Marque cualquier transacción que requiera aclaración antes de finalizar el resumen:

Ejemplos:
- "Transacción del 14/03 por $250 en 'Amazon' — ¿fue una compra de negocio? Si lo fue, ¿qué categoría?"
- "Pago a 'J. Smith Consulting' por $1,400 — ¿es un subcontratista? Si lo es, puede requerir 1099-NEC a fin de año."
- "Depósito de $800 desde 'Zelle' — ¿es ingreso del negocio o una transferencia personal?"
- "Cargo en 'Capital Grille' por $180 — ¿comida de negocios? Si lo fue, ¿quiénes estuvieron presentes y cuál fue el propósito comercial?"

---

### Recordatorio sobre Impuestos Estimados (Opcional)

Si la cifra de ingreso neto es significativa, incluya un breve recordatorio:

"Con base en el ingreso neto de este mes de $[X], su utilidad del negocio acumulada del año se proyecta en $[X] anuales. El impuesto sobre trabajo por cuenta propia es aproximadamente 15.3% sobre las ganancias netas (hasta el límite base del Seguro Social), más el impuesto federal y estatal sobre la renta. Si no ha realizado pagos estimados recientemente, revisemos si se necesita un pago del Q[X] para evitar multas por pago insuficiente."

---

### Notas para el CPA (Versión en Español)

- Los resúmenes de mes a mes son más útiles cuando se comparan — indique si es el primer mes o si hay meses previos disponibles para contexto de tendencia
- La sección "Preguntas para el CPA" debe eliminarse antes de compartir el resumen con el cliente, o manejarse como una discusión separada
- Si el cliente tiene ingresos tanto de LLC como de W-2, indique que el panorama fiscal del año completo requiere ambos
- Los clientes con S-Corp tienen consideraciones adicionales — salarios W-2 del dueño, distribuciones y base fiscal están fuera del alcance de un resumen mensual simple de P&L
