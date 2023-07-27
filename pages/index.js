import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import AreaFeatureContainer from "../components/area-feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaContainer />
        <AreaFeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          imageIds="/houseline1.svg"
          smallImageIds="/social-media-logo.svg"
          mediumImageIds="/social-media-logo1.svg"
          largeImageIds="/social-media-logo2.svg"
          extraSmallImageIds="/social-media-logo3.svg"
          extraExtraSmallImageIds="/social-media-logo4.svg"
        />
      </div>
    </>
  );
};

export default LandingPage;
