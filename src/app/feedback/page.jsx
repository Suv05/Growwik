import Pageclient from "@/components/feedback/Pageclient";
import {
  showAllReviews,
  fetchReviews,
  countAllReviews,
  averageSatisfaction,
} from "@/actions/feedback";

async function Page({}) {
  const { reviewsData } = await showAllReviews();
  const { limitReviews } = await fetchReviews();
  const { countReviews } = await countAllReviews();
  const {average} = await averageSatisfaction();

  return (
    <>
      <Pageclient
        allReviewsData={reviewsData}
        initalReviewData={limitReviews}
        countReviews={countReviews}
        average={average}
      />
    </>
  );
}

export default Page;
export const dynamic = "force-dynamic";
