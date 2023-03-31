import data from "../../data/detail.json";
const Rate = () => {
  const index = [1];
  return (
    <section className="parent ">
      <div className="title mt-16">
        <h1 className="font-semibold text-lg">Rating</h1>
      </div>
      {index.map((res) => {
        return (
          <div className="container-travel flex flex-row w-full mt-5 items-center justify-between shadow-xl rounded-3xl p-6">
            <div className="trans flex flex-col justify-center">
              <div className="trans-name flex flex-col items-start justify-center  font-medium">
                <h1>Review</h1>
                <p>
                  <span className="text-semiOrange font-bold text-lg">{data.data.location.num_reviews} </span>
                  Reviews
                </p>
              </div>
            </div>
            <div className="trans flex flex-col justify-center">
              <div className="trans-name flex flex-col items-start justify-center  font-medium">
                <h1>Rank</h1>
                <p>#{data.data.location.ranking_position}</p>
                <p className="capitalize">Category: {data.data.location.ranking_category}</p>
                <p>
                  <span className="text-semiOrange font-bold text-lg">{data.data.location.ranking} </span>
                </p>
              </div>
            </div>
            <div className="ket">
              <h1 className="font-semibold">Award</h1>
              <p>Category: {data.data.location.category.name}</p>
              <p>Years: {data.data.overview.award.yearsText}</p>
              <p className="text-textDisabled">Award: {data.data.overview.award.awardText}</p>
            </div>
            <div className="Rate">
              <div className="Rate">
                <p>Rating</p>
                <p className="text-sm font-medium ">
                  <span className="text-semiOrange font-bold text-lg">{data.data.overview.rating.primaryRating}</span>/5
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Rate;
