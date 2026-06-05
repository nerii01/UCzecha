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
} from "lucide-react";

export type Lang = "pl" | "en" | "de";

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
  header: {
    title: string;
    description: string;
    cta: string;
  };
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
    header: {
      title: "u czecha",
      description:
        "Świeże ryby, tradycyjna kuchnia polska i rodzinna atmosfera w sercu Międzywodzia",
      cta: "zobacz menu",
    },
    meetUs: {
      label: "Poznaj nas!",
      description:
        "Restaurację U Czecha prowadzimy z miłości do dobrego jedzenia i ludzi, którzy tu wracają. W naszej kuchni rządzą zasady: świeże, lokalne i z sercem.",
      badges: [
        { label: "100%", content: "Świeżości", Icon: Fish },
        { label: "4,6", content: "Średnia ocen", Icon: Star },
        { label: "Domowe", content: "Przepisy", Icon: Sun },
      ],
    },
    location: {
      label: "Lokalizacja",
      address: {
        Icon: Pin,
        label: "Adres",
        content: "ul. Wojska Polskiego 18\n72-415 Międzywodzie",
      },
      hours: {
        Icon: Clock,
        label: "Godziny otwarcia",
        content: "Jesteśmy otwarci od 11 do 20",
      },
    },
    menu: {
      label: "Menu",
      tabs: [
        {
          id: "soups",
          label: "Zupy",
          items: [
            {
              title: "Zupa dnia",
              description:
                "Codziennie inna zupa przygotowywana przez naszego kucharza ze świeżych składników.",
              price: 12,
            },
            {
              title: "Rosół",
              description:
                "Klasyczna zupa na wywarze drobiowym z makaronem i warzywami.",
              price: 15,
            },
            {
              title: "Pomidorowa",
              description:
                "Zupa na bazie pomidorów, podawana z ryżem lub makaronem.",
              price: 15,
            },
            {
              title: "Barszcz ukraiński",
              description:
                "Gęsta zupa z buraków, warzyw i fasoli, doprawiona ziołami.",
              price: 18,
            },
            {
              title: "Rybna",
              description:
                "Aromatyczna zupa z wywaru rybnego z dodatkiem warzyw i przypraw.",
              price: 25,
            },
            {
              title: "Flaki",
              description:
                "Tradycyjna zupa z wołowych flaków z majerankiem i warzywami.",
              price: 25,
            },
            {
              title: "Chłodnik",
              description:
                "Zimna zupa na bazie jogurtu i buraków z dodatkiem świeżych warzyw.",
              price: 25,
            },
            {
              title: "Tajska",
              description:
                "Egzotyczna zupa inspirowana kuchnią tajską z nutą kokosa i ostrych przypraw.",
              price: 25,
            },
            {
              title: "Gulaszowa",
              description:
                "Sycąca zupa gulaszowa z kawałkami mięsa i warzywami w aromatycznym sosie.",
              price: 25,
            },
            {
              title: "Żurek",
              description: "Tradycyjny żurek na zakwasie z jajkiem i kiełbasą.",
              price: 25,
            },
          ],
        },
        {
          id: "fish",
          label: "Ryby",
          items: [
            {
              title: "Dorsz",
              description:
                "Filet z dorsza podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 49,
            },
            {
              title: "Sandacz",
              description:
                "Filet z sandacza podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 50,
            },
            {
              title: "Halibut",
              description:
                "Filet z halibuta podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 48,
            },
            {
              title: "Łosoś",
              description:
                "Filet z łososia podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 48,
            },
            {
              title: "Pstrąg",
              description:
                "Świeży pstrąg podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 48,
            },
            {
              title: "Flądra",
              description:
                "Podawana z frytkami lub ziemniakami oraz surówkami.",
              price: 130,
            },
            {
              title: "Karmazyn",
              description:
                "Podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 130,
            },
          ],
        },
        {
          id: "meats",
          label: "Dania mięsne",
          items: [
            {
              title: "Kotlet schabowy",
              description:
                "Podawany z frytkami lub ziemniakami oraz surówkami. Opcjonalnie z kapustą zasmażaną.",
              price: 35,
            },
            {
              title: "Grillowany schab z kością",
              description:
                "Soczysty schab z kością z grilla, serwowany z ziemniakami lub frytkami i surówkami.",
              price: 45,
            },
            {
              title: "Karkówka grillowana",
              description:
                "Podawana z frytkami lub ziemniakami oraz surówkami.",
              price: 38,
            },
            {
              title: "Filet z kurczaka panierowany",
              description:
                "Podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 35,
            },
            {
              title: "Filet z kurczaka grillowany",
              description:
                "Podawany z frytkami lub ziemniakami oraz surówkami.",
              price: 38,
            },

            {
              title: "Placek po węgiersku ze śmietaną",
              description:
                "Ziemniaczany placek po węgiersku z gulaszem wieprzowym i śmietaną.",
              price: 45,
            },
            {
              title: "Golonka gotowana",
              description:
                "Tradycyjna gotowana golonka wieprzowa podawana z ziemniakami i duszoną kapustą.",
              price: 50,
            },
            {
              title: "Policzki wieprzowe",
              description:
                "Duszone policzki wieprzowe w sosie, podawane z ziemniakami i surówkami.",
              price: 45,
            },
            {
              title: "Grillowany Kurczak w sosie",
              description:
                "Grillowany filet z kurczaka w delikatnym sosie, podawany z ziemniakami i surówkami.",
              price: 45,
            },
            {
              title: "Bryzol wieprzowy",
              description: "Z pieczarkami i masłem czosnkowym.",
              price: 45,
            },
            {
              title: "Rolada drobiowa",
              description:
                "Faszerowana szparagami, podawana w aromatycznym sosie.",
              price: 45,
            },
            {
              title: "Wątróbka drobiowa",
              description:
                "Smażona wątróbka drobiowa podawana z ziemniakami i świeżymi surówkami.",
              price: 35,
            },
            {
              title: "Kotlet mielony",
              description:
                "Domowy kotlet mielony z ziemniakami i sezonowymi surówkami.",
              price: 35,
            },
            {
              title: "Polędwiczki wieprzowe",
              description: "W sosie pieczarkowym, podawane z ziemniakami.",
              price: 45,
            },
          ],
        },
        {
          id: "flour",
          label: "Dania mączne",
          items: [
            {
              title: "Pierogi ruskie",
              description:
                "Pierogi z nadzieniem z ziemniaków i twarogu, podawane ze skwarkami i cebulką.",
              price: 30,
            },
            {
              title: "Pierogi z mięsem",
              description:
                "Soczyste pierogi z nadzieniem mięsnym, podawane ze skwarkami i cebulką.",
              price: 30,
            },
            {
              title: "Naleśniki z twarogiem",
              description:
                "Delikatne naleśniki z nadzieniem z białego sera, podawane ze śmietaną.",
              price: 35,
            },
            {
              title: "Placki ziemniaczane",
              description:
                "Chrupiące placki ziemniaczane podawane ze śmietaną lub gulaszem.",
              price: 20,
            },
            {
              title: "Bułka ze śledziem",
              description: "Świeża bułka z filetem śledziowym i dodatkami.",
              price: 20,
            },
          ],
        },
        {
          id: "salad",
          label: "Sałatki",
          items: [
            {
              title: "Sałatka grecka",
              description:
                "Klasyczna sałatka z pomidorami, ogórkiem, oliwkami, cebulą i serem feta.",
              price: 38,
            },
            {
              title: "Sałatka cezar",
              description:
                "Sałatka z sałatą rzymską, grzankami, parmezanem i sosem cezar.",
              price: 40,
            },
            {
              title: "Sałatka z wątróbką drobiową z serem pleśniowym i owocami",
              description:
                "Sałatka z smażoną wątróbką drobiową, serem pleśniowym i sezonowymi owocami.",
              price: 40,
            },
            {
              title: "Sałatka z krewetkami i szynką parmeńską",
              description:
                "Elegancka sałatka z krewetkami, szynką parmeńską i świeżymi warzywami.",
              price: 48,
            },
          ],
        },
        {
          id: "maca",
          label: "Makarony",
          items: [
            {
              title: "Spaghetti bolognese",
              description:
                "Klasyczne spaghetti z mięsnym sosem bolognese i parmezanem.",
              price: 40,
            },
            {
              title: "Makaron penne z kurczakiem i brokułami w sosie",
              description:
                "Penne z grillowanym kurczakiem, brokułami w kremowym sosie.",
              price: 42,
            },
            {
              title: "Makaron z krewetkami",
              description:
                "Makaron z soczystymi krewetkami w aromatycznym sosie czosnkowo-maślanym.",
              price: 48,
            },
          ],
        },
        {
          id: "deser",
          label: "Deser",
          items: [
            {
              title: "Tiramisu",
              description:
                "Klasyczny włoski deser z mascarpone, biszkoptami nasączonymi kawą i kakao.",
              price: 10,
            },
          ],
        },
      ],
    },
    ratings: {
      label: "Opinie ",
      ratings: [
        {
          label: "Joanna O.",
          rating: 5,
          description:
            "Smaczne domowe jedzenie. Przepyszna zupa rybna. Duże porcje w rozsądnych cenach. Fajny system wołania klientów po imieniu tworzy sympatyczną atmosferę.",
        },
        {
          label: "Przemysław P.",
          rating: 5,
          description:
            "Ceny przystępne. Dania smaczne, ładnie podane. Obsługa bardzo miła i pomocna z poczuciem humoru. Polecam sandacza i lemoniady.",
        },
        {
          label: "Mariusz B.",
          rating: 5,
          description:
            "Bardzo dobra kuchnia i świeże produkty. Bardzo miła obsługa i każdy znajdzie coś dla siebie — od gładzicy do zupy tajskiej.",
        },
        {
          label: "Michał P.",
          rating: 4,
          description:
            "Fajne miejsce. Dobre, świeże domowe jedzenie. Ryba świeża, dobrze doprawiona. Ogólne wrażenie bardzo pozytywne.",
        },
        {
          label: "Alicja C.",
          rating: 5,
          description:
            "Smaczne domowe obiady. Panie z obsługi bardzo sympatyczne i z poczuciem humoru. Pyszna ryba, filet z kurczaka i schabowy.",
        },
        {
          label: "Tomson",
          rating: 5,
          description:
            "Mega smaczne jedzenie, świeże, ciepłe i w przystępnych cenach. Pani Beatka zawsze uśmiechnięta — stołowaliśmy się cały pobyt.",
        },
        {
          label: "Marianna W.",
          rating: 5,
          description:
            "Pychota — wyważone smakowo, można się najeść, atmosfera domowa. Cena zaskoczyła pozytywnie. Polecam!",
        },
      ],
      cta: "Byłeś u nas? Zostaw opinie na",
    },
    footer: {
      links: [
        { id: "about", label: "O Nas", Icon: CircleUser },
        { id: "menu", label: "Menu", Icon: UtensilsCrossed },
        { id: "location", label: "Lokalizacja", Icon: Pin },
        { id: "ratings", label: "Opinie", Icon: Users },
      ],
      copyright: "© 2026 U Czecha.",
      author: "Wykonanie nerii.pl",
    },
  },
  en: {
    header: {
      title: "u czecha",
      description:
        "Fresh fish, traditional Polish cuisine and a family atmosphere in the heart of Międzywodzie",
      cta: "see the menu",
    },
    meetUs: {
      label: "Meet us!",
      description:
        "We run U Czecha out of love for good food and the people who keep coming back. Our kitchen runs on one philosophy: fresh, local, and made with heart.",
      badges: [
        { label: "100%", content: "Freshness", Icon: Fish },
        { label: "4.6", content: "Average Rating", Icon: Star },
        { label: "Recipes", content: "Homemade", Icon: Sun },
      ],
    },
    location: {
      label: "Location",
      address: {
        Icon: Pin,
        label: "Address",
        content: "ul. Wojska Polskiego 18\n72-415 Międzywodzie",
      },
      hours: {
        Icon: Clock,
        label: "Opening hours",
        content: "We are open from 11 to 20",
      },
    },
    menu: {
      label: "Menu",
      tabs: [
        {
          id: "soups",
          label: "Soups",
          items: [
            {
              title: "Soup of the Day",
              description:
                "A different soup prepared daily by our chef using fresh ingredients.",
              price: 12,
            },
            {
              title: "Chicken Broth",
              description:
                "Classic soup made with chicken broth, noodles, and vegetables.",
              price: 15,
            },
            {
              title: "Tomato Soup",
              description:
                "Soup based on tomatoes, served with rice or noodles.",
              price: 15,
            },
            {
              title: "Ukrainian Borscht",
              description:
                "Thick beetroot, vegetable, and bean soup seasoned with herbs.",
              price: 18,
            },
            {
              title: "Fish Soup",
              description:
                "Aromatic fish stock soup with vegetables and spices.",
              price: 25,
            },
            {
              title: "Tripe Soup",
              description:
                "Traditional beef tripe soup with marjoram and vegetables.",
              price: 25,
            },
            {
              title: "Cold Beet Soup",
              description:
                "Cold soup based on yogurt and beetroot with fresh vegetables.",
              price: 25,
            },
            {
              title: "Thai Soup",
              description:
                "Exotic soup inspired by Thai cuisine with a hint of coconut and spicy seasonings.",
              price: 25,
            },
            {
              title: "Goulash Soup",
              description:
                "Hearty goulash soup with pieces of meat and vegetables in a flavorful sauce.",
              price: 25,
            },
            {
              title: "Sour Rye Soup",
              description: "Traditional sour rye soup with egg and sausage.",
              price: 25,
            },
          ],
        },
        {
          id: "fish",
          label: "Fish",
          items: [
            {
              title: "Cod",
              description:
                "Cod fillet served with fries or potatoes and salad.",
              price: 49,
            },
            {
              title: "Zander",
              description:
                "Zander fillet served with fries or potatoes and salad.",
              price: 50,
            },
            {
              title: "Halibut",
              description:
                "Halibut fillet served with fries or potatoes and salad.",
              price: 48,
            },
            {
              title: "Salmon",
              description:
                "Salmon fillet served with fries or potatoes and salad.",
              price: 48,
            },
            {
              title: "Trout",
              description:
                "Fresh trout served with fries or potatoes and salad.",
              price: 48,
            },
            {
              title: "Plaice",
              description: "Served with fries or potatoes and salad.",
              price: 130,
            },
            {
              title: "Redfish",
              description: "Served with fries or potatoes and salad.",
              price: 130,
            },
          ],
        },
        {
          id: "meats",
          label: "Meat Dishes",
          items: [
            {
              title: "Breaded Pork Cutlet",
              description:
                "Served with fries or potatoes and salad. Optionally with braised cabbage.",
              price: 35,
            },
            {
              title: "Grilled Pork Chop with Bone",
              description:
                "Juicy grilled pork chop served with potatoes or fries and salad.",
              price: 45,
            },
            {
              title: "Grilled Pork Neck",
              description: "Served with fries or potatoes and salad.",
              price: 38,
            },
            {
              title: "Breaded Chicken Fillet",
              description: "Served with fries or potatoes and salad.",
              price: 35,
            },
            {
              title: "Grilled Chicken Fillet",
              description: "Served with fries or potatoes and salad.",
              price: 38,
            },
            {
              title: "Hungarian Potato Pancake with Sour Cream",
              description: "Potato pancake with pork goulash and sour cream.",
              price: 45,
            },
            {
              title: "Boiled Pork Hock",
              description:
                "Traditional boiled pork hock served with potatoes and braised cabbage.",
              price: 50,
            },
            {
              title: "Braised Pork Cheeks",
              description:
                "Braised pork cheeks in sauce, served with potatoes and salad.",
              price: 45,
            },
            {
              title: "Grilled Chicken in Sauce",
              description:
                "Grilled chicken fillet in a delicate sauce, served with potatoes and salad.",
              price: 45,
            },
            {
              title: "Pork Bryzol",
              description: "With mushrooms and garlic butter.",
              price: 45,
            },
            {
              title: "Chicken Roll",
              description:
                "Stuffed with asparagus, served in a fragrant sauce.",
              price: 45,
            },
            {
              title: "Chicken Liver",
              description:
                "Pan-fried chicken liver served with potatoes and fresh salad.",
              price: 35,
            },
            {
              title: "Minced Meat Cutlet",
              description:
                "Homemade minced meat cutlet with potatoes and seasonal salad.",
              price: 35,
            },
            {
              title: "Pork Tenderloins",
              description: "In mushroom sauce, served with potatoes.",
              price: 45,
            },
          ],
        },
        {
          id: "flour",
          label: "Dumplings & Dough Dishes",
          items: [
            {
              title: "Russian Dumplings",
              description:
                "Dumplings filled with potatoes and cottage cheese, served with bacon bits and onion.",
              price: 30,
            },
            {
              title: "Meat Dumplings",
              description:
                "Juicy dumplings filled with meat, served with bacon bits and onion.",
              price: 30,
            },
            {
              title: "Cottage Cheese Pancakes",
              description:
                "Delicate pancakes filled with quark, served with sour cream.",
              price: 35,
            },
            {
              title: "Potato Pancakes",
              description:
                "Crispy potato pancakes served with sour cream or goulash.",
              price: 20,
            },
            {
              title: "Bread Roll with Herring",
              description:
                "Fresh bread roll with herring fillet and additions.",
              price: 20,
            },
          ],
        },
        {
          id: "salad",
          label: "Salads",
          items: [
            {
              title: "Greek Salad",
              description:
                "Classic salad with tomatoes, cucumber, olives, onion, and feta cheese.",
              price: 38,
            },
            {
              title: "Caesar Salad",
              description:
                "Salad with romaine lettuce, croutons, Parmesan, and Caesar dressing.",
              price: 40,
            },
            {
              title: "Chicken Liver Salad with Blue Cheese and Fruit",
              description:
                "Salad with fried chicken liver, blue cheese, and seasonal fruit.",
              price: 40,
            },
            {
              title: "Shrimp and Parma Ham Salad",
              description:
                "Elegant salad with shrimp, Parma ham, and fresh vegetables.",
              price: 48,
            },
          ],
        },
        {
          id: "maca",
          label: "Pasta",
          items: [
            {
              title: "Spaghetti Bolognese",
              description:
                "Classic spaghetti with meat Bolognese sauce and Parmesan.",
              price: 40,
            },
            {
              title: "Penne with Chicken and Broccoli in Sauce",
              description:
                "Penne with grilled chicken and broccoli in a creamy sauce.",
              price: 42,
            },
            {
              title: "Pasta with Shrimp",
              description:
                "Pasta with juicy shrimp in a fragrant garlic-butter sauce.",
              price: 48,
            },
          ],
        },
        {
          id: "deser",
          label: "Dessert",
          items: [
            {
              title: "Tiramisu",
              description:
                "Classic Italian dessert with mascarpone, coffee-soaked ladyfingers, and cocoa.",
              price: 10,
            },
          ],
        },
      ],
    },
    ratings: {
      label: "Reviews",
      ratings: [
        {
          label: "Joanna O.",
          rating: 5,
          description:
            "Tasty home-cooked food. Delicious fish soup. Large portions at reasonable prices. The system of calling customers by name creates a lovely atmosphere.",
        },
        {
          label: "Przemysław P.",
          rating: 5,
          description:
            "Affordable prices. Tasty, nicely presented dishes. Very friendly and helpful staff with a sense of humour. I recommend the pike-perch and lemonades.",
        },
        {
          label: "Mariusz B.",
          rating: 5,
          description:
            "Excellent cuisine and fresh produce. Very friendly staff and something for everyone — from flounder to Thai soup.",
        },
        {
          label: "Michał P.",
          rating: 4,
          description:
            "Nice place. Good, fresh home-cooked food. Fresh, well-seasoned fish. Overall impression very positive.",
        },
        {
          label: "Alicja C.",
          rating: 5,
          description:
            "Tasty home-cooked meals. Very friendly staff with a great sense of humour. Delicious fish, chicken breast and pork cutlet.",
        },
        {
          label: "Tomson",
          rating: 5,
          description:
            "Amazingly tasty food, fresh, warm and at affordable prices. Mrs Beatka always smiling — we ate here for our entire stay.",
        },
        {
          label: "Marianna W.",
          rating: 5,
          description:
            "Absolutely delicious — perfectly balanced flavours, filling portions, homely atmosphere. The price was a pleasant surprise. Highly recommended!",
        },
      ],
      cta: "Been here? Leave a review on",
    },
    footer: {
      links: [
        { id: "about", label: "About us", Icon: CircleUser },
        { id: "menu", label: "Menu", Icon: UtensilsCrossed },
        { id: "location", label: "Location", Icon: Pin },
        { id: "ratings", label: "Reviews", Icon: Users },
      ],
      copyright: "© 2026 U Czecha.",
      author: "Made by nerii.pl",
    },
  },
  de: {
    header: {
      title: "u czecha",
      description:
        "Frischer Fisch, traditionelle polnische Küche und familiäre Atmosphäre im Herzen von Międzywodzie",
      cta: "zur Speisekarte",
    },
    meetUs: {
      label: "Über uns!",
      description:
        "Wir führen U Czecha aus Liebe zum guten Essen und zu den Menschen, die immer wiederkommen. In unserer Küche gilt eine Philosophie: frisch, regional und von Herzen.",
      badges: [
        { label: "100%", content: "Frische", Icon: Fish },
        { label: "4,6", content: "Bewertung", Icon: Star },
        { label: "Rezepte", content: "Hausgemachte", Icon: Sun },
      ],
    },
    location: {
      label: "Standort",
      address: {
        Icon: Pin,
        label: "Adresse",
        content: "ul. Wojska Polskiego 18\n72-415 Międzywodzie",
      },
      hours: {
        Icon: Clock,
        label: "Öffnungszeiten",
        content: "Wir sind von 11 bis 20 Uhr geöffnet",
      },
    },
    menu: {
      label: "Speisekarte",
      tabs: [
        {
          id: "soups",
          label: "Suppen",
          items: [
            {
              title: "Tagessuppe",
              description:
                "Jeden Tag eine andere Suppe, frisch von unserem Koch zubereitet.",
              price: 12,
            },
            {
              title: "Hühnerbrühe",
              description:
                "Klassische Suppe auf Hühnerbrühe mit Nudeln und Gemüse.",
              price: 15,
            },
            {
              title: "Tomatensuppe",
              description:
                "Suppe auf Tomatenbasis, serviert mit Reis oder Nudeln.",
              price: 15,
            },
            {
              title: "Ukrainischer Borschtsch",
              description:
                "Dicke Suppe aus Roter Bete, Gemüse und Bohnen, mit Kräutern gewürzt.",
              price: 18,
            },
            {
              title: "Fischsuppe",
              description:
                "Aromatische Suppe auf Fischfond mit Gemüse und Gewürzen.",
              price: 25,
            },
            {
              title: "Kuttelsuppe",
              description:
                "Traditionelle Suppe aus Rinderkutteln mit Majoran und Gemüse.",
              price: 25,
            },
            {
              title: "Kalte Rote-Bete-Suppe",
              description:
                "Kaltes Suppengericht auf Joghurt- und Rote-Bete-Basis mit frischem Gemüse.",
              price: 25,
            },
            {
              title: "Thailändische Suppe",
              description:
                "Exotische Suppe inspiriert von der thailändischen Küche mit Kokosnote und pikanten Gewürzen.",
              price: 25,
            },
            {
              title: "Gulaschsuppe",
              description:
                "Deftige Gulaschsuppe mit Fleischstücken und Gemüse in aromatischer Sauce.",
              price: 25,
            },
            {
              title: "Sauermehlsuppe",
              description: "Traditionelle Sauermehlsuppe mit Ei und Wurst.",
              price: 25,
            },
          ],
        },
        {
          id: "fish",
          label: "Fisch",
          items: [
            {
              title: "Kabeljau",
              description:
                "Kabeljaufilet serviert mit Pommes oder Kartoffeln und Salat.",
              price: 49,
            },
            {
              title: "Zander",
              description:
                "Zanderfilet serviert mit Pommes oder Kartoffeln und Salat.",
              price: 50,
            },
            {
              title: "Heilbutt",
              description:
                "Heilbuttfilet serviert mit Pommes oder Kartoffeln und Salat.",
              price: 48,
            },
            {
              title: "Lachs",
              description:
                "Lachsfilet serviert mit Pommes oder Kartoffeln und Salat.",
              price: 48,
            },
            {
              title: "Forelle",
              description:
                "Frische Forelle serviert mit Pommes oder Kartoffeln und Salat.",
              price: 48,
            },
            {
              title: "Scholle",
              description: "Serviert mit Pommes oder Kartoffeln und Salat.",
              price: 130,
            },
            {
              title: "Roter Knurrhahn",
              description: "Serviert mit Pommes oder Kartoffeln und Salat.",
              price: 130,
            },
          ],
        },
        {
          id: "meats",
          label: "Fleischgerichte",
          items: [
            {
              title: "Paniertes Schweinekotelett",
              description:
                "Serviert mit Pommes oder Kartoffeln und Salat. Optional mit Bratkohl.",
              price: 35,
            },
            {
              title: "Gegrilltes Schweinekotelett mit Knochen",
              description:
                "Saftiges gegrilltes Schweinekotelett mit Knochen, serviert mit Kartoffeln oder Pommes und Salat.",
              price: 45,
            },
            {
              title: "Gegrillter Schweinenacken",
              description: "Serviert mit Pommes oder Kartoffeln und Salat.",
              price: 38,
            },
            {
              title: "Paniertes Hähnchenfilet",
              description: "Serviert mit Pommes oder Kartoffeln und Salat.",
              price: 35,
            },
            {
              title: "Gegrilltes Hähnchenfilet",
              description: "Serviert mit Pommes oder Kartoffeln und Salat.",
              price: 38,
            },
            {
              title: "Ungarischer Kartoffelpuffer mit Sauerrahm",
              description: "Kartoffelpuffer mit Schweinegulasch und Sauerrahm.",
              price: 45,
            },
            {
              title: "Gekochter Schweinshaxe",
              description:
                "Traditionelle gekochte Schweinshaxe serviert mit Kartoffeln und Bratkohl.",
              price: 50,
            },
            {
              title: "Geschmorte Schweinebacken",
              description:
                "Geschmorte Schweinebacken in Sauce, serviert mit Kartoffeln und Salat.",
              price: 45,
            },
            {
              title: "Gegrilltes Hähnchen in Sauce",
              description:
                "Gegrilltes Hähnchenfilet in feiner Sauce, serviert mit Kartoffeln und Salat.",
              price: 45,
            },
            {
              title: "Schweine-Bryzol",
              description: "Mit Champignons und Knoblauchbutter.",
              price: 45,
            },
            {
              title: "Hähnchenroulade",
              description:
                "Gefüllt mit Spargel, serviert in aromatischer Sauce.",
              price: 45,
            },
            {
              title: "Hühnerleber",
              description:
                "Gebratene Hühnerleber serviert mit Kartoffeln und frischem Salat.",
              price: 35,
            },
            {
              title: "Hackfleischkotelett",
              description:
                "Hausgemachtes Hackfleischkotelett mit Kartoffeln und saisonalem Salat.",
              price: 35,
            },
            {
              title: "Schweinefilets",
              description: "In Champignonsauce, serviert mit Kartoffeln.",
              price: 45,
            },
          ],
        },
        {
          id: "flour",
          label: "Mehlspeisen",
          items: [
            {
              title: "Russische Piroggen",
              description:
                "Piroggen gefüllt mit Kartoffeln und Quark, serviert mit Speckwürfeln und Zwiebeln.",
              price: 30,
            },
            {
              title: "Piroggen mit Fleisch",
              description:
                "Saftige Piroggen mit Fleischfüllung, serviert mit Speckwürfeln und Zwiebeln.",
              price: 30,
            },
            {
              title: "Quarkpfannkuchen",
              description:
                "Zarte Pfannkuchen mit Quarkfüllung, serviert mit Sauerrahm.",
              price: 35,
            },
            {
              title: "Kartoffelpuffer",
              description:
                "Knusprige Kartoffelpuffer, serviert mit Sauerrahm oder Gulasch.",
              price: 20,
            },
            {
              title: "Brötchen mit Hering",
              description: "Frisches Brötchen mit Heringsfilet und Beilagen.",
              price: 20,
            },
          ],
        },
        {
          id: "salad",
          label: "Salate",
          items: [
            {
              title: "Griechischer Salat",
              description:
                "Klassischer Salat mit Tomaten, Gurke, Oliven, Zwiebeln und Feta.",
              price: 38,
            },
            {
              title: "Caesar Salat",
              description:
                "Salat mit Römersalat, Croûtons, Parmesan und Caesar-Dressing.",
              price: 40,
            },
            {
              title: "Salat mit Hühnerleber, Blauschimmelkäse und Früchten",
              description:
                "Salat mit gebratener Hühnerleber, Blauschimmelkäse und saisonalen Früchten.",
              price: 40,
            },
            {
              title: "Salat mit Garnelen und Parmaschinken",
              description:
                "Eleganter Salat mit Garnelen, Parmaschinken und frischem Gemüse.",
              price: 48,
            },
          ],
        },
        {
          id: "maca",
          label: "Nudeln",
          items: [
            {
              title: "Spaghetti Bolognese",
              description:
                "Klassische Spaghetti mit Fleisch-Bolognese und Parmesan.",
              price: 40,
            },
            {
              title: "Penne mit Hähnchen und Brokkoli in Sauce",
              description:
                "Penne mit gegrilltem Hähnchen und Brokkoli in cremiger Sauce.",
              price: 42,
            },
            {
              title: "Nudeln mit Garnelen",
              description:
                "Nudeln mit saftigen Garnelen in aromatischer Knoblauch-Butter-Sauce.",
              price: 48,
            },
          ],
        },
        {
          id: "deser",
          label: "Dessert",
          items: [
            {
              title: "Tiramisu",
              description:
                "Klassisches italienisches Dessert mit Mascarpone, in Kaffee getränkten Löffelbiskuits und Kakao.",
              price: 10,
            },
          ],
        },
      ],
    },
    ratings: {
      label: "Bewertungen",
      ratings: [
        {
          label: "Joanna O.",
          rating: 5,
          description:
            "Leckeres hausgemachtes Essen. Köstliche Fischsuppe. Große Portionen zu vernünftigen Preisen. Das System, Gäste beim Namen zu rufen, schafft eine sympatische Atmosphäre.",
        },
        {
          label: "Przemysław P.",
          rating: 5,
          description:
            "Günstige Preise. Leckere, schön angerichtete Speisen. Sehr freundliches, hilfsbereites Personal mit Sinn für Humor. Ich empfehle den Zander und die Limonaden.",
        },
        {
          label: "Mariusz B.",
          rating: 5,
          description:
            "Sehr gute Küche und frische Zutaten. Sehr freundliches Personal und für jeden ist etwas dabei — von der Flunder bis zur Thai-Suppe.",
        },
        {
          label: "Michał P.",
          rating: 4,
          description:
            "Schöner Ort. Gutes, frisches hausgemachtes Essen. Frischer, gut gewürzter Fisch. Gesamteindruck sehr positiv.",
        },
        {
          label: "Alicja C.",
          rating: 5,
          description:
            "Leckere hausgemachte Mittagessen. Sehr sympatisches Personal mit Sinn für Humor. Köstlicher Fisch, Hähnchenbrust und Schnitzel.",
        },
        {
          label: "Tomson",
          rating: 5,
          description:
            "Unglaublich leckeres Essen, frisch, warm und zu fairen Preisen. Frau Beatka immer mit einem Lächeln — wir haben den ganzen Urlaub hier gegessen.",
        },
        {
          label: "Marianna W.",
          rating: 5,
          description:
            "Ein Genuss — geschmacklich ausgewogen, sättigende Portionen, heimelige Atmosphäre. Der Preis war eine angenehme Überraschung. Sehr empfehlenswert!",
        },
      ],
      cta: "Waren Sie bei uns? Hinterlassen Sie eine Bewertung auf",
    },
    footer: {
      links: [
        { id: "about", label: "Über uns", Icon: CircleUser },
        { id: "menu", label: "Speisekarte", Icon: UtensilsCrossed },
        { id: "location", label: "Standort", Icon: Pin },
        { id: "ratings", label: "Bewertungen", Icon: Users },
      ],
      copyright: "© 2026 U Czecha.",
      author: "Erstellt von nerii.pl",
    },
  },
};
