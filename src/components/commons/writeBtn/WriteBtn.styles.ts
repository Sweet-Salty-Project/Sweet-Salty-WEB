import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";
import { breakPoints } from "../globalstyles/Media";

export const ReviewWrite = styled.div`
  padding: 13px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;

  background: linear-gradient(0.25turn, #ff6e30, #ffa230);
  color: #fff;
  transition: 0.2s;
  &:hover {
    background: linear-gradient(#e8662d, #ef982e);
  }
  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(90deg, #ff7031 0%, #ffa230 100%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10;
  }
`;

export const WriteIcon = styled(EditOutlined)`
  font-size: 16px;
  margin-right: 6px;
  @media ${breakPoints.mobile} {
    font-size: 24px;
  margin-right: 0;
  }
`;

export const WriteText = styled.div`
  font-size: 16px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    display:none;
  }
`;
