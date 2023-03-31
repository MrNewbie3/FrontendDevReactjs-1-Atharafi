import React from "react";
import data from "../data/detail.json";

export default function Detail() {
  return (
    <section>
      <div className="wrapper">
        <div className="bio">
          <div className="title">
            <h1>Restaurants</h1>
          </div>
          <div className="flex flex-row gap-x-5 items-center justify-center">
            <div className="left-img w-full flex justify-end">
              <img src={data.data.location.photo.images.large.url} alt="" className="rounded-xl" />
            </div>
            <div className="images-assets w-full flex flex-col gap-y-5">
              <div className="top w-full flex flex-row gap-x-5">
                <img src={data.data.location.photo.images.medium.url} alt="" className="rounded-xl" />
                <img src={data.data.location.photo.images.medium.url} alt="" className="rounded-xl" />
              </div>
              <div className="bottom w-full flex flex-row gap-x-5">
                <img src={data.data.location.photo.images.medium.url} alt="" className="rounded-xl" />
                <img src={data.data.location.photo.images.medium.url} alt="" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="location"></div>
        <div className="review"></div>
      </div>
    </section>
  );
}
