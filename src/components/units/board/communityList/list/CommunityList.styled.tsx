import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/globalstyles/Media";

export const CommonReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 360px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  padding: 100px 0;
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
    font-size: 20px;
  }
`;
export const CommonReviewOutBox = styled.div`
  width: 1338px;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 20px;
  }
`;

export const SearchbarBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 46px;
  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

export const CommonReviewInnerBox = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 24px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 20px #dbdbdb;
  @media ${breakPoints.mobile} {
    padding:0 0 10px;
  }
`;
export const TopThreeBox = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
export const TopThreeTitle = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  color: #ff9a31;
`;
export const TopDiv = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: default;
`;

export const BottomDiv = styled.div`
  font-size: 30px;
  font-weight: 800;
`;

export const ReviewSection = styled.div`
  width: 1072px;
  display: flex;
  justify-content: space-between;
`;

export const CommonReviewHr = styled.div`
  margin-bottom: 30px;
  width: 1290px;
  height: 2px;
  background: #dadada;
`;

export const ReviewList = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
  @media ${breakPoints.mobile} {
    grid-template-columns: 100%;
    padding: 20px 0px 0px 0px;
  }
`;

export const TopButtonArticle = styled.div`
  padding: 50px 0px;
  @media ${breakPoints.mobile} {
    padding: 10px 0px;
  }
`;
