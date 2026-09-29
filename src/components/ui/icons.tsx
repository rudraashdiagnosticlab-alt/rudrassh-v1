import { createElement } from "react";
import {
  Activity,
  Baby,
  Bone,
  Bug,
  Dna,
  Droplet,
  Droplets,
  FlaskConical,
  Flower2,
  Gauge,
  Hand,
  HeartPulse,
  Microscope,
  Pill,
  Salad,
  ShieldPlus,
  Stethoscope,
  Syringe,
  TestTubes,
  Venus,
  VenusAndMars,
  type LucideIcon,
} from "lucide-react";

// Keyed by the slugs in lib/data.ts.
export const serviceIcons: Record<string, LucideIcon> = {
  allergy: Flower2,
  hematology: Droplets,
  biochemistry: FlaskConical,
  "clinical-pathology": TestTubes,
  "hormones-endocrinology": Activity,
  "serology-infectious-diseases": ShieldPlus,
  "pathology-oncopathology": Microscope,
  "microbiology-molecular-biology": Bug,
  "genetic-studies": Dna,
};

export const packageIcons: Record<string, LucideIcon> = {
  "diabetes-package": Droplet,
  "cardiac-package": HeartPulse,
  "hypertension-profile": Gauge,
  "bone-health-profile": Bone,
  "gut-health-package": Salad,
  "rheumatoid-arthritis-profile": Hand,
  "apla-profile": Syringe,
  "fertility-profile-men-women": VenusAndMars,
  "pcos-profile": Venus,
  "anemia-profile": Droplets,
  "antenatal-profile": Baby,
  "hepatitis-screening-test": ShieldPlus,
  "vitamin-profile": Pill,
  "master-health-check-up": Stethoscope,
  "thyroid-profile": Activity,
  "allergy-profile": Flower2,
};

export const iconFor = (map: Record<string, LucideIcon>, slug: string) => map[slug] ?? FlaskConical;

// Renders the icon for a slug, for places that pick an icon outside a .map() callback.
export function SlugIcon({
  map,
  slug,
  ...props
}: { map: Record<string, LucideIcon>; slug: string } & React.ComponentProps<LucideIcon>) {
  return createElement(iconFor(map, slug), props);
}
