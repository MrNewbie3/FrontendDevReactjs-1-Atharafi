import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Information from "./Information";

const Landing_Comps = () => {
  return (
    <section className="section px-16 my-8">
      <div className="wrapper flex flex-row mb-4 items-center justify-between">
        <div className="breadcrumbs ">
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ fontFamily: "Poppins" }}>
            <Link to={"/"} className="font-medium">
              Restaurants
            </Link>{" "}
            <Link className="font-semibold text-black">Detail</Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="content mt-14 mb-10">
        <Gallery />
      </div>
      <div className="information">
        <Information />
      </div>
    </section>
  );
};
export default Landing_Comps;
