import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";
export const ItemInfoLeftDiv = styled.div`
  display: flex;
`;
export const ItemMainDiv = styled.div`
  margin-right: 28px;
  cursor: pointer;
  height: 342px;
  width: 338px;
  @media ${breakPoints.mobile} {
    width:245px;}
`;
export const ItemImg = styled.div`
  background-color: #ffa230;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 250px;
  justify-content: flex-start;
  padding: 12px 0px 0px 10px;
  width: 338px;
  @media ${breakPoints.mobile} {
    width: 245px;
    height: 180px;
    padding: 0px;
  }
`;
export const ItemRankingDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;

export const ItemRanking = styled.img`
  width: 30px;
  height: 30px;
  @media ${breakPoints.mobile} {
    width: 14px;
    height: 16px;
  }
`;
export const ItemTitle = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const ItemInfoDiv = styled.div`
  height: 92px;
  padding: 10px 0;
  width: 338px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ItemInfoTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemInfoMidDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
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
  @media ${breakPoints.mobile} {
    font-size: 10px;
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
  }
`;
export const ItemInfoBarDiv = styled.div`
  color: #676767;
  font-size: 18px;
  line-height: 16px;
  padding: 0 5px;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 10px;
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
  }
`;

export const ItemInfoBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemInfoImg = styled.img`
  height: 24px;
  width: 24px;
`;
export const ItemInfoCountDiv = styled.div`
  color: #2c2c2c;
  font-size: 14px;
  line-height: 24px;
  padding: 0 5px;
`;
export const IteminfoDateDiv = styled.div`
  color: #676767;
  font-size: 12px;
  line-height: 24px;
`;
