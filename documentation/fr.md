<!-- ELUCENIA technical documentation · estadiamento-kdigo · fr · no clinical/professional/rights approval -->

# Classification KDIGO de la maladie rénale chronique

[conditions, sources et autorisations](https://elucenia.org/fr/outils/estadiamento-kdigo)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### DFG estimé (ou mesuré)

`tfg`

mL/min/1,73 m² · intervalle: 1–200

### Rapport albumine/créatinine urinaire (RAC)

`rac`

mg/g · intervalle: 0–10000

## Édition de la méthode

KDIGO 2024 : CGA, 6 catégories DFG (G3a/b) × 3 albuminurie, carte thermique ; pas de diagnostic isolé

## Formule documentée

DFG (mL/min/1,73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

Albuminurie (RAC, mg/g): A1 \< 30 · A2 30–300 · A3 \> 300.

Le risque suit la carte KDIGO : vert (faible), jaune (modérément augmenté), orange (élevé) et rouge (très élevé).

## Limites et population

La classification suppose une maladie rénale chronique établie par des anomalies rénales structurelles ou fonctionnelles persistant pendant au moins 3 mois. Sans autre preuve de lésion rénale, G1 et G2 n’établissent pas une MRC. Une seule valeur anormale de DFG estimé ou du rapport albumine/créatinine ne confirme pas la chronicité. La carte G/A présente des catégories de risque populationnel, et non une probabilité individuelle ou une indication automatique de traitement. Chez les nouveau-nés dont la maladie rénale est clairement établie, par exemple en cas de malformations congénitales graves des reins et des voies urinaires, KDIGO précise qu’il n’est pas nécessaire d’attendre 3 mois pour confirmer la MRC. KDIGO 2024 : le tableau 3 présente A2 comme 30–300 mg/g et A3 comme \> 300 mg/g ; la figure 13 présente A2 comme 30–299 mg/g et A3 comme ≥ 300 mg/g. Cet outil utilise le tableau 3 pour les catégories d’albuminurie. La valeur exacte de 300 mg/g est exclue de la vérification de la fréquence de surveillance de la figure 13 ; la divergence documentaire nécessite une revue.

## Références

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
