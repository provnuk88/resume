import React from "react";
import photoCollection from "../assets/portfolio/photoCollection.JPG";
import todoapp from "../assets/portfolio/todoapp.JPG";
import Store from "../assets/portfolio/Store.JPG";
import quiz from "../assets/portfolio/quiz.JPG";
import StorewithAPI from "../assets/portfolio/StorewithAPI.JPG";
import portfolio from "../assets/portfolio/portfolio.JPG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: photoCollection,
    },
    {
      id: 2,
      src: quiz,
    },
    {
      id: 3,
      src: Store,
    },
    {
      id: 4,
      src: StorewithAPI,
    },
    {
      id: 5,
      src: todoapp,
    },
    {
      id: 6,
      src: portfolio,
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
          <p className="py-6">My pet-project here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105" style={{height:'250px', width:'100%',}}
              />
              <div className="flex items-center justify-center">

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
