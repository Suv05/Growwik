// ScrollContext.jsx
"use client";


import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const refs = {
    //latestWorks: useRef(null),
    aboutUs: useRef(null),
    servicePage: useRef(null),
    //platform: useRef(null),
    //creators: useRef(null),
    //whyChooseUs: useRef(null),
    //review: useRef(null),
    ourClients: useRef(null),
    contactForm: useRef(null),
  };

  const scrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ refs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
