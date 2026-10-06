<!-- ELUCENIA technical documentation · estadiamento-kdigo · it · no clinical/professional/rights approval -->

# Stadiazione KDIGO della malattia renale cronica

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/estadiamento-kdigo)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### VFG stimata (o misurata)

`tfg`

mL/min/1,73 m² · intervallo: 1–200

### Rapporto albumina/creatinina urinaria (ACR)

`rac`

mg/g · intervallo: 0–10000

## Edizione del metodo

KDIGO 2024: CGA, 6 categorie VFG (G3a/b) × 3 albuminuria, mappa a colori; non diagnosi isolata

## Formula documentata

VFG (mL/min/1,73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

Albuminuria (ACR, mg/g): A1 \< 30 · A2 30–300 · A3 \> 300.

Rischio secondo la mappa KDIGO: verde (basso), giallo (moderatamente aumentato), arancione (alto), rosso (molto alto).

## Limiti e popolazione

La classificazione presuppone una malattia renale cronica stabilita da alterazioni strutturali o funzionali renali persistenti per almeno 3 mesi. Senza altre evidenze di danno renale, G1 e G2 non stabiliscono una MRC. Un singolo valore alterato di eGFR o del rapporto albumina/creatinina non conferma la cronicità. La mappa G/A presenta categorie di rischio della popolazione, non una probabilità individuale o un’indicazione automatica al trattamento. Nei neonati con malattia renale chiaramente stabilita, come gravi malformazioni congenite dei reni e delle vie urinarie, KDIGO precisa che non è necessario attendere 3 mesi per confermare la MRC. KDIGO 2024: la tabella 3 riporta A2 come 30–300 mg/g e A3 come \> 300 mg/g; la figura 13 riporta A2 come 30–299 mg/g e A3 come ≥ 300 mg/g. Questo strumento utilizza la tabella 3 per le categorie di albuminuria. Il valore esatto di 300 mg/g è escluso dalla verifica della frequenza di monitoraggio della figura 13; la discrepanza documentale richiede una revisione.

## Riferimenti

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

G1 A1: basso rischio

| Dettagli del risultato | |
| --- | --- |
| GFR | G1 · normale o alta |
| Albuminuria | A1 · normale o lievemente aumentata |
| Monitoraggio suggerito | 1* volta/e all’anno |

G1 o G2 con A1 è malattia renale cronica solo se è presente un altro marker di danno renale (sedimento, imaging, istologia) per più di 3 mesi.


### 2

G2 A2: rischio moderatamente aumentato

| Dettagli del risultato | |
| --- | --- |
| GFR | G2 · lievemente ridotta |
| Albuminuria | A2 · moderatamente aumentata |
| Monitoraggio suggerito | 1 volta/e all’anno |


### 3

G3a A2: rischio elevato

| Dettagli del risultato | |
| --- | --- |
| GFR | G3a · lievemente-moderatamente ridotta |
| Albuminuria | A2 · moderatamente aumentata |
| Monitoraggio suggerito | Non definita qui: la Tabella 3 e la Figura 13 usano limiti diversi a 300 mg/g. Verificare la fonte. |


### 4

G4 A1: rischio molto elevato

| Dettagli del risultato | |
| --- | --- |
| GFR | G4 · gravemente ridotta |
| Albuminuria | A1 · normale o lievemente aumentata |
| Monitoraggio suggerito | 3 volta/e all’anno |

GFR < 30 o albuminuria A3: inviare al nefrologo (KDIGO).

