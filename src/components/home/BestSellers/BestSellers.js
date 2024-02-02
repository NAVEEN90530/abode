import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Kitchen" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Classic Essentials Pack of 32 Stainless Steel Peacock Lazer Design Stainless Steel Heavy Gauge Dinner Set Shagun|Bartan Set Dinner Set  (Silver)"
          price="1099.00"
          color="Silver"
          badge={true}
          des="Featuring a set of 32 stainless steel Dinner Set including Full Plates, Half Plates, Curry Bowls Large, Chatni Katori, Desert Dish, Glass, Desert Spoon, Baby Spoon, Fork, Baby Fork, and Fork, the Classic Essentials Dinner set is ideal serving a scrumptious meal for people with ease. Featuring a highly attractive design motif, this lunch set will surely impress your lunch and dinner guests while providing a great canvas to showcase your delicious food. Apart from your own use, you can also give this lunch set to your loved ones as a perfect gifting option on special occasions or festivals. Made from thicker gauge stainless steel, the 32-piece Classic Essentials Dinner set is highly durable and can withstand the rigours of daily use with ease. Its strong and sturdy construction makes this set an ideal solution for both special occasions as well as everyday meals. Furthermore, all plates, spoons and bowls in this set are rust-proof and hygienic, preventing contamination of your food. The individual pieces in this Dinner set can be nested together and this makes them ideal to stack up and store away when not being used, saving valuable kitchen space. Thanks to its sturdy construction, you can easily clean this Dinner set with a simple detergent solution and retain its shiny looks for a long time."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Larah by Borosil Pack of 34 Opalware Galaxy Fauna Crockey Set for Dining & Gifting, Plate & Bowl Dinner Set  (White, Green, Microwave Safe)"
          price="1999.00"
          color="White"
          badge={false}
          des="Blending beauty with functionality, the Borosil Larah 34-piece opal ware dinner set is an elegant way to serve dinner to your family or guests. You can set out a variety of dishes with the help of this dinner set, as it includes six full plates, six quarter plated, 12 mini bowls, two serving bowls with two lids, and one six spoons. Borosil, a well-established company, has drawn inspiration from fashion and home decor trends to create a dinner set that teams aesthetic appeal with practical use. Moreover, each lightweight yet durable piece is designed to handle rough use without getting scratched or chipped.

          Food-safe Material
          
          Designed using opal ware, a non-porous material, the Borosil Larah 34-piece opal ware dinner set does not absorb food particles, thereby curbing the growth of bacteria. This ensures that each piece of this dinnerware is completely food-safe and hygienic. And, as opal ware is free from bone ash, this dinner set is 100% vegetarian.
          
          Durable Design
          
          You don’t have to bring out this dinner set only when you have guests at home. Resistant to breaking, chipping, and scratches, this durable dinner set is ideal for daily use as well. So, you can use this dinner set on a regular basis and create a fine dining experience at home.
          
          Worry-free Maintenance
          
          Made from fully tempered, toughened glass, each piece is durable yet light in weight, which helps ensure hassle-free use and cleaning. Also, the convenient stackable design allows you to stow away this dinner set in your crockery cabinet, without taking up too much space.
          
          Dishwasher- and Microwave-safe
          
          You can effortlessly warm up food or reheat leftovers using this dinner set, as it is microwave-safe. It is also dishwasher-safe, which makes cleaning seem like an effortless chore.
          
          Usage Instructions
          
          While cleaning this dinner set, use a soft sponge instead of a scouring pad. Also, you cannot use this opal ware dinner set on the flame."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Abode SmartBuy Pack of 61 Stainless Steel Dinner Set  (Silver)"
          price="2499.00"
          color="Silver"
          badge={true}
          des="You can create a complete utensil collection with the Flipkart SmartBuy Stainless Steel Dinner Set (Pack of 61). This dinner set contains different glasses, spoons, dinner plates, serving bowls, forks, a jug, a rice spoon, a rice plate, and more, thereby making it suitable for your kitchen. Made from high-grade stainless steel, this dinner set provides long-lasting performance. Also, it is safe for the freezer, so you can store your favourite frozen desserts or dishes with ease."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Servewell Pack of 5 Melamin Kids Set - Peppa Pig Dinner Set  (Multicolor)"
          price="693.00"
          color='Multicolor'
          badge={false}
          des="
          Make your little ones smile with their favourite character mealtime set. This set will surely bring adventure to the kids tables and the bold character art will make every meal fun for them."
        />
      </div>
    </div>
  );
};

export default BestSellers;
