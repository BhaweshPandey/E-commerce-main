import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className=" py-12 px-6 lg:px-24 pt-28 pb-28 ">
      <div>
        <Link to="/" className=" mb-4">
          <svg
            className="cursor-pointer"
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
          </svg>
        </Link>
      </div>
      <div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Welcome to Our E-Commerce Store! We are committed to bringing you
            the best products at unbeatable prices. Our mission is to provide an
            exceptional online shopping experience for every customer.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img
              src={img1}
              alt="Our Mission"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to provide high-quality products and a seamless
              shopping experience. We believe in customer satisfaction and
              constantly strive to meet and exceed expectations.
            </p>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img
              src={img2}
              alt="Our Vision"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to be the leading e-commerce platform, offering a
              diverse range of products that cater to the needs and desires of
              consumers worldwide.
            </p>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img
              src={img3}
              alt="Our Values"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Values
            </h2>
            <p className="text-gray-600">
              We value integrity, customer satisfaction, and innovation. Our
              team is dedicated to ensuring that you have a positive shopping
              experience every time you visit our store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
