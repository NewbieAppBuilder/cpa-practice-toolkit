name: engagement-letter

description: Draft a professional tax engagement letter for individual or business clients. Handles both individual returns (Form 1040 with federal, NYS, and NYC) and business returns (S-Corp Form 1120-S, single-member LLC). Uses the firm's actual letter structure with IRC §7216 confidentiality language, portal-only document submission, Form 8879 e-file authorization, fee range variables, and termination clause. Bilingual: English and Spanish. Source of truth: firm's actual individual and business engagement letter templates.

user-invocable: false

# Tax Engagement Letter

**Important**: These are the firm's actual engagement letter templates. Review all variable fields before sending. Engagement letters are legal documents — do not alter scope limitation, confidentiality, or termination language without consulting your professional liability insurer.

After generating a letter, ask: "Would you like me to save this as a Word document, copy-ready text, or paste-ready portal format?"

---

## Language / Idioma

After generating any document, ask:

> "What language would you like this document in?
> 1. English
> 2. Spanish / Español
> 3. Both (English + Spanish / Inglés + Español)"

Generate the selected language version(s). For Spanish, use the templates in the **Español** section below. Use formal, neutral Spanish (*español neutro*) appropriate for all Spanish-speaking communities.

---

## Standard Terminology / Terminología Estándar

| English | Español |
|---|---|
| Tax return | Declaración de impuestos |
| Engagement letter | Carta de compromiso |
| Client | Cliente |
| Tax preparer | Preparador de impuestos |
| Income | Ingresos |
| Expense | Gastos |
| Deduction | Deducción |
| Credit | Crédito |
| Refund | Reembolso |
| Balance due | Saldo a pagar |
| Extension | Prórroga |
| Filing deadline | Fecha límite de presentación |
| Federal return | Declaración federal |
| State return | Declaración estatal |
| Self-employment | Trabajo por cuenta propia |
| LLC | Compañía de responsabilidad limitada (LLC) |
| Payroll | Nómina |
| Estimated taxes | Impuestos estimados |
| Withholding | Retención de impuestos |
| Schedule C | Anexo C |

---

## Required Input Variables

Before generating a letter, confirm all of the following are provided. If any are missing, ask for them.

| Variable | Description |
|---|---|
| `[FIRM NAME]` | Your firm's legal name |
| `[PREPARER NAME]` | CPA's name for signature block |
| `[FIRM EMAIL]` | Firm contact email |
| `[CLIENT NAME]` | Individual's name or business/owner name |
| `[TAX YEAR]` | Four-digit tax year (e.g., 2024) |
| `[STATE(S)]` | States for which returns will be prepared, or "no state return is required as you are a resident of a state with no individual income tax" |
| `[FEE RANGE LOW]` | Low end of estimated fee range (e.g., $750) |
| `[FEE RANGE HIGH]` | High end of estimated fee range (e.g., $950) |
| `[DATE]` | Date the letter is issued |
| Letter type | `individual` or `business` |

---

## Individual Engagement Letter Template

Use for: Form 1040 filers, including W-2 employees, 1099/self-employed, single-member LLC owners filing on Schedule C, and combo filers.

---

**[FIRM NAME]**
**[TAX YEAR] Individual Tax Return Engagement Letter**

**Date:** [DATE]

Dear [CLIENT NAME],

This letter confirms and specifies the terms of our engagement and clarifies the nature and extent of the services we will provide. To ensure a clear understanding of our mutual responsibilities, we ask that you review and acknowledge the following arrangements.

**SCOPE OF SERVICES**

We will prepare your [TAX YEAR] federal income tax return and, where applicable, state and local income tax returns for [STATE(S)], based on information you provide to us. We will not audit or otherwise verify the data you submit, although we may request clarification of some information.

**CLIENT RESPONSIBILITIES**

It is your responsibility to provide all information required for the preparation of complete and accurate returns. You should retain all documents, canceled checks, and other data that form the basis of income and deductions. You have final responsibility for the income tax returns and should review them carefully before signing.

**SCOPE LIMITATIONS**

Our work does not include any procedures designed to discover fraud, defalcations, or other irregularities. We will render such accounting and bookkeeping assistance as determined to be necessary solely for preparation of the income tax returns.

**PROFESSIONAL JUDGMENT**

