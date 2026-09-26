// Home page content, taken from the current rudraash.com home page.

export type Service = { name: string; description: string };

export const services: Service[] = [
  {
    name: "Allergy",
    description: "Accurate allergy testing to identify triggers and help you manage allergic conditions effectively.",
  },
  {
    name: "Hematology",
    description: "Precise and reliable blood testing powered by advanced technology for accurate diagnosis and patient care.",
  },
  {
    name: "Biochemistry",
    description: "Advanced biochemical testing delivering accurate insights for diagnosis, monitoring, and overall health assessment.",
  },
  {
    name: "Clinical Pathology",
    description:
      "Comprehensive laboratory analysis of blood, urine, and body fluids for accurate diagnosis and effective patient management.",
  },
  {
    name: "Hormones / Endocrinology",
    description: "A comprehensive diagnostic panel designed to evaluate key hormone levels and assess overall endocrine health.",
  },
  {
    name: "Serology / Infectious Diseases",
    description:
      "Reliable serological testing for early detection, diagnosis, and monitoring of infectious diseases with clinical accuracy.",
  },
  {
    name: "Histopathology / Oncopathology",
    description:
      "Expert tissue and cancer diagnostics delivering precise pathology insights for early detection and effective treatment planning.",
  },
  {
    name: "Microbiology & Molecular Biology",
    description:
      "Advanced microbial and molecular testing for precise identification of infections and genetic markers with high diagnostic accuracy.",
  },
  {
    name: "Genetic Studies",
    description:
      "Cutting-edge genetic testing providing accurate insights for inherited conditions, disease risk assessment, and personalized care.",
  },
];

export const moreServices = ["Gestational Marker Studies", "Karyotyping", "Sequencing Services"];

export type HealthPackage = { name: string; description: string };

export const packages: HealthPackage[] = [
  { name: "Diabetes Package", description: "Comprehensive tests to accurately monitor blood sugar levels and overall diabetic health." },
  { name: "Cardiac Package", description: "Essential tests to assess heart health, detect risks early, and support timely cardiac care." },
  {
    name: "Hypertension Profile",
    description: "Comprehensive tests to monitor blood pressure–related risks and support effective hypertension management.",
  },
  { name: "Bone Health Profile", description: "Specialized tests to evaluate bone strength, calcium levels, and overall skeletal health." },
  { name: "Gut Health Package", description: "Comprehensive tests to assess digestive health, nutrient absorption, and overall gut function." },
  {
    name: "Rheumatoid Arthritis Profile",
    description: "Targeted tests to detect inflammation and support early diagnosis and management of rheumatoid arthritis.",
  },
  {
    name: "APLA Profile",
    description:
      "Specialized tests to detect antiphospholipid antibodies and assess the risk of clotting and autoimmune conditions.",
  },
  {
    name: "Fertility Profile – Men & Women",
    description:
      "Comprehensive tests to evaluate reproductive health and support informed fertility planning for both men and women.",
  },
  {
    name: "PCOS Profile",
    description: "Targeted tests to assess hormonal balance and support early diagnosis and effective management of PCOS.",
  },
  {
    name: "Anemia Profile",
    description: "Comprehensive tests to identify anemia, assess iron levels, and support effective treatment planning.",
  },
  { name: "Antenatal Profile", description: "Essential tests to monitor maternal health and ensure a safe, healthy pregnancy." },
  { name: "Hepatitis Screening Test", description: "Reliable tests to detect hepatitis infections early and support timely medical care." },
  {
    name: "Vitamin Profile",
    description: "Comprehensive tests to assess essential vitamin levels and support optimal health and wellbeing.",
  },
  {
    name: "Master Health Check Up",
    description: "A complete health screening package for early detection, prevention, and overall wellness assessment.",
  },
  {
    name: "Thyroid Profile",
    description:
      "Comprehensive tests to evaluate thyroid function and support accurate diagnosis and management of thyroid disorders.",
  },
  {
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
