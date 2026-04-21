name: return-status-email

description: Draft a professional status update email informing a tax client of where their return stands. Use when proactively updating a client, responding to a "what's the status?" inquiry, or notifying a client of an action needed on their end. Covers all five status types: in-progress, awaiting-docs, ready-for-review, filed, and extended.

user-invocable: false

# Return Status Email

**Important**: This skill generates client communication drafts for review by the CPA. Adjust the specifics — refund amounts, filing dates, balance due figures — to reflect the actual return before sending.

Guidance for writing clear, professional status update emails across each stage of the tax preparation workflow.

---

## Language / Idioma

Before generating any email, ask:

> "What language would you like this document in?
> 1. English
> 2. Spanish / Español
> 3. Both (English + Spanish / Inglés + Español)"

Generate the selected language version(s). For Spanish, use the templates in the **Español** section below. Use formal, neutral Spanish (*español neutro*) appropriate for all Spanish-speaking communities.

---

## Why Status Emails Matter

Clients who don't hear from you assume nothing is happening. A brief, proactive status update:
- Reduces inbound "just checking in" calls and emails
- Builds trust that you're organized and on top of their return
- Sets expectations before a client is surprised by a refund, balance due, or delay
- Reduces no-shows on e-file authorization signatures

One email at each major milestone is enough. It doesn't have to be long.

## Status Types and Their Email Goals

### `in-progress`
**Goal:** Reassure the client that their return is actively being worked on. Nothing is needed from them right now.

Key elements:
- Confirm you received their documents
- Note that the return is in process
- Set a realistic timeline for when they'll hear next (e.g., "expect a draft within the next 5–7 business days")
- Do not commit to a specific completion date unless you're confident

**Tone:** Calm, organized, reassuring.

---

### `awaiting-docs`
**Goal:** Clearly communicate that work is on hold pending specific items from the client, without making them feel blamed.

Key elements:
- Acknowledge what has been received
- List specifically what's outstanding (use plain language — see missing-docs-followup skill)
- Give an internal cutoff date
- Note what happens if the deadline is missed (extension may be needed)

**Tone:** Friendly, practical. Not urgent unless the deadline is close.

---

### `ready-for-review`
**Goal:** Present the completed return, summarize the outcome, and prompt the client to review and sign.

Key elements:
- State clearly that the return is ready
- Summarize the result in plain language: "Your federal return shows a refund of $X" or "There is a balance due of $X payable to the IRS by April 15"
- Briefly note what's included (e.g., "Federal 1040 with Schedule C, New York IT-201")
- Explain the next step: client needs to review the return and sign Form 8879 (e-file authorization) before it can be filed
- Note the signing deadline — if there's a balance due, they must sign in time for payment to be made by April 15
- Provide instructions for how to access the return (portal link, PDF attached, etc.)

**Tone:** Positive and clear. This is the good news email — make it feel like a milestone.

---

### `filed`
**Goal:** Confirm the return has been accepted and the engagement is complete (or nearly so). Give the client everything they need to close the loop.

Key elements:
- Confirm federal and state returns were filed (give dates if possible)
- Note IRS/state acceptance if confirmed (e-file acknowledgment)
- Summarize the outcome: refund expected within X days / balance due was paid / estimated payments set up for next year
- Remind the client to save their copy of the return
- Note any action items: make estimated payments, save records for X years, watch for any IRS notices and forward them if received
- Thank them for the year

**Tone:** Warm and conclusive. This is the close-out email.

---

### `extended`
**Goal:** Notify the client that an extension has been filed, explain what that means, and reset expectations for the new deadline.

Key elements:
- State clearly that a six-month extension has been filed
- Explain what an extension does and does not do: it extends the *filing* deadline to October 15 — it does NOT extend the *payment* deadline (April 15)
- If a payment was estimated and made, confirm the amount
- If a balance may be owed but wasn't paid: recommend the client make a payment to avoid penalty and interest accumulation; provide IRS Direct Pay or state payment portal information
- Specify what is still needed to complete the return (if applicable)
- Give a new internal deadline for submitting remaining documents (aim for late summer to avoid an October crunch)
- Reassure the client that extensions are routine and do not trigger audits

**Tone:** Matter-of-fact and reassuring. Many clients think an extension is a problem — normalize it.

---

## Email Structure

### Subject Line
Be specific and include the tax year:
- "Your 2024 Federal and NY Return Is Ready for Review"
- "2024 Tax Return — Filed and Accepted"
- "2024 Tax Return — Extension Filed, What Happens Next"
- "Update on Your 2024 Tax Return"

### Salutation
Use first name unless the relationship warrants a more formal tone.

### Status Summary (First Paragraph)
State the status clearly in the opening sentence. Do not bury the headline. The client should know within two sentences why you're writing and what the situation is.

### Detail Breakdown
Use a short bulleted list to break down:
- What's been completed
- What the outcome is (refund, balance due, amount owed, estimated payments)
- What the client needs to do next (if anything)

### Next Steps / Deadline
If any action is required from the client, make it explicit:
- What they need to do
- How to do it (reply, sign via portal, call, etc.)
- By when

