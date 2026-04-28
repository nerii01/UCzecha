import {
  Pin,
  Clock,
  Fish,
  Star,
  Sun,
  type LucideIcon,
  UtensilsCrossed,
  Users,
  CircleUser,
} from 'lucide-react';

export type Lang = 'pl';

interface Badge {
  label: string;
  content?: string;
  Icon: LucideIcon;
}

interface Item {
  title: string;
  description: string;
  price: number;
}

interface Tab {
  id: string;
  label: string;
  items: Item[];
}

interface Rating {
  label: string;
  description: string;
  rating: number;
}

interface Href {
  id: string;
  label: string;
  Icon: LucideIcon;
}

interface Translations {
  meetUs: {
    label: string;
    description: string;
    badges: Badge[];
  };
  location: {
    label: string;
    address: {
      Icon: LucideIcon;
      label: string;
      content: string;
    };
    hours: {
      Icon: LucideIcon;
      label: string;
      content: string;
    };
  };
  menu: {
    label: string;
    tabs: Tab[];
  };
  ratings: {
    label: string;
    ratings: Rating[];
    cta: string;
  };
  footer: {
    links: Href[];
    copyright: string;
    author: string;
  };
}

export const translations: Record<Lang, Translations> = {
  pl: {
    meetUs: {
      label: 'Poznaj nas!',
      description:
        'Restaurację U Czecha prowadzimy z miłości do dobrego jedzenia i ludzi, którzy tu wracają. W naszej kuchni rządzą zasady: świeże, lokalne i z sercem.',
      badges: [
        { label: '26', content: 'Lat na plaży', Icon: Sun },
        { label: '100%', content: 'Świeżości', Icon: Fish },
        { label: '4,6', content: 'Średnia ocen', Icon: Star },
      ],
    },
    location: {
      label: 'Lokalizacja',
      address: {
        Icon: Pin,
        label: 'Adres',
        content: 'ul. Wojska Polskiego 18\n72-415 Międzywodzie',
      },
      hours: {
        Icon: Clock,
        label: 'Godziny otwarcia',
        content: 'Jesteśmy otwarci od 11 do 20',
      },
    },
    menu: {
      label: 'Menu',
      tabs: [
        {
          id: 'fish',
          label: 'Ryby i owoce morza',
          items: [
            {
              title: 'Dorsz smażony',
              description:
                'Świeży dorsz bałtycki w panierce, podawany z frytkami i surówką',
              price: 42,
            },
            {
              title: 'Łosoś z grilla',
              description:
                'Filet z łososia z grilla z masłem ziołowym i warzywami sezonowymi',
              price: 52,
            },
            {
              title: 'Krewetki czosnkowe',
              description:
                'Krewetki tygryse smażone na maśle z czosnkiem i pietruszką',
              price: 48,
            },
            {
              title: 'Halibut pieczony',
              description:
                'Halibut pieczony z cytryną i koperkiem, podawany z puree ziemniaczanym',
              price: 58,
            },
            {
              title: 'Śledź po kaszubsku',
              description: 'Śledź marynowany z cebulą i jabłkiem w śmietanie',
              price: 28,
            },
            {
              title: 'Sandacz smażony',
              description:
                'Filet z sandacza w złocistej panierce z sosem tatarskim',
              price: 54,
            },
            {
              title: 'Kalmary z grilla',
              description:
                'Kalmary z grilla z oliwą, czosnkiem i chili, podawane z pieczywem',
              price: 46,
            },
            {
              title: 'Flądra z pieca',
              description: 'Całą flądra pieczona w ziołach z masłem i cytryną',
              price: 44,
            },
            {
              title: 'Ryba po grecku',
              description:
                'Smażona ryba w marynacie warzywnej, podawana na zimno',
              price: 32,
            },
            {
              title: 'Talerz rybny',
              description: 'Zestaw trzech rodzajów ryb z frytkami i surówkami',
              price: 68,
            },
          ],
        },
        {
          id: 'soup',
          label: 'Zupy',
          items: [
            {
              title: 'Zupa rybna',
              description:
                'Tradycyjna zupa z ryb bałtyckich z warzywami i koperkiem',
              price: 22,
            },
            {
              title: 'Żurek',
              description:
                'Żurek na zakwasie z jajkiem, kiełbasą i ziemniakami',
              price: 18,
            },
            {
              title: 'Krem z dyni',
              description: 'Aksamitny krem z dyni z pestkami i olejem z dyni',
              price: 20,
            },
            {
              title: 'Barszcz czerwony',
              description: 'Klasyczny barszcz z uszkami z farszem grzybowym',
              price: 18,
            },
            {
              title: 'Rosół domowy',
              description: 'Rosół z kury na warzywach z makaronem i koperkiem',
              price: 16,
            },
            {
              title: 'Zupa pomidorowa',
              description: 'Kremowa zupa pomidorowa z ryżem i świeżą bazylią',
              price: 16,
            },
            {
              title: 'Chłodnik',
              description:
                'Chłodnik litewski z botwinką, ogórkiem i jajkiem — sezonowy',
              price: 20,
            },
            {
              title: 'Zupa grzybowa',
              description: 'Zupa z leśnych grzybów z łazankami i śmietaną',
              price: 22,
            },
            {
              title: 'Zupa cebulowa',
              description: 'Francuska zupa cebulowa z grzanką i serem gruyère',
              price: 24,
            },
            {
              title: 'Minestrone',
              description: 'Włoska zupa warzywna z makaronem i parmezanem',
              price: 20,
            },
          ],
        },
        {
          id: 'meals',
          label: 'Dania mięsne',
          items: [
            {
              title: 'Kotlet schabowy',
              description:
                'Tradycyjny schabowy z ziemniakami i kapustą zasmażaną',
              price: 38,
            },
            {
              title: 'Karkówka z grilla',
              description:
                'Karkówka marynowana w ziołach z grilla, podawana z ziemniakami',
              price: 44,
            },
            {
              title: 'Gulasz wołowy',
              description:
                'Gulasz z wołowiny duszony z warzywami, podawany z kaszą',
              price: 46,
            },
            {
              title: 'Pierś z kurczaka',
              description:
                'Grillowana pierś z kurczaka z sosem ziołowym i warzywami',
              price: 36,
            },
            {
              title: 'Żeberka BBQ',
              description:
                'Żeberka wieprzowe w sosie BBQ pieczone przez 4 godziny',
              price: 52,
            },
            {
              title: 'Polędwiczki wieprzowe',
              description:
                'Polędwiczki w sosie śmietanowym z pieczarkami i kaszą',
              price: 48,
            },
            {
              title: 'Kaczka pieczona',
              description: 'Ćwiartka kaczki z jabłkami i modrą kapustą',
              price: 58,
            },
            {
              title: 'Wołowina po burgundzku',
              description:
                'Wołowina duszona w czerwonym winie z warzywami korzeniowymi',
              price: 62,
            },
            {
              title: 'Sznycel wiedeński',
              description:
                'Cienki sznycel z cielęciny w panierce z kaparami i cytryną',
              price: 54,
            },
            {
              title: 'Gołąbki domowe',
              description:
                'Gołąbki z mięsem i ryżem w sosie pomidorowym, jak u babci',
              price: 34,
            },
          ],
        },
        {
          id: 'dessert',
          label: 'Desery',
          items: [
            {
              title: 'Sernik klasyczny',
              description: 'Domowy sernik wiedeński z sosem truskawkowym',
              price: 18,
            },
            {
              title: 'Szarlotka',
              description: 'Ciepła szarlotka z cynamonem i lodami waniliowymi',
              price: 16,
            },
            {
              title: 'Lody rzemieślnicze',
              description:
                'Trzy gałki lodów od lokalnego lodziarza, sezonowe smaki',
              price: 14,
            },
            {
              title: 'Tiramisu',
              description: 'Klasyczne tiramisu z mascarpone i espresso',
              price: 20,
            },
            {
              title: 'Panna cotta',
              description: 'Panna cotta z sosem malinowym i świeżymi owocami',
              price: 18,
            },
            {
              title: 'Brownie',
              description: 'Ciepłe brownie czekoladowe z lodami waniliowymi',
              price: 16,
            },
            {
              title: 'Naleśniki',
              description:
                'Naleśniki z twarogiem i rodzynkami, polane śmietaną',
              price: 18,
            },
            {
              title: 'Makowiec',
              description: 'Domowy makowiec z lukrem i skórką pomarańczową',
              price: 14,
            },
            {
              title: 'Crème brûlée',
              description:
                'Klasyczny crème brûlée z karmelizowanym cukrem i wanilią',
              price: 22,
            },
            {
              title: 'Owoce sezonowe',
              description: 'Świeże owoce z bitą śmietaną i miętą',
              price: 16,
            },
          ],
        },
      ],
    },
    ratings: {
      label: 'Opinie ',
      ratings: [
        {
          label: 'Joanna O.',
          rating: 5,
          description:
            'Smaczne domowe jedzenie. Przepyszna zupa rybna. Duże porcje w rozsądnych cenach. Fajny system wołania klientów po imieniu tworzy sympatyczną atmosferę.',
        },
        {
          label: 'Przemysław P.',
          rating: 5,
          description:
            'Ceny przystępne. Dania smaczne, ładnie podane. Obsługa bardzo miła i pomocna z poczuciem humoru. Polecam sandacza i lemoniady.',
        },
        {
          label: 'Mariusz B.',
          rating: 5,
          description:
            'Bardzo dobra kuchnia i świeże produkty. Bardzo miła obsługa i każdy znajdzie coś dla siebie — od gładzicy do zupy tajskiej.',
        },
        {
          label: 'Michał P.',
          rating: 4,
          description:
            'Fajne miejsce. Dobre, świeże domowe jedzenie. Ryba świeża, dobrze doprawiona. Ogólne wrażenie bardzo pozytywne.',
        },
        {
          label: 'Alicja C.',
          rating: 5,
          description:
            'Smaczne domowe obiady. Panie z obsługi bardzo sympatyczne i z poczuciem humoru. Pyszna ryba, filet z kurczaka i schabowy.',
        },
        {
          label: 'Tomson',
          rating: 5,
          description:
            'Mega smaczne jedzenie, świeże, ciepłe i w przystępnych cenach. Pani Beatka zawsze uśmiechnięta — stołowaliśmy się cały pobyt.',
        },
        {
          label: 'Marianna W.',
          rating: 5,
          description:
            'Pychota — wyważone smakowo, można się najeść, atmosfera domowa. Cena zaskoczyła pozytywnie. Polecam!',
        },
      ],
      cta: 'Byłeś u nas? Zostaw opinie na',
    },
    footer: {
      links: [
        { id: 'about', label: 'O Nas', Icon: CircleUser },
        { id: 'menu', label: 'Menu', Icon: UtensilsCrossed },
        { id: 'location', label: 'Lokalizacja', Icon: Pin },
        { id: 'ratings', label: 'Opinie', Icon: Users },
      ],
      copyright: '© 2026 U Czecha.',
      author: 'Wykonanie nerii.pl',
    },
  },
};
