import LOMA from '../assets/LOMA.png';
import Cosmic from '../assets/Cosmic.png';
import ArtemisLogo from '../assets/ArtemisLogo.png';
import Maanesten from '../assets/Maanesten.png';
import NCB from '../assets/NCB.jpg';
import CQ from '../assets/CQ.png';
import Karins from '../assets/Karins.png';
import BCAT from '../assets/BCAT.png';

/**
 * SLIK BRUKER DU DENNE FILEN
 * - Portfolio-siden bruker: title, description, image
 * - Prosjektsiden bruker: longDescription, images, highlights, tech, links (valgfritt)
 *
 * BILDER:
 * - image = thumbnail (ett bilde på portefølje-siden)
 * - images = galleri på prosjektsiden (kan være tom eller ha mange bilder)
 *   Hvis images er tom/utelatt, kan prosjektsiden falle tilbake til [image].
 */

const Projects = [
  {
    id: '1',
    title: 'BCAT - Body Composition Assessment Tool',
    description: 'Bachelorprosjekt. Logo, wireframes, prototype, React-applikasjon.',
    image: BCAT,

    // Prosjektside-innhold:
    longDescription: [
      'I idretten er det stort fokus på prestasjonsoptimalisering, og vurdering av kroppssammensetning inngår ofte som en del av dette arbeidet. Slike vurderinger kan føre til økt kroppspress og risiko for psykiske belastninger hos utøvere. For å møte denne utfordringen har vår oppdragsgiver Therese Fostervold Mathisen og Lindsay S. Macnaughton, på oppdrag fra Den internasjonale olympiske komité (IOC), utarbeidet åtte retningslinjer for forsvarlig gjennomføring av kroppsmålinger. Dette med et mål om å redusere helserisiko og fremme en tryggere tilnærming.',
      'Vårt prosjekt har hatt som mål å overføre disse retningslinjene til et digitalt beslutningstre, og undersøke hvordan man kan designe dette på en effektiv måte til en mobilapplikasjon. Verktøyet skal bidra til at fagpersonell på en enkel og brukervennlig måte kan vurdere hvorvidt det er hensiktsmessig å gjennomføre kroppsmålinger på utøvere, i tråd med disse retningslinjene.',
      'Målet med applikasjonen er å gi veiledning til fagpersonell i avgjørelsen om det er hensiktsmessig for en idrettsutøver å gjennomføre en vurdering av kroppssammensetning (BC-vurdering). I tillegg vil mobilapplikasjonen fungere som et verktøy for å sikre en systematisk gjennomføring av vurderingen i henhold til retningslinjene. Applikasjonen skal også inkludere informasjonsmateriale og ressurser som gir brukerne en helhetlig forståelse for temaene presentert i applikasjonen.',
      'Denne appen er for tiden under utvikling da vi har fått midler til å fullføre prosjektet slik at dette verktøyet kan tas i bruk av helsepersonell i nær fremtid',
      'Prosjektet innebar å kartlegge målgruppe, lage storyboard for å visualisere behov og utfordringer, benchmarking av andre swipe- og beslutningstre-apper, utarbeide kravspesifikasjon, utvikle innhold, struktur og visuell utforming av beslutningstreet, utvikling av piktogrammer, utvikle visuell profil, samt bruke verktøy til å undersøke tilgjengelighet og kontraster, utvikle logo og appikon, low-fidelity og high-fidelity prototype, og til slutt utvikle selve React Native applikasjonen.'
    ],
    images: [
      // Legg inn flere bilder her når du har dem:
      // eksempel: BCAT_Screen1, BCAT_Screen2
    ],
    tech: ['React Native', 'Grafisk design', 'Beslutningstre'],
    highlights: [
      'Utviklet visuelt design og prototype',
      'Implementerte app-struktur og komponenter',
      'Fokus på brukervennlighet og tydelig flyt'
    ],
    links: {
      // github: 'https://github.com/...',
      // live: 'https://...',
      // figma: 'https://...'
    }
  },

  {
    id: '2',
    title: 'Artemis Soneterapi & Øreakupunktur',
    description: 'Wordpress-nettside og logo for bedrift.',
    image: ArtemisLogo,

    longDescription: [
      'Skriv hva kunden/bedriften trengte, og hvilken rolle du hadde i prosjektet.',
      'Beskriv hva du leverte (logo, farger, typografi, nettsidestruktur, innhold).',
      'Nevn eventuelle hensyn som SEO, mobiltilpasning eller brukervennlighet.'
    ],
    images: [
      // Artemis_Screen1, Artemis_Screen2 ...
    ],
    tech: ['WordPress', 'Grafisk design'],
    highlights: [
      'Utviklet logo og visuell profil',
      'Bygget og tilpasset nettsted i WordPress',
      'Sikret mobilvennlig layout'
    ],
    links: {
      // live: 'https://...'
    }
  },

  {
    id: '3',
    title: 'LOMA – Lokal Mat app',
    description: 'Prosjekteksamen i Prosjektledelse. Logo, wireframes, mm.',
    image: LOMA,

    longDescription: [
      'Skriv en dypere beskrivelse av app-idéen og hvilket problem den løser.',
      'Beskriv hvordan dere planla prosjektet: scope, tidslinje, roller, leveranser.',
      'Beskriv hva du bidro med (logo, wireframes, presentasjon, dokumentasjon).'
    ],
    images: [
      // LOMA_Wireframe1, LOMA_Wireframe2 ...
    ],
    tech: ['Prosjektledelse', 'Grafisk design'],
    highlights: [
      'Utviklet logo og wireframes',
      'Bidro til plan/tidslinje og presentasjonsmateriale',
      'Fokus på tydelig user journey'
    ],
    links: {
      // figma: 'https://...'
    }
  },

  {
    id: '4',
    title: 'Cosmic Soul & Funk Festival',
    description: 'Prosjekteksamen i Grafisk design. Fargeprofil, logo, grafiske elementer.',
    image: Cosmic,

    longDescription: [
      'Beskriv konseptet for festivalen og den visuelle retningen.',
      'Forklar designvalg (farger, typografi, formspråk) og hvordan de støtter uttrykket.',
      'Nevn hvilke flater du designet (plakat, SoMe, merch, program osv.).'
    ],
    images: [
      // Cosmic_Poster, Cosmic_Elements ...
    ],
    tech: ['Grafisk design'],
    highlights: [
      'Utviklet fargeprofil og logo',
      'Designet grafiske elementer og visuelt system',
      'Tilpasset uttrykk til ulike flater'
    ],
    links: {}
  },

  {
    id: '5',
    title: 'Maanesten',
    description:
      'Prosjekteksamen i Digital markedsføring. Landingssider og ads for smykkemerket Maanesten.',
    image: Maanesten,

    longDescription: [
      'Beskriv målet med kampanjen og hvem målgruppen var.',
      'Forklar hvordan du jobbet med landingssider, budskap, CTA og annonser.',
      'Nevn gjerne resultater/antakelser (hva du optimaliserte for og hvorfor).'
    ],
    images: [
      // Maanesten_Landing1, Maanesten_Ads1 ...
    ],
    tech: ['Digital markedsføring', 'Landingssider', 'Ads'],
    highlights: [
      'Designet landingssider med tydelige CTA-er',
      'Utviklet annonsemateriell til kampanje',
      'Jobbet målgruppe- og budskapsrettet'
    ],
    links: {}
  },

  {
    id: '6',
    title: 'Nygaardsgata Café & Bistro',
    description: 'Logo, menyer, meta-innlegg, mm.',
    image: NCB,

    longDescription: [
      'Beskriv hva du leverte til caféen/bistroen og hvilket uttrykk dere gikk for.',
      'Forklar hvordan du bygde en helhetlig profil (logo, typografi, farger, layout).',
      'Nevn gjerne hvilke kanaler/flater dette ble brukt på.'
    ],
    images: [
      // NCB_Menu1, NCB_Post1 ...
    ],
    tech: ['Grafisk design', 'SoMe'],
    highlights: [
      'Utviklet logo og menydesign',
      'Produserte innhold til sosiale medier',
      'Sikret helhetlig uttrykk'
    ],
    links: {}
  },

  {
    id: '7',
    title: 'Karins Hjemmebakst & Catering',
    description: 'Logo, menyer, skilt.',
    image: Karins,

    longDescription: [
      'Beskriv behovet (profil, menyer, skilting) og hvem målgruppen er.',
      'Forklar designvalg og hva du ønsket å kommunisere (hjemmelaget, varmt, kvalitet).',
      'Nevn leveranser og eventuelle tilpasninger for trykk/format.'
    ],
    images: [
      // Karins_Menu1, Karins_Sign1 ...
    ],
    tech: ['Grafisk design'],
    highlights: [
      'Utviklet logo og menymateriell',
      'Designet skilting/visuelle flater',
      'Tilpasset for trykk og lesbarhet'
    ],
    links: {}
  },

  {
    id: '8',
    title: 'CQ - CodeQuest',
    description: 'Prosjekteksamen i UI Designprosjekt (brettspill). Logo, spillbrett, spillkort.',
    image: CQ,

    longDescription: [
      'Beskriv spillets konsept og hva slags opplevelse dere ønsket å lage.',
      'Forklar hvordan du jobbet med UI/visuelt system for brett, kort og regler.',
      'Nevn hvordan du sikret konsistens, lesbarhet og tydelige hierarkier.'
    ],
    images: [
      // CQ_Board, CQ_Cards1 ...
    ],
    tech: ['UI-design', 'Grafisk design'],
    highlights: [
      'Utviklet logo og visuell identitet for spillet',
      'Designet spillbrett og spillkort',
      'Fokus på visuelle hierarkier og tydelighet'
    ],
    links: {}
  }
];

export default Projects;




