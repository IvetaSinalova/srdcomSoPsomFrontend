import React from "react";
import TitleImage from "./TitleImage";
const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <TitleImage imageName="titulka.jpg" text="KONTAKT" />
      <div className="flex">
        <img
          src="/quido_big.png"
          alt="quido_big"
          style={{ height: "300px" }}
          className="mt-4"
        />
        <div className="flex justify-center items-center">
          <div className=" p-8 flex gap-12 text-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/message.png"
                alt="message"
                style={{ height: "100px", width: "100px" }}
              />
              <div>Email</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/location.png"
                alt="location"
                style={{ height: "100px", width: "100px" }}
              />
              <div>Kde nás nájdete</div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-font text-center">
        <div className="option-title">Chceš nás podporiť ?</div>
        <div className="option-title text-blue">
          Pozvite nás na virtuálnu kávu
        </div>
        <div>
          Ak sa Vám moja práca páči a chcete ma podporiť a motivovať nie len v
          tvorbe infografiky, môžete ma virtuálne pozvať na kávu.
        </div>
        <div>Vopred Vám ďakujem za každú jednu kávičku!</div>
      </div>
    </div>
  );
};

export default Contact;
