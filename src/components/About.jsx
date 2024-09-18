import React from "react";
import TitleImage from "./TitleImage";
const About = () => {
  const introduction = (name, imageName, points) => {
    return (
      <div className="about-image-wrapper flex items-center flex-col ">
        <div className="option-title pb-4">{name}</div>
        <img
          src={`/${imageName}`}
          alt={imageName}
          className="about-image object-cover"
        />
        <ul className="pt-6">
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="items-center flex justify-center text-center flex-col custom-font">
      <TitleImage imageName="titulka.jpg" text="O NÁS" />
      <div className="option-title py-6 text-red">O nás</div>
      <div className="introduction-wrapper justify-between gap-4">
        {introduction("Alica", "Alcicka.jpg", [
          "Študovala",
          "Venujem",
          "Skvelé",
          "Tvorba fotografík a článkov o psoch",
          "Administrátorka FB skupín: Srdcom so psom, Venčenie a stráženie (bol by dobrý preklik)",
        ])}
        {introduction("Berinne", "berin.jpg", [
          "Berinne Briss Amadea",
          "Lafotto, 2 roky",
          "canisterapeutický pes",
          "Milé vety o tom čo má rada",
        ])}
        {introduction("Quido", "Quido.jpeg", [
          "Quido",
          "Kríženec Bichona",
          "Môj psí senior",
          "Vďaka nemu to celé začalo",
        ])}
      </div>
    </div>
  );
};

export default About;
