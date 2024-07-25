export interface Testimonal {
    id: number;
    name: string;
    testimonial: string;
    image: string;
  }
  


const testimonials: Testimonal[]= [
    {
      id: 1,
      name: 'John Doe',
      testimonial: 'The coffee shop has been a game-changer for our team. The atmosphere is incredible and the coffee is second to none.',
      image: '/testi/john-doe.png',
    },
    {
      id: 2,
      name: 'Ane Smith',
      testimonial: 'A fantastic place to relax and enjoy a perfect cup of coffee. The service is always friendly and professional.',
      image: '/testi/ane-smith.png',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      testimonial: 'I love working from this coffee shop. The ambiance is perfect, and the coffee keeps me energized throughout the day.',
      image: '/testi/alice.png',
    },
  ];

  export default testimonials