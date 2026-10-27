// Service detail pages (/services/<slug>), taken from the rudraash.com service pages.
// Test names are copied from the old site with spelling fixed (e.g. "Fuiction" → "Function").

import type { Block } from "./content";

// A titled section needs an id: it gets a numbered heading and a link under "On this page".
export type ServiceSection = { blocks: Block[] } & ({ id: string; title: string } | { id?: never; title?: never });

export type ServiceDetail = {
  intro: string[];
  head?: { name: string; role: string; note: string };
  sections: ServiceSection[];
  related: string[]; // package slugs
};

export const serviceDetails: Record<string, ServiceDetail> = {
  allergy: {
    intro: ["Accurate allergy testing to identify triggers and help you manage allergic conditions effectively."],
    sections: [
      {
        blocks: [
          {
            type: "tests",
            title: "Our Allergy Profile Lab Services Include",
            tests: ["Food Allergy", "Drug Allergy", "Inhalant & Contact Allergy", "Complete Allergy Profile"],
          },
        ],
      },
    ],
    related: ["allergy-profile"],
  },

  hematology: {
    intro: [
      "The Hematology Department offers comprehensive services for diagnosing and treating blood disorders and bone marrow conditions. Equipped with advanced systems, the lab specializes in detecting blood deficiencies, genetic defects, anemia, leukemia, and clotting abnormalities. It also provides extensive testing for bleeding disorders and hypercoagulability conditions.",
      "With a team of highly skilled doctors and specialized technicians, the laboratory ensures accurate and timely results. State-of-the-art automation and stringent quality control measures guarantee precision and reliability in every diagnosis. By combining expertise and technology, the lab delivers efficient and high-quality diagnostic services to support effective patient care.",
    ],
    sections: [
      {
        blocks: [
          {
            type: "tests",
            title: "Our Hematology Lab Services Include",
            tests: [
              "Complete Hemogram",
              "ESR (Erythrocyte Sedimentation Rate)",
              "Peripheral Smear (PS)",
              "Reticulocyte Count",
              "DCT – Direct Coombs Test",
              "ICT – Indirect Coombs Test",
              "Platelet Count",
            ],
          },
          {
            type: "tests",
            title: "Coagulation",
            tests: [
              "PT – Prothrombin Time (PT / INR)",
              "APTT – Activated Partial Thromboplastin Time",
              "D-Dimer",
              "Fibrinogen",
              "Lupus Anticoagulant",
              "Factor V",
              "Bleeding Time",
              "Clotting Time",
              "Protein C",
              "Protein S",
              "Antithrombin III",
            ],
          },
        ],
      },
    ],
    related: ["anemia-profile", "apla-profile"],
  },

  biochemistry: {
    intro: [
      "Biochemistry focuses on analyzing chemical and biochemical components in the body to prevent, diagnose, and manage diseases. The Clinical Biochemistry division at Rudraash Lab offers comprehensive laboratory services across clinical chemistry, therapeutic drug monitoring, endocrinology, and toxicology. It aids in diagnosing conditions such as diabetes, heart disease, infertility, thyroid disorders, cystic fibrosis, and meningitis through the examination of body fluids like blood, urine, and cerebrospinal fluid (CSF).",
      "Equipped with advanced automated technology, the lab performs routine biochemical tests alongside specialized investigations, ensuring accurate and reliable results to support patient care and effective disease management.",
    ],
    sections: [
      {
        blocks: [
          {
            type: "tests",
            title: "Our Biochemistry Lab Services Include",
            tests: [
              "Sugars",
              "HbA1c (Glycated Hemoglobin) by HPLC",
              "RFT – Renal Function Test",
              "Lipid Profile",
              "LFT – Liver Function Test",
              "ASO (Antistreptolysin O)",
              "CRP – C-Reactive Protein",
              "RF – Rheumatoid Factor",
              "CPK / CPK-MB / LDH / Trop T",
              "Urine PCR (Protein-Creatinine Ratio)",
              "Urine ACR (Albumin-Creatinine Ratio)",
              "Urine for Micro Albumin",
            ],
            note: "And other biochemistry tests.",
          },
        ],
      },
    ],
    related: ["diabetes-package", "cardiac-package", "master-health-check-up"],
  },

  "clinical-pathology": {
    intro: [
      "Clinical Pathology focuses on testing blood, urine, and other body fluids to diagnose diseases and maintain health. The division provides accurate results supported by expert clinical consultation. Equipped with advanced automated systems and modern computer technology, the lab ensures reliable and efficient testing.",
      "Point-of-care equipment enables rapid specimen analysis in intensive care units and operating rooms. In collaboration with the Hematology division, the lab is committed to delivering high-quality, timely, and affordable services. A dedicated team of laboratory scientists and pathologists works closely with clinical colleagues to ensure excellent patient care and support informed medical decisions.",
    ],
    sections: [
      {
        blocks: [
          {
            type: "tests",
            title: "Urine",
            tests: [
              "Urine Routine Analysis",
              "Urine Complete Analysis",
              "Urine Reducing Substance",
              "Urine Pregnancy Test (UPT)",
              "Urine Spot Creatinine",
              "Urine Spot Protein",
              "Urine Protein Creatinine Ratio (UPCR)",
              "Urine 24 hrs Protein",
              "Urine Micro Albumin (UMA)",
              "Urine Spot Sodium",
              "Urine Spot Potassium",
            ],
          },
          {
            type: "tests",
            title: "Stool Analysis",
            tests: [
              "Stool Routine Analysis",
              "Stool Occult Blood",
              "Stool Calprotectin",
              "Stool H. Pylori Antigen",
              "Stool Reducing Substance",
            ],
          },
          {
            type: "tests",
            title: "Fluid Analysis",
            tests: ["CSF Fluid Test", "Pleural Fluid Test", "Ascitic Fluid Test"],
          },
          { type: "tests", title: "Semen", tests: ["Semen Analysis"] },
        ],
      },
    ],
    related: ["gut-health-package", "fertility-profile-men-women"],
  },

  "hormones-endocrinology": {
    intro: [
      "Hormone Profile Test is a comprehensive diagnostic panel designed to evaluate key hormone levels and assess overall endocrine health. Hormones are vital chemical messengers that regulate metabolism, growth, reproduction, mood, sleep, and stress. Even minor imbalances can impact both physical and emotional well-being.",
    ],
    sections: [
      {
        blocks: [
          {
            type: "text",
            title: "Who is it for?",
            paragraphs: [
              "This test is recommended for individuals experiencing irregular menstrual cycles, infertility, weight changes, fatigue, hair loss, acne, mood fluctuations, thyroid concerns, or metabolic disturbances. It is also useful in monitoring conditions such as Polycystic Ovarian Disease (PCOD), thyroid disorders, adrenal dysfunction, and reproductive health issues in men and women.",
            ],
          },
          {
            type: "text",
            title: "What the panel includes",
            paragraphs: [
              "The hormone panel may include thyroid hormones (T3, T4, TSH), reproductive hormones (FSH, LH, estrogen, progesterone, testosterone), prolactin, cortisol, insulin, and other markers as clinically indicated. The test requires a simple blood sample and is performed under standardized laboratory conditions to ensure accuracy and reliability.",
            ],
          },
          {
            type: "text",
            title: "Why it matters",
            paragraphs: [
              "Early detection of hormonal imbalance enables timely intervention through lifestyle changes, nutritional support, or appropriate medical care. In today's fast-paced environment, routine hormonal evaluation plays a vital role in preventive healthcare.",
              "Our laboratory adheres to strict quality standards and advanced analytical methods to deliver precise results, supporting clinicians in personalized treatment planning.",
            ],
          },
          {
            type: "quote",
            text: "A Hormone Profile Test is not just an investigation — it is a proactive step toward balance, vitality, and long-term health.",
          },
          {
            type: "tests",
            title: "Our Hormones / Endocrinology Lab Services Include",
            tests: [
              "Thyroid Function Test (TFT) – T3, T4, TSH",
              "Thyroid Profile (T3, T4, TSH, FT3, FT4)",
              "Anti-Thyroglobulin Ab (ATG)",
              "TPO / Microsomal Antibody",
              "LH – Luteinizing Hormone",
              "FSH – Follicle-Stimulating Hormone",
              "Prolactin",
              "E2 – Estradiol",
              "Progesterone",
              "DHEA-S (Dehydroepiandrosterone Sulfate)",
              "Testosterone",
              "Growth Hormone",
              "Cortisol (8 AM, 4 PM)",
              "Beta HCG",
              "ACTH – Adrenocorticotropic Hormone",
              "PTH (Intact) – Parathyroid Hormone",
              "Insulin",
              "C-Peptide",
              "HOMA Index",
              "17-OH Progesterone",
            ],
          },
        ],
      },
    ],
    related: ["thyroid-profile", "pcos-profile", "fertility-profile-men-women"],
  },

  "serology-infectious-diseases": {
    intro: [
      "The Serology section conducts tests to detect fungal, viral, and protozoal infections by measuring antibodies produced in response to specific bacteria or viruses. A serology blood test helps determine if an infection is recent or occurred in the past, aiding in the diagnosis of viral, bacterial, and other infections.",
      "Utilizing advanced technology, we ensure highly accurate results while minimizing human error. Our methods deliver high sensitivity and precision, supported by robust quality control. With extensive experience, we provide expert advice and tailored solutions.",
    ],
    sections: [
      {
        blocks: [
          {
            type: "checklist",
            title: "At Rudraash Diagnostics Lab, we test for",
            items: ["Blood-borne pathogens", "Vaccine-preventable diseases", "Mosquito-borne illnesses", "Zoonotic infections"],
          },
          {
            type: "tests",
            title: "Our Serology / Infectious Disease Lab Services Include",
            tests: [
              "VDRL (Venereal Disease Research Laboratory)",
              "HIV (Human Immunodeficiency Virus) – Rapid, ELISA, ECLIA",
              "HIV Western Blot",
              "HBsAg (Hepatitis B Surface Antigen) – Rapid, ELISA, ECLIA",
              "HCV (Hepatitis C Virus) – Rapid, ELISA, ECLIA",
              "Widal",
              "Dengue – ELISA",
              "Hepatitis Markers",
              "Leptospira IgG & IgM",
              "Cardiolipin IgG & IgM",
              "Phospholipid IgG & IgM",
            ],
          },
        ],
      },
    ],
    related: ["hepatitis-screening-test", "apla-profile"],
  },

  "pathology-oncopathology": {
    intro: [
      "The department is headed by Dr. C. Aparna Devi, the first Oncopathologist in Tamil Nadu and an expert in the study of cancer and its related diagnostic techniques, which play a critical role in diagnosing, staging, and monitoring cancer.",
    ],
    head: {
      name: "Dr. C. Aparna Devi",
      role: "Head of Oncopathology",
      note: "1st Oncopathologist in Tamil Nadu",
    },
    sections: [
      {
        blocks: [
          {
            type: "topics",
            title: "Advanced testing in our Oncopathology department",
            numbered: true,
            items: [
              {
                title: "Histopathology",
                text: "Examining tissue samples under a microscope to detect cancerous cells. It's essential for diagnosing the type of cancer, determining its grade, and helping decide on appropriate treatment options.",
              },
              {
                title: "Liquid Cytology",
                text: "Studying individual cells, which can be obtained from various body fluids or aspirates. Common examples include Pap smears for cervical cancer or fine needle aspiration (FNA) for breast cancer.",
              },
              {
                title: "Immunohistochemistry (IHC)",
                text: "Antibodies are used to detect specific proteins or markers on cancer cells. It helps classify cancer types, determine prognostic factors, and identify potential targeted therapies.",
              },
              {
                title: "Molecular Testing",
                text: "Analyzing the genetic makeup of cancer cells to detect mutations, biomarkers, or specific DNA alterations. It's crucial for personalized cancer treatments, especially targeted therapy and immunotherapy.",
              },
              {
                title: "Biopsy",
                text: "Taking a tissue sample from the suspected tumor for examination, confirming the presence of cancer.",
              },
              {
                title: "Tumor Markers",
                text: "Blood tests that measure specific proteins or substances produced by cancer cells, aiding diagnosis and monitoring.",
              },
            ],
          },
          {
            type: "checklist",
            title: "These tests provide crucial insights in",
            items: [
              "Accurate diagnosis",
              "Cancer classification and staging",
              "Guiding treatment decisions",
              "Monitoring treatment response",
              "Prognosis",
              "Preventive care",
            ],
            text: "Guiding decisions on targeted therapies, immunotherapy, or chemotherapy helps them be used more effectively, ensuring personalized and precise treatment. Overall, oncopathology is crucial for diagnosing, treating, and improving the prognosis of cancer patients, ensuring better clinical outcomes and quality of life.",
          },
        ],
      },
    ],
    related: [],
  },

  "microbiology-molecular-biology": {
    intro: [
      "The departments are headed by Dr. M. Suresh, Ph.D., a Senior Microbiologist from Trichy with over 25 years of experience in the field. Dr. Suresh brings extensive expertise in diagnostic microbiology and PCR, having contributed significantly to the advancement of diagnostic techniques and research.",
      "His leadership ensures that the department adheres to the highest standards of clinical and laboratory practice, providing accurate and timely diagnosis. Under his guidance, the team uses the latest diagnostic tools and technologies to assess and monitor various cancers, aiding in personalized treatment plans and improving patient outcomes.",
    ],
    head: {
      name: "Dr. M. Suresh, Ph.D.",
      role: "Head of Microbiology & Molecular Biology",
      note: "Senior Microbiologist, Trichy · 25+ years of experience",
    },
    sections: [
      {
        blocks: [
          {
            type: "tests",
            title: "Microbiology",
            tests: [
              "Gram's Stain",
              "AFB Stain",
              "TB Culture",
              "Culture & Sensitivity Studies",
              "Automated Microbial Culture Systems",
              "MIC Studies",
              "Sputum for AFB / Routine",
              "Tuberculin Test",
            ],
          },
          {
            type: "tests",
            title: "Molecular Biology – Real-Time PCR",
            tests: [
              "Endometrial TB PCR",
              "GeneXpert",
              "HCV – PCR Quantitative Viral Load",
              "HPV DNA – PCR",
              "HIV-1 RNA PCR Viral Load",
              "HIV-2 RNA PCR Viral Load",
            ],
          },
        ],
      },
    ],
    related: ["hepatitis-screening-test"],
  },

  "genetic-studies": {
    intro: [
      "Cutting-edge genetic testing providing accurate insights for inherited conditions, disease risk assessment, and personalized care.",
    ],
    sections: [
      {
        blocks: [
          {
            type: "tests",
            title: "Our Genetic Studies Lab Services Include",
            tests: [
              "NGS (Next-Generation Sequencing) Panel",
              "Ovarian NGS Panel (BRCA 1 & 2)",
              "Endometrium NGS Panel",
              "Breast NGS Panel",
              "Whole Exome Sequencing",
              "Predict Advance NGS Panel",
            ],
          },
        ],
      },
      {
        // Anchor ids match the old site's menu links (/services/genetic-studies/#gsm etc.)
        id: "gsm",
        title: "Gestational Marker Studies",
        blocks: [
          {
            type: "topics",
            title: "Prenatal screening tests",
            items: [
              {
                title: "Double Marker",
                text: "A prenatal screening test performed during the first trimester to assess the risk of fetal abnormalities, including Down syndrome (Trisomy 21) and Trisomy 18. It measures the levels of two substances in the mother's blood: Human Chorionic Gonadotropin (hCG) and Pregnancy-Associated Plasma Protein-A (PAPP-A). Abnormal levels can indicate an increased risk of these chromosomal conditions. The test is non-invasive and helps identify high-risk pregnancies, allowing for further diagnostic testing and early intervention if necessary.",
              },
              {
                title: "Triple Marker",
                text: "A prenatal screening performed during the first trimester to assess the risk of certain fetal abnormalities, including Down syndrome (Trisomy 21), Trisomy 18, and neural tube defects (such as spina bifida). It measures the levels of three substances in the mother's blood: Human Chorionic Gonadotropin (hCG), Alpha-fetoprotein (AFP), and Unconjugated Estriol (uE3). While the test is non-invasive, it helps identify high-risk pregnancies, allowing for early intervention and further diagnostic testing, such as amniocentesis or ultrasound.",
              },
              {
                title: "Quadruple Marker",
                text: "A prenatal screening performed during the second trimester to assess the risk of fetal abnormalities, including Down syndrome (Trisomy 21), Trisomy 18, neural tube defects, and other chromosomal disorders. It measures four substances in the mother's blood: Alpha-fetoprotein (AFP), Human Chorionic Gonadotropin (hCG), Unconjugated Estriol (uE3), and Inhibin-A. It provides valuable information to guide further diagnostic testing, such as amniocentesis or ultrasound, and helps make informed decisions regarding prenatal care.",
              },
            ],
          },
          {
            type: "facts",
            title: "Test details",
            items: [
              { label: "Pre-requisites", value: "Scan report & LMP date" },
              { label: "Sample", value: "Clotted blood and serum" },
              { label: "Report TAT", value: "4 days" },
              { label: "Home collection", value: "Not available" },
            ],
          },
          {
            type: "topics",
            title: "Who should take the test?",
            numbered: true,
            items: [
              { title: "All pregnant women", text: "Routine testing helps assess the overall health of the pregnancy." },
              {
                title: "Women over 35",
                text: "Older pregnant women are at higher risk of certain complications, like Down syndrome and other chromosomal abnormalities.",
              },
              {
                title: "Family history of genetic disorders",
                text: "Those with a history of genetic conditions or congenital birth defects may need further testing.",
              },
              {
                title: "Previous pregnancy complications",
                text: "Testing is especially important for women with a history of miscarriages, preterm labor, or other pregnancy-related complications.",
              },
              {
                title: "Gestational diabetes or hypertension",
                text: "These conditions may require ongoing monitoring throughout pregnancy.",
              },
            ],
          },
          {
            type: "quote",
            text: "Gestational marker tests help guide prenatal care, ensuring early intervention and better outcomes for both mother and baby.",
          },
        ],
      },
      {
        id: "karyotyping",
        title: "Karyotyping",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Karyotyping is a genetic study that examines the number, structure, and appearance of chromosomes in cells. It is crucial for diagnosing chromosomal disorders like Down syndrome, Turner syndrome, and Klinefelter syndrome, where there are abnormalities in the number or structure of chromosomes.",
              "Karyotyping is also used to investigate recurrent miscarriages, unexplained infertility, and certain cancers, as chromosomal changes may contribute to these conditions. During pregnancy, karyotyping can detect chromosomal abnormalities in the fetus, offering valuable information for prenatal care. It plays an important role in genetic counseling, helping families understand the genetic risks of passing on chromosomal disorders.",
            ],
          },
          { type: "tests", title: "Karyotyping tests", tests: ["Karyotyping – Single", "Karyotyping – Couple"] },
        ],
      },
      {
        id: "sequencing",
        title: "Sequencing Services",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Sequencing studies in diagnostics are advanced genetic testing techniques that analyze the sequence of DNA or RNA to identify genetic variations, mutations, or abnormalities. These studies provide deep insights into genetic disorders, infectious diseases, and cancer, helping clinicians make more accurate diagnoses and tailor personalized treatment plans.",
              "Next-Generation Sequencing (NGS) is a revolutionary technology in diagnostics that allows for the rapid sequencing of large portions of the genome or even the entire genome. NGS enables the identification of genetic mutations, variations, and abnormalities with high accuracy and sensitivity, providing comprehensive genetic insights across a variety of diseases.",
            ],
          },
          {
            type: "topics",
            title: "NGS in diagnostics",
            numbered: true,
            items: [
              {
                title: "Genetic Disorder Diagnosis",
                text: "Identifying mutations in genes responsible for inherited conditions, such as cystic fibrosis, muscular dystrophy, and Huntington's disease.",
              },
              {
                title: "Cancer Diagnostics",
                text: "Identifying genetic mutations in tumors, providing essential information for personalized cancer treatments, including targeted therapies and immunotherapies.",
              },
              {
                title: "Infectious Disease Detection",
                text: "Sequencing the DNA or RNA of pathogens to identify bacteria, viruses, and fungi. This is crucial for detecting infections like HIV, tuberculosis, and emerging viruses like COVID-19.",
              },
              {
                title: "Rare and Undiagnosed Diseases",
                text: "Aiding the diagnosis of rare or complex diseases, especially when traditional methods fail, by detecting previously unknown genetic variants.",
              },
              {
                title: "Pharmacogenomics",
                text: "Identifying genetic variations that influence how individuals metabolize and respond to medications, allowing for more personalized and effective treatments.",
              },
              {
                title: "Prenatal Testing",
                text: "Non-invasive prenatal testing to detect genetic conditions such as Down syndrome or other chromosomal abnormalities in the fetus.",
              },
            ],
          },
          {
            type: "text",
            paragraphs: [
              "Diagnostic tests related to sequencing in clinical areas like genetics, oncology, infectious diseases, and rare diseases can be analyzed and reported.",
            ],
          },
          { type: "tests", title: "Down syndrome screening", tests: ["Double Test", "Triple Test", "Quadruple Test"] },
        ],
      },
    ],
    related: ["antenatal-profile", "fertility-profile-men-women"],
  },
};

export const countTests = (detail: ServiceDetail) =>
  detail.sections.flatMap((s) => s.blocks).reduce((n, b) => n + (b.type === "tests" ? b.tests.length : 0), 0);
