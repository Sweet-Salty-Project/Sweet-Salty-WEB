import styled from "@emotion/styled";
import { breakPoints } from "../globalstyles/Media";

interface IRegisterButton {
  menuIsClick: boolean;
}

export const Wrapper = styled.div`
  width: 1290px;
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 20px #dbdbdb;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    align-items: center;
  }
`;
export const FilterBox = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    width: 28%;
    align-items: center;
  }
`;
export const FilterBoxLine = styled.div`
  padding: 0px 190px 0px 30px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  @media ${breakPoints.mobile} {
    width: 28%;
    padding: 0;
    align-items: center;
  }
`;
export const FilterTitle = styled.div`
  margin-right: 30px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 12px;
    text-align: center;
    margin: 0;
    color: #676767;
  }
`;
export const FilerIcon = styled.img`
  width: 25px;
  object-fit: contain;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const MobileFiler = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(90deg, #ff6e30 0%, #ff9a31 100%);
  @media ${breakPoints.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const MobileFilerIcon = styled.img`
  width: 15px;
  object-fit: contain;
  cursor: pointer;
`;

export const TagBox = styled.div`
  padding: 10px 0px 0xp 0px;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Tag = styled.div`
  margin: 5px 5px 5px 0;
  padding: 7px 20px;
  border-radius: 50px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #dbdbdb;
`;

export const OpenFilter = styled.div`
  width: 1290px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 20px #dbdbdb;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const OpenFilterBox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    margin: 0;
  }
`;
export const SelectBox = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  color: #676767;
  font-size: 16px;
  font-weight: 700;
`;
export const HorizontalLine = styled.div`
  width: 1242px;
  height: 1px;
  background: #dbdbdb;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 15px 0;
  }
`;
export const OpenLotationTagBox = styled.div`
  width: 994px;
  display: flex;
  flex-wrap: wrap;
`;
export const OpenTagBox = styled.div`
  width: 1162px;
  display: flex;
  flex-wrap: wrap;
  @media ${breakPoints.mobile} {
    padding-top: 10px;
    width: 100%;
  }
`;
export const OpenTag = styled.div`
  margin: 0px 20px 0px 0px;
  padding: 7px 20px;
  border-radius: 50px;
  color: #7b7b7b;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid #dbdbdb;

  background-color: ${(props: IRegisterButton) =>
    props.menuIsClick ? "black" : "red"};
`;
export const ButtonBox = styled.div`
  margin: 30px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    margin: 20px 0;
  }
`;
export const Button = styled.div`
  margin: 0 15px;
  padding: 10px 40px;
  color: #7b7b7b;
  border: 2px solid #dbdbdb;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 9px 29px;
    border-radius: 8px;
    margin: 0 5px;
  }
`;
