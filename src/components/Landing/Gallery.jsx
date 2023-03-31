import data from "../../data/detail.json";
const Gallery = () => {
  const images = ["Gallery_Hero.png", "Gallery_0.png", "Gallery_1.png", "Gallery_2.png", "Gallery_3.png"];
  return (
    <section className="flex flex-row gap-x-5 items-center">
      <div className="left-img w-full ">
        <img src={data.data.location.photo.images.large.url} alt="" className="rounded-xl" />
      </div>
      <div className="images-assets w-full flex flex-col gap-y-5">
        <div className="top w-full flex flex-row gap-x-5">
          {images.slice(1, 3).map((image, index) => (
            <figure key={index}>
              <img src={data.data.location.photo.images.large.url} alt="" className="rounded-2xl" />
            </figure>
          ))}
        </div>
        <div className="bottom w-full flex flex-row gap-x-5">
          {images.slice(3).map((image, index) => (
            <figure key={index}>
              <img src={data.data.location.photo.images.large.url} alt="" className="rounded-2xl" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