We will use professional judgment in resolving questions where the tax law is unclear. Unless otherwise instructed, we will resolve such questions in your favor whenever possible.

**ELECTRONIC FILING AND SIGNATURE AUTHORIZATION**

We will electronically file your return upon receipt of all required e-file signature authorization forms. For federal returns this includes Form 8879. For state returns, applicable state e-file authorization forms will also be required prior to transmission. Your return will not be transmitted to any taxing authority until all required authorization forms have been signed and received.

**GOVERNMENT EXAMINATION**

Your returns may be selected for review by taxing authorities. In the event of a government tax examination or audit, our assistance is not included in this engagement and will be subject to a separate agreement and additional fees.

**CONFIDENTIALITY**

Our firm is committed to maintaining the confidentiality of your tax and financial information in accordance with IRC §7216 and applicable professional standards. We will not disclose your information to third parties without your consent, except as required by law or professional obligation.

**DATA SECURITY AND DOCUMENT SUBMISSION**

All documents must be submitted exclusively through our secure client portal. Please do not send sensitive documents via email. A portal access link will be provided separately.

**FEES**

Our fee for these services is estimated between [FEE RANGE LOW] and [FEE RANGE HIGH], based on the complexity of your return and time required at standard billing rates, plus any out-of-pocket expenses. The final fee will be confirmed upon completion and prior to filing. All invoices are due and payable upon presentation.

**TERMINATION**

Either party may terminate this engagement at any time upon written notice. You will be responsible for fees incurred for work completed through the date of termination. We will return all original documents provided to us. Work product prepared but not delivered remains the property of the firm until outstanding fees are paid.

**CONSUMER PROTECTION RIGHTS**

NY CPAs must provide NYS Publication 135. This disclosure is required for New York clients.

Sincerely,

[PREPARER NAME], CPA
[FIRM NAME]
[FIRM EMAIL]

---

*Understood, Acknowledged, and Agreed:*

Printed Name: ______________________________

Signature: ______________________________

Date: ______________________________

Additional returns requested: ______________________________

---

## Business Engagement Letter Template

Use for: S-Corp (Form 1120-S), partnerships (Form 1065), single-member LLCs with S-Corp election, or any business entity requiring a separate business return.

---

**[FIRM NAME]**
**[TAX YEAR] Business Tax Return Engagement Letter**

**Date:** [DATE]

Dear [CLIENT NAME],

This letter confirms and specifies the terms of our engagement and clarifies the nature and extent of the services we will provide to your business. To ensure a clear understanding of our respective responsibilities, we ask that you review and acknowledge the following arrangements.

**SCOPE OF SERVICES**

We will prepare the business's [TAX YEAR] federal income tax return and, where applicable, state and local income tax returns for [STATE(S)], including related schedules and information returns, based solely on information you provide to us.

Regarding state filing obligations: State tax treatment of S corporations varies by jurisdiction. A federal S corporation election (Form 2553) does not automatically confer S corporation status at the state level. Many states require a separate state-level S election. For example, New York requires Form CT-6 (Election by a Federal S Corporation to be Treated As a New York S Corporation) filed by March 15 of the tax year. Without a valid state election, the entity may be taxed as a C corporation at the state level regardless of federal S-Corp status. We will confirm all applicable state S corporation election requirements and filing obligations as part of this engagement.

Our services do not include auditing, reviewing, or otherwise verifying the accuracy or completeness of information submitted, although we may request clarification or additional documentation as needed.

**CLIENT RESPONSIBILITIES**

You are responsible for providing all information required for complete and accurate tax returns, including financial statements, supporting schedules, and records of income, expenses, assets, liabilities, capital contributions, distributions, and ownership information. You should retain all underlying documentation supporting the amounts reported. You are ultimately responsible for the contents of the tax returns and should review them carefully prior to signing and filing.

**SCOPE LIMITATIONS**

Our engagement does not include procedures designed to detect fraud, defalcations, or other irregularities. We may provide limited accounting or bookkeeping assistance only to the extent necessary to prepare the tax returns. This engagement does not constitute a compilation, review, or audit of financial statements under SSARS or any other professional standard.

**PROFESSIONAL JUDGMENT**

In situations where the tax law is unclear or subject to differing interpretations, we will apply professional judgment to determine an appropriate and supportable reporting position. Unless otherwise instructed, we will resolve such matters in a manner we believe to be reasonable and defensible under existing law.

