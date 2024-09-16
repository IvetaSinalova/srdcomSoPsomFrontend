import React from "react";
import TitleImage from "./TitleImage";
const Canistherapy = () => {
  return (
    <div>
      <TitleImage
        imageName="titulka.jpg"
        text="INTERVENCIE S ASISTENCIOU PSOV - CANISTERAPIA"
      />
      <div className="pt-4 text-lg flex flex-col gap-4">
        <div>
          Pes nemá predsudky. Čo to znamená ? Že môže byť tým najlepším
          spoločníkom a terapeutom. Pes odovzdáva svoju radostnú energiu všetkým
          zúčastneným bezvýhradne, uvolní atmosféru a šíri lásku v celej
          miestnosti, či zariadení. Intervencie s asistenciou psa sú cieľovo
          orientované služby, ktoré zámerne začleňujú psov do zdravotníckych,
          vzdelávacích a humanitárnych služieb (napr. sociliálnej práce) s
          cieľom dosahovať nie len terapeutický prospech u ľudí. Canisterapia -
          (canis - z lat. pes) je psami asistovaná terapia, je len jednou z
          foriem rôznych intervencií, pretože služby, intervencie s asistenciou
          zvierat delíme:
        </div>
        <div>
          - zvieratami asistované aktivity (AAA) - zvieratami asistovaná
          edukácia (AAE) - zvieratami asistovaná terapia (AAT) - zvieratami
          asistovaný koučing/poradentvo (AAC)
        </div>
        <div>
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
