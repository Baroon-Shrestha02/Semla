import React from "react";
import HomeHero from "../Components/HomeComponents/HomeHero";
import HomeIntro from "../Components/HomeComponents/HomeIntro";
import HomeServices from "../Components/HomeComponents/HomeServices";
import HomeWhy from "../Components/HomeComponents/HomeWhy";
import HomeContact from "../Components/HomeComponents/HomeContact";
import HomeTestimonials from "../Components/HomeComponents/HomeTestimonials";
import HomeVideo from "../Components/HomeComponents/HomeVideo";
import HomeUni from "../Components/HomeComponents/HomeUni";
import HomeSocial from "../Components/HomeComponents/HomeSocial";
import HomeWhy2 from "../Components/HomeComponents/HomeWhy2";

export default function Homepage() {
  return (
    <>
      <HomeVideo />
      {/* <HomeHero /> */}
      <HomeIntro />
      <HomeServices />
      <HomeWhy />
      {/* <HomeWhy2 /> */}

      <HomeUni />
      <HomeTestimonials />
      <HomeSocial />
      <HomeContact />
    </>
  );
}
