import { Anchor, MoveUpRight, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

// Styles
import meetus from './styles/meetus.module.css';
import location from './styles/location.module.css';
import header from './styles/header.module.css';
import menu from './styles/menu.module.css';
import reviews from './styles/reviews.module.css';
import footer from './styles/footer.module.css';
import shared from '../../styles/shared.module.css';

// Components
import { Section } from '../../components/Layout/Section';

// Translations
import { translations } from '../../data/translations';

const lang = 'pl';

function scrollInto({ id }: { id: string }) {
  console.log(id);
  const section = document.querySelector(`#${id}`);
  section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function Home() {
  return (
    <div className="page">
      <Header />
      <MeetUs />
      <Menu />
      <Location />
      <Ratings />
      <Footer />
    </div>
  );
}

// HEADER ----- DONE / TRANSLATION TODO
export function Header() {
  // Background animation
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <header ref={wrapperRef} className={header.wrapper}>
      <div className={header.banner_wrapper}>
        <motion.img
          src="./banner.png"
          className={header.banner_image}
          style={{ y: bgY, scale: bgScale }}
        />
        <div className={header.logo_wrapper}>
          <HeaderLogo />
        </div>
        <motion.div className={header.cta} style={{ y: smoothY }}>
          <h1>U CZECHA </h1>
          <p>
            Świeże ryby, tradycyjna kuchnia polska i rodzinna atmosfera w sercu
            Międzywodzia
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--accent-2-light)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              scrollInto({ id: 'menu' });
            }}>
            ZOBACZ MENU <Anchor />
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
export function HeaderLogo() {
  return (
    <div className={header.logo}>
      <span>
        <Anchor size={50} />
      </span>
      <span>U CZECHA</span>
      <span>MIĘDZYWODZIE</span>
    </div>
  );
}

