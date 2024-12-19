"use client";

import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const refs = {
    aboutUs: useRef(null),
    servicePage: useRef(null),
    ourClients: useRef(null),
    contactForm: useRef(null),
  };

  const scrollToSection = (section) => {
    const sectionRef = refs[section]?.current;
    if (sectionRef) {
      const offset = 70; // Adjust based on your header height
      const elementPosition = sectionRef.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ refs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
