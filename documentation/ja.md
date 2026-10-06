<!-- ELUCENIA technical documentation · estadiamento-kdigo · ja · no clinical/professional/rights approval -->

# KDIGO慢性腎臓病ステージ分類

[条件・出典・許諾](https://elucenia.org/ja/tools/estadiamento-kdigo)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 推算（または実測）糸球体濾過量

`tfg`

mL/min/1.73 m² · 範囲: 1–200

### 尿アルブミン/クレアチニン比（ACR）

`rac`

mg/g · 範囲: 0–10000

## 方法の版

KDIGO 2024：CGA，6 GFR区分（G3a/b）×3アルブミン尿区分，ヒートマップ；単独診断なし

## 記載された計算式

GFR (mL/min/1.73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

アルブミン尿（ACR，mg/g）: A1 \< 30 · A2 30–300 · A3 \> 300.

KDIGOヒートマップのリスク：緑（低），黄（中等度増加），橙（高），赤（非常に高）。

## 限界・対象集団

この分類は、腎臓の構造または機能の異常が少なくとも3か月持続し、慢性腎臓病が確立していることを前提とします。腎障害を示す他の証拠がなければ、G1とG2だけでは慢性腎臓病は確立しません。推算糸球体濾過量またはアルブミン/クレアチニン比の異常が1回認められただけでは、慢性であることは確認できません。G/Aのリスク図は集団レベルのリスク区分を示すものであり、個人の確率や自動的な治療適応を示すものではありません。 腎臓および尿路の重度の先天奇形など、腎疾患が明確に確立している新生児では、慢性腎臓病の確認のために3か月待つ必要はないとKDIGOは述べています。 KDIGO 2024：表3ではA2を30–300 mg/g、A3を\> 300 mg/gとし、図13ではA2を30–299 mg/g、A3を≥ 300 mg/gとしています。このツールはアルブミン尿区分に表3を用います。図13のモニタリング頻度の照合には、ちょうど300 mg/gという値を含めていません。原資料内の相違については確認が必要です。

## 参考文献

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

G1 A1：低リスク

| 結果の詳細 | |
| --- | --- |
| GFR | G1・正常または高値 |
| アルブミン尿 | A1・正常から軽度上昇 |
| 推奨されるモニタリング | 年1*回 |

G1またはG2でA1は、他の腎障害のマーカー（尿沈渣、画像、組織学）が3か月を超えて存在する場合にのみ慢性腎臓病である。


### 2

G2 A2：中等度増加リスク

| 結果の詳細 | |
| --- | --- |
| GFR | G2・軽度低下 |
| アルブミン尿 | A2・中等度上昇 |
| 推奨されるモニタリング | 年1回 |


### 3

G3a A2：高リスク

| 結果の詳細 | |
| --- | --- |
| GFR | G3a・軽度から中等度低下 |
| アルブミン尿 | A2・中等度上昇 |
| 推奨されるモニタリング | ここでは定めていません。表3と図13は300 mg/gで異なる境界を用いています。出典を確認してください。 |


### 4

G4 A1：非常に高いリスク

| 結果の詳細 | |
| --- | --- |
| GFR | G4 · 著しく低下 |
| アルブミン尿 | A1・正常から軽度上昇 |
| 推奨されるモニタリング | 年3回 |

GFR < 30 またはアルブミン尿 A3：腎臓内科医へ紹介する（KDIGO）。

