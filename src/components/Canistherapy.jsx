import React from "react";
import TitleImage from "./TitleImage";
const Canistherapy = () => {
  return (
    <div className="custom-font">
      <TitleImage imageName="titulka.jpg" text="CANISTERAPIA" />
      <div className="pt-4 text-lg flex flex-col items-center justify-center text-center ">
        <div className="option-title py-6 text-red">
          Intervencia s asistenciou psov - Canisterapia
        </div>
        <div className="flex flex-col gap-6">
          <div>Pes nemá predsudky.</div>
          <div>
            Čo to znamená ? Že môže byť tým najlepším spoločníkom a terapeutom.
            Pes odovzdáva svoju radostnú energiu všetkým zúčastneným
            bezvýhradne, uvolní atmosféru a šíri lásku v celej miestnosti, či
            zariadení.
          </div>
          <div className="font-bold">
            Intervencie s asistenciou psa sú cieľovo orientované služby, ktoré
            zámerne začleňujú psov do zdravotníckych, vzdelávacích a
            humanitárnych služieb (napr. sociliálnej práce) s cieľom dosahovať
            nie len terapeutický prospech u ľudí.
          </div>
          <div className="font-bold">
            Canisterapia - (canis - z lat. pes) je psami asistovaná terapia, je
            len jednou z foriem rôznych intervencií, pretože služby, intervencie
            s asistenciou zvierat delíme:
          </div>
        </div>
        <div className="py-6">
          <ul>
            <li>zvieratami asistované aktivity (AAA)</li>
            <li>zvieratami asistovaná edukácia (AAE)</li>
            <li>zvieratami asistovaná terapia (AAT)</li>
            <li>zvieratami asistovaný koučing/poradentvo (AAC)</li>
          </ul>
        </div>

        <div className="text-blue">
          Toto delenie bolo vytvorené medzinárodnou organizáciou IAHAIO -
          International Association of Human-Animal Interaction Organizations,
          pre terminologickú jednotnosť a priehľadnosť jednotlivých sekcií.
          Intervencie s asistenciou psov vykonáva školený psovod s vycvičeným
          psom .
        </div>
      </div>
    </div>
  );
};

export default Canistherapy;
