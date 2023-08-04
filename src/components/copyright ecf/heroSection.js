import React, {useEffect, useState} from "react";

import Image from "next/image";

import BgImageMobile from "../../../public/images/vit-mobile.png";
import BgImageDesktop from "../../../public/images/vit.png";

function heroSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Initial check for mobile on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const bgImage = isMobile ? BgImageMobile : BgImageDesktop;

    return (
    <div className="relative h-[92vh] bg-cover z-0">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111042] z-20" />
      <div className="absolute top-0 left-0 z-30 text-white mx-8 md:mx-16 lg:mx-16 flex flex-col h-full justify-center w-[80vw] md:w-[70vw] lg:w-[50vw]">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
          Test
        </h1>

        <p className="text-xl md:text-2xl lg:text-2xl my-6">
        Test
        </p>
          <p className="text-xl md:text-2xl lg:text-2xl text-white">
          Test
      </p>
          <p className="text-2xl md:text-2xl lg:text-2xl mb-6 text-white"><span className="font-bold"> Test </span>Test</p>
        <p className="text-xl md:text-2xl lg:text-2xl mt-6 mb-16">
          Test
        </p>
          <a href="https://drive.google.com/file/d/1taXGBBrGDRGsjNIha57x5DssvmoraCkJ/view?usp=sharing" target="_blank" className="w-fit border-2 border-white bg-transparent bg-white hover:bg-transparent hover:text-white text-[#111042] py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all">
              Download Brochure
          </a>
      </div>
    </div>
  );
};

export default heroSection;