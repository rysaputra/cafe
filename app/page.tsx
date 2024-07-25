'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faCoffee, faLeaf, faMugHot, faWifi, faCouch, faThumbsUp, faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import advantages from './advantages';
import products from './productdata';
import testimonials from './testimonial';

const iconMap = {
  coffee: faCoffee,
  leaf: faLeaf,
  'mug-hot': faMugHot,
  wifi: faWifi,
  couch: faCouch,
  'thumbs-up': faThumbsUp,
};

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const newPosition = scrollPosition + offset;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center overflow-hidden relative">
        <Image
          src="/background.png"
          alt="Coffee Shop Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent bottom-0 z-10"></div>
        <div className="relative z-20 text-center text-white px-8 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Coffee Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The best place to enjoy your coffee
          </p>
          <p className="text-xl md:text-xl mb-8">
            Discover the rich aromas and flavors of our finest coffee
            selections. Each cup is a journey, crafted with passion and
            precision to awaken your senses and brighten your day. Whether
            you're here to work, relax, or catch up with friends, we've got the
            perfect brew waiting just for you.
          </p>
          <a
            href="#about"
            className="text-white bg-[#CD8E67] px-5 py-3 rounded-lg hover:bg-[#f6faff] hover:text-[#CD8E67] transition duration-300 ease-in-out scroll-smooth"
          >
            Selengkapnya
          </a>
        </div>
      </section>

      <section className="py-12 bg-[#121212]" id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/about.png"
              alt="About Coffee Shop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#CD8E67]">About Us</h2>
            <p className="text-lg md:text-xl mb-4 text-gray-500">
              At Coffee Shop, we are passionate about delivering the finest
              coffee experience. Our journey began with a love for quality
              coffee and a desire to share that passion with our community.
            </p>
            <p className="text-lg md:text-xl mb-4 text-gray-500">
              We source our beans from the best farms around the world, ensuring
              every cup is crafted with care and precision. Join us and discover
              the perfect blend of flavor and aroma that will awaken your senses
              and brighten your day.
            </p>
            <hr className="border-t-2 border-gray-400 my-6 w-full mx-auto md:mx-0" />
            <a
              href="#advantage"
              className="text-white bg-[#CD8E67] px-5 py-3 rounded-lg hover:bg-[#f6faff] hover:text-[#CD8E67] transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#121212]" id="advantage">
        <div className="container mx-auto px-4">
          <div className="w-full text-center md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Advantages
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Discover the benefits of choosing Coffee Shop. Our unique
              offerings ensure you get the best coffee experience with every
              visit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advantages.map((advantage) => (
                <div key={advantage.id} className="flex flex-col items-center">
                  <div className="text-[#CD8E67] w-[40px] h-[40px] mb-4">
                    <FontAwesomeIcon icon={iconMap[advantage.icon]} className="w-full h-full" />
                  </div>
                  <div className="text-gray-400 text-center">
                    <h3 className="font-semibold text-white mb-2">{advantage.title}</h3>
                    <p>{advantage.description}</p>
                  </div>
                  <hr className="border-t-2 border-[#CD8E67] my-6 w-full mx-auto md:mx-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#121212]" id="product">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
      Our Products
    </h2>
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="scroll-container hide-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-1/2 text-center bg-transparent text-gray-800 rounded-lg shadow-lg border border-gray-300 p-4 relative m-4"
          >
            <div className='flex items-center justify-center'>
            <Image
              src={product.image}
              alt={product.alt}
              width={256}
              height={144}
              className="rounded-lg mb-4"
              />
              </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="absolute flex flex-col top-4 bottom-4 right-2">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white hover:text-red-500 w-[30px] h-[30px] mb-4 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-[#CD8E67] w-[30px] h-[30px] cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => scroll(-272)} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button 
        onClick={() => scroll(272)} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  </div>
</section>

      <section className="py-12 bg-[#121212]" id="testimonial">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap gap-8 justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center bg-[#1e1e1e] text-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 md:w-1/3"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={345}
                  height={345}
                  className="rounded-lg mb-4"
                />
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-[#CD8E67] text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                <p className="text-lg mb-4">{`"${testimonial.testimonial}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="w-full h-screen bg-[#121212] flex items-center justify-between overflow-hidden relative" id='contact'>
      <div className='flex items-center flex-col-reverse md:flex-row-reverse'>
    <Image
      src="/splash.png"
      
      alt="Coffee Shop Background"
      width={800}
      height={800}
      style={{ objectFit: 'contain' }}
      quality={100}
      className="inset-0 z-10"
      />
    <div className="absolute inset-0 bg-gradient-to-t from-[#CD8E67] via-transparent to-transparent bottom-0 z-0"></div>
  <div className="md:w-1/2 relative text-start text-white px-8 z-20">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Never miss Best Coffee
    </h1>
    <p className="text-gray-400 mb-8">
      Discover the rich aromas and flavors of our finest coffee
      selections. Each cup is a journey, crafted with passion and
      precision to awaken your senses and brighten your day. Whether
      you're here to work, relax, or catch up with friends, we've got the
      perfect brew waiting just for you.
    </p>
    <a
      href="#"
      className="text-white bg-[#CD8E67] px-5 py-3 rounded-lg hover:bg-[#f6faff] hover:text-[#CD8E67] transition duration-300 ease-in-out scroll-smooth"
      >
      Contact us
    </a>
      </div>
  </div>
</section>

    </>
  );
}