**FILING DEADLINES AND EXTENSIONS**

You are responsible for providing complete and accurate information in a timely manner to allow preparation and filing by applicable deadlines. If all required information is not received with sufficient time to complete the returns by the original filing deadline, we may at our discretion prepare and file an extension. An extension of time to file does not extend the time to pay taxes due. You remain responsible for timely payment of all estimated taxes, balances due, penalties, and interest. We are not responsible for penalties or interest resulting from late, incomplete, or inaccurate information provided by you.

**COMMENCEMENT OF WORK**

Work will not commence and returns will not be finalized or filed until a fully executed engagement letter has been uploaded to the secure client portal and all required information has been received.

**ELECTRONIC FILING AND SIGNATURE AUTHORIZATION**

We will electronically file your return upon receipt of all required signature authorizations. For federal returns this includes the applicable IRS e-file authorization form. For state returns, applicable state e-file authorization forms will also be required prior to transmission. Your return will not be transmitted to any taxing authority until all required authorizations have been received and all outstanding fees have been paid.

**GOVERNMENT EXAMINATION**

Tax returns may be selected for examination by federal, state, or local taxing authorities. In the event of a tax examination, audit, or inquiry, our assistance is not included in this engagement and will be subject to a separate agreement and additional fees.

**CONFIDENTIALITY**

Our firm is committed to maintaining the confidentiality of your tax and financial information in accordance with IRC §7216 and applicable professional standards. We will not disclose your information to third parties without your consent, except as required by law or professional obligation.

**DATA SECURITY AND DOCUMENT SUBMISSION**

All documents must be submitted exclusively through our secure client portal. Please do not send sensitive documents via email. A portal access link will be provided separately.

**FEES**

Our fees for these services are estimated between [FEE RANGE LOW] and [FEE RANGE HIGH], based on the type of return prepared, complexity of the engagement, and time required at standard billing rates, plus any out-of-pocket expenses. The final fee will be confirmed upon completion and prior to filing. All invoices are due and payable upon presentation. If additional services are required such as payroll filings, sales tax returns, or advisory services, please notify us so that scope and fees may be discussed separately.

**TERMINATION**

Either party may terminate this engagement at any time upon written notice. You will be responsible for fees incurred for work completed through the date of termination. We will return all original documents provided to us. Work product prepared but not delivered remains the property of the firm until outstanding fees are paid.

Sincerely,

[PREPARER NAME], CPA
[FIRM NAME]
[FIRM EMAIL]

---

*Acknowledged, Understood, and Agreed:*

Business Name: ______________________________

Authorized Representative (Printed Name): ______________________________

Signature: ______________________________

Title: ______________________________

Date: ______________________________

Additional returns or services requested: ______________________________

---

## CPA Notes

**Choosing individual vs. business letter:**
- Use the individual letter for all Form 1040 filers, including self-employed Schedule C filers and single-member LLC owners whose LLC is a disregarded entity with no S-Corp election.
- Use the business letter when preparing a separate business return (Form 1120-S, Form 1065) in addition to or instead of the individual return.
- For an S-Corp owner, issue both letters — one for the 1120-S and one for the individual 1040. Fee ranges will differ.

**[STATE(S)] field guidance:**
- New York residents: "New York State (Form IT-201) and New York City (Form NYC-1127 if applicable)"
- New York City residents with W-2 income from NYC employment may owe NYC tax — confirm before finalizing scope
- Part-year residents: list each state with a brief note (e.g., "New York (part-year) and [State] (part-year)")
- If client moved mid-year, two part-year returns are required — adjust scope and fee range accordingly

**Fee range guidance:**
- Simple W-2 only: set a narrow range reflecting low complexity
- Add Schedule C, D, or E: widen the range to reflect potential additional time
- S-Corp + individual combo: list separate fee ranges in each respective letter
- If scope expands materially after the letter is signed (e.g., discovery of additional K-1s, crypto activity, rental property not previously disclosed), notify the client and issue an updated fee estimate before completing the work

**NYS Publication 135:**
- Required disclosure for New York clients — do not remove this section from the individual letter
- Provide the publication or a link to it along with the engagement letter

