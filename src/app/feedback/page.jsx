import Pageclient from "@/components/feedback/Pageclient";
import {
  showAllReviews,
  fetchReviews,
  countAllReviews,
  averageSatisfaction,
} from "@/actions/feedback";

async function Page({}) {
  const [reviewsData, limitReviews, countReviews, average] = await Promise.all([
    showAllReviews(),
    fetchReviews(),
    countAllReviews(),
    averageSatisfaction(),
  ]);

  return (
    <>
      <Pageclient
        allReviewsData={reviewsData.reviewsData}
        initalReviewData={limitReviews.limitReviews}
        countReviews={countReviews.countReviews}
        average={average.average}
      />
    </>
  );
}

export default Page;
