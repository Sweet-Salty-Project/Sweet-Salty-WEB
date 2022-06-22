import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/globalstyles/Media";

interface IBuyButton {
  amountPoint?: number;
  isBuyBtn?: boolean;
}

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0px 0px 100px 0px;
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 100px 0px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 30px 0px;
  }
`;

export const TitleFont = styled.div`
  font-size: 40px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1338px;

  @media ${breakPoints.mobile} {
    width: 320px;
  }
`;

export const Padding = styled.div`
  padding: 0px 30px 0px 0px;
  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 952px;
  @media ${breakPoints.mobile} {
    width: 320px;
    justify-content: center;
    align-items: center;
  }
`;

export const MainLeftSection = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 40px;
  background-color: #ffffff;
  position: relative;
  @media ${breakPoints.mobile} {
    width: 320px;
    padding: 20px;
  }
`;

export const LeftTopInfoArticle = styled.div`
  display: flex;

  border-bottom: 1px solid #dadada;
  padding: 0px 0px 50px 0px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 0px 0px 10px 0px;
  }
`;

export const Thumbnail = styled.div`
  width: 410px;
  height: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  background-color: #f3f3f3;
  position: relative;
  @media ${breakPoints.mobile} {
    width: 280px;
    height: 200px;
    border-radius: 10px;
  }
`;

export const GifticonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  height: 150px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 190px;
    height: 100px;
  }
`;
export const GifticonImg = styled.div`
  width: 75%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-color: #c4c4c4;
`;
export const GifticonLogoDiv = styled.div`
  display: flex;
  padding: 8px 8px 0px 0px;
`;
export const GifiticonLogo = styled.img`
  width: 31px;
  height: 7px;
`;
export const ThumbnailTitle = styled.div`
  position: absolute;
  top: 20px;
  left: 23px;
  font-size: 25px;
  font-weight: 700;
  color: #ff9a31;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 20px;

  @media ${breakPoints.mobile} {
    padding: 10px 0px;
  }
`;

export const ShopNameArticle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0px 0px 30px 0px;
  @media ${breakPoints.mobile} {
    padding: 0px;
    font-size: 14px;
  }
`;

export const ShopDescriptionArticle = styled.div`
  color: #676767;
  font-size: 14px;
  font-weight: 600;
  padding: 0px 0px 30px 0px;

  @media ${breakPoints.mobile} {
    padding: 10px 0px;
    font-size: 10px;
  }
`;

export const PriceArticle = styled.div`
  padding: 0px 0px 30px 0px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const PriceArticleMedia = styled.div`
  padding: 0px 0px 30px 0px;
  display: none;
  @media ${breakPoints.mobile} {
    display: flex;
    align-items: flex-end;
    padding: 0px 0px 20px 0px;
  }
`;

export const OriginalPriceArticle = styled.div`
  color: #aeaeae;
  font-size: 20px;
  font-weight: 500;
  text-decoration: line-through;
`;
export const OriginalPriceArticleMedia = styled.div`
  color: #aeaeae;
  font-size: 10px;
  font-weight: 500;
  text-decoration: line-through;
  line-height: 20px;
`;

export const DiscountedPriceSection = styled.div`
  display: flex;
`;
export const DiscountedPriceSectionMedia = styled.div`
  display: flex;

  padding: 0px 5px;
`;

export const DiscountedRate = styled.div`
  color: #ff6e30;
  font-weight: 700;
  font-size: 20px;
`;
export const DiscountedRateMedia = styled.div`
  color: #ff6e30;
  font-weight: 700;
  font-size: 14px;
`;

export const DiscountedPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const DiscountedPriceMedia = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const DiscountedPriceWon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;
export const DiscountedPriceWonMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 10px;
  font-weight: 600;
  line-height: 20px;
  padding: 0px 0px 0px 2px;
`;

export const CountButtonArticle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 2px solid #d8d8d8;
  @media ${breakPoints.mobile} {
    width: 90px;
    padding: 8px 10px;
    border-radius: 20px;
  }
`;

export const CountButton = styled.button`
  font-size: 20px;
  color: #aeaeae;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const Count = styled.div`
  color: #676767;
  font-size: 20px;
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const StockArticle = styled.div`
  display: flex;
  padding: 30px 0px;
  color: #676767;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
  }
`;

export const StockText = styled.div`
  font-size: 16px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const GuideMessageSection = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #676767;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const LeftBottomInfoArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  border-bottom: 1px solid #dadada;
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
  }
`;

export const ProductSmallSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailProductTitleSection = styled.div`
  font-size: 20px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const ProductSmallTitleArticle = styled.div``;

export const ProductSmallContents = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #676767;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const ProductSmallContentsArticle = styled.div``;

export const DetailProductInfoSection = styled.div`
  font-size: 14px;
  font-weight: 500;

  padding: 20px 0px 0px 0px;
  @media ${breakPoints.mobile} {
    padding: 10px 0px 0px 0px;
  }
`;

export const MapSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MapTitleArticle = styled.div`
  padding: 40px 0px;
  font-size: 20px;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
  }
`;

export const MapArticle = styled.div`
  width: 100%;
  height: 430px;

  border-radius: 20px;
  background-color: red;
  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const ButtonDiv = styled.div`
  padding: 40px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    padding: 20px 0px 0px 0px;
  }
`;

export const Button = styled.div`
  padding: 7px 40px;
  font-size: 16px;
  font-weight: 700;
  color: #7b7b7b;
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border: 2px solid #ff9a31;
    color: #ff9a31;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
    padding: 9px 29px;
    border-radius: 8px;
  }
`;

export const ShopBuyBtnSection = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: flex;
    position: fixed;
    top: 350px;

    left: 290px;

    z-index: 100;
  }
`;

export const ShopBuyBtn = styled.img`
  width: 50px;
  height: 50px;
`;

export const MainRightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 386px;
  height: 484px;
  border-radius: 20px;
  position: sticky;
  top: 0px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    display: ${(props: IBuyButton) => (props.isBuyBtn ? "flex" : "none")};
    width: 320px;
    height: 338px;
    padding: 30px;
    border-radius: 20px;
    position: fixed;
    z-index: 100;
    top: 70px;
  }
`;
export const RightTitleArticle = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 0px 0px 40px 0px;
  @media ${breakPoints.mobile} {
    font-size: 18px;
    padding: 0px 0px 30px 0px;
  }
`;

export const RightText = styled.div`
  font-size: 16px;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const UserAmountPoint = styled.div`
  font-size: 20px;
  color: #ff9a31;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 25px 0px;
  @media ${breakPoints.mobile} {
    padding: 0px 0px 10px 0px;
  }
`;

export const PriceText = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;
export const AmountText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #676767;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const AmountPoint = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ff6e30;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const AmountPointDefault = styled.div`
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const RemainPoint = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ff9a31;
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const RemainPointDefault = styled.div`
  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const UserNameSection = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #ff9a31;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const BuyButonSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonImage = styled.img`
  width: 30px;
  height: 24px;
  padding: 0px 6px 0px 0px;
  @media ${breakPoints.mobile} {
    width: 24px;
    height: 18px;
    padding: 0px 5px 0px 0px;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 147px;
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ${(props: IBuyButton) =>
    props.amountPoint === 0
      ? "background: #AEAEAE"
      : "background: linear-gradient(0.25turn, #ff6e30, #ffa230)"};
`;
export const ChargeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 161px;
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(0.25turn, #ff6e30, #ffa230);
  @media ${breakPoints.mobile} {
    font-size: 12px;
    width: 147px;
  }
`;
