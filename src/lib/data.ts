// Site content, taken from the current rudraash.com pages.
// Slugs match the old rudraash.com URLs (/services/<slug>, /packages/<slug>).

export type Service = { slug: string; name: string; description: string };

export const services: Service[] = [
  {
    slug: "allergy",
    name: "Allergy",
    description: "Accurate allergy testing to identify triggers and help you manage allergic conditions effectively.",
  },
  {
    slug: "hematology",
    name: "Hematology",
    description: "Precise and reliable blood testing powered by advanced technology for accurate diagnosis and patient care.",
  },
  {
    slug: "biochemistry",
    name: "Biochemistry",
    description: "Advanced biochemical testing delivering accurate insights for diagnosis, monitoring, and overall health assessment.",
  },
  {
    slug: "clinical-pathology",
    name: "Clinical Pathology",
    description:
      "Comprehensive laboratory analysis of blood, urine, and body fluids for accurate diagnosis and effective patient management.",
  },
  {
    slug: "hormones-endocrinology",
    name: "Hormones / Endocrinology",
    description: "A comprehensive diagnostic panel designed to evaluate key hormone levels and assess overall endocrine health.",
  },
  {
    slug: "serology-infectious-diseases",
    name: "Serology / Infectious Diseases",
    description:
      "Reliable serological testing for early detection, diagnosis, and monitoring of infectious diseases with clinical accuracy.",
  },
  {
    slug: "pathology-oncopathology",
    name: "Histopathology / Oncopathology",
    description:
      "Expert tissue and cancer diagnostics delivering precise pathology insights for early detection and effective treatment planning.",
  },
  {
    slug: "microbiology-molecular-biology",
    name: "Microbiology & Molecular Biology",
    description:
      "Advanced microbial and molecular testing for precise identification of infections and genetic markers with high diagnostic accuracy.",
  },
  {
    slug: "genetic-studies",
    name: "Genetic Studies",
    description:
      "Cutting-edge genetic testing providing accurate insights for inherited conditions, disease risk assessment, and personalized care.",
  },
];

export const moreServices = ["Gestational Marker Studies", "Karyotyping", "Sequencing Services"];

export type HealthPackage = { slug: string; name: string; description: string };

export const packages: HealthPackage[] = [
  { slug: "diabetes-package", name: "Diabetes Package", description: "Comprehensive tests to accurately monitor blood sugar levels and overall diabetic health." },
  { slug: "cardiac-package", name: "Cardiac Package", description: "Essential tests to assess heart health, detect risks early, and support timely cardiac care." },
  {
    slug: "hypertension-profile",
    name: "Hypertension Profile",
    description: "Comprehensive tests to monitor blood pressure–related risks and support effective hypertension management.",
  },
  { slug: "bone-health-profile", name: "Bone Health Profile", description: "Specialized tests to evaluate bone strength, calcium levels, and overall skeletal health." },
  { slug: "gut-health-package", name: "Gut Health Package", description: "Comprehensive tests to assess digestive health, nutrient absorption, and overall gut function." },
  {
    slug: "rheumatoid-arthritis-profile",
    name: "Rheumatoid Arthritis Profile",
    description: "Targeted tests to detect inflammation and support early diagnosis and management of rheumatoid arthritis.",
  },
  {
    slug: "apla-profile",
    name: "APLA Profile",
    description:
      "Specialized tests to detect antiphospholipid antibodies and assess the risk of clotting and autoimmune conditions.",
  },
  {
    slug: "fertility-profile-men-women",
    name: "Fertility Profile – Men & Women",
    description:
      "Comprehensive tests to evaluate reproductive health and support informed fertility planning for both men and women.",
  },
  {
    slug: "pcos-profile",
    name: "PCOS Profile",
    description: "Targeted tests to assess hormonal balance and support early diagnosis and effective management of PCOS.",
  },
  {
    slug: "anemia-profile",
    name: "Anemia Profile",
    description: "Comprehensive tests to identify anemia, assess iron levels, and support effective treatment planning.",
  },
  { slug: "antenatal-profile", name: "Antenatal Profile", description: "Essential tests to monitor maternal health and ensure a safe, healthy pregnancy." },
  { slug: "hepatitis-screening-test", name: "Hepatitis Screening Test", description: "Reliable tests to detect hepatitis infections early and support timely medical care." },
  {
    slug: "vitamin-profile",
    name: "Vitamin Profile",
    description: "Comprehensive tests to assess essential vitamin levels and support optimal health and wellbeing.",
  },
  {
    slug: "master-health-check-up",
    name: "Master Health Check Up",
    description: "A complete health screening package for early detection, prevention, and overall wellness assessment.",
  },
  {
    slug: "thyroid-profile",
    name: "Thyroid Profile",
    description:
      "Comprehensive tests to evaluate thyroid function and support accurate diagnosis and management of thyroid disorders.",
  },
  {
    slug: "allergy-profile",
    name: "Allergy Profile",
    description: "Accurate allergy testing to identify triggers and help you manage allergic conditions effectively.",
  },
];

export const about = [
  "Rudraash Diagnostics & Labs is a state-of-the-art medical diagnostics facility started in 2021 at Dindigul and further expanded to Trichy and Thanjavur.",
  "We are committed to delivering precise and reliable diagnostic services to support accurate healthcare decisions. With a strong focus on innovation, advanced technology, and patient-centric care, we offer a comprehensive range of diagnostic solutions, including Microbiology, Pathology specialized in Oncopathology, Molecular Biology, Genetic studies and other specialized testing services and research studies.",
];

