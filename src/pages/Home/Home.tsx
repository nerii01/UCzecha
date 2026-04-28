import { Anchor } from "lucide-react";
import {
  useMotionValue,
  useScroll,
  motion,
  useTransform,
  useSpring,
} from "framer-motion";
import "./Header.css";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      <Header />

      <section className="section">
        <h1>Poznaj nas!</h1>
        <p>
          Restauracja „U Czecha" działa w Międzywodziu od 1998 roku.
          Zaczynaliśmy od małego straganu z rybami prosto z kutra — dziś
          serwujemy pełne menu, ale filozofia pozostała ta sama: świeże,
          lokalne, bez kombinowania.
        </p>
        <p>
          Każdego ranka nasi dostawcy przywożą ryby prosto z Bałtyku. Dorsz,
          flądra, węgorz, szprot — sezonowo i uczciwie. Do tego domowe zupy,
          pierogi z łososiem i coś słodkiego na koniec.
        </p>
        <div className="stats">
          <div className="stat">
            <span className="stat__number">26</span>
            <span className="stat__label">lat na plaży</span>
          </div>
          <div className="stat">
            <span className="stat__number">100%</span>
            <span className="stat__label">ryby z Bałtyku</span>
          </div>
          <div className="stat">
            <span className="stat__number">4,8 ★</span>
            <span className="stat__label">średnia ocen</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h1>Nasze menu</h1>
        <div className="menu-grid">
          <div className="menu-category">
            <h2>Zupy</h2>
            <ul className="menu-list">
              <li>
                <span>Zupa rybna po bałtycku</span>
                <span>22 zł</span>
              </li>
              <li>
                <span>Krem z homara</span>
                <span>28 zł</span>
              </li>
              <li>
                <span>Żurek z wędzonym łososiem</span>
                <span>19 zł</span>
              </li>
            </ul>
          </div>
          <div className="menu-category">
            <h2>Dania główne</h2>
            <ul className="menu-list">
              <li>
                <span>Dorsz smażony z frytkami</span>
                <span>52 zł</span>
              </li>
              <li>
                <span>Flądra z masłem i kaparami</span>
                <span>58 zł</span>
              </li>
              <li>
                <span>Makaron z małżami i pomidorami</span>
                <span>48 zł</span>
              </li>
              <li>
                <span>Węgorz wędzony z chlebem</span>
                <span>64 zł</span>
              </li>
            </ul>
          </div>
          <div className="menu-category">
            <h2>Dla dzieci</h2>
            <ul className="menu-list">
              <li>
                <span>Paluszki rybne z frytkami</span>
                <span>28 zł</span>
              </li>
              <li>
                <span>Makaron z masłem i serem</span>
                <span>18 zł</span>
              </li>
            </ul>
          </div>
          <div className="menu-category">
            <h2>Desery</h2>
            <ul className="menu-list">
              <li>
                <span>Lody z owocami morza</span>
                <span>16 zł</span>
              </li>
              <li>
                <span>Szarlotka babci Heli</span>
                <span>14 zł</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="menu-note">
          Sezonowe propozycje dnia dostępne przy stoliku. Pytaj kelnera.
        </p>
      </section>

      <section className="section alt">
        <h1>Lokalizacja</h1>
        <div className="location-grid">
          <div className="location-info">
            <div className="location-block">
              <h2>Adres</h2>
              <p>
                ul. Nadmorska 12
                <br />
                72-510 Międzywodzie
              </p>
            </div>
            <div className="location-block">
              <h2>Godziny otwarcia</h2>
              <ul className="hours-list">
                <li>
                  <span>Pon – Pt</span>
                  <span>11:00 – 21:00</span>
                </li>
                <li>
                  <span>Sob – Nd</span>
                  <span>10:00 – 22:00</span>
                </li>
                <li>
                  <span>Sezon (VII–VIII)</span>
                  <span>9:00 – 23:00</span>
                </li>
              </ul>
            </div>
            <div className="location-block">
              <h2>Kontakt</h2>
              <p>
                tel. <a href="tel:+48912345678">+48 91 234 56 78</a>
              </p>
              <p>
                email:{" "}
                <a href="mailto:kontakt@uczecha.pl">kontakt@uczecha.pl</a>
              </p>
            </div>
          </div>
          <div className="location-map">
            {/* Tu wrzucisz iframe z Google Maps */}
            <div className="map-placeholder">Mapa</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h1>Opinie o naszej restauracji</h1>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              „Najlepsza flądra jaką jadłam w życiu. Świeżość ryb czuć od razu,
              obsługa miła i szybka. Wrócimy na pewno!"
            </p>
            <span className="review-author">— Marta K., Warszawa</span>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              „Byliśmy z dziećmi, każde dostało co chciało. Widok na morze,
              lampki na tarasie wieczorem — klimat nie do podrobienia."
            </p>
            <span className="review-author">— Tomasz W., Poznań</span>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★☆</div>
            <p>
              „Porcje duże, ceny uczciwe jak na nadmorski lokal. Zupa rybna —
              absolutny hit. Jedyne minus to kolejka w weekendy."
            </p>
            <span className="review-author">— Agnieszka L., Szczecin</span>
          </div>
        </div>
        <div className="reviews-cta">
          <p>Byłeś u nas? Zostaw opinię na</p>
          <a href="#" className="btn btn--outline">
            Google Maps ↗
          </a>
          <a href="#" className="btn btn--outline">
            TripAdvisor ↗
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <p className="footer-logo">⚓ U Czecha</p>
            <p className="footer-sub">Międzywodzie · Bałtyk · Od 1998</p>
          </div>
          <div>
            <p>ul. Nadmorska 12, Międzywodzie</p>
            <p>+48 91 234 56 78</p>
            <p>kontakt@uczecha.pl</p>
          </div>
          <div>
            <p>
              <a href="#">Menu</a>
            </p>
            <p>
              <a href="#">Rezerwacje</a>
            </p>
            <p>
              <a href="#">Galeria</a>
            </p>
          </div>
        </div>
        <p className="footer-copy">
          © 2025 U Czecha. Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </>
  );
}

// HEADER
export function Header() {

  // Background animation
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <header ref={wrapperRef} className="home_header_wrapper">
      <motion.div
        className="home_header_banner_wrapper"
        style={{ backgroundPositionY: bgY }}
      >
        <HeaderLogo />
        <motion.div className="home_header_CTA" style={{ y: smoothY }}>
          <h1>U CZECHA</h1>
          <p>
            Świeże ryby, tradycyjna kuchnia polska i rodzinna atmosfera w sercu
            Międzywodzia
          </p>
          <button>
            ZOBACZ MENU <Anchor />
          </button>
        </motion.div>
      </motion.div>
    </header>
  );
}

export function HeaderLogo() {
  return (
    <div className="home_header_logo">
      <span>
        <Anchor size={50} />
      </span>
      <span>U CZECHA</span>
      <span>MIĘDZYWODZIE</span>
    </div>
  );
}

// MEET US

// LOCATION

// RATINGS
