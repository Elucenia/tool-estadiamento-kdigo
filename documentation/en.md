<!-- ELUCENIA technical documentation · estadiamento-kdigo · en · no clinical/professional/rights approval -->

# KDIGO chronic kidney disease staging

[conditions, sources and permissions](https://elucenia.org/en/tools/estadiamento-kdigo)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Estimated (or measured) GFR

`tfg`

mL/min/1.73 m² · range: 1–200

### Urine albumin-to-creatinine ratio (ACR)

`rac`

mg/g · range: 0–10000

## Method edition

KDIGO 2024: CGA, 6 GFR categories (G3a/b) × 3 albuminuria categories, heatmap; no standalone diagnosis

## Documented formula

GFR (mL/min/1.73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

Albuminuria (ACR, mg/g): A1 \< 30 · A2 30–300 · A3 \> 300.

Risk follows the KDIGO heatmap: green (low), yellow (moderately increased), orange (high) and red (very high).

## Limits and population

The classification presupposes chronic kidney disease established by structural or functional kidney abnormalities persisting for at least 3 months. Without other evidence of kidney damage, G1 and G2 do not establish CKD. A single abnormal eGFR or albumin-to-creatinine ratio does not confirm chronicity. The G/A map presents population risk categories, not an individual probability or an automatic indication for treatment. In newborns with clearly established kidney disease, such as severe congenital malformations of the kidneys and urinary tract, KDIGO notes that waiting 3 months to confirm CKD is not necessary. KDIGO 2024: Table 3 lists A2 as 30–300 mg/g and A3 as \> 300 mg/g; Figure 13 lists A2 as 30–299 mg/g and A3 as ≥ 300 mg/g. This tool uses Table 3 for albuminuria categories. The exact value of 300 mg/g is excluded from the verification of monitoring frequency in Figure 13; the discrepancy between the source documents requires review.

## References

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
