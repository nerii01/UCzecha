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

export type Lang = 'pl' | 'en' | 'de';

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
      title: 'u czecha',
      description:
        'Świeże ryby, tradycyjna kuchnia polska i rodzinna atmosfera w sercu Międzywodzia',
      cta: 'zobacz menu',
    },
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
          id: 'soups',
          label: 'Zupy',
          items: [
            {
              title: 'Rosół',
              description:
                'Klasyczna zupa na wywarze drobiowym z makaronem i warzywami.',
              price: 15,
            },
            {
              title: 'Pomidorowa',
              description:
                'Zupa na bazie pomidorów, podawana z ryżem lub makaronem.',
              price: 15,
            },
            {
              title: 'Rybna',
              description:
                'Zupa z wywaru rybnego z dodatkiem warzyw i przypraw.',
              price: 20,
            },
            {
              title: 'Cebulowa',
              description: 'Zupa z duszonej cebuli.',
              price: 15,
            },
            {
              title: 'Chłodnik',
              description:
                'Zimna zupa na bazie jogurtu i buraków z dodatkiem warzyw.',
              price: 20,
            },
            {
              title: 'Barszcz ukraiński',
              description:
                'Gęsta zupa z buraków, warzyw i fasoli, doprawiona ziołami.',
              price: 15,
            },
            {
              title: 'Flaki',
              description:
                'Tradycyjna zupa z wołowych flaków z majerankiem i warzywami.',
              price: 20,
            },
          ],
        },
        {
          id: 'mains',
          label: 'Dania główne',
          items: [
            {
              title: 'Flądra',
              description:
                '13 zł/100 g ryby + 5 zł jeden z dodatków (frytki, surówka)',
              price: 13,
            },
            {
              title: 'Gładzica',
              description:
                '15 zł/100 g ryby + 5 zł jeden z dodatków (frytki, surówka)',
              price: 15,
            },
            {
              title: 'Dorsz',
              description: '200 g z frytkami i surówkami',
              price: 45,
            },
            {
              title: 'Sandacz',
              description: '200 g z frytkami i surówkami',
              price: 50,
            },
            {
              title: 'Pstrąg smażony',
              description: '350 g z frytkami i surówkami',
              price: 46,
            },
            {
              title: 'Halibut pieczony',
              description: '200 g z frytkami i surówkami',
              price: 48,
            },
            {
              title: 'Łosoś pieczony',
              description: '200 g z frytkami i surówkami',
              price: 48,
            },
            {
              title: 'Karmazyn smażony',
              description:
                '13 zł/100 g ryby + 5 zł jeden z dodatków (frytki, surówka)',
              price: 13,
            },
            {
              title: 'Schabowy',
              description:
                '140 g z ziemniakami lub frytkami i kapustą zasmażaną lub surówkami',
              price: 35,
            },
            {
              title: 'Wątróbka drobiowa smażona',
              description: 'Z ziemniakami i surówkami',
              price: 35,
            },
            {
              title: 'Filet panierowany z kurczaka',
              description: '130 g z ziemniakami lub frytkami i surówkami',
              price: 35,
            },
            {
              title: 'Karkówka grillowana',
              description: '180 g z ziemniakami lub frytkami i surówkami',
              price: 38,
            },
            {
              title: 'Filet grillowany z kurczaka',
              description: 'Z ziemniakami lub frytkami i surówkami',
              price: 38,
            },
            {
              title: 'Placek po węgiersku',
              description: 'Ze śmietaną',
              price: 45,
            },
            {
              title: 'Golonka wieprzowa',
              description: 'Z kapustą zasmażaną',
              price: 50,
            },
            {
              title: 'Kotlet mielony',
              description: '200 g z ziemniakami i surówkami',
              price: 30,
            },
            {
              title: 'Gulasz węgierski',
              description: 'Z kluskami śląskimi i surówką',
              price: 45,
            },
            {
              title: 'Roladka z kurczaka faszerowana',
              description: 'Z ziemniakami i surówkami',
              price: 45,
            },
            {
              title: 'Żeberko w sosie własnym',
              description: 'Z kluskami śląskimi i surówkami',
              price: 45,
            },
          ],
        },
        {
          id: 'flour',
          label: 'Z ciasta',
          items: [
            {
              title: 'Placki ziemniaczane',
              description: '3 szt. ze śmietaną',
              price: 20,
            },
            {
              title: 'Pierogi',
              description:
                'Informacja u obsługi – dostępne rodzaje zmieniają się codziennie',
              price: 30,
            },
          ],
        },
        {
          id: 'salads',
          label: 'Sałatki',
          items: [
            {
              title: 'Sałatka',
              description:
                'Z wątróbką drobiową, serem pleśniowym, orzechami i owocami, z sosem musztardowo-miodowym',
              price: 38,
            },
            {
              title: 'Sałatka Cezar',
              description: 'Z grillowanym kurczakiem',
              price: 38,
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
  en: {
    header: {
      title: 'u czecha',
      description:
        'Fresh fish, traditional Polish cuisine and a family atmosphere in the heart of Międzywodzie',
      cta: 'see the menu',
    },
    meetUs: {
      label: 'Meet us!',
      description:
        'We run U Czecha out of love for good food and the people who keep coming back. Our kitchen runs on one philosophy: fresh, local, and made with heart.',
      badges: [
        { label: '26', content: 'Years on the beach', Icon: Sun },
        { label: '100%', content: 'Freshness', Icon: Fish },
        { label: '4.6', content: 'Average rating', Icon: Star },
      ],
    },
    location: {
      label: 'Location',
      address: {
        Icon: Pin,
        label: 'Address',
        content: 'ul. Wojska Polskiego 18\n72-415 Międzywodzie',
      },
      hours: {
        Icon: Clock,
        label: 'Opening hours',
        content: 'We are open from 11 to 20',
      },
    },
    menu: {
      label: 'Menu',

      tabs: [
        {
          id: 'soups',
          label: 'Soups',
          items: [
            {
              title: 'Chicken Broth',
              description: 'Classic chicken broth with noodles and vegetables.',
              price: 15,
            },
            {
              title: 'Tomato Soup',
              description: 'Tomato-based soup served with rice or noodles.',
              price: 15,
            },
            {
              title: 'Fish Soup',
              description: 'Fish broth soup with vegetables and spices.',
              price: 20,
            },
            {
              title: 'Onion Soup',
              description: 'Slow-cooked onion soup.',
              price: 15,
            },
            {
              title: 'Cold Beet Soup',
              description:
                'Cold yogurt and beetroot soup with fresh vegetables.',
              price: 20,
            },
            {
              title: 'Ukrainian Borscht',
              description:
                'Hearty beetroot soup with vegetables and beans, seasoned with herbs.',
              price: 15,
            },
            {
              title: 'Tripe Soup',
              description:
                'Traditional beef tripe soup with marjoram and vegetables.',
              price: 20,
            },
          ],
        },
        {
          id: 'mains',
          label: 'Main Courses',
          items: [
            {
              title: 'Flounder',
              description:
                '13 PLN/100 g of fish + 5 PLN for one side (fries or coleslaw)',
              price: 13,
            },
            {
              title: 'Plaice',
              description:
                '15 PLN/100 g of fish + 5 PLN for one side (fries or coleslaw)',
              price: 15,
            },
            {
              title: 'Cod',
              description: '200 g with fries and coleslaw',
              price: 45,
            },
            {
              title: 'Pikeperch',
              description: '200 g with fries and coleslaw',
              price: 50,
            },
            {
              title: 'Fried Trout',
              description: '350 g with fries and coleslaw',
              price: 46,
            },
            {
              title: 'Baked Halibut',
              description: '200 g with fries and coleslaw',
              price: 48,
            },
            {
              title: 'Baked Salmon',
              description: '200 g with fries and coleslaw',
              price: 48,
            },
            {
              title: 'Fried Redfish',
              description:
                '13 PLN/100 g of fish + 5 PLN for one side (fries or coleslaw)',
              price: 13,
            },
            {
              title: 'Pork Schnitzel',
              description:
                '140 g with potatoes or fries and sautéed cabbage or coleslaw',
              price: 35,
            },
            {
              title: 'Fried Chicken Liver',
              description: 'With potatoes and coleslaw',
              price: 35,
            },
            {
              title: 'Breaded Chicken Fillet',
              description: '130 g with potatoes or fries and coleslaw',
              price: 35,
            },
            {
              title: 'Grilled Pork Neck',
              description: '180 g with potatoes or fries and coleslaw',
              price: 38,
            },
            {
              title: 'Grilled Chicken Fillet',
              description: 'With potatoes or fries and coleslaw',
              price: 38,
            },
            {
              title: 'Hungarian-style Potato Pancake',
              description: 'With sour cream',
              price: 45,
            },
            {
              title: 'Pork Knuckle',
              description: 'With sautéed cabbage',
              price: 50,
            },
            {
              title: 'Minced Meat Cutlet',
              description: '200 g with potatoes and coleslaw',
              price: 30,
            },
            {
              title: 'Hungarian Goulash',
              description: 'With Silesian dumplings and coleslaw',
              price: 45,
            },
            {
              title: 'Stuffed Chicken Roll',
              description: 'With potatoes and coleslaw',
              price: 45,
            },
            {
              title: 'Pork Ribs in Own Sauce',
              description: 'With Silesian dumplings and coleslaw',
              price: 45,
            },
          ],
        },
        {
          id: 'flour',
          label: 'From the Dough',
          items: [
            {
              title: 'Potato Pancakes',
              description: '3 pcs with sour cream',
              price: 20,
            },
            {
              title: 'Dumplings',
              description: 'Ask the staff – available types change daily',
              price: 30,
            },
          ],
        },
        {
          id: 'salads',
          label: 'Salads',
          items: [
            {
              title: 'House Salad',
              description:
                'With chicken liver, blue cheese, walnuts, fruit and honey-mustard dressing',
              price: 38,
            },
            {
              title: 'Caesar Salad',
              description: 'With grilled chicken',
              price: 38,
            },
          ],
        },
      ],
    },
    ratings: {
      label: 'Reviews',
      ratings: [
        {
          label: 'Joanna O.',
          rating: 5,
          description:
            'Tasty home-cooked food. Delicious fish soup. Large portions at reasonable prices. The system of calling customers by name creates a lovely atmosphere.',
        },
        {
          label: 'Przemysław P.',
          rating: 5,
          description:
            'Affordable prices. Tasty, nicely presented dishes. Very friendly and helpful staff with a sense of humour. I recommend the pike-perch and lemonades.',
        },
        {
          label: 'Mariusz B.',
          rating: 5,
          description:
            'Excellent cuisine and fresh produce. Very friendly staff and something for everyone — from flounder to Thai soup.',
        },
        {
          label: 'Michał P.',
          rating: 4,
          description:
            'Nice place. Good, fresh home-cooked food. Fresh, well-seasoned fish. Overall impression very positive.',
        },
        {
          label: 'Alicja C.',
          rating: 5,
          description:
            'Tasty home-cooked meals. Very friendly staff with a great sense of humour. Delicious fish, chicken breast and pork cutlet.',
        },
        {
          label: 'Tomson',
          rating: 5,
          description:
            'Amazingly tasty food, fresh, warm and at affordable prices. Mrs Beatka always smiling — we ate here for our entire stay.',
        },
        {
          label: 'Marianna W.',
          rating: 5,
          description:
            'Absolutely delicious — perfectly balanced flavours, filling portions, homely atmosphere. The price was a pleasant surprise. Highly recommended!',
        },
      ],
      cta: 'Been here? Leave a review on',
    },
    footer: {
      links: [
        { id: 'about', label: 'About us', Icon: CircleUser },
        { id: 'menu', label: 'Menu', Icon: UtensilsCrossed },
        { id: 'location', label: 'Location', Icon: Pin },
        { id: 'ratings', label: 'Reviews', Icon: Users },
      ],
      copyright: '© 2026 U Czecha.',
      author: 'Made by nerii.pl',
    },
  },
  de: {
    header: {
      title: 'u czecha',
      description:
        'Frischer Fisch, traditionelle polnische Küche und familiäre Atmosphäre im Herzen von Międzywodzie',
      cta: 'zur Speisekarte',
    },
    meetUs: {
      label: 'Über uns!',
      description:
        'Wir führen U Czecha aus Liebe zum guten Essen und zu den Menschen, die immer wiederkommen. In unserer Küche gilt eine Philosophie: frisch, regional und von Herzen.',
      badges: [
        { label: '26', content: 'Jahre am Meer', Icon: Sun },
        { label: '100%', content: 'Frische', Icon: Fish },
        { label: '4,6', content: 'bedeuten', Icon: Star },
      ],
    },
    location: {
      label: 'Standort',
      address: {
        Icon: Pin,
        label: 'Adresse',
        content: 'ul. Wojska Polskiego 18\n72-415 Międzywodzie',
      },
      hours: {
        Icon: Clock,
        label: 'Öffnungszeiten',
        content: 'Wir sind von 11 bis 20 Uhr geöffnet',
      },
    },
    menu: {
      label: 'Speisekarte',
      tabs: [
        {
          id: 'soups',
          label: 'Suppen',
          items: [
            {
              title: 'Hühnerbrühe',
              description: 'Klassische Hühnerbrühe mit Nudeln und Gemüse.',
              price: 15,
            },
            {
              title: 'Tomatensuppe',
              description: 'Tomatensuppe, serviert mit Reis oder Nudeln.',
              price: 15,
            },
            {
              title: 'Fischsuppe',
              description: 'Fischbrühe mit Gemüse und Gewürzen.',
              price: 20,
            },
            {
              title: 'Zwiebelsuppe',
              description: 'Langsam geschmorte Zwiebelsuppe.',
              price: 15,
            },
            {
              title: 'Kalte Rote-Bete-Suppe',
              description: 'Kalte Joghurt-Rote-Bete-Suppe mit frischem Gemüse.',
              price: 20,
            },
            {
              title: 'Ukrainischer Borschtsch',
              description:
                'Kräftige Rote-Bete-Suppe mit Gemüse und Bohnen, gewürzt mit Kräutern.',
              price: 15,
            },
            {
              title: 'Kuttelsuppe',
              description:
                'Traditionelle Rindfleisch-Kuttelsuppe mit Majoran und Gemüse.',
              price: 20,
            },
          ],
        },
        {
          id: 'mains',
          label: 'Hauptgerichte',
          items: [
            {
              title: 'Flunder',
              description:
                '13 PLN/100 g Fisch + 5 PLN für eine Beilage (Pommes oder Krautsalat)',
              price: 13,
            },
            {
              title: 'Scholle',
              description:
                '15 PLN/100 g Fisch + 5 PLN für eine Beilage (Pommes oder Krautsalat)',
              price: 15,
            },
            {
              title: 'Kabeljau',
              description: '200 g mit Pommes und Krautsalat',
              price: 45,
            },
            {
              title: 'Zander',
              description: '200 g mit Pommes und Krautsalat',
              price: 50,
            },
            {
              title: 'Gebratene Forelle',
              description: '350 g mit Pommes und Krautsalat',
              price: 46,
            },
            {
              title: 'Gebackener Heilbutt',
              description: '200 g mit Pommes und Krautsalat',
              price: 48,
            },
            {
              title: 'Gebackener Lachs',
              description: '200 g mit Pommes und Krautsalat',
              price: 48,
            },
            {
              title: 'Gebratener Rotbarsch',
              description:
                '13 PLN/100 g Fisch + 5 PLN für eine Beilage (Pommes oder Krautsalat)',
              price: 13,
            },
            {
              title: 'Schweineschnitzel',
              description:
                '140 g mit Kartoffeln oder Pommes und Schmorkohl oder Krautsalat',
              price: 35,
            },
            {
              title: 'Gebratene Hähnchenleber',
              description: 'Mit Kartoffeln und Krautsalat',
              price: 35,
            },
            {
              title: 'Paniertes Hähnchenfilet',
              description: '130 g mit Kartoffeln oder Pommes und Krautsalat',
              price: 35,
            },
            {
              title: 'Gegrillter Schweinenacken',
              description: '180 g mit Kartoffeln oder Pommes und Krautsalat',
              price: 38,
            },
            {
              title: 'Gegrilltes Hähnchenfilet',
              description: 'Mit Kartoffeln oder Pommes und Krautsalat',
              price: 38,
            },
            {
              title: 'Kartoffelpuffer nach ungarischer Art',
              description: 'Mit Sauerrahm',
              price: 45,
            },
            { title: 'Schweinshaxe', description: 'Mit Schmorkohl', price: 50 },
            {
              title: 'Hackfleischkotelett',
              description: '200 g mit Kartoffeln und Krautsalat',
              price: 30,
            },
            {
              title: 'Ungarisches Gulasch',
              description: 'Mit schlesischen Klößen und Krautsalat',
              price: 45,
            },
            {
              title: 'Gefüllte Hähnchenroulade',
              description: 'Mit Kartoffeln und Krautsalat',
              price: 45,
            },
            {
              title: 'Schweinerippchen in eigener Sauce',
              description: 'Mit schlesischen Klößen und Krautsalat',
              price: 45,
            },
          ],
        },
        {
          id: 'flour',
          label: 'Aus dem Teig',
          items: [
            {
              title: 'Kartoffelpuffer',
              description: '3 Stück mit Sauerrahm',
              price: 20,
            },
            {
              title: 'Teigtaschen',
              description:
                'Bitte beim Personal nachfragen – verfügbare Sorten wechseln täglich',
              price: 30,
            },
          ],
        },
        {
          id: 'salads',
          label: 'Salate',
          items: [
            {
              title: 'Haussalat',
              description:
                'Mit Hähnchenleber, Blauschimmelkäse, Walnüssen, Früchten und Honig-Senf-Dressing',
              price: 38,
            },
            {
              title: 'Caesar Salat',
              description: 'Mit gegrilltem Hähnchen',
              price: 38,
            },
          ],
        },
      ],
    },
    ratings: {
      label: 'Bewertungen',
      ratings: [
        {
          label: 'Joanna O.',
          rating: 5,
          description:
            'Leckeres hausgemachtes Essen. Köstliche Fischsuppe. Große Portionen zu vernünftigen Preisen. Das System, Gäste beim Namen zu rufen, schafft eine sympatische Atmosphäre.',
        },
        {
          label: 'Przemysław P.',
          rating: 5,
          description:
            'Günstige Preise. Leckere, schön angerichtete Speisen. Sehr freundliches, hilfsbereites Personal mit Sinn für Humor. Ich empfehle den Zander und die Limonaden.',
        },
        {
          label: 'Mariusz B.',
          rating: 5,
          description:
            'Sehr gute Küche und frische Zutaten. Sehr freundliches Personal und für jeden ist etwas dabei — von der Flunder bis zur Thai-Suppe.',
        },
        {
          label: 'Michał P.',
          rating: 4,
          description:
            'Schöner Ort. Gutes, frisches hausgemachtes Essen. Frischer, gut gewürzter Fisch. Gesamteindruck sehr positiv.',
        },
        {
          label: 'Alicja C.',
          rating: 5,
          description:
            'Leckere hausgemachte Mittagessen. Sehr sympatisches Personal mit Sinn für Humor. Köstlicher Fisch, Hähnchenbrust und Schnitzel.',
        },
        {
          label: 'Tomson',
          rating: 5,
          description:
            'Unglaublich leckeres Essen, frisch, warm und zu fairen Preisen. Frau Beatka immer mit einem Lächeln — wir haben den ganzen Urlaub hier gegessen.',
        },
        {
          label: 'Marianna W.',
          rating: 5,
          description:
            'Ein Genuss — geschmacklich ausgewogen, sättigende Portionen, heimelige Atmosphäre. Der Preis war eine angenehme Überraschung. Sehr empfehlenswert!',
        },
      ],
      cta: 'Waren Sie bei uns? Hinterlassen Sie eine Bewertung auf',
    },
    footer: {
      links: [
        { id: 'about', label: 'Über uns', Icon: CircleUser },
        { id: 'menu', label: 'Speisekarte', Icon: UtensilsCrossed },
        { id: 'location', label: 'Standort', Icon: Pin },
        { id: 'ratings', label: 'Bewertungen', Icon: Users },
      ],
      copyright: '© 2026 U Czecha.',
      author: 'Erstellt von nerii.pl',
    },
  },
};