// MEET US
export function MeetUs() {
  const localization = translations[lang].meetUs;
  return (
    // Wrapper
    <Section id="about" alt={'alt'} viewport={{ amount: 0.75 }}>
      {/* Header */}
      <h1 className={shared.header_title}>{localization.label}</h1>
      <p className={shared.header_description}>{localization.description}</p>

      {/* Stats */}
      <div className={meetus.stats}>
        {localization.badges.map(({ label, content, Icon }, index) => {
          return (
            <motion.div
              key={index}
              className={meetus.stat}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.15 }}
              viewport={{ once: true }}>
              <span className={meetus.stat_number}>
                {label} <Icon />
              </span>
              <span className={meetus.stat_label}>{content}</span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

// MENU
export function Menu() {
  const [currentSection, setCurrentSection] = useState<string>();

  const localization = translations[lang].menu;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentSection(localization.tabs[0].id);
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const sections = localization.tabs.map(({ id }) =>
        wrapper.querySelector(`#${id}`),
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;

        if (section && section.offsetTop <= wrapper.scrollTop + 50) {
          setCurrentSection(localization.tabs[i].id);
          break;
        }
      }
    };

    wrapper.addEventListener('scroll', handleScroll);
    return () => wrapper.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    const wrapper = wrapperRef.current;
    if (!navbar || !wrapper) return;

    const nav_sections = localization.tabs.map(({ id }) =>
      navbar.querySelector(`#${id}`),
    );

    const section = nav_sections.find((el) => el?.id === currentSection) as
      | HTMLElement
      | undefined;

    if (!section) return;

    const left =
      section.offsetLeft - navbar.clientWidth / 2 + section.clientWidth / 2;

    navbar.scrollTo({
      left,
      behavior: 'smooth',
    });
  }, [currentSection]);

  function handleClick(id: string) {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const section = wrapper.querySelector(`#${id}`) as HTMLElement;
    if (!section) return;

    wrapper.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  }

  return (
    <Section id="menu" viewport={{ amount: 0.5 }}>
      {/* Title */}
      <h1 className={shared.header_title_alt}>{localization.label}</h1>

      {/* Navbar */}
      <div ref={navbarRef} className={menu.navbar}>
        {localization.tabs.map(({ label, id }) => (
          <button
            key={id}
            id={`${id}`}
            onClick={() => handleClick(id)}
            className={menu.navbar_button}
            style={{
              position: 'relative',
              color:
                id === currentSection ? 'var(--text-on-dark)' : 'var(--text)',
            }}>
            {id === currentSection && (
              <motion.div
                layoutId="active-tab"
                className={menu.navbar_button_active_bg}
                style={{ position: 'absolute', inset: 0, zIndex: -1 }}
                transition={{ ease: 'circOut' }}
              />
            )}
            {label}
          </button>
        ))}
      </div>

      {/* List */}
      <div ref={wrapperRef} className={menu.wrapper}>
        {/* Tabs */}
        {localization.tabs.map(({ items, id }, index) => {
          return (
            // Tab
            <motion.section id={id} className={menu.tab} key={index}>
              {/* Items */}
              <div className={menu.tab_items}>
                {items.map(({ title, description, price }, index) => {
                  return (
                    <>
                      <div
                        className={menu.item}
                        key={index}
                        style={
                          index === items.length - 1
                            ? { borderBottom: 'none' }
                            : undefined
                        }>
                        <div className={menu.item_top}>
                          <h1 className={menu.item_title}>{title}</h1>
                        </div>
                        <div className={menu.item_bottom}>
                          <span className={menu.item_description}>
                            {description}
                          </span>
                          <span className={menu.item_price}>{price} zł</span>
                        </div>
                      </div>

                      {index === items.length - 1 && (
                        <div className={menu.tab_separator}></div>
                      )}
                    </>
                  );
                })}
              </div>
            </motion.section>
          );
        })}

        <p className={menu.footer_note}>
          Wszystkie dania przygotowujemy ze świeżych, lokalnych składników
        </p>
      </div>
    </Section>
  );
}

// LOCATION
export function Location() {
  const localization = translations[lang].location;
  const info = [localization.address, localization.hours];
  return (
    <Section id="location" alt={'alt'}>
      <h1 className={shared.header_title}>{localization.label}</h1>

      {/* Location Grid */}
      <div className={location.wrapper}>
        {/* Info */}
        <div className={location.info}>
          {info.map(({ label, content, Icon }, index) => {
            {
              return (
                <motion.div
                  className={location.address}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}>
                  <h2>
                    <Icon />
                    {label}
                  </h2>
                  <p>{content}</p>
                </motion.div>
              );
            }
          })}
        </div>

        {/* Map */}
        <div className={location.map_wrapper}>
          <iframe
            className={location.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m33065846.996603268!2d14.01953455372328!3d51.85169458840864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa858778023fdf%3A0xb1094cb70a86f2ec!2sU%20Czecha!5e0!3m2!1spl!2spl!4v1777376388530!5m2!1spl!2spl"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

// RATINGS
export function Ratings() {
  const localization = translations[lang].ratings;
  return (
    <Section id="ratings">
      <h1 className={shared.header_title}>{localization.label}</h1>

      <div className={reviews.wrapper}>
        {localization.ratings.map(({ label, description, rating }, index) => {
          return (
            <motion.div className={reviews.card} key={index}>
              <div className={reviews.top}>
                <span className={reviews.author}>{label}</span>
                <span className={reviews.rating}>
                  {rating}
                  <Star fill="var(--accent)" stroke="var(--accent)" />
                </span>
              </div>
              <p className={reviews.review}>{description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className={reviews.cta}>
        <p>{localization.cta}</p>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-hover)' }}
          whileTap={{ scale: 0.95 }}
          href="https://maps.app.goo.gl/hvRczMmPdeKy6fK78"
          className={reviews.cta_href}>
          Google Maps <MoveUpRight />
        </motion.a>
      </div>
    </Section>
  );
}

// FOOTER
export function Footer() {
  const localization = translations[lang].footer;

  return (
    <Section viewport={{ amount: 0.25 }} alt={'alt'}>
      <div className={footer.wrapper}>
        <div className={footer.logo}>
          <HeaderLogo />
        </div>
        <div>
          <p>ul. Wojska Polskiego 18, Międzywodzie</p>
        </div>
        <div className={footer.links}>
          {localization.links.map(({ id, label, Icon }) => {
            return (
              <a onClick={() => scrollInto({ id })}>
                <Icon />
                {label}
              </a>
            );
          })}
        </div>

        <p className={footer.copyright}>
          <a className={footer.copyrightText}>{localization.copyright}</a>
          <a className={footer.author} href="https://nerii.pl">
            {localization.author} <MoveUpRight />
          </a>
        </p>
      </div>
    </Section>
  );
}
