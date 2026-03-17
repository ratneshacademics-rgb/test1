export type ServiceType = "maintenance" | "repair" | "emergency" | "cleaning";

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  type: ServiceType;
  emergency?: boolean;
};

export const services: Service[] = [
  {
    id: "general-service",
    name: "General Bike Service",
    description: "Complete routine check with tuning, cleaning, and key adjustments.",
    duration: "60-90 mins",
    price: "₹499",
    type: "maintenance"
  },
  {
    id: "engine-oil",
    name: "Engine Oil Change",
    description: "Drain and refill engine oil with quality process checks.",
    duration: "30 mins",
    price: "₹299 + oil cost",
    type: "maintenance"
  },
  {
    id: "puncture",
    name: "Puncture Repair",
    description: "Quick puncture fix for front or rear wheel at your doorstep.",
    duration: "20-30 mins",
    price: "₹149",
    type: "repair"
  },
  {
    id: "brake",
    name: "Brake Check & Repair",
    description: "Inspection, adjustment, and minor repair for safer braking.",
    duration: "30-45 mins",
    price: "₹199",
    type: "repair"
  },
  {
    id: "chain",
    name: "Chain Cleaning & Lubrication",
    description: "Remove grime and lube chain for smooth riding.",
    duration: "20 mins",
    price: "₹149",
    type: "maintenance"
  },
  {
    id: "battery",
    name: "Battery Check",
    description: "Health test and terminal cleaning for reliable starts.",
    duration: "15 mins",
    price: "₹99",
    type: "maintenance"
  },
  {
    id: "wash",
    name: "Bike Wash",
    description: "Exterior foam wash and wipe-down at your location.",
    duration: "30 mins",
    price: "₹199",
    type: "cleaning"
  },
  {
    id: "emergency",
    name: "Emergency Breakdown Visit",
    description: "Priority mechanic dispatch for urgent bike issues.",
    duration: "Visit in ~45 mins",
    price: "₹299",
    type: "emergency",
    emergency: true
  },
  {
    id: "inspection",
    name: "Full Inspection",
    description: "Complete diagnostic check before long rides or resale.",
    duration: "40 mins",
    price: "₹249",
    type: "maintenance"
  }
];
