import React from "react";
import TitleImage from "./TitleImage";
import { Link } from "react-router-dom";
const Canistherapy = () => {
  return (
    <div className="custom-font">
      <TitleImage imageName="titulka.jpg" text="CANISTERAPIA" />
      <div className="pt-8 flex flex-col items-center justify-center text-center ">
        <div className="flex flex-col gap-6">
          <div>Pes nemá predsudky.</div>
          <div>
            <div>
              Čo to znamená ? Že môže byť tým najlepším spoločníkom a
              terapeutom. Pes odovzdáva svoju radostnú energiu všetkým
              zúčastneným bezvýhradne, uvoľní atmosféru a šíri lásku v celej
              miestnosti, či zariadení.
            </div>
            <div>Vďaka psom je človek tu a teraz v tejto chvíli.</div>
          </div>

          <div className="font-bold">
            Intervencie s asistenciou psa sú cieľovo orientované služby, ktoré
            zámerne začleňujú psov do zdravotníckych, vzdelávacích a
            humanitárnych služieb (napr. sociálnej práce) s cieľom dosahovať nie
            len terapeutický prospech u ľudí.
          </div>
          <div className="font-bold">
            <div>
              Canisterapia - (canis - z lat. pes) je psami asistovaná terapia,
              je len jednou z foriem rôznych intervencií.
            </div>
            <div>To preto, že intervencie s asistenciou zvierat delíme:</div>
          </div>
        </div>
        <div className="py-6">
          <ul className="flex flex-col items-center justify-center">
            <li>
              zvieratami asistované aktivity (AAA) - Animal Assisted Activity
            </li>
            <li>
              zvieratami asistovaná edukácia (AAE) - Animal Assisted Education
            </li>
            <li>
              zvieratami asistovaná terapia (AAT) - Animal Assisted Therapy
            </li>
            <li>
              zvieratami asistovaný koučing/poradentvo (AAC) - Animal Assisted
              Coaching/Counselling
            </li>
          </ul>
        </div>

        <div className="text-blue">
          Toto delenie bolo vytvorené medzinárodnou organizáciou IAHAIO -
          International Association of Human-Animal Interaction Organizations,
          pre terminologickú jednotnosť a priehľadnosť jednotlivých sekcií
          (dokument – White Paper 2014).
        </div>
        <Link
          to="/offers"
          className=" p-4 rounded-lg text-black bg-grayGreen font-bold mt-4"
        >
          Pozri čo ponúkame
        </Link>
      </div>
    </div>
  );
};

export default Canistherapy;
