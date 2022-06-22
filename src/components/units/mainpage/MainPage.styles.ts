import styled from "@emotion/styled";
import { breakPoints } from "../../commons/globalstyles/Media";

export const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 360px;
    padding: 0px 20px;
  }
`;
export const MainPageOutBox = styled.div`
  position: relative;
  margin: 40px auto 0 auto;
  width: 1120px;
`;
export const ReviewMenuBox = styled.div`
  margin: 0 auto;
  width: 1120px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .checkbox input {
    display: none;
  }
  .checkbox_text {
    width: 240px;
    height: 50px;
    padding: 15px 100px;
    text-align: center;
    line-height: 50px;
    border-radius: 20px 20px 0 0;
    font-weight: 700;
    font-size: 20px;
    color: #7b7b7b;
    z-index: 0;
    position: relative;
    background-color: #ffffff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: linear-gradient(0.25turn, #ff6e30, #ffa230);
      color: #fff;
    }
  }
  .checkbox input:checked + .checkbox_text {
    color: #ffffff;
    background: linear-gradient(0.25turn, #ff6e30, #ffa230);
  }
`;
export const ReviewMenu = styled.div`
  width: 240px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;
  font-size: 20px;
  color: #7b7b7b;

  background-color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(0.25turn, #ff6e30, #ffa230);
    color: #fff;
  }
`;

export const MainPageInnerBox = styled.div`
  margin: 0 auto;
  width: 1120px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  position: relative;
  box-shadow: 0px 5px 20px #dbdbdb;
`;
export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;
export const ReviewTitle = styled.div`
  font-weight: 700;
  cursor: default;
`;
export const ReviewArrow = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  color: ${(props: any) =>
    props.isCommonReviewList || props.isVisited || props.isWishList
      ? "#fff"
      : "#7b7b7b"};
  background: ${(props: any) =>
    props.isCommonReviewList || props.isVisited || props.isWishList
      ? "linear-gradient(0.25turn, #ff6e30, #ffa230)"
      : "#fff"};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(0.25turn, #ff6e30, #ffa230);
    color: #fff;
    font-weight: 700;
    box-shadow: 0px 0px 15px #dbdbdb;
  }
`;
export const ReviewSection = styled.div`
  margin: 0 0 0 30px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;
export const CardBoxDiv = styled.div`
  padding-right: 30px;
`;
export const MainPageLoginOutBox = styled.div`
  position: absolute;
  z-index: 3;
  margin: 0 auto 40px auto;
  width: 1120px;
  height: 427px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  transform: translate(000px, -426px);
`;
export const MainPageLoginInnerBox = styled.div`
  width: 480px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 15px #dbdbdb;
`;
export const MainPageInnerText = styled.div`
  font-weight: 700;
`;
export const FlexBox = styled.div`
  margin-top: 30px;
  display: flex;
  color: #ff9a31;
  font-weight: 700;
`;
export const Login = styled.div`
  cursor: pointer;
`;
export const P = styled.div`
  margin: 0 10px;
  cursor: default;
`;
export const Signup = styled.div`
  cursor: pointer;
`;

export const TopButtonBox = styled.div`
  padding: 50px 0;
`;
