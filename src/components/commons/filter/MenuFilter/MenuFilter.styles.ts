import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

export const OpenTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  .checkbox input {
    display: none;
  }

  .checkbox {
    display: flex;
    margin: 0px 30px 10px 0px;
    @media ${breakPoints.mobile} {
    margin: 0 6px 8px 0;
  }
  }

  .checkbox_text {
    display: flex;
    background-color: #d2d2d2;
    margin-left: 10px;
    font-size: 16px;
    color: #ffffff;
    padding: 7px 20px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: #ff9a31;
      color: #ffffff;
      @media ${breakPoints.mobile} {
        background-color: #d2d2d2;
      }
    }
    @media ${breakPoints.mobile} {
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 20px;
      margin:0;
  }
  }

  .checkbox_icon {
    display: flex;
    background-color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  .checkbox input:checked + .checkbox_text {
    color: #ffffff;
    background-color: #ffa230;
  }
`;
