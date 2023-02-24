import React from "react";
import blog from "../assets/portfolio/blog.jpg";
import odisha from "../assets/portfolio/odisha.jpg";
import cart from "../assets/portfolio/cart.jpg";
import booklab from "../assets/portfolio/booklab.jpg";
import astropic from "../assets/portfolio/astropic.jpg";
import link from "../assets/portfolio/link.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
    },
    {
      id: 2,
      src: booklab,
    },
    {
      id: 3,
      src: cart,
    },
    {
      id: 4,
      src: astropic,
    },
    {
      id: 5,
      src: odisha,
    },
    {
      id: 6,
      src: link,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
