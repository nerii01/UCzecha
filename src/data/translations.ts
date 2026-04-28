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
          id: 'fish',
          label: 'Fish & seafood',
          items: [
            {
              title: 'Fried cod',
              description:
                'Fresh Baltic cod in breadcrumbs, served with fries and coleslaw',
              price: 42,
            },
            {
              title: 'Grilled salmon',
              description:
                'Salmon fillet from the grill with herb butter and seasonal vegetables',
              price: 52,
            },
            {
              title: 'Garlic shrimp',
              description:
                'Tiger shrimp fried in butter with garlic and parsley',
              price: 48,
            },
            {
              title: 'Baked halibut',
              description:
                'Halibut baked with lemon and dill, served with mashed potatoes',
              price: 58,
            },
            {
              title: 'Kashubian herring',
              description: 'Marinated herring with onion and apple in cream',
              price: 28,
            },
            {
              title: 'Fried pike-perch',
              description:
                'Pike-perch fillet in golden breadcrumbs with tartar sauce',
              price: 54,
            },
            {
              title: 'Grilled calamari',
              description:
                'Grilled calamari with olive oil, garlic and chili, served with bread',
              price: 46,
            },
            {
              title: 'Oven-baked flounder',
              description: 'Whole flounder baked with herbs, butter and lemon',
              price: 44,
            },
            {
              title: 'Greek-style fish',
              description: 'Fried fish in a vegetable marinade, served cold',
              price: 32,
            },
            {
              title: 'Fish platter',
              description:
                'A selection of three types of fish with fries and salads',
              price: 68,
            },
          ],
        },
        {
          id: 'soup',
          label: 'Soups',
          items: [
            {
              title: 'Fish soup',
              description:
                'Traditional Baltic fish soup with vegetables and dill',
              price: 22,
            },
            {
              title: 'Sour rye soup',
              description: 'Sour rye soup with egg, sausage and potatoes',
              price: 18,
            },
            {
              title: 'Pumpkin cream soup',
              description:
                'Velvety pumpkin cream soup with seeds and pumpkin oil',
              price: 20,
            },
            {
              title: 'Red borscht',
              description:
                'Classic borscht with dumplings stuffed with mushrooms',
              price: 18,
            },
            {
              title: 'Home-style broth',
              description: 'Chicken broth with vegetables, noodles and dill',
              price: 16,
            },
            {
              title: 'Tomato soup',
              description: 'Creamy tomato soup with rice and fresh basil',
              price: 16,
            },
            {
              title: 'Cold beet soup',
              description:
                'Lithuanian cold beet soup with cucumber and egg — seasonal',
              price: 20,
            },
            {
              title: 'Mushroom soup',
              description: 'Wild mushroom soup with pasta and sour cream',
              price: 22,
            },
            {
              title: 'Onion soup',
              description: 'French onion soup with crouton and gruyère cheese',
              price: 24,
            },
            {
              title: 'Minestrone',
              description: 'Italian vegetable soup with pasta and parmesan',
              price: 20,
            },
          ],
        },
        {
          id: 'meals',
          label: 'Meat dishes',
          items: [
            {
              title: 'Pork cutlet',
              description:
                'Traditional pork cutlet with potatoes and sautéed cabbage',
              price: 38,
            },
            {
              title: 'Grilled pork neck',
              description:
                'Herb-marinated pork neck from the grill, served with potatoes',
              price: 44,
            },
            {
              title: 'Beef goulash',
              description:
                'Beef goulash braised with vegetables, served with buckwheat',
              price: 46,
            },
            {
              title: 'Chicken breast',
              description:
                'Grilled chicken breast with herb sauce and vegetables',
              price: 36,
            },
            {
              title: 'BBQ ribs',
              description: 'Pork ribs in BBQ sauce slow-cooked for 4 hours',
              price: 52,
            },
            {
              title: 'Pork tenderloin',
              description:
                'Tenderloin in cream sauce with mushrooms and buckwheat',
              price: 48,
            },
            {
              title: 'Roast duck',
              description: 'Duck quarter with apples and red cabbage',
              price: 58,
            },
            {
              title: 'Beef bourguignon',
              description: 'Beef braised in red wine with root vegetables',
              price: 62,
            },
            {
              title: 'Wiener schnitzel',
              description:
                'Thin veal schnitzel in breadcrumbs with capers and lemon',
              price: 54,
            },
            {
              title: 'Home-style cabbage rolls',
              description:
                'Cabbage rolls with meat and rice in tomato sauce, just like grandma made',
              price: 34,
            },
          ],
        },
        {
          id: 'dessert',
          label: 'Desserts',
          items: [
            {
              title: 'Classic cheesecake',
              description:
                'Home-made Viennese cheesecake with strawberry sauce',
              price: 18,
            },
            {
              title: 'Apple pie',
              description: 'Warm apple pie with cinnamon and vanilla ice cream',
              price: 16,
            },
            {
              title: 'Artisan ice cream',
              description:
                'Three scoops from a local ice cream maker, seasonal flavours',
              price: 14,
            },
            {
              title: 'Tiramisu',
              description: 'Classic tiramisu with mascarpone and espresso',
              price: 20,
            },
            {
              title: 'Panna cotta',
              description: 'Panna cotta with raspberry sauce and fresh fruit',
              price: 18,
            },
            {
              title: 'Brownie',
              description: 'Warm chocolate brownie with vanilla ice cream',
              price: 16,
            },
            {
              title: 'Crêpes',
              description:
                'Crêpes with cottage cheese and raisins, drizzled with sour cream',
              price: 18,
            },
            {
              title: 'Poppy seed roll',
              description:
                'Home-made poppy seed roll with icing and orange zest',
              price: 14,
            },
            {
              title: 'Crème brûlée',
              description:
                'Classic crème brûlée with caramelised sugar and vanilla',
              price: 22,
            },
            {
              title: 'Seasonal fruit',
              description: 'Fresh fruit with whipped cream and mint',
              price: 16,
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
        { label: '4,6', content: 'Durchschnittsbewertung', Icon: Star },
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
          id: 'fish',
          label: 'Fisch & Meeresfrüchte',
          items: [
            {
              title: 'Gebratener Kabeljau',
              description:
                'Frischer Ostseekabeljau in Panade, serviert mit Pommes und Krautsalat',
              price: 42,
            },
            {
              title: 'Gegrillter Lachs',
              description:
                'Lachsfilet vom Grill mit Kräuterbutter und Saisongemüse',
              price: 52,
            },
            {
              title: 'Knoblauch-Garnelen',
              description:
                'Tigergarnelen in Butter mit Knoblauch und Petersilie gebraten',
              price: 48,
            },
            {
              title: 'Gebackener Heilbutt',
              description:
                'Heilbutt mit Zitrone und Dill gebacken, serviert mit Kartoffelpüree',
              price: 58,
            },
            {
              title: 'Kaschubischer Hering',
              description: 'Marinierter Hering mit Zwiebel und Apfel in Sahne',
              price: 28,
            },
            {
              title: 'Gebratener Zander',
              description: 'Zanderfilet in goldener Panade mit Tatarsoße',
              price: 54,
            },
            {
              title: 'Gegrillte Calamari',
              description:
                'Calamari vom Grill mit Olivenöl, Knoblauch und Chili, serviert mit Brot',
              price: 46,
            },
            {
              title: 'Ofenflunder',
              description:
                'Ganze Flunder mit Kräutern, Butter und Zitrone gebacken',
              price: 44,
            },
            {
              title: 'Fisch auf griechische Art',
              description: 'Gebratener Fisch in Gemüsemarinade, kalt serviert',
              price: 32,
            },
            {
              title: 'Fischteller',
              description:
                'Auswahl von drei Fischsorten mit Pommes und Beilagensalaten',
              price: 68,
            },
          ],
        },
        {
          id: 'soup',
          label: 'Suppen',
          items: [
            {
              title: 'Fischsuppe',
              description:
                'Traditionelle Ostsee-Fischsuppe mit Gemüse und Dill',
              price: 22,
            },
            {
              title: 'Sauerroggensuppe',
              description: 'Sauerroggensuppe mit Ei, Wurst und Kartoffeln',
              price: 18,
            },
            {
              title: 'Kürbiscremesuppe',
              description:
                'Samtige Kürbiscremesuppe mit Kernen und Kürbiskernöl',
              price: 20,
            },
            {
              title: 'Rote Borschtsch',
              description: 'Klassische Borschtsch mit Pilzteigtaschen',
              price: 18,
            },
            {
              title: 'Hausgemachte Brühe',
              description: 'Hühnerbrühe mit Gemüse, Nudeln und Dill',
              price: 16,
            },
            {
              title: 'Tomatensuppe',
              description:
                'Cremige Tomatensuppe mit Reis und frischem Basilikum',
              price: 16,
            },
            {
              title: 'Kalte Rote-Bete-Suppe',
              description:
                'Litauische kalte Rote-Bete-Suppe mit Gurke und Ei — saisonal',
              price: 20,
            },
            {
              title: 'Pilzsuppe',
              description: 'Waldpilzsuppe mit Nudeln und Sauerrahm',
              price: 22,
            },
            {
              title: 'Zwiebelsuppe',
              description:
                'Französische Zwiebelsuppe mit Crouton und Gruyère-Käse',
              price: 24,
            },
            {
              title: 'Minestrone',
              description: 'Italienische Gemüsesuppe mit Nudeln und Parmesan',
              price: 20,
            },
          ],
        },
        {
          id: 'meals',
          label: 'Fleischgerichte',
          items: [
            {
              title: 'Schweineschnitzel',
              description:
                'Traditionelles Schweineschnitzel mit Kartoffeln und gebratenem Kohl',
              price: 38,
            },
            {
              title: 'Gegrillter Schweinenacken',
              description:
                'Kräutermarinierter Schweinenacken vom Grill, mit Kartoffeln serviert',
              price: 44,
            },
            {
              title: 'Rindergulasch',
              description:
                'Rindergulasch mit Gemüse geschmort, serviert mit Buchweizen',
              price: 46,
            },
            {
              title: 'Hähnchenbrust',
              description: 'Gegrillte Hähnchenbrust mit Kräutersoße und Gemüse',
              price: 36,
            },
            {
              title: 'BBQ-Rippchen',
              description:
                'Schweinerippchen in BBQ-Soße, 4 Stunden langsam gegart',
              price: 52,
            },
            {
              title: 'Schweinefilet',
              description: 'Filet in Sahnesoße mit Champignons und Buchweizen',
              price: 48,
            },
            {
              title: 'Gebratene Ente',
              description: 'Entenkeule mit Äpfeln und Rotkohl',
              price: 58,
            },
            {
              title: 'Boeuf bourguignon',
              description:
                'In Rotwein geschmortes Rindfleisch mit Wurzelgemüse',
              price: 62,
            },
            {
              title: 'Wiener Schnitzel',
              description:
                'Dünnes Kalbsschnitzel in Panade mit Kapern und Zitrone',
              price: 54,
            },
            {
              title: 'Hausgemachte Kohlrouladen',
              description:
                'Kohlrouladen mit Fleisch und Reis in Tomatensoße, wie bei Oma',
              price: 34,
            },
          ],
        },
        {
          id: 'dessert',
          label: 'Desserts',
          items: [
            {
              title: 'Klassischer Käsekuchen',
              description: 'Hausgemachter Wiener Käsekuchen mit Erdbeersoße',
              price: 18,
            },
            {
              title: 'Apfelkuchen',
              description: 'Warmer Apfelkuchen mit Zimt und Vanilleeis',
              price: 16,
            },
            {
              title: 'Handwerkliches Eis',
              description:
                'Drei Kugeln vom lokalen Eismacher, saisonale Sorten',
              price: 14,
            },
            {
              title: 'Tiramisu',
              description: 'Klassisches Tiramisu mit Mascarpone und Espresso',
              price: 20,
            },
            {
              title: 'Panna cotta',
              description: 'Panna cotta mit Himbeersoße und frischen Früchten',
              price: 18,
            },
            {
              title: 'Brownie',
              description: 'Warmes Schokoladenbrownie mit Vanilleeis',
              price: 16,
            },
            {
              title: 'Crêpes',
              description:
                'Crêpes mit Quark und Rosinen, mit Sauerrahm übergossen',
              price: 18,
            },
            {
              title: 'Mohnrolle',
              description:
                'Hausgemachte Mohnrolle mit Zuckerguss und Orangenschale',
              price: 14,
            },
            {
              title: 'Crème brûlée',
              description:
                'Klassische Crème brûlée mit karamellisiertem Zucker und Vanille',
              price: 22,
            },
            {
              title: 'Saisonfrüchte',
              description: 'Frische Früchte mit Schlagsahne und Minze',
              price: 16,
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
