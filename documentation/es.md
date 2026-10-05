<!-- ELUCENIA technical documentation · estadiamento-kdigo · es · no clinical/professional/rights approval -->

# Estadificación KDIGO de la enfermedad renal crónica

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/estadiamento-kdigo)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### TFG estimada (o medida)

`tfg`

mL/min/1,73 m² · intervalo: 1–200

### Cociente albúmina/creatinina urinaria (CAC)

`rac`

mg/g · intervalo: 0–10000

## Edición del método

KDIGO 2024: CGA, 6 categorías TFG (G3a/b) × 3 albuminuria, mapa de calor; sin diagnóstico aislado

## Fórmula documentada

TFG (mL/min/1,73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

Albuminuria (RAC, mg/g): A1 \< 30 · A2 30–300 · A3 \> 300.

El riesgo sigue el mapa KDIGO: verde (bajo), amarillo (moderadamente aumentado), naranja (alto) y rojo (muy alto).

## Límites y población

La clasificación presupone enfermedad renal crónica establecida por alteraciones estructurales o funcionales renales persistentes durante al menos 3 meses. Sin otra evidencia de daño renal, G1 y G2 no establecen ERC. Una única TFGe o relación albúmina/creatinina alterada no confirma cronicidad. El mapa G/A presenta categorías de riesgo poblacional, no una probabilidad individual ni una indicación automática de tratamiento. En recién nacidos con enfermedad renal claramente establecida, como malformaciones congénitas graves de los riñones y las vías urinarias, KDIGO señala que no es necesario esperar 3 meses para confirmar la ERC. KDIGO 2024: la tabla 3 presenta A2 como 30–300 mg/g y A3 como \> 300 mg/g; la figura 13 presenta A2 como 30–299 mg/g y A3 como ≥ 300 mg/g. Esta herramienta utiliza la tabla 3 para las categorías de albuminuria. El valor exacto de 300 mg/g queda excluido de la comprobación de la frecuencia de seguimiento de la figura 13; la discrepancia documental requiere revisión.

## Referencias

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
