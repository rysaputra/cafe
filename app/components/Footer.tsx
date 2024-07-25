import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Footer = () => {
  return (
    <>
    <footer className="bg-[#121212] text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between md:items-center items-start ">
      <div className="mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
        <p className="text-gray-400 mb-2">Wagir, Malang</p>
        <p className="text-gray-400 mb-2">Phone: 085648983077</p>
        <p className="text-gray-400">Email: ryosaputraofficial@gmail.com</p>
      </div>
      <div className="mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white transition duration-300" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
          <li><a href="#product" className="text-gray-400 hover:text-white transition duration-300">Products</a></li>
          <li><a href="#testimonial" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-gray-500">© By Ryo Effendi Saputra 2024 Coffee Shop. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