**Portal submission requirement:**
- Both letters require portal-only document submission — do not offer email as an alternative
- Remind clients at onboarding that the portal link will be sent separately if they have not yet received it

**S-Corp pre-engagement checklist:**
Before finalizing any business engagement letter for an S-Corp client, confirm:
1. Federal Form 2553 filed and IRS approval received
2. State S election filed if required (NY: Form CT-6 by March 15 of the tax year; NJ: separate state election required; some states do not recognize S-Corps at all and will tax the entity as a C corporation)
3. Any entity-level state franchise or minimum taxes that apply despite S-Corp status (e.g., New York imposes a fixed dollar minimum tax on S-Corps based on receipts; NYC does not recognize the federal S election and taxes S-Corps as C corporations for NYC corporate tax purposes)

---

---

# Español / Spanish Templates

## Carta de Compromiso — Individual

---

**[NOMBRE DE LA FIRMA]**
**Carta de Compromiso — Declaración de Impuestos Individual [AÑO FISCAL]**

**Fecha:** [FECHA]

Estimado/a [NOMBRE DEL CLIENTE]:

Esta carta confirma y especifica los términos de nuestro compromiso profesional y aclara la naturaleza y el alcance de los servicios que prestaremos. Para asegurar una comprensión clara de nuestras responsabilidades mutuas, le pedimos que revise y confirme los siguientes términos.

**ALCANCE DE LOS SERVICIOS**

Prepararemos su declaración federal de impuestos sobre la renta para el año [AÑO FISCAL] y, cuando corresponda, las declaraciones de impuestos estatales y locales para [ESTADO(S)], basándonos en la información que usted nos proporcione. No auditaremos ni verificaremos de otra manera los datos que presente, aunque podemos solicitar aclaración sobre cierta información.

**RESPONSABILIDADES DEL CLIENTE**

Es su responsabilidad proporcionar toda la información necesaria para la preparación de declaraciones completas y precisas. Debe conservar todos los documentos, cheques cancelados y otros datos que respalden sus ingresos y deducciones. Usted tiene la responsabilidad final sobre las declaraciones de impuestos y debe revisarlas cuidadosamente antes de firmarlas.

**LIMITACIONES DEL ALCANCE**

Nuestro trabajo no incluye ningún procedimiento diseñado para detectar fraude, malversaciones u otras irregularidades. Brindaremos la asistencia contable y de registro que se determine necesaria únicamente para la preparación de las declaraciones de impuestos sobre la renta.

**CRITERIO PROFESIONAL**

Utilizaremos criterio profesional para resolver preguntas en las que la ley tributaria no sea clara. A menos que se nos indique lo contrario, resolveremos dichas preguntas a su favor siempre que sea posible.

**PRESENTACIÓN ELECTRÓNICA Y AUTORIZACIÓN DE FIRMA**

Presentaremos su declaración de manera electrónica una vez que hayamos recibido todos los formularios de autorización de firma requeridos. Para las declaraciones federales, esto incluye el Formulario 8879. Para las declaraciones estatales, también se requerirán los formularios de autorización de presentación electrónica estatales correspondientes antes de la transmisión. Su declaración no será transmitida a ninguna autoridad tributaria hasta que todos los formularios de autorización requeridos hayan sido firmados y recibidos.

**REVISIONES GUBERNAMENTALES**

Sus declaraciones pueden ser seleccionadas para revisión por las autoridades tributarias. En caso de una revisión o auditoría tributaria gubernamental, nuestra asistencia no está incluida en este compromiso y estará sujeta a un acuerdo separado y honorarios adicionales.

**CONFIDENCIALIDAD**

Nuestra firma está comprometida a mantener la confidencialidad de su información tributaria y financiera de conformidad con la Sección 7216 del Código de Rentas Internas (IRC §7216) y las normas profesionales aplicables. No divulgaremos su información a terceros sin su consentimiento, excepto cuando sea requerido por la ley o una obligación profesional.

**SEGURIDAD DE DATOS Y ENVÍO DE DOCUMENTOS**

Todos los documentos deben enviarse exclusivamente a través de nuestro portal seguro para clientes. Por favor, no envíe documentos confidenciales por correo electrónico. Un enlace de acceso al portal se le proporcionará por separado.

**HONORARIOS**

