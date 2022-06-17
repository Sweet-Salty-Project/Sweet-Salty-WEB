import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

interface IProps {
  isIntroPage?: any;
  isReviewPage?: any;
  isStorePage?: any;
  isNoticePage?: any;
  mediaIsOpen?: boolean;
}

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 84px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  @media ${breakPoints.mobile} {
    width: 360px;
    height: 68px;
    background: #fff;
    z-index: 100;
  }
`;
export const HeaderBox = styled.div`
  width: 1334px;
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 360px;
    padding: 18px 20px;
    z-index: 10;
  }
`;
export const HeaderLogo = styled.img`
  width: 162px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 22px;
  }
`;
export const HeaderMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.mobile} {
    position: absolute;
    width: 360px;
    display: ${(props: IProps) => (props.mediaIsOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    top: 50px;
    left: 0;
    background-color: #fff;
    padding: 44px 0px 32px 0px;
  }
`;

export const IntroductionMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IProps) => (props.isIntroPage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IProps) =>
    props.isIntroPage ? "8px solid #ffa230" : "none"};
  @media ${breakPoints.mobile} {
    font-weight: ${(props: IProps) => (props.isNoticePage ? "900" : "600")};
  }
`;
export const ReviewMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IProps) => (props.isReviewPage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IProps) =>
    props.isReviewPage ? "8px solid #ffa230" : "none"};
  @media ${breakPoints.mobile} {
    margin: 30px 0px;
    font-weight: ${(props: IProps) => (props.isNoticePage ? "900" : "600")};
  }
`;
export const StoreMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IProps) => (props.isStorePage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IProps) =>
    props.isStorePage ? "8px solid #ffa230" : "none"};

  @media ${breakPoints.mobile} {
    font-weight: ${(props: IProps) => (props.isNoticePage ? "900" : "600")};
  }
`;
export const NoticeMenu = styled.div`
  font-size: 18px;
  font-weight: ${(props: IProps) => (props.isNoticePage ? "900" : "500")};
  margin: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 8px solid #ffa230;
    font-weight: 900;
  }
  &:active {
    font-size: 18.5px;
  }
  border-bottom: ${(props: IProps) =>
    props.isNoticePage ? "8px solid #ffa230" : "none"};
  @media ${breakPoints.mobile} {
    margin: 30px 0px 0px 0px;
    font-weight: ${(props: IProps) => (props.isNoticePage ? "900" : "600")};
  }
`;

export const HeaderNonMembersRightBox = styled.div`
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    background-color: red;
  }
`;
export const HeaderLogin = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin: 0px;
  }
`;
export const P = styled.div`
  font-size: 16px;
  cursor: default;
  color: #7b7b7b;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    padding: 0px 5px;
  }
`;
export const HeaderSignup = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  color: #7b7b7b;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin: 0px;
  }
`;

export const HeaderMemberRightBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const PhotoBox = styled.div`
  display: flex;
  align-items: start;
`;
export const Photo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  background: linear-gradient(0.25turn, #ff6e30, #ffa230);
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  @media ${breakPoints.mobile} {
    width: 32px;
    height: 32px;
  }
`;
export const UserProfileBox = styled.div`
  position: absolute;
  top: -60px;
  z-index: 1;
  width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, 120px);
`;
export const ArrowBox = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #fff;
`;
export const UserProfile = styled.div`
  width: 180px;
  height: 210px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 7px #999;
`;
export const UserNameBox = styled.div`
  margin-bottom: 8px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 20px;
  cursor: default;
  display: flex;
  align-items: center;
`;
export const UserName = styled.div`
  color: #ffa230;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const UserPointBox = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #676767;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 3px solid #ffa230;
  }
`;
export const UserPoint = styled.span`
  font-size: 16px;
  color: #ffa230;
  cursor: pointer;
`;
export const MyPage = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
export const Note = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: start;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;
export const SignalIcon = styled.img`
  width: 6px;
`;

export const Logout = styled.div`
  font-size: 16px;
  color: #7b7b7b;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid #ffa230;
  }
`;

export const MediaHamburgerDiv = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
    width: 35px;
  }
`;

export const MediaHamburger = styled.img`
  width: ${(props: IProps) => (props.mediaIsOpen ? "16px" : "20px")};
  height: ${(props: IProps) => (props.mediaIsOpen ? "16px" : "12px")};
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
  }
`;
