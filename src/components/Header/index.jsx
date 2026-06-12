import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { Container, Grid, Item } from "../Grid";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shows", href: "/shows" },
    { name: "Films", href: "/films" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <Grid>
          <Item xxlSpan={10} xlSpan={10} lgSpan={10} mdSpan={4} smSpan={2}>
            <nav>
              <ul className={styles.nav}>
                {navLinks.map((link) => (
                  <li key={link.name} className={styles.navItem}>
                    <a href={link.href} className={styles.navLink}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Item>
          <Item xxlSpan={1} xlSpan={1} lgSpan={1} mdSpan={1} smSpan={1}>
            <FaShoppingCart className={styles.cartIcon} />
          </Item>
          <Item xxlSpan={1} xlSpan={1} lgSpan={1} mdSpan={1} smSpan={1}>
            <FaUserCircle className={styles.cartIcon} />
          </Item>
        </Grid>
      </Container>
    </header>
  );
};
