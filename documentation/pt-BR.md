<!-- ELUCENIA technical documentation · estadiamento-kdigo · pt-BR · no clinical/professional/rights approval -->

# Estadiamento KDIGO da doença renal crônica

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/estadiamento-kdigo)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### TFG estimada (ou medida)

`tfg`

mL/min/1,73 m² · intervalo: 1–200

### Relação albumina/creatinina urinária (RAC)

`rac`

mg/g · intervalo: 0–10000

## Edição do método

KDIGO 2024:CGA,6 categorias TFG(G 3 a/b)×3 albuminúria, heatmap; sem diagnósticoisolado

## Fórmula documentada

TFG (mL/min/1,73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

Albuminúria (RAC, mg/g): A1 \< 30 · A2 30–300 · A3 \> 300.

O risco segue o mapa de calor da KDIGO: verde (baixo), amarelo (moderadamente aumentado), laranja (alto) e vermelho (muito alto).

## Limites e população

A classificação pressupõe doença renal crônica estabelecida por alterações estruturais ou funcionais renais persistentes por pelo menos 3 meses. Sem outra evidência de lesão renal, G1 e G2 não estabelecem DRC. Uma única TFGe ou relação albumina/creatinina alterada não confirma cronicidade. O mapa G/A apresenta categorias de risco populacional, não uma probabilidade individual ou uma indicação automática de tratamento. Em recém-nascidos com doença renal claramente estabelecida, como malformações congênitas graves dos rins e trato urinário, a KDIGO ressalva que não é necessário aguardar 3 meses para confirmar DRC. KDIGO 2024: a tabela 3 apresenta A2 como 30–300 mg/g e A3 como \> 300 mg/g; a figura 13 apresenta A2 como 30–299 mg/g e A3 como ≥ 300 mg/g. Esta ferramenta usa a tabela 3 para as categorias de albuminúria. O valor exato de 300 mg/g não integra a conferência da frequência de monitoramento da figura 13; a divergência documental requer revisão.

## Referências

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
