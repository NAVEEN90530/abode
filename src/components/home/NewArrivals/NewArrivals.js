import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="TV" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)"
            price="14990.00"
            color="Black"
            badge={true}
            des="
            Installation: The TV table stand is not included in the box with this model. Customers may ask for the table top stand or wall mount which will be provided to the customer at the time of installation. Please directly call Samsung support (please visit the brand website for toll-free numbers) and provide the product's model name as well as the seller's details mentioned on the invoice to make the request.
            
            Description
With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Mi X Series 125 cm (50 inch) Ultra HD (4K) LED Smart Android TV 2022 Edition with 4K Dolby Vision | HDR10 | HLG | Dolby Audio | DTS: Virtual X | DTS-HD |Vivid Picture Engine"
            price="31999.00"
            color="Black"
            badge={true}
            des="With this Xiaomi TV that breathes life into your entertainment, you bring home the real entertainer and always keep one step ahead of the entertainment curve. The stunning bezel-less design of this TV elevates your viewing experience to a whole new level. Furthermore, you can hear every note thanks to Dolby Audio and 30 W of power from the speakers. The Quad-core A55 CPU also enables this TV to function amazingly well, mesmerising you with its effectiveness."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="SONY Bravia 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2022 Edition  (KD - 43X74K)"
            price="37990.00"
            color="Black"
            badge={true}
            des="Experience a jitter-free and colour-enriched visual experience with the Sony TV which is designed to take your entertainment to an elevated level. This TV is driven by the X1 processor which helps in reducing the noise and boosts the visual quality. Furthermore, the impressive 4K X-Reality PRO of this TV amplifies the visuals and enables you to appreciate up to 4K picture clarity. Additionally, with Motionflow XR 100 sported in this TV, there is no stopping for your entertainment, and you can flawlessly enjoy stutter-free visuals no matter how graphically rich the content is."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="realme 126 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Handsfree Voice Search and Dolby Vision & Atmos  (RMV2005)"
            price="26999.00"
            color="White"
            badge={false}
            des="
            The realme 4K TV is equipped with innovative features that will give you an immersive cinematic experience as soon as you play all your favourite movies. With a 4K UHD MediaTek Processor, you can enjoy a smooth visual experience without any glitches so that nothing interrupts your movie time. When you’re tired of manually controlling the TV and other AloT devices, you can make use of the Hands-free Voice Control feature (via Google Assistant) to do so. And, powered by Google, this TV brings you a variety of content through the Google Play Store."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="OnePlus U1S 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV with Far field and Dolby Audio  (65UC1A00)"
            price="47999.00"
            color="Mixed"
            badge={false}
            des="The OnePlus 50UC1A00 TV is your one home entertainment appliance for immersive, unlimited, and exciting audio-visual delight. This television features a 4K UHD Display for detailed, clear, and immersive visuals, Dynaudio sound offers well-balanced audio, and OnePlus Connect 2.0 to connect your smartphone to this TV."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