Nuestros honorarios por estos servicios se estiman entre [HONORARIO MÍNIMO] y [HONORARIO MÁXIMO], según la complejidad de su declaración y el tiempo requerido a las tarifas de facturación estándar, más cualquier gasto de bolsillo. Los honorarios finales se confirmarán al finalizar el trabajo y antes de la presentación. Todas las facturas son pagaderas a la presentación.

**TERMINACIÓN**

Cualquiera de las partes puede terminar este compromiso en cualquier momento mediante notificación por escrito. Usted será responsable de los honorarios incurridos por el trabajo completado hasta la fecha de terminación. Le devolveremos todos los documentos originales que nos proporcionó. El trabajo preparado pero no entregado seguirá siendo propiedad de la firma hasta que se paguen los honorarios pendientes.

**DERECHOS DE PROTECCIÓN AL CONSUMIDOR**

Los CPAs de Nueva York deben proporcionar la Publicación 135 del Estado de Nueva York. Esta divulgación es requerida para los clientes de Nueva York.

Atentamente,

[NOMBRE DEL PREPARADOR], CPA
[NOMBRE DE LA FIRMA]
[CORREO ELECTRÓNICO DE LA FIRMA]

---

*Entendido, Reconocido y Aceptado:*

Nombre en letra de imprenta: ______________________________

Firma: ______________________________

Fecha: ______________________________

Declaraciones adicionales solicitadas: ______________________________

---

## Carta de Compromiso — Empresarial

---

**[NOMBRE DE LA FIRMA]**
**Carta de Compromiso — Declaración de Impuestos Empresarial [AÑO FISCAL]**

**Fecha:** [FECHA]

Estimado/a [NOMBRE DEL CLIENTE]:

Esta carta confirma y especifica los términos de nuestro compromiso profesional y aclara la naturaleza y el alcance de los servicios que prestaremos a su empresa. Para asegurar una comprensión clara de nuestras respectivas responsabilidades, le pedimos que revise y confirme los siguientes términos.

**ALCANCE DE LOS SERVICIOS**

Prepararemos la declaración federal de impuestos sobre la renta de la empresa para el año [AÑO FISCAL] y, cuando corresponda, las declaraciones de impuestos estatales y locales para [ESTADO(S)], incluyendo los anexos relacionados y declaraciones informativas, basándonos únicamente en la información que usted nos proporcione.

Respecto a las obligaciones de presentación estatal: El tratamiento fiscal estatal de las corporaciones S varía según la jurisdicción. Una elección federal de corporación S (Formulario 2553) no confiere automáticamente el estatus de corporación S a nivel estatal. Muchos estados requieren una elección estatal separada. Por ejemplo, Nueva York requiere el Formulario CT-6 presentado antes del 15 de marzo del año fiscal. Sin una elección estatal válida, la entidad puede ser gravada como una corporación C a nivel estatal independientemente del estatus federal de corporación S. Confirmaremos todos los requisitos de elección de corporación S estatal aplicables y las obligaciones de presentación como parte de este compromiso.

Nuestros servicios no incluyen la auditoría, revisión ni verificación de la exactitud o integridad de la información presentada, aunque podemos solicitar aclaraciones o documentación adicional según sea necesario.

**RESPONSABILIDADES DEL CLIENTE**

Usted es responsable de proporcionar toda la información necesaria para declaraciones de impuestos completas y precisas, incluyendo estados financieros, anexos de respaldo y registros de ingresos, gastos, activos, pasivos, contribuciones de capital, distribuciones e información de propiedad. Debe conservar toda la documentación subyacente que respalde los montos declarados. Usted es en última instancia responsable del contenido de las declaraciones de impuestos y debe revisarlas cuidadosamente antes de firmarlas y presentarlas.

**LIMITACIONES DEL ALCANCE**

Este compromiso no incluye procedimientos diseñados para detectar fraude, malversaciones u otras irregularidades. Podemos proporcionar asistencia contable o de registro limitada solo en la medida necesaria para preparar las declaraciones de impuestos. Este compromiso no constituye una compilación, revisión o auditoría de estados financieros bajo SSARS ni ningún otro estándar profesional.

**CRITERIO PROFESIONAL**

