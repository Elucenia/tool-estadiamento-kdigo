<!-- ELUCENIA technical documentation · estadiamento-kdigo · zh · no clinical/professional/rights approval -->

# KDIGO 慢性肾脏病分期

[条件、来源与许可](https://elucenia.org/zh/tools/estadiamento-kdigo)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 估算（或测量）肾小球滤过率

`tfg`

mL/min/1.73 m² · 范围: 1–200

### 尿白蛋白/肌酐比（ACR）

`rac`

mg/g · 范围: 0–10000

## 方法版本

KDIGO 2024：CGA，6个GFR类别（G3a/b）×3个白蛋白尿类别，热图；不能单独诊断

## 已记录的公式

肾小球滤过率 (mL/min/1.73 m²): G1 ≥ 90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 \< 15.

白蛋白尿（ACR，mg/g）: A1 \< 30 · A2 30–300 · A3 \> 300.

风险按KDIGO热图：绿色（低）、黄色（中度升高）、橙色（高）、红色（极高）。

## 限制与适用人群

本分类以已确定的慢性肾脏病为前提，即肾脏结构或功能异常持续至少3个月。若无其他肾损伤证据，G1和G2不能确立慢性肾脏病。单次异常的估算肾小球滤过率或白蛋白/肌酐比值不能确认其慢性性质。G/A风险图显示的是人群风险类别，不是个体概率，也不是自动治疗指征。 对于肾脏疾病已明确确立的新生儿，例如存在严重的肾脏和尿路先天畸形者，KDIGO指出，无须等待3个月即可确认慢性肾脏病。 KDIGO 2024：表3将A2列为30–300 mg/g、A3列为\> 300 mg/g；图13将A2列为30–299 mg/g、A3列为≥ 300 mg/g。本工具按表3确定白蛋白尿分级。对图13监测频次的核验不包括恰好300 mg/g这一数值；该文献内部差异仍需复核。

## 参考文献

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [Levey AS et al. The definition, classification, and prognosis of chronic kidney disease: a KDIGO Controversies Conference report. Kidney Int, 2011.](https://doi.org/10.1038/ki.2010.483)

- [KDIGO2024 CKD guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

G1 A1：低风险

| 结果详情 | |
| --- | --- |
| GFR | G1 · 正常或高 |
| 白蛋白尿 | A1 · 正常至轻度升高 |
| 建议监测 | 每年1*次 |

G1或G2伴A1只有在存在其他肾损伤标志物（尿沉渣、影像学、组织学）且持续超过3个月时，才属于慢性肾脏病。


### 2

G2 A2：中度增加风险

| 结果详情 | |
| --- | --- |
| GFR | G2 · 轻度下降 |
| 白蛋白尿 | A2 · 中度升高 |
| 建议监测 | 每年1次 |


### 3

G3a A2：高风险

| 结果详情 | |
| --- | --- |
| GFR | G3a · 轻度至中度下降 |
| 白蛋白尿 | A2 · 中度升高 |
| 建议监测 | 此处不予确定：表3与图13在300 mg/g处使用的界限不同。请核对来源。 |


### 4

G4 A1：极高风险

| 结果详情 | |
| --- | --- |
| GFR | G4 · 严重降低 |
| 白蛋白尿 | A1 · 正常至轻度升高 |
| 建议监测 | 每年3次 |

GFR < 30 或白蛋白尿 A3：转诊至肾内科医生（KDIGO）。

