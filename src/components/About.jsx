import React from "react";
import TitleImage from "./TitleImage";
import { Link } from "react-router-dom";
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
            <li key={point} className="text-start">
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="items-center flex justify-center text-center flex-col custom-font">
      <TitleImage imageName="titulka.jpg" text="O NÁS" />
      <div className="pt-8 introduction-wrapper justify-between gap-4">
        {introduction("Alica", "Alcicka.jpg", [
          <div className="flex text-start flex-col">
            Vzdelanie:
            <ol className="second-bullet">
              <li className="flex justify-starts items-start flex-col">
                <div>bakalárskeho stupňa -</div>
                <a
                  href="https://www.uvlf.sk/akreditovane-studijne-programy/vztah-clovek-zviera-a-jeho-vyuzitie-v-canisterapii-a-hipoterapii"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  Canisterapie a Hipoterapie na UVLF KE
                </a>
              </li>
              <li className="flex justify-starts items-start flex-col">
                <div>magisterského stupňa -</div>
                <a
                  href="https://www.uvlf.sk/akreditovane-studijne-programy/pohoda-a-ochrana-zvierat"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  Pohoda a ochrana zvierat na UVLF KE
                </a>
              </li>
            </ol>
          </div>,

          "Venujem sa predovšetkým intervenciám s asistenciou svojho psa Berinne",
          "Vo voľnom čase sa venujem vytváraniu infografík a rôznych materiálov pre naše intervencie, prípadne sa zameriavam aj na články o psoch vo svojich FB skupinách ",
        ])}
        {introduction("Berinne", "berin.jpg", [
          "Berinne Briss Amadea ",
          "Plemeno: Lagatto Romagnolo",
          "Canisterapeutický pes s certifikátom od organizácie Jde to team (CZ)",
          "Berinne je stále veselá fenka, ktorá miluje jedlo, pamlsky a všetko, čo sa dá jesť (áno využívame aj jabĺčka, mrkvu alebo uhorku hlavne pri deťoch, ktorým nevyhovujú granule)",
          "Toto plemeno nepĺzne, a tak sa po našej návšteve nemusíte obávať veľkého upratovania",
        ])}
        {introduction("Quido", "Quido.jpeg", [
          "Kríženec plemena Bichon à poil frisé ",
          "Môj psí senior",
          "Vďaka nemu začala oficiálne moja kynologická cesta - prvé začiatky voľby správnej metódy výchovy a výcviku",
          "Intervenciám (canisterapií) sa nikdy nevenoval, ani nebude – nemá na to už vek, a ani najvhodnejšiu povahu, nikomu by neublížil, ale nemal by zo stretnutí radosť, skôr by sa veľmi unavoval",
          "Welfare mojich psov je prvoradé, od toho sa potom odvíja efektívnosť intervencií",
        ])}
      </div>
      <Link
        to="/offers"
        className=" p-4 rounded-lg text-black bg-grayGreen font-bold mt-4"
      >
        Pozri čo ponúkame
      </Link>
    </div>
  );
};

export default About;