En situaciones donde la ley tributaria no esté clara o esté sujeta a diferentes interpretaciones, aplicaremos criterio profesional para determinar una posición de declaración apropiada y justificable. A menos que se nos indique lo contrario, resolveremos dichos asuntos de una manera que consideramos razonable y defendible bajo la ley vigente.

**PLAZOS DE PRESENTACIÓN Y PRÓRROGAS**

Usted es responsable de proporcionar información completa y precisa de manera oportuna para permitir la preparación y presentación antes de los plazos aplicables. Si no se recibe toda la información requerida con tiempo suficiente para completar las declaraciones antes de la fecha límite original de presentación, podemos a nuestra discreción preparar y presentar una prórroga. Una prórroga de tiempo para presentar no extiende el tiempo para pagar los impuestos adeudados. Usted sigue siendo responsable del pago oportuno de todos los impuestos estimados, saldos adeudados, multas e intereses. No somos responsables de multas o intereses resultantes de información tardía, incompleta o inexacta proporcionada por usted.

**INICIO DEL TRABAJO**

El trabajo no comenzará y las declaraciones no serán finalizadas ni presentadas hasta que una carta de compromiso completamente ejecutada haya sido cargada al portal seguro para clientes y toda la información requerida haya sido recibida.

**PRESENTACIÓN ELECTRÓNICA Y AUTORIZACIÓN DE FIRMA**

Presentaremos su declaración de manera electrónica una vez que hayamos recibido todas las autorizaciones de firma requeridas. Para las declaraciones federales, esto incluye el formulario de autorización de presentación electrónica del IRS aplicable. Para las declaraciones estatales, también se requerirán los formularios de autorización estatales correspondientes antes de la transmisión. Su declaración no será transmitida a ninguna autoridad tributaria hasta que todas las autorizaciones requeridas hayan sido recibidas y todos los honorarios pendientes hayan sido pagados.

**REVISIONES GUBERNAMENTALES**

Las declaraciones de impuestos pueden ser seleccionadas para revisión por las autoridades tributarias federales, estatales o locales. En caso de una auditoría, revisión o consulta tributaria, nuestra asistencia no está incluida en este compromiso y estará sujeta a un acuerdo separado y honorarios adicionales.

**CONFIDENCIALIDAD**

Nuestra firma está comprometida a mantener la confidencialidad de su información tributaria y financiera de conformidad con la Sección 7216 del Código de Rentas Internas (IRC §7216) y las normas profesionales aplicables. No divulgaremos su información a terceros sin su consentimiento, excepto cuando sea requerido por la ley o una obligación profesional.

**SEGURIDAD DE DATOS Y ENVÍO DE DOCUMENTOS**

Todos los documentos deben enviarse exclusivamente a través de nuestro portal seguro para clientes. Por favor, no envíe documentos confidenciales por correo electrónico. Un enlace de acceso al portal se le proporcionará por separado.

**HONORARIOS**

Nuestros honorarios por estos servicios se estiman entre [HONORARIO MÍNIMO] y [HONORARIO MÁXIMO], según el tipo de declaración preparada, la complejidad del compromiso y el tiempo requerido a las tarifas de facturación estándar, más cualquier gasto de bolsillo. Los honorarios finales se confirmarán al finalizar el trabajo y antes de la presentación. Todas las facturas son pagaderas a la presentación. Si se requieren servicios adicionales como presentaciones de nómina, declaraciones de impuestos sobre ventas o servicios de asesoría, por favor notifíquenos para que el alcance y los honorarios puedan discutirse por separado.

**TERMINACIÓN**

Cualquiera de las partes puede terminar este compromiso en cualquier momento mediante notificación por escrito. Usted será responsable de los honorarios incurridos por el trabajo completado hasta la fecha de terminación. Le devolveremos todos los documentos originales que nos proporcionó. El trabajo preparado pero no entregado seguirá siendo propiedad de la firma hasta que se paguen los honorarios pendientes.

Atentamente,

[NOMBRE DEL PREPARADOR], CPA
[NOMBRE DE LA FIRMA]
[CORREO ELECTRÓNICO DE LA FIRMA]

---

*Reconocido, Entendido y Aceptado:*

Nombre de la empresa: ______________________________

Representante autorizado (nombre en letra de imprenta): ______________________________

Firma: ______________________________

Título: ______________________________

Fecha: ______________________________

Declaraciones o servicios adicionales solicitados: ______________________________
