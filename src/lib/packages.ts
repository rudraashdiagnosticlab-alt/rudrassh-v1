// Package detail pages (/packages/<slug>), taken from the rudraash.com package pages.
// Test names follow the old site with spelling fixed (e.g. "AHM" → "AMH", "Phosphorous" → "Phosphorus").

import type { Block, Topic } from "./content";

export type PackageVariant = { name: string; tests: string[] };

export type PackageDetail = {
  intro: string[];
  blocks?: Block[]; // extra context shown after the overview
  variants: PackageVariant[];
  offer?: { title: string; text: string; price: string };
  sample?: string;
  fasting?: string;
  homeCollection?: string;
  instructions?: { label: string; value: string }[];
  recommended: Topic[];
  closing?: string;
  related: string[]; // service slugs
};

const SERUM_EDTA_URINE = "Serum / clotted blood, EDTA & urine sample";

export const packageDetails: Record<string, PackageDetail> = {
  "diabetes-package": {
    intro: [
      "Type 2 diabetes is a chronic condition where the body either resists insulin or doesn't produce enough, causing elevated blood sugar levels. Over time, this can lead to serious complications like heart disease, nerve damage, kidney problems, and vision issues. Unlike type 1 diabetes, which is autoimmune, type 2 is primarily associated with lifestyle factors such as obesity, physical inactivity, and poor diet, though genetic predisposition also plays a role.",
      "Effective management focuses on lifestyle changes, including a balanced diet, regular exercise, and maintaining a healthy weight. In some cases, medication or insulin therapy may be necessary for optimal control, which requires constant monitoring of blood sugar levels. Our Diabetes package is curated to meet these needs and provide patient-centric diagnosis.",
    ],
    variants: [
      {
        name: "Diabetic Profile",
        tests: [
          "FBS – Fasting Blood Sugar",
          "PPBS – Post Prandial Blood Sugar",
          "HbA1c – 3 Months Average Sugar",
          "Hb – Hemoglobin",
          "RFT – Urea, Creatinine, Uric Acid",
          "Lipid Profile",
          "Urine Spot Microalbumin",
        ],
      },
    ],
    sample: "Fluoride plasma, EDTA, clotted blood / serum & spot urine",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      { title: "Patients with a known diabetic history" },
      { title: "People in the borderline or prediabetes stage" },
      { title: "Patients with clinical symptoms of diabetes" },
      { title: "Gender-specific risks, like gestational diabetes" },
    ],
    related: ["biochemistry"],
  },

  "cardiac-package": {
    intro: [
      "Cardiovascular diseases (CVDs) include conditions like coronary artery disease, heart attacks, strokes, heart failure, and hypertension, making them the leading global cause of death. Risk factors include high blood pressure, high cholesterol, diabetes, obesity, and genetic predisposition, often exacerbated by poor lifestyle habits such as unhealthy diets, physical inactivity, smoking, and excessive alcohol use. Symptoms vary but may include chest pain, shortness of breath, fatigue, irregular heartbeats, and leg swelling.",
      "Prevention focuses on a heart-healthy diet, regular exercise, maintaining a healthy weight, avoiding tobacco, managing stress, and regular monitoring of blood pressure, cholesterol, and blood sugar for early detection. Our Cardiac package is curated to meet these needs and provide early diagnosis of the condition.",
    ],
    variants: [
      {
        name: "Cardiac Profile – Basic",
        tests: [
          "FBS – Fasting Blood Sugar",
          "PPBS – Post Prandial Blood Sugar",
          "Hb – Hemoglobin",
          "RFT – Urea, Creatinine, Uric Acid",
          "Electrolytes – Na, K, Cl",
          "Lipid Profile",
          "SGPT",
          "TSH – Thyroid Stimulating Hormone",
          "Urine Routine Analysis",
        ],
      },
    ],
    sample: SERUM_EDTA_URINE,
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Adults over 40 or with risk factors",
        text: "Those over 40 should regularly monitor their blood pressure, cholesterol levels, and blood sugar, as the risk of CVDs increases with age.",
      },
      { title: "Individuals with a family history of CVDs" },
      { title: "Sedentary individuals with little or no physical activity" },
      { title: "People with unhealthy eating habits" },
    ],
    related: ["biochemistry", "hematology"],
  },

  "hypertension-profile": {
    intro: [
      "Hypertension, or high blood pressure, is a condition where the force of blood against the artery walls is consistently too high, often without symptoms. Known as the \"silent killer,\" it increases the risk of heart disease, stroke, and kidney failure.",
      "Normal blood pressure is under 120/80 mm Hg, while elevated blood pressure ranges from 120–129/80 mm Hg. Hypertension Stage 1 is 130–139/80–89 mm Hg, and Stage 2 is 140/90 mm Hg or higher. Contributing factors include genetics, aging, poor diet, physical inactivity, and excessive alcohol consumption. A family history of hypertension increases the risk of developing the condition.",
    ],
    variants: [
      {
        name: "Hypertension Profile – Basic",
        tests: [
          "Complete Blood Count (CBC)",
          "Complete Urine Examination (CUE)",
          "HOMA2-IR (Insulin Resistance Index)",
          "Blood Urea Nitrogen (BUN)",
          "Creatinine – Serum",
          "Uric Acid – Serum",
          "Electrolytes – Serum",
          "Estimated Glomerular Filtration Rate (eGFR)",
          "Creatine Kinase – Serum (CPK)",
          "Lipid Profile",
        ],
      },
    ],
    sample: SERUM_EDTA_URINE,
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with a family history of hypertension",
        text: "Those with a close relative who has high blood pressure are at higher risk.",
      },
      {
        title: "People with certain lifestyle factors",
        text: "Individuals who are overweight, physically inactive, consume excessive alcohol, or have a poor diet should monitor their blood pressure.",
      },
      { title: "Older adults", text: "Aging increases the risk of developing hypertension, so regular monitoring is crucial." },
      {
        title: "Those with other health conditions",
        text: "People with diabetes, kidney disease, or high cholesterol should also regularly check for high blood pressure.",
      },
    ],
    related: ["biochemistry", "clinical-pathology"],
  },

  "bone-health-profile": {
    intro: [
      "Bone health is crucial for overall well-being, providing structure, protecting organs, and storing calcium. To prevent conditions like osteoporosis, which weakens bones and increases fracture risk, it's essential to maintain bone health throughout life.",
      "Key factors include a diet rich in calcium and vitamin D, regular weight-bearing exercises, and healthy lifestyle choices such as avoiding smoking and excessive alcohol. Calcium-rich foods like dairy, leafy greens, and fortified products, along with sun exposure or vitamin D supplements, support bone health. Regular physical activity, like walking and resistance training, helps build bone density and maintain strength as we age.",
    ],
    variants: [
      {
        name: "Bone Health Profile",
        tests: [
          "CBC – Complete Blood Count",
          "Calcium",
          "Phosphorus",
          "Alkaline Phosphatase – Serum",
          "Uric Acid",
          "Vitamin D (25-OH)",
          "PTH – Intact",
          "Rheumatoid Factor (RA)",
          "Antinuclear Antibody – ANA",
          "CRP – C-Reactive Protein",
          "TSH – Thyroid Stimulating Hormone",
        ],
      },
    ],
    sample: SERUM_EDTA_URINE,
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      { title: "Children and adolescents", text: "To ensure proper growth and peak bone mass development." },
      { title: "Adults", text: "To preserve bone density and prevent early bone loss." },
      { title: "Postmenopausal women", text: "They are at a higher risk of osteoporosis due to reduced estrogen levels." },
      {
        title: "Individuals with risk factors",
        text: "Those with a family history of osteoporosis, sedentary lifestyles, poor diets, or conditions like vitamin D deficiency.",
      },
      { title: "Athletes and active individuals", text: "To maintain strong, healthy bones and reduce injury risk." },
    ],
    related: ["biochemistry", "hormones-endocrinology"],
  },

  "gut-health-package": {
    intro: [
      "Gut health is vital for digestion, nutrient absorption, and overall well-being. A healthy gut houses a diverse microbiome of beneficial bacteria that aid in breaking down food, producing essential vitamins, and protecting against harmful pathogens. Signs of good gut health include regular bowel movements, minimal bloating or gas, and no digestive discomfort.",
      "To support gut health, consume a fiber-rich diet with fruits, vegetables, whole grains, and fermented foods like yogurt, kefir, and sauerkraut, which encourage healthy bacteria. Staying hydrated, engaging in regular physical activity, and managing stress are also crucial for maintaining a balanced and properly functioning digestive system. The following tests help to assess gut health.",
    ],
    variants: [
      {
        name: "Gut Health Profile",
        tests: [
          "Complete Blood Count (CBC) – 31 parameters",
          "Amylase – Serum",
          "Lipase – Serum",
          "Liver Function Test (LFT) – 11 parameters",
          "Gamma Glutamyl Transferase (GGT)",
          "Anti-Helicobacter Pylori IgG",
          "Total IgE",
        ],
      },
    ],
    sample: SERUM_EDTA_URINE,
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with digestive issues",
        text: "Those experiencing bloating, gas, irregular bowel movements, or discomfort should focus on improving gut health.",
      },
      {
        title: "People with weakened immunity",
        text: "A healthy gut supports the immune system, making it essential for those prone to infections.",
      },
      {
        title: "Individuals with stressful lifestyles",
        text: "Chronic stress can disrupt the gut microbiome, so stress management and gut health go hand in hand.",
      },
      { title: "Older adults", text: "Aging can affect gut function, making it important to support digestion and nutrient absorption." },
      { title: "General population", text: "Everyone benefits from a balanced gut for improved digestion, energy, and overall health." },
    ],
    related: ["clinical-pathology", "biochemistry"],
  },

  "rheumatoid-arthritis-profile": {
    intro: [
      "The Rheumatoid Arthritis (RA) Profile is a comprehensive diagnostic tool used to identify and monitor rheumatoid arthritis and related conditions. This profile includes essential tests such as CBC, ESR, CRP, RF, and Anti-CCP to detect inflammation, immune system activity, and autoantibodies associated with RA.",
      "Tests like ANA screening and ASO help rule out other autoimmune or infectious conditions, while uric acid levels assist in differentiating gout from RA. Early detection through these tests is crucial for initiating timely treatment, preventing joint damage, and managing symptoms effectively. The RA Profile provides a detailed assessment to guide accurate diagnosis and personalized care.",
    ],
    variants: [
      {
        name: "Rheumatoid Arthritis Profile",
        tests: [
          "CBC – Complete Blood Count",
          "ESR – Erythrocyte Sedimentation Rate",
          "ASO – Antistreptolysin O",
          "RF – Rheumatoid Factor",
          "CRP – C-Reactive Protein",
          "ANA Screening",
          "Uric Acid",
          "Anti-CCP – Anti-Cyclic Citrullinated Peptide",
        ],
      },
    ],
    sample: "EDTA sample, clotted blood / serum",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with symptoms of RA",
        text: "Those experiencing joint pain, stiffness (especially in the morning), swelling, or reduced joint mobility.",
      },
      { title: "People with a family history of RA", text: "Genetic predisposition increases the risk of developing RA." },
      {
        title: "Individuals with chronic inflammation",
        text: "Persistent fatigue, fever, or signs of systemic inflammation may warrant testing.",
      },
      {
        title: "Patients suspected of autoimmune conditions",
        text: "To differentiate RA from other autoimmune or inflammatory disorders.",
      },
      { title: "Those with unexplained joint pain", text: "Helps in diagnosing RA, gout, or other joint-related conditions." },
    ],
    related: ["biochemistry", "hematology"],
  },

  "apla-profile": {
    intro: [
      "The Antiphospholipid Antibody (APLA) Profile is a diagnostic test used to detect the presence of antiphospholipid antibodies, which are associated with Antiphospholipid Syndrome (APS). This autoimmune disorder increases the risk of blood clots, pregnancy complications (such as recurrent miscarriages), and other vascular issues. The profile typically includes tests for Lupus Anticoagulant (LAC), Anti-Cardiolipin Antibodies (ACA), and Anti-Beta-2 Glycoprotein I Antibodies.",
    ],
    blocks: [
      {
        type: "checklist",
        title: "Purpose of testing",
        items: [
          "To diagnose APS or rule out similar conditions",
          "To investigate unexplained blood clots or recurrent pregnancy loss",
          "To assess the risk of thrombosis in individuals with autoimmune diseases like lupus",
        ],
        text: "Early detection aids in effective management and treatment.",
      },
    ],
    variants: [
      {
        name: "APLA Profile – Basic",
        tests: [
          "Anti-Cardiolipin – IgG",
          "Anti-Cardiolipin – IgM",
          "Anti-Phospholipid – IgG",
          "Anti-Phospholipid – IgM",
          "Lupus Anticoagulant",
        ],
      },
      {
        name: "APLA Profile – Premium",
        tests: [
          "Anti-Cardiolipin – IgG",
          "Anti-Cardiolipin – IgM",
          "Anti-Phospholipid – IgG",
          "Anti-Phospholipid – IgM",
          "Lupus Anticoagulant",
          "Beta-2 Glycoprotein – IgG",
          "Beta-2 Glycoprotein – IgM",
        ],
      },
    ],
    sample: "Clotted blood / serum & sodium citrate plasma (3.2%)",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with unexplained blood clots",
        text: "Those with a history of deep vein thrombosis (DVT), pulmonary embolism, or other thrombotic events.",
      },
      {
        title: "Women with pregnancy complications",
        text: "Those experiencing recurrent miscarriages, stillbirths, or preeclampsia.",
      },
      {
        title: "Patients with autoimmune conditions",
        text: "Particularly individuals with systemic lupus erythematosus (SLE) or other autoimmune disorders.",
      },
      {
        title: "People with unexplained neurological symptoms",
        text: "Such as strokes or transient ischemic attacks at a young age.",
      },
      { title: "Family history of APS", text: "Individuals with relatives diagnosed with Antiphospholipid Syndrome." },
    ],
    related: ["hematology", "serology-infectious-diseases"],
  },

  "fertility-profile-men-women": {
    intro: [
      "A fertility check-up is essential for men and women experiencing difficulty conceiving or planning for future parenthood. For women, it evaluates ovarian health, hormonal balance, egg reserve, and reproductive organ conditions like PCOS or fibroids. For men, it assesses sperm count, motility, morphology, and reproductive health.",
      "Factors like age, lifestyle, medical history, and unexplained infertility necessitate these evaluations. A fertility check-up helps identify underlying issues, enabling timely interventions such as lifestyle changes, medical treatments, or assisted reproductive techniques. Early testing improves the chances of successful conception, empowering individuals or couples to make informed decisions about their reproductive health.",
    ],
    variants: [
      {
        name: "Fertility Profile – Female",
        tests: [
          "Thyro-5 – T3, T4, TSH, FT3, FT4",
          "LH – Luteinizing Hormone",
          "FSH – Follicle-Stimulating Hormone",
          "PRL – Prolactin",
          "Progesterone",
          "Anti-Sperm Antibody",
          "AMH – Anti-Müllerian Hormone",
        ],
      },
      {
        name: "Fertility Profile – Male",
        tests: [
          "Thyro-5 – T3, T4, TSH, FT3, FT4",
          "LH – Luteinizing Hormone",
          "FSH – Follicle-Stimulating Hormone",
          "PRL – Prolactin",
          "E2 – Estradiol",
          "Testosterone – Total",
          "Anti-Sperm Antibody",
          "Semen Analysis",
        ],
      },
    ],
    offer: {
      title: "Bride & Groom Package",
      text: "Both fertility profiles above, along with Rh compatibility testing.",
      price: "₹7,000",
    },
    sample: "Female: clotted blood & serum · Male: clotted blood, serum & semen sample",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Couples struggling to conceive",
        text: "Those who have been trying to conceive for over a year (or six months for women over 35).",
      },
      {
        title: "Individuals with irregular menstrual cycles",
        text: "Women with irregular or absent periods may have underlying hormonal or ovulatory issues.",
      },
      {
        title: "Men with reproductive concerns",
        text: "Low sperm count, poor motility, or other factors affecting fertility.",
      },
      { title: "Women over 35", text: "Fertility declines with age, making early evaluation crucial." },
      {
        title: "Those with a medical history",
        text: "Conditions like PCOS, endometriosis, past pelvic surgeries, or sexually transmitted infections.",
      },
      { title: "Lifestyle risk factors", text: "Smoking, obesity, or high stress levels affecting reproductive health." },
    ],
    closing: "Early evaluation is vital for proactive management and improving conception chances.",
    related: ["hormones-endocrinology", "clinical-pathology"],
  },

  "pcos-profile": {
    intro: [
      "The PCOS (Polycystic Ovary Syndrome) Profile is a set of tests designed to diagnose and monitor PCOS, a hormonal disorder affecting women of reproductive age. It typically includes assessments for hormone levels, such as testosterone, LH/FSH ratio, DHEA-S, and insulin resistance, which can help identify irregularities common in PCOS.",
      "The profile may also include tests for blood sugar levels and cholesterol, as women with PCOS are at higher risk for metabolic issues. Early detection and management through lifestyle changes, medications, or hormone therapy can help regulate menstrual cycles, reduce symptoms, and improve fertility outcomes.",
    ],
    variants: [
      {
        name: "PCOS (Infertility) Profile – Basic",
        tests: [
          "FBS – Fasting Blood Sugar",
          "PPBS – Post Prandial Blood Sugar",
          "Urea",
          "Creatinine",
          "Lipid Profile",
          "LH – Luteinizing Hormone",
          "FSH – Follicle-Stimulating Hormone",
          "PRL – Prolactin",
          "E2 – Estradiol",
          "TSH – Thyroid Stimulating Hormone",
          "Testosterone – Total",
          "SHBG – Sex Hormone-Binding Globulin",
          "Insulin – Fasting",
          "DHEA-S – Dehydroepiandrosterone Sulfate",
        ],
      },
      {
        name: "PCOS (Infertility) Profile – Advanced",
        tests: [
          "FBS – Fasting Blood Sugar",
          "PPBS – Post Prandial Blood Sugar",
          "Urea",
          "Creatinine",
          "Lipid Profile",
          "LH – Luteinizing Hormone",
          "FSH – Follicle-Stimulating Hormone",
          "PRL – Prolactin",
          "E2 – Estradiol",
          "TSH – Thyroid Stimulating Hormone",
          "Testosterone – Total",
          "SHBG – Sex Hormone-Binding Globulin",
          "Insulin – Fasting",
          "DHEA-S – Dehydroepiandrosterone Sulfate",
          "AMH – Anti-Müllerian Hormone",
        ],
      },
    ],
    sample: "Fluoride plasma, EDTA sample, clotted blood & serum",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      { title: "Women with irregular periods", text: "Those who experience infrequent or absent menstrual cycles." },
      {
        title: "Women with symptoms of hormonal imbalance",
        text: "Such as excess facial or body hair (hirsutism), acne, or male-pattern hair loss.",
      },
      {
        title: "Women struggling with fertility",
        text: "Those facing difficulty conceiving, as PCOS is a common cause of infertility.",
      },
      { title: "Women with a family history of PCOS", text: "A family history increases the likelihood of developing PCOS." },
      {
        title: "Women with weight gain or insulin resistance",
        text: "PCOS is linked to obesity, metabolic syndrome, and insulin resistance.",
      },
      {
        title: "Women diagnosed with ovarian cysts",
        text: "Those diagnosed with cysts on their ovaries, often associated with PCOS.",
      },
    ],
    closing: "Early testing can help in diagnosis and tailored treatment plans.",
    related: ["hormones-endocrinology", "biochemistry"],
  },

  "anemia-profile": {
    intro: [
      "The Anemia Profile is a set of tests designed to diagnose the underlying causes of anemia, a condition where the body lacks enough healthy red blood cells to carry oxygen. It typically includes tests like Complete Blood Count (CBC), iron levels, ferritin, vitamin B12, folate, and reticulocyte count, to evaluate iron deficiency, vitamin deficiencies, or chronic disease-related anemia.",
      "The profile helps identify specific types of anemia, such as iron-deficiency anemia, pernicious anemia, or anemia related to chronic conditions like kidney disease. Early detection allows for targeted treatment, improving energy levels and overall health by addressing the root cause of anemia.",
    ],
    variants: [
      {
        name: "Anemia Profile",
        tests: [
          "CBC – Complete Blood Count",
          "PS – Peripheral Smear",
          "Iron",
          "TIBC – Total Iron Binding Capacity",
          "Ferritin",
          "Vitamin B12",
          "Folic Acid",
        ],
      },
    ],
    sample: "EDTA sample, clotted blood / serum",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with fatigue or weakness",
        text: "Unexplained tiredness, weakness, or low energy may indicate anemia.",
      },
      {
        title: "Pale or unexplained skin changes",
        text: "Pale skin, dizziness, or shortness of breath may be signs of a low red blood cell count.",
      },
      {
        title: "Women with heavy menstrual bleeding",
        text: "Excessive blood loss during menstruation can lead to iron-deficiency anemia.",
      },
      { title: "Pregnant women", text: "Pregnant women are at higher risk for anemia due to increased iron demands." },
      { title: "Individuals with a poor diet", text: "Those with inadequate intake of iron, vitamin B12, or folate." },
      {
        title: "Chronic disease patients",
        text: "People with conditions like kidney disease, inflammatory disorders, or cancer may develop anemia.",
      },
    ],
    related: ["hematology"],
  },

  "antenatal-profile": {
    intro: [
      "The Antenatal Profile (ANC) is crucial for ensuring the health and well-being of both the mother and baby during pregnancy.",
    ],
    blocks: [
      {
        type: "topics",
        title: "Why the antenatal profile matters",
        numbered: true,
        items: [
          {
            title: "Early detection of health issues",
            text: "Identifies potential problems like anemia, gestational diabetes, infections, or blood clotting issues early in the pregnancy, allowing for prompt intervention.",
          },
          {
            title: "Monitoring maternal and fetal health",
            text: "Regular screenings help monitor vital aspects like blood sugar levels, blood count, and the presence of any infections, which could impact the pregnancy and fetal development.",
          },
          {
            title: "Preventing complications",
            text: "ANC tests help prevent complications such as preeclampsia, premature birth, and intrauterine growth restriction by ensuring timely management.",
          },
          {
            title: "Planning for safe delivery",
            text: "Helps assess risks related to blood type incompatibility, infections, or clotting disorders, ensuring safe and informed delivery planning.",
          },
        ],
      },
      {
        type: "text",
        paragraphs: ["Overall, ANC profiling supports a healthy pregnancy, early detection, and effective management of any complications."],
      },
    ],
    variants: [
      {
        name: "Antenatal Profile",
        tests: [
          "CBC – Complete Blood Count",
          "RBS – Random Blood Sugar",
          "Blood Grouping",
          "BT, CT – Bleeding Time & Clotting Time",
          "Rapid Card – VDRL, HBsAg, HIV, HCV",
          "Urine Routine Analysis",
        ],
      },
    ],
    sample: "Fluoride plasma, EDTA, clotted blood / serum & spot urine",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      { title: "All pregnant women", text: "To monitor the health of both the mother and baby throughout pregnancy." },
      {
        title: "Early pregnancy check-up",
        text: "To detect any underlying issues or infections early, ensuring the safety of the pregnancy.",
      },
      {
        title: "Women with risk factors",
        text: "Those with a history of gestational diabetes, hypertension, or preeclampsia should undergo regular screenings.",
      },
      {
        title: "Women with pre-existing health conditions",
        text: "Such as diabetes, thyroid disorders, or infections, to assess any impact on the pregnancy.",
      },
      {
        title: "Women with complicated pregnancies",
        text: "For detecting potential risks like anemia, infections, or abnormal blood sugar levels.",
      },
    ],
    closing: "Regular ANC testing helps identify and manage potential health issues, ensuring a safe and healthy pregnancy.",
    related: ["genetic-studies", "hematology"],
  },

  "hepatitis-screening-test": {
    intro: [
      "The Hepatitis Profile is crucial for diagnosing various types of hepatitis infections (A, B, C, E) and determining their stage, immunity, or potential risks. Tests like Anti-HBs and HBeAg help assess immunity and active infection with Hepatitis B, while HBsAg and HBcAb-Total detect current or past Hepatitis B infections. Anti-HCV screens for Hepatitis C exposure, and HAV-IgM and HEV-IgM identify acute infections of Hepatitis A and E, respectively.",
      "These tests are important for early detection, monitoring disease progression, and preventing transmission, especially for high-risk individuals. The profile aids in determining the need for treatment or vaccination.",
    ],
    variants: [
      {
        name: "Hepatitis Marker",
        tests: [
          "HBeAg – Hepatitis B Envelope Antigen",
          "Anti-HBe – Hepatitis B Envelope Antibody",
          "HBcAb Total – Hepatitis B Core Antibody",
          "HBsAg – Hepatitis B Surface Antigen",
          "Anti-HBs – Hepatitis B Surface Antibody Titer",
        ],
      },
      {
        name: "Hepatitis Profile",
        tests: [
          "Anti-HBe – Hepatitis B Envelope Antibody",
          "HBeAg – Hepatitis B Envelope Antigen",
          "Anti-HBs – Hepatitis B Surface Antibody Titer",
          "HBsAg – Hepatitis B Surface Antigen",
          "HBcAb Total – Hepatitis B Core Antibody",
          "HAV IgM – Hepatitis A Virus",
          "HEV IgM – Hepatitis E Virus",
          "Anti-HCV – Hepatitis C Antibody",
        ],
      },
    ],
    sample: "Clotted blood / serum – 2 samples",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals at risk of hepatitis",
        text: "Those with a history of unprotected sex, drug use, or exposure to contaminated needles.",
      },
      {
        title: "Healthcare workers",
        text: "Due to frequent exposure to blood and bodily fluids, they are at higher risk for hepatitis infections.",
      },
      {
        title: "People with liver disease symptoms",
        text: "Such as jaundice, fatigue, abdominal pain, or unexplained weight loss.",
      },
      {
        title: "Patients with a history of blood transfusions",
        text: "Especially those before 1992, as blood screening practices have evolved.",
      },
      { title: "People with a family history of hepatitis", text: "A family history of chronic hepatitis increases risk." },
      {
        title: "Pregnant women",
        text: "Screening for Hepatitis B and C is recommended to prevent mother-to-child transmission.",
      },
    ],
    closing: "Testing helps in early detection, prevention, and monitoring of hepatitis infections.",
    related: ["serology-infectious-diseases", "microbiology-molecular-biology"],
  },

  "vitamin-profile": {
    intro: [
      "Testing for Vitamin D and Vitamin B12 is important for maintaining overall health. Vitamin D is crucial for bone health, calcium absorption, immune function, and reducing inflammation. A deficiency can lead to osteoporosis, muscle weakness, and increased risk of chronic diseases like cardiovascular conditions and diabetes.",
      "Vitamin B12 plays a key role in red blood cell production, nerve health, and energy levels. Low B12 can cause anemia, fatigue, nerve damage, and cognitive issues. Regular testing helps identify deficiencies early, enabling timely interventions through diet, supplementation, or lifestyle changes, preventing long-term health problems.",
    ],
    variants: [{ name: "Vitamin Profile", tests: ["Vitamin B12", "Vitamin D (25-OH)"] }],
    sample: "Clotted blood / serum",
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with bone or joint issues",
        text: "Those experiencing bone pain, weakness, or frequent fractures may have vitamin D deficiency.",
      },
      {
        title: "People with fatigue or weakness",
        text: "Low levels of vitamin B12 can cause fatigue, weakness, and energy issues.",
      },
      {
        title: "Individuals with a poor diet",
        text: "Those with limited exposure to sunlight or who follow restrictive diets (e.g., vegans) may be at risk for vitamin D and B12 deficiencies.",
      },
      { title: "Older adults", text: "Aging affects vitamin D absorption and B12 metabolism." },
      {
        title: "People with medical conditions",
        text: "Conditions like gastrointestinal disorders, diabetes, and certain autoimmune diseases can impact vitamin absorption.",
      },
      { title: "Pregnant or breastfeeding women", text: "Both vitamins are essential for maternal and fetal health." },
    ],
    closing: "Regular testing ensures proper levels, promoting better health and preventing deficiency-related complications.",
    related: ["biochemistry"],
  },

  "master-health-check-up": {
    intro: [
      "A Master Health Check-up is crucial for proactive health management and disease prevention. It helps in early detection of conditions like diabetes, heart disease, and hypertension, which can be managed better with timely intervention. This comprehensive screening covers a variety of tests, including blood tests, imaging, and organ function assessments, offering a holistic view of your health.",
      "It also allows for personalized health insights, taking into account individual risks and medical history. Regular check-ups can help prevent chronic diseases, maintain overall well-being, and offer peace of mind, ensuring that health issues are addressed before they escalate.",
    ],
    variants: [
      {
        name: "Master Health Check Up – Men",
        tests: [
          "Complete Blood Count",
          "Urine Routine",
          "Fasting Sugar",
          "Post Prandial Sugar",
          "HbA1c",
          "TSH",
          "Urea",
          "Creatinine",
          "Lipid Profile",
          "Liver Function Test",
          "ECG",
          "ECHO",
          "Doctor's Consultation",
        ],
      },
      {
        name: "Master Health Check Up – Women",
        tests: [
          "Complete Blood Count",
          "Urine Routine",
          "Fasting Sugar",
          "Post Prandial Sugar",
          "HbA1c",
          "TSH",
          "Urea",
          "Creatinine",
          "Lipid Profile",
          "Liver Function Test",
          "ECG",
          "ECHO",
          "Calcium",
          "Serum Iron",
          "Vitamin D (25-OH)",
          "CA 125",
          "USG – Pelvis",
          "PAP Smear (if needed)",
          "Consultation by Gynecologist",
        ],
      },
    ],
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Men and women aged 30+",
        text: "Regular screenings become crucial as the risk for chronic diseases like heart disease, diabetes, and hypertension increases with age.",
      },
      {
        title: "People with a family history of health conditions",
        text: "If you have a family history of heart disease, diabetes, cancer, or other serious conditions, routine check-ups are essential for early detection.",
      },
      {
        title: "Sedentary lifestyle",
        text: "Both men and women with limited physical activity should monitor their health to prevent conditions like obesity, high cholesterol, or diabetes.",
      },
      {
        title: "Smokers and heavy drinkers",
        text: "Those who smoke or consume alcohol regularly should get check-ups to assess their risk for lung disease, liver problems, and cardiovascular issues.",
      },
      {
        title: "Unexplained symptoms",
        text: "If you are experiencing unexplained symptoms such as fatigue, weight changes, or pain, a health check-up can help identify potential causes.",
      },
      {
        title: "Those seeking preventive care",
        text: "Anyone looking to proactively manage their health and prevent future issues should consider a regular health check-up.",
      },
    ],
    closing:
      "This comprehensive screening benefits both men and women by identifying health issues early, helping to maintain overall well-being.",
    related: ["biochemistry", "hematology", "clinical-pathology"],
  },

  "thyroid-profile": {
    intro: [
      "A Thyroid Profile is essential for assessing the thyroid gland's function, which controls metabolism, energy levels, and overall body processes. It is recommended if you experience symptoms such as unexplained weight changes, fatigue, mood swings, or temperature sensitivity, as these could indicate thyroid issues.",
      "It is also vital for individuals with a family history of thyroid disorders, as they may be at higher risk. Pregnant women and those planning pregnancy should be tested, as thyroid imbalances can affect fertility and pregnancy outcomes. Regular screening is important for those with chronic conditions like diabetes or heart disease and individuals over 40.",
    ],
    variants: [{ name: "Thyroid Profile", tests: ["TSH – Thyroid Stimulating Hormone", "T3", "T4"] }],
    fasting: "Required",
    homeCollection: "Available",
    recommended: [
      {
        title: "Individuals with symptoms of thyroid dysfunction",
        text: "Such as unexplained weight changes, fatigue, depression, hair loss, or temperature sensitivity.",
      },
      {
        title: "People with a family history of thyroid disorders",
        text: "Those with a family history of thyroid conditions like hypothyroidism or hyperthyroidism are at higher risk.",
      },
      {
        title: "Pregnant women or those planning to conceive",
        text: "Thyroid imbalances can affect fertility and pregnancy, so testing is essential for maternal and fetal health.",
      },
      {
        title: "Individuals with chronic conditions",
        text: "Those with diabetes, heart disease, or autoimmune disorders should regularly check thyroid function.",
      },
      { title: "People over 40", text: "The risk of thyroid dysfunction increases with age." },
    ],
    closing: "Regular testing ensures early detection and proper management of thyroid-related health issues.",
    related: ["hormones-endocrinology"],
  },

  "allergy-profile": {
    intro: [
      "Allergy profile / panel tests are comprehensive allergy tests that include tests for related allergens. These tests are performed by experts to determine what a person is allergic to.",
    ],
    blocks: [
      {
        type: "checklist",
        title: "The different tests performed are",
        items: ["Skin prick or scratch tests", "Intradermal tests", "Patch tests", "Oral food challenges"],
      },
    ],
    variants: [
      {
        name: "Basic Screening Tests",
        tests: [
          "Total Serum IgE – measures overall allergic tendency",
          "Absolute Eosinophil Count (AEC) – elevated levels may suggest allergic or parasitic conditions",
          "Complete Blood Count (CBC) – helps assess eosinophilia and general immune status",
        ],
      },
    ],
    instructions: [
      { label: "Immunoglobulin IgE, serum", value: "Overnight fasting is preferred" },
      { label: "Absolute Eosinophil Count (AEC)", value: "No special preparation required" },
    ],
    recommended: [],
    related: ["allergy"],
  },
};

// Test count for a package, e.g. "7", or a range like "5–9" when its options differ.
export const packageTestRange = (detail: PackageDetail) => {
  const counts = detail.variants.map((v) => v.tests.length);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  return min === max ? `${max}` : `${min}–${max}`;
};
