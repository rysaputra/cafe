// productdata.ts

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    alt: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Espresso",
      description: "Rich and full-bodied espresso for a quick pick-me-up.",
      image: "/product1.png",
      alt: "Product 1",
    },
    {
      id: 2,
      name: "Latte",
      description: "Smooth and creamy latte with a hint of vanilla.",
      image: "/product2.png",
      alt: "Product 2",
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Classic cappuccino with a rich and frothy top.",
      image: "/product3.png",
      alt: "Product 3",
    },
    {
      id: 1,
      name: "Espresso",
      description: "Rich and full-bodied espresso for a quick pick-me-up.",
      image: "/product1.png",
      alt: "Product 1",
    },
    {
      id: 2,
      name: "Latte",
      description: "Smooth and creamy latte with a hint of vanilla.",
      image: "/product2.png",
      alt: "Product 2",
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Classic cappuccino with a rich and frothy top.",
      image: "/product3.png",
      alt: "Product 3",
    },
  ];
  
  export default products;
  