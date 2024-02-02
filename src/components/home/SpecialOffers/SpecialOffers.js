import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Fridge" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="SAMSUNG 236 L Frost Free Double Door 3 Star Convertible Refrigerator with Digital Inverter with Display  (Elegant Inox, RT28C3733S8/HL)"
          price="26990.00"
          color="Elegant Inox"
          badge={true}
          des="
          You can stock up on your weekly groceries and easily store them in the Samsung Refrigerator. Moreover, you can even store additional groceries and other food items in this refrigerator by converting the freezer into a fridge. With this refrigerator's Power Cool feature, you can cool groceries or drinks quickly with a simple touch. Also, it has a Power Freeze feature that allows you to freeze food or make ice with the touch of a button."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Whirlpool 235 L Frost Free Double Door 2 Star Refrigerator  (Magnum Steel, IF INV ELT DF278 Magnum Steel(2S)TL)"
          price="22990.00"
          color="Magnum Steel"
          badge={true}
          des="The Whirlpool 235 L Frost Free Double Door Convertible Refrigerator has a special Cool Pad that keeps the freezer cold during power outages for up to 17 hours, preventing ice from melting and other items from spoiling. This refrigerator's Intellisense Inverter Technology adjusts cooling to internal load, minimises energy consumption, and enables stable operation even in conditions of significant voltage fluctuation between 160 and 260 V. In order to maintain balanced air and maximum freshness in the vegetable compartment, the Honeycomb Crisper Cover condenses the evaporated moisture from the food."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="LG 242 L Frost Free Double Door 3 Star Refrigerator with Smart Inverter  (Shiny Steel, GL-I292RPZX)"
          price="25990.00"
          color="Shiny Steel"
          badge={true}
          des="
          You can enjoy chilled drinks and popsicles during summer by keeping them stocked up in the LG 242 L Frost-free Double-door Refrigerator. Its Smart Inverter Compressor is designed to deliver energy-efficient performance, thus keeping a check on your electricity bills. Also, this refrigerator’s Door Cooling+ feature keeps the food items fresh and drinks chilled while rendering uniform rapid cooling. Moreover, its Multi Air Flow system controls the temperature levels to keep the contents fresh."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Haier 190 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer  (MARINE PEONY, HED-204MFB-P)"
          price="15990.00"
          color="MARINE PEONY"
          badge={true}
          des="
          Bring home a new refrigerator that keeps your food fresh and has enhanced storage capacity. The Haier single door refrigerator has a clean back that protects the internal components and allows you to clean it easily. With the external handle, you can open and close the door more conveniently. Thanks to its large vegetable tray that allows you to store all your vegetables in a single space and keeps them fresh for a long time. It has an LED lamp that helps to find your food easily and saves energy by up to 75%. With customisable temperature control, you can set the temperature according to your need. The toughened glass shelves make it easy to store heavy food items. It also features an antibacterial gasket that protects your food from bacteria and fungi to keep them fresh for a long period of time.
          "
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
