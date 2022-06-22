import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";
export const ItemInfoLeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px 0px 0px 0px;
  position: relative;
`;
export const ItemImg = styled.div`
  background-color: #ffa230;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 250px;
  justify-content: flex-start;
  padding: 15px;
  width: 300px;
  @media ${breakPoints.mobile} {
    width: 280px;
    height: 200px;
    padding: 0px;
  }
`;

export const ItemTitle = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  top: 20px;
  left: 23px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    top: 20px;
    left: 30px;
  }
`;
export const ItemInfoDiv = styled.div`
  height: 92px;
  padding: 10px 0;
  width: 300px;
  @media ${breakPoints.mobile} {
    width: 280px;
    padding: 5px 0;
    height: 72px;
  }
`;
export const ItemInfoTopDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const ItemInfoMidDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  @media ${breakPoints.mobile} {
    padding: 3px 0;
  }
`;

export const MidStoreInfoDiv = styled.div`
  display: flex;
`;

export const ItemInfoStoreName = styled.div`
  color: #676767;
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const ItemInfoTitleDiv = styled.div`
  color: #2c2c2c;
  font-size: 18px;
  font-weight: 600;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    font-size: 12px;
    width: 100%;
    padding-top: 10px;
  }
`;
export const ItemInfoBarDiv = styled.div`
  color: #676767;
  font-size: 18px;
  line-height: 16px;
  padding: 0 5px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    padding: 0 3px;
    line-height: 14px;
  }
`;
export const ItemInfoLocationDiv = styled.div`
  color: #676767;
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const ItemInfoUserDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const ItemInfoBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemInfoImg = styled.img`
  height: 24px;
  width: 24px;
  @media ${breakPoints.mobile} {
    height: 17px;
    width: 17px;
  }
`;
export const ItemInfoCountDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  line-height: 24px;
  padding: 0 5px;
  @media ${breakPoints.mobile} {
    font-size: 8px;
    line-height: 14px;
  }
`;
export const IteminfoDateDiv = styled.div`
  color: #676767;
  font-size: 12px;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    font-size: 8px;
    line-height: 14px;
  }
`;