If no action is needed, say so: "No action is required on your end — just wanted to keep you informed."

### Sign-Off
Professional and warm. If the return is filed, the tone should be slightly warmer (it's the end of the engagement).

---

## Refund vs. Balance Due Language

**Refund:**
"Your federal return shows a refund of $[X]. Once filed and accepted, expect direct deposit within 10–21 days. You can track it at irs.gov/refunds."

**Balance Due:**
"Your federal return shows a balance due of $[X] to the IRS, due by April 15. [If filing in advance:] I'll include payment instructions when I send the return for your review." Avoid framing a balance due as bad news — it means the client didn't overpay during the year.

**Break-Even:**
"Your federal return is essentially break-even — [small refund of $X / small balance due of $X]."

---

## Common Mistakes to Avoid

- Sending the "filed" email before confirming IRS/state acceptance of the e-filed return (acknowledge receipt, not just submission)
- Quoting a refund or balance due amount without noting it may change if new information is received
- Forgetting to mention the state return outcome separately — clients often only think about federal
- Using the phrase "as discussed" — not everyone remembers phone conversations clearly
- Sending the ready-for-review email without clear instructions on how to access and sign the return

---

---

# Español / Spanish Templates

## Correo de Estado de la Declaración

### Líneas de Asunto (Subject Lines)

Sea específico e incluya el año fiscal:
- "Su Declaración Federal y Estatal 2024 Está Lista para Revisión"
- "Declaración de Impuestos 2024 — Presentada y Aceptada"
- "Declaración de Impuestos 2024 — Prórroga Presentada, Qué Sigue"
- "Actualización sobre Su Declaración de Impuestos 2024"

### Saludo

Use el nombre de pila a menos que la relación justifique un tono más formal ("Estimado/a Sr./Sra. [Apellido]").

---

## Tipo de Estado: `en-progreso` (in-progress)

**Objetivo:** Tranquilizar al cliente de que su declaración está en proceso. No se necesita nada de su parte en este momento.

**Tono:** Calmado, organizado, tranquilizador.

### Plantilla en Español

> Estimado/a [NOMBRE]:
>
> Le escribo para confirmar que hemos recibido sus documentos y que su declaración de impuestos 2024 ya está en proceso.
>
> Esperamos tener un borrador listo para su revisión dentro de los próximos 5 a 7 días hábiles. No se requiere ninguna acción de su parte en este momento — le avisaré en cuanto esté lista.
>
> Si tiene alguna pregunta mientras tanto, no dude en responder a este correo.
>
> Atentamente,
> [NOMBRE DEL PREPARADOR], CPA

---

## Tipo de Estado: `esperando-documentos` (awaiting-docs)

**Objetivo:** Comunicar claramente que el trabajo está en pausa en espera de elementos específicos, sin hacer sentir culpable al cliente.

**Tono:** Amable, práctico. No urgente a menos que la fecha límite esté cerca.

### Plantilla en Español

> Estimado/a [NOMBRE]:
>
> Le escribo para dar seguimiento a su declaración de impuestos 2024. Hemos recibido [LISTA DE DOCUMENTOS RECIBIDOS] y estamos avanzando, pero aún necesitamos lo siguiente para poder continuar:
>
> - [Documento faltante 1 — en lenguaje claro]
> - [Documento faltante 2 — en lenguaje claro]
> - [Documento faltante 3 — en lenguaje claro]
>
> Para completar su declaración antes del [FECHA LÍMITE DE PRESENTACIÓN], necesitaré recibir estos documentos faltantes antes del [FECHA INTERNA DE CORTE]. Si no los recibimos para esa fecha, presentaremos una prórroga de seis meses para evitar multas por presentación tardía.
>
> Puede responder a este correo con los documentos, o cargarlos al portal del cliente: [ENLACE].
>
> Atentamente,
> [NOMBRE DEL PREPARADOR], CPA

---

## Tipo de Estado: `listo-para-revisión` (ready-for-review)

**Objetivo:** Presentar la declaración completada, resumir el resultado e invitar al cliente a revisar y firmar.

**Tono:** Positivo y claro. Este es el correo de buenas noticias — que se sienta como un hito.

### Plantilla en Español

> Estimado/a [NOMBRE]:
>
> ¡Buenas noticias! Su declaración de impuestos 2024 está lista para su revisión.
>
> **Resumen:**
> - **Federal:** [Reembolso de $X / Saldo a pagar de $X al IRS]
> - **Estatal ([ESTADO]):** [Reembolso de $X / Saldo a pagar de $X]
> - **Incluye:** Federal 1040 con [anexos aplicables], y la declaración estatal de [ESTADO]
>
> **Próximo paso:** Por favor revise la declaración y firme el Formulario 8879 (autorización para presentación electrónica) antes de que podamos presentarla ante el IRS. Puede acceder al borrador y firmar electrónicamente aquí: [ENLACE DEL PORTAL].
>
> **Fecha límite para firmar:** [FECHA]. [Si hay saldo a pagar: Necesitamos su firma a tiempo para que el pago se realice antes del 15 de abril.]
>
> Si tiene cualquier pregunta sobre la declaración antes de firmar, con gusto la revisamos juntos — solo responda a este correo o llámeme al [TELÉFONO].
>
> Atentamente,
> [NOMBRE DEL PREPARADOR], CPA

---

## Tipo de Estado: `presentada` (filed)

**Objetivo:** Confirmar que la declaración fue aceptada y que el compromiso está concluido (o casi). Darle al cliente todo lo que necesita para cerrar el ciclo.

**Tono:** Cálido y conclusivo. Este es el correo de cierre.

### Plantilla en Español

> Estimado/a [NOMBRE]:
>
> Su declaración de impuestos 2024 ha sido presentada y aceptada. ¡Terminamos por este año!
>
> **Confirmación:**
> - **Federal:** Presentada el [FECHA], aceptada por el IRS el [FECHA]
> - **Estatal ([ESTADO]):** Presentada el [FECHA], aceptada el [FECHA]
> - **Resultado:** [Reembolso de $X esperado por depósito directo en 10 a 21 días / Saldo a pagar de $X procesado el FECHA / Pagos estimados configurados para 2025]
>
> **Por favor:**
> - Conserve su copia de la declaración con sus registros fiscales (recomendado: mínimo 3 años, idealmente 7)
> - Si recibe algún aviso del IRS o del estado, reenvíemelo antes de responder
> - [Si aplica: Los pagos estimados para 2025 vencen los días 15 de abril, junio, septiembre y enero]
>
> Puede rastrear su reembolso federal en irs.gov/refunds.
>
> Gracias por la confianza este año. Estamos a su disposición para cualquier pregunta que surja.
>
> Atentamente,
> [NOMBRE DEL PREPARADOR], CPA

---

## Tipo de Estado: `prórroga-presentada` (extended)

**Objetivo:** Notificar al cliente que se presentó una prórroga, explicar qué significa y restablecer las expectativas para la nueva fecha límite.

**Tono:** Directo y tranquilizador. Muchos clientes creen que una prórroga es un problema — normalícela.

### Plantilla en Español

> Estimado/a [NOMBRE]:
>
> Le escribo para confirmar que se presentó una prórroga de seis meses para su declaración de impuestos 2024. Su nueva fecha límite de presentación es el **15 de octubre de 2025**.
>
> **Qué significa una prórroga:**
> - Extiende la fecha límite de **presentación** hasta el 15 de octubre
> - **No** extiende la fecha límite de **pago** — cualquier saldo a pagar seguía siendo debido el 15 de abril
> - Las prórrogas son rutinarias y **no** aumentan la probabilidad de una auditoría
>
> **Estado del pago:**
> [Si se estimó y se pagó: Con base en nuestra mejor estimación, se realizó un pago de $X al IRS el 15 de abril para cubrir cualquier saldo a pagar.]
> [Si no se pagó: Recomendamos que realice un pago estimado al IRS lo antes posible para limitar la acumulación de intereses y multas. Puede pagar en irs.gov/payments usando "Direct Pay."]
>
> **Qué necesitamos para finalizar su declaración:**
> - [Documento faltante 1]
> - [Documento faltante 2]
>
> Para evitar una presentación apresurada en octubre, le pediría que envíe los documentos restantes antes del **[FECHA — idealmente fines de verano]**.
>
> Si tiene preguntas sobre la prórroga o los pasos siguientes, solo responda o llámeme.
>
> Atentamente,
> [NOMBRE DEL PREPARADOR], CPA

---

## Lenguaje de Reembolso vs. Saldo a Pagar

**Reembolso:**
"Su declaración federal muestra un reembolso de $[X]. Una vez presentada y aceptada, espere el depósito directo en 10 a 21 días. Puede rastrearlo en irs.gov/refunds."

**Saldo a Pagar:**
"Su declaración federal muestra un saldo a pagar de $[X] al IRS, con vencimiento el 15 de abril. [Si se presenta con anticipación:] Incluiré instrucciones de pago cuando le envíe la declaración para su revisión." Evite enmarcar un saldo a pagar como mala noticia — significa que el cliente no pagó de más durante el año.

**Sin Diferencia Significativa:**
"Su declaración federal está prácticamente equilibrada — [pequeño reembolso de $X / pequeño saldo a pagar de $X]."

---

## Errores Comunes que Evitar (Versión en Español)

- Enviar el correo de "presentada" antes de confirmar la aceptación del IRS/estado de la declaración presentada electrónicamente (confirme la aceptación, no solo el envío)
- Citar un monto de reembolso o saldo a pagar sin indicar que puede cambiar si se recibe nueva información
- Olvidar mencionar el resultado de la declaración estatal por separado — los clientes frecuentemente solo piensan en la federal
- Usar la frase "como ya discutimos" — no todos recuerdan con claridad las conversaciones telefónicas
- Enviar el correo de "listo para revisión" sin instrucciones claras sobre cómo acceder y firmar la declaración
