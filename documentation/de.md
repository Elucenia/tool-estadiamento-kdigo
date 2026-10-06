<!-- ELUCENIA technical documentation · estadiamento-kdigo · de · no clinical/professional/rights approval -->

# KDIGO-Stadieneinteilung der chronischen Nierenerkrankung

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/estadiamento-kdigo)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Geschätzte (oder gemessene) GFR

`tfg`

mL/min/1,73 m² · Bereich: 1–200

### Urin-Albumin-Kreatinin-Quotient (ACR)

`rac`

mg/g · Bereich: 0–10000

## Fassung der Methode

KDIGO 2024: CGA, 6 GFR-Kategorien (G3a/b) × 3 Albuminurie-Kategorien, Heatmap; keine alleinige Diagnose

## Dokumentierte Formel

GFR (mL/min/1,73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

Albuminurie (ACR, mg/g): A1 \< 30 · A2 30–300 · A3 \> 300.

Risiko gemäß KDIGO-Heatmap: grün (niedrig), gelb (mäßig erhöht), orange (hoch), rot (sehr hoch).

## Grenzen und Population

Die Klassifikation setzt eine chronische Nierenkrankheit voraus, die durch strukturelle oder funktionelle Nierenveränderungen über mindestens 3 Monate nachgewiesen ist. Ohne weitere Hinweise auf eine Nierenschädigung begründen G1 und G2 keine CKD. Ein einzelner auffälliger eGFR-Wert oder Albumin-Kreatinin-Quotient bestätigt keine Chronizität. Die G/A-Matrix zeigt Risikokategorien auf Populationsebene, keine individuelle Wahrscheinlichkeit oder automatische Behandlungsindikation. Bei Neugeborenen mit eindeutig festgestellter Nierenkrankheit, etwa schweren angeborenen Fehlbildungen der Nieren und Harnwege, weist KDIGO darauf hin, dass für die Bestätigung einer CKD nicht 3 Monate gewartet werden muss. KDIGO 2024: Tabelle 3 gibt A2 mit 30–300 mg/g und A3 mit \> 300 mg/g an; Abbildung 13 gibt A2 mit 30–299 mg/g und A3 mit ≥ 300 mg/g an. Dieses Werkzeug verwendet Tabelle 3 für die Albuminuriekategorien. Der genaue Wert von 300 mg/g ist von der Überprüfung der Überwachungshäufigkeit aus Abbildung 13 ausgenommen; die Abweichung zwischen den Quellen muss geprüft werden.

## Referenzen

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

G1 A1: niedriges Risiko

| Ergebnisdetails | |
| --- | --- |
| GFR | G1 · normal oder hoch |
| Albuminurie | A1 · normal bis leicht erhöht |
| Empfohlene Überwachung | 1* Mal pro Jahr |

G1 oder G2 mit A1 ist nur dann eine chronische Nierenerkrankung, wenn über mehr als 3 Monate ein anderer Marker für Nierenschädigung vorliegt (Sediment, Bildgebung, Histologie).


### 2

G2 A2: mäßig erhöhtes Risiko

| Ergebnisdetails | |
| --- | --- |
| GFR | G2 · leicht vermindert |
| Albuminurie | A2 · mäßig erhöht |
| Empfohlene Überwachung | 1 Mal pro Jahr |


### 3

G3a A2: hohes Risiko

| Ergebnisdetails | |
| --- | --- |
| GFR | G3a · leicht bis mäßig vermindert |
| Albuminurie | A2 · mäßig erhöht |
| Empfohlene Überwachung | Hier nicht festgelegt: Tabelle 3 und Abbildung 13 verwenden bei 300 mg/g unterschiedliche Grenzen. Prüfen Sie die Quelle. |


### 4

G4 A1: sehr hohes Risiko

| Ergebnisdetails | |
| --- | --- |
| GFR | G4 · stark vermindert |
| Albuminurie | A1 · normal bis leicht erhöht |
| Empfohlene Überwachung | 3 Mal pro Jahr |

GFR < 30 oder Albuminurie A3: an einen Nephrologen überweisen (KDIGO).

