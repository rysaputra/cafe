// advantagedata.ts

export interface Advantage {
    id: number;
    icon: 'coffee' | 'leaf' | 'mug-hot' | 'wifi' | 'couch' | 'thumbs-up';
    title: string;
    description: string;
  }
  
  const advantages: Advantage[] = [
    {
      id: 1,
      icon: "coffee",
      title: "Quality Coffee",
      description: "Finest beans from around the world.",
    },
    {
      id: 2,
      icon: "leaf",
      title: "Organic",
      description: "Organic and sustainable ingredients.",
    },
    {
      id: 3,
      icon: "mug-hot",
      title: "Expert Baristas",
      description: "Trained to craft perfect cups.",
    },
    {
      id: 4,
      icon: "wifi",
      title: "Free Wi-Fi",
      description: "High-speed Wi-Fi for all customers.",
    },
    {
      id: 5,
      icon: "couch",
      title: "Cozy Atmosphere",
      description: "Comfortable and inviting environment.",
    },
    {
      id: 6,
      icon: "thumbs-up",
      title: "Customer Satisfaction",
      description: "Prioritizing customer excellence.",
    },
  ];
  
  export default advantages;
  