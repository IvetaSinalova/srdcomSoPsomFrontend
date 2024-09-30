import React from "react";
import TitleImage from "./TitleImage";

const Offers = () => {
  return (
    <div>
      <TitleImage imageName="titulka.jpg" text="PONUKA" />
      <div className="pt-8 items-center flex flex-col justify-center gap-6 custom-font custom-bullets">
        <ul>
          <li className="text-center flex justify-center items-center">
            Skupinové intervencie pre deti, seniorov{" "}
          </li>
          <li className="text-center flex justify-center items-center">
            Individuálne intervencie u vás doma{" "}
          </li>
          <li className="text-center flex justify-center items-center">
            Možnosť nadviazania spolupráce s odborníkmi z oblasti psychológie,
            logopédie, fyzioterapie atď.
          </li>
        </ul>
        <div>
          Snažím sa, aby forma našich intervencií s asistenciou psa
          (canisterapia) bola originálna, zábavná a vzdelávacia. Cieľom je
          zlepšiť u detí fyzické, emocionálne, sociálne a kognitívne schopnosti
          za aktívnej účasti špeciálne vycvičeného psa a certifikovaného
          psovoda. Pri spoločných aktivitách využívam rôzne materiálny, prevažne
          tie vlastnoručne vyrábané a každé stretnutie je tak jedinečné a
          nezabudnuteľné.
        </div>
        <div>
          <div className="font-bold text-center mb-2">
            Ako prebieha naše stretnutie ?
          </div>
          <ul className="flex justify-center flex-col items-center">
            <li>
              <div>
                <p className="underline">Vzájomná konzultácia </p>{" "}
                <p>
                  Pri prvom kontakte sa dohodnem s rodičmi alebo klientom, čo
                  očakávajú od intervencií so psom a kam sa chcú pomocou
                  vzájomných stretnutí posúvať ďalej. Na základe konzultácie
                  zostavujem individuálne plán – môže ísť o jednorazové
                  stretnutie alebo o nadviazanie dlhodobej spolupráce.{" "}
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="underline">Stretnutie </p>{" "}
                <p>
                  Pravidelne veterinárne ošetrený, upravený a čistý pes je
                  úplnou samozrejmosťou, taktiež bez klinických prejavov
                  ochorení. Pracujeme prevažne 30-40 minút so skupinkou do max.
                  8 klientov – ide o ideálnu dĺžku stretnutia počas ktorého
                  klienti vydržia byť sústredení. Stretnutie prebieha za
                  prítomnosti rodiča/učiteľa, ktorý zodpovedá za dieťa/deti, je
                  oboznámený s priebehom intervencií, v prípade potreby aktívne
                  asistuje psovodovi (mená detí...). Za psa zodpovedá psovod.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div style={{ fontSize: "19px" }}>
          Poznámka: vo výnimočných prípadoch môže dôjsť k zrušeniu stretnutia aj
          v daný deň kvôli zdravotným komplikáciám či už psa alebo psovoda
          (zdravie psa a klientov sú prvoradé, snažím sa predchádzať prenosu
          zoonóz), ďakujeme za porozumenie. :)
        </div>
      </div>
    </div>
  );
};

export default Offers;
