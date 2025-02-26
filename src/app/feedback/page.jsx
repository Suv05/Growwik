"use client";
import Feedback from "@/components/feedback/Feedback";
import Herosection from "@/components/feedback/Herosection";
import { useRef } from "react";

function Page({}) {
  const nameSectionRef = useRef(null); // Create ref in parent
  return (
    <>
      <Herosection nameSectionRef={nameSectionRef} /> {/* Pass the ref */}
      <Feedback nameSectionRef={nameSectionRef} />
      {/* pass the ref to feedback component too so it can be attached*/}
    </>
  );
}

export default Page;
