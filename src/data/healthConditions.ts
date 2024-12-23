import { Activity, Brain, Wind, Thermometer, Droplet, Frown, Scissors, Pill, Heart, type LucideIcon } from 'lucide-react';

export interface HealthCondition {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const healthConditions: HealthCondition[] = [
  { id: "stomach-ache", title: "Stomach Ache", icon: Activity },
  { id: "period-issue", title: "Period Issue", icon: Droplet },
  { id: "acne-pimples", title: "Acne / Pimples", icon: Frown },
  { id: "fever", title: "Fever", icon: Thermometer },
  { id: "depression", title: "Depression", icon: Brain },
  { id: "diabetes", title: "Diabetes", icon: Activity },
  { id: "cough", title: "Cough", icon: Wind },
  { id: "hairfall", title: "Hairfall", icon: Scissors },
  { id: "gastritis", title: "Gastritis", icon: Pill },
  { id: "body-pain", title: "Body Pain", icon: Heart },
];