// Specialities named in the about text above.
export const specialities = ["Microbiology", "Oncopathology", "Molecular Biology", "Genetic Studies", "Research Studies"];

export const vision =
  "To be a trusted leader in diagnostics, delivering accurate, reliable, and accessible healthcare solutions through innovation, advanced technology, and patient-focused care.";

export const mission = [
  {
    title: "Deliver Accurate and Reliable Diagnostics",
    text: "Provide precise and timely diagnostic services using advanced technology and rigorous quality standards to support informed healthcare decisions.",
  },
  {
    title: "Ensure Accessibility and Affordability",
    text: "Make high-quality diagnostic solutions accessible and affordable for all, fostering better healthcare outcomes and preventive care.",
  },
  {
    title: "Promote Patient-Centric Care",
    text: "Focus on patient well-being by offering personalized services, seamless experiences, and a commitment to excellence in every aspect of diagnostic care.",
  },
];

export const testimonials = [
  {
    quote:
      "I recently completed a full body health checkup at Rudraash Diagnostics & Labs and the experience was excellent. The staff were professional, the reports were delivered on time, and the entire process was smooth and hygienic. Highly recommended for accurate diagnostics.",
    name: "Ramesh Kumar",
    city: "Coimbatore",
  },
  {
    quote:
      "The team at Rudraash Diagnostics & Labs provided exceptional service during my family's routine blood tests. The technicians were friendly, and the reports were very detailed and easy to understand. Truly reliable healthcare support.",
    name: "Sneha Iyer",
    city: "Dindigul",
  },
  {
    quote:
      "I visited Rudraash Diagnostics & Labs for a preventive health package and was impressed by their modern equipment and quick turnaround time. The entire staff made the experience comfortable and stress-free.",
    name: "Vigneshwar Rao",
    city: "Madurai",
  },
];

// About Us page: the second paragraph that follows the home page intro.
export const aboutMore =
  "Equipped with cutting-edge equipment and staffed by a team of experienced professionals, the lab ensures timely results with the highest standards of quality and accuracy. Rudraash Diagnostics & Labs strives to empower healthcare providers and patients by making advanced diagnostics accessible, affordable, and efficient.";

// Services page intro.
export const servicesIntro = [
  "Rudraash Diagnostics & Labs Pvt. Ltd. is a trusted diagnostic service provider offering accurate and reliable medical testing across its centers in Trichy, Dindigul, and Thanjavur. With advanced laboratory infrastructure and skilled professionals, the lab delivers a wide range of diagnostic services including pathology, hematology, biochemistry, and preventive health check-up profiles, ensuring high standards of quality and precision.",
  "Focused on patient care and clinical excellence, Rudraash Diagnostics & Labs Pvt. Ltd. ensures timely sample collection, fast report delivery, and clear results that support doctors in effective diagnosis and treatment. Committed to improving community health, the lab combines technology, expertise, and compassion to provide dependable diagnostic solutions across all its locations.",
];

// Packages page intro.
export const packagesIntro = [
  "Rudraash Diagnostics & Labs Pvt. Ltd. offers a wide range of thoughtfully designed diagnostic packages to support preventive healthcare and early disease detection. These packages include routine health check-ups, diabetes, thyroid, anemia, vitamin, cardiac, fertility, antenatal, and specialty profiles, curated to cover essential parameters required for accurate health assessment across different age groups and medical needs.",
  "Each package is conducted using advanced testing technology with strict quality control, ensuring reliable and precise results. With convenient sample collection, quick turnaround times, and easy-to-understand reports, Rudraash Diagnostics & Labs Pvt. Ltd. helps individuals and families monitor their health proactively while supporting doctors with comprehensive diagnostic insights for better clinical decisions.",
];

// Training Academy page.
export const academy = {
  approval: "Approved by Bharathidasan University – IECD",
  intro:
    "Rudraash Training Academy, an integral part of the diagnostic lab, is approved by Bharathidasan University – IECD and is dedicated to equipping students with advanced technological skills to enhance their employability.",
  programs: [
    { count: 2, label: "Short-term Courses" },
    { count: 2, label: "Certificate Programs" },
    { count: 1, label: "Diploma Program" },
  ],
  support: ["Collaborative research projects", "Publications", "Thesis & dissertation guidance"],
  steps: [
    {
      title: "Enrol",
      text: "Students are enrolled under Bharathidasan University, ensuring quality education aligned with industry standards.",
    },
    {
      title: "Assessment",
      text: "Upon successful completion of the program, participants undergo an assessment to evaluate their proficiency.",
    },
    {
      title: "Certification",
      text: "Certificates are awarded, recognising their expertise and readiness to excel in professional roles within the healthcare and diagnostics sector.",
    },
  ],
  collaborations:
    "The academy has various collaborations with institutes in and around Trichy and Dindigul, and has signed MoUs for research collaboration and internship trainings with:",
  partners: [
    { name: "Sathyabama University", city: "Chennai" },
    { name: "GTN College", city: "Dindigul" },
    { name: "Jamal Mohamed College", city: "Trichy" },
    { name: "Holy Cross College", city: "Trichy" },
    { name: "JJ College", city: "Pudukottai" },
  ],
  purposes: ["Internship", "Workshop collaboration", "Dissertation guidance", "Research collaboration", "Conference collaboration"],
};
