import React from "react";

const ReviewInfo = ({ params }: any) => {
  return (
    <div>
      ProductInfo {params.productId} ReviewInfo {params.reviewId}
    </div>
  );
};

export default ReviewInfo;
