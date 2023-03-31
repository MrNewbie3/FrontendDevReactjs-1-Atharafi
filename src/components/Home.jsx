import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
export default function Home() {
  const [rawData, setRawData] = useState(null);
  const [filter, setFilter] = useState({ category: null, price: null, status: null });
  useEffect(() => {
    return () => {
      data.data.data.filter((params) => {
        return params.priceTag === filter.price;
      });
    };
  }, [filter]);
  console.log(data.data.data[0].priceTag + filter.price);
  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <div className="container">
      <header className="m-8 divide-y-2 ">
        <div className="wrapper  flex flex-col gap-y-6">
          <h1 className="text-5xl">Restaurants</h1>
          <p className="details w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione rem vero omnis. Odit blanditiis, suscipit eaque iure provident iusto saepe?</p>
          <div className=""></div>
        </div>
        <nav className="flex flex-row items-center justify-between">
          <ul className="mt-6 flex flex-row items-center gap-x-6">
            <li className="">
              <p className="">Filter By:</p>
            </li>
            <li className="flex flex-row gap-x-2 items-center ">
              <input
                type="radio"
                name="status"
                id=""
                onChange={(e) => {
                  handleChangeFilter(e);
                }}
              />
              <label htmlFor="status">Open Now</label>
            </li>
            <li className="">
              <select
                name="price"
                id=""
                onChange={(e) => {
                  handleChangeFilter(e);
                }}
              >
                <option value="" selected disabled>
                  Price
                </option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$">$$$$</option>
              </select>
            </li>
            <li className="">
              <select
                name="categories"
                id=""
                onChange={(e) => {
                  handleChangeFilter(e);
                }}
              >
                <option value="" selected disabled>
                  Categories
                </option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="Japanese">Japanese</option>
              </select>
            </li>
          </ul>
          <div className="clear mt-6">
            <button
              type="button"
              className="w-full inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-blue-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              onClick={handleReset}
            >
              Clear All
            </button>
          </div>
        </nav>
      </header>
      <section className="flex flex-wrap justify-center gap-10 w-full">
        {rawData === null
          ? data.data.data.map((params, index) => {
              return (
                <div className="card" key={index}>
                  <div className="flex justify-center">
                    <div className="block max-w-sm rounded-lg bg-white shadow-lg ">
                      <img className="rounded-t-lg h-52 w-80 object-cover" src={params.heroImgUrl} alt="" />
                      <div className="p-6">
                        <p className="mb-2 font-semibold uppercase">{params.name}</p>
                        <div className="rating">Rate: {params.averageRating}/5</div>
                        <div className="detail my-5 flex flex-row justify-between">
                          <div className="detail">
                            <p className="category uppercase text-xs">{params.establishmentTypeAndCuisineTags[0]}</p>
                            <p className="price text-xs">{params.priceTag}</p>
                          </div>

                          <div className="status uppercase text-xs">
                            <span className={params.currentOpenStatusCategory === "" || params.currentOpenStatusCategory === "CLOSED" ? "bg-red-700 indicator w-2 h-2 rounded-full " : "bg-green-700 indicator w-2 h-2 rounded-full "}></span>{" "}
                            {params.currentOpenStatusCategory === "" ? "No Information" : params.currentOpenStatusCategory}
                          </div>
                        </div>
                        <Link to={params.restaurantsId}>
                          <button
                            type="button"
                            className="w-full inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-blue-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : rawData.map((params, index) => {
              return (
                <div className="card" key={index}>
                  <div className="flex justify-center">
                    <div className="block max-w-sm rounded-lg bg-white shadow-lg ">
                      <img className="rounded-t-lg h-52 w-80 object-cover" src={params.heroImgUrl} alt="" />
                      <div className="p-6">
                        <p className="mb-2 font-semibold uppercase">{params.name}</p>
                        <div className="rating">Rate: {params.averageRating}/5</div>
                        <div className="detail my-5 flex flex-row justify-between">
                          <div className="detail">
                            <p className="category uppercase text-xs">{params.establishmentTypeAndCuisineTags[0]}</p>
                            <p className="price text-xs">{params.priceTag}</p>
                          </div>

                          <div className="status uppercase text-xs">
                            <span className={params.currentOpenStatusCategory === "" || params.currentOpenStatusCategory === "CLOSED" ? "bg-red-700 indicator w-2 h-2 rounded-full " : "bg-green-700 indicator w-2 h-2 rounded-full "}></span>{" "}
                            {params.currentOpenStatusCategory === "" ? "No Information" : params.currentOpenStatusCategory}
                          </div>
                        </div>
                        <Link to={params.restaurantsId}>
                          <button
                            type="button"
                            className="w-full inline-block rounded  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-blue-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </section>
    </div>
  );
}
