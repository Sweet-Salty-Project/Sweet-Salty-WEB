import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../globalstyles/Media";

interface IAny {
  isReviewList?: any;
  isCommonReviewList?: any;
  isTesterReview?: any;
  isWishList?: any;
}

export const ReviewMenuBox = styled.div`
  margin: 0 auto;
  width: 1338px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 26px;
    padding: 0 19px;
  }
`;
export const ReviewMenu = styled.div`
  width: 299px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  color: ${(props: IAny) =>
    props.isReviewList ||
    props.isCommonReviewList ||
    props.isTesterReview ||
    props.isWishList
      ? "#fff"
      : "#7b7b7b"};
  background: ${(props: IAny) =>
    props.isReviewList ||
    props.isCommonReviewList ||
    props.isTesterReview ||
    props.isWishList
      ? "linear-gradient(0.25turn, #ff6e30, #ffa230)"
      : "#fff"};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(0.25turn, #ff6e30, #ffa230);
    color: #fff;
  }
  @media ${breakPoints.mobile} {
    display:flex;
    width: 66px;
    height: 26px;
    font-size: 10px;
    line-height: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
    
  }
`;

export default function ReviewMenuPage() {
  const router = useRouter();

  const ReviewList = ["/reviews/"];
  const isReviewList = ReviewList.includes(router.asPath);
  const CommonReviewList = ["/reviews/commonReview/"];
  const isCommonReviewList = CommonReviewList.includes(router.asPath);
  const TesterReview = ["/reviews/testerReview/"];
  const isTesterReview = TesterReview.includes(router.asPath);
  const WishList = ["/reviews/wish/"];
  const isWishList = WishList.includes(router.asPath);

  const onClickCommunityList = () => {
    router.push("/reviews");
  };

  const onClickCommonReviewList = () => {
    router.push("/reviews/commonReview");
  };
  const onClickTasterReviewList = () => {
    router.push("/reviews/testerReview");
  };
  const onClickWishReviewList = () => {
    router.push("/reviews/wish");
  };

  return (
    <>
      <ReviewMenuBox>
        <ReviewMenu onClick={onClickCommunityList} isReviewList={isReviewList}>
          전체
        </ReviewMenu>
        <ReviewMenu
          onClick={onClickCommonReviewList}
          isCommonReviewList={isCommonReviewList}
        >
          단짠 리뷰
        </ReviewMenu>
        <ReviewMenu
          onClick={onClickTasterReviewList}
          isTesterReview={isTesterReview}
        >
          시식단 리뷰
        </ReviewMenu>
        <ReviewMenu onClick={onClickWishReviewList} isWishList={isWishList}>
          가주세요!
        </ReviewMenu>
      </ReviewMenuBox>
    </>
  );
}
