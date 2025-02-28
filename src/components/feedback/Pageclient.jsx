"use client";
import { useRef } from "react";
import Feedback from "./Feedback";
import Herosection from "./Herosection";
import Reviewshow from "./Reviewshow";

function Pageclient({ initalReviewData, allReviewsData, countReviews,average }) {
  const nameSectionRef = useRef(null); // Create ref in parent

  return (
    <>
      {/* Pass the ref */}
      <Herosection
        nameSectionRef={nameSectionRef}
        countReviews={countReviews}
        average={average}
      />
      <Reviewshow limitReviews={initalReviewData} allReviews={allReviewsData} />
      <Feedback nameSectionRef={nameSectionRef} />
      {/* pass the ref to feedback component too so it can be attached*/}
    </>
  );
}

export default Pageclient;
