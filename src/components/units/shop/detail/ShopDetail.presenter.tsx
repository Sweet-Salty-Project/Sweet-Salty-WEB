import DetailMapPage from "../../../commons/detailMap/DetailMap.index";
import { PointComma } from "../../../commons/libraries/point";
import * as S from "./ShopDetail.styled";

export default function ShopDetailPresenterPage(props: any) {
  return (
    <S.Page>
      <S.TitleSection>
        <S.TitleFont>단짝 스토어 &nbsp; &gt; &nbsp;</S.TitleFont>
        <S.TitleFont>
          {props.fetchShop?.fetchShop.shopProductName} ㅣ{" "}
          {props.fetchShop?.fetchShop.shopSeller}
        </S.TitleFont>
      </S.TitleSection>
      <S.Main>
        <S.Padding>
          <S.MainSection>
            <S.MainLeftSection>
              <S.LeftTopInfoArticle>
                <S.Thumbnail>
                  <S.ThumbnailTitle>일일 특가</S.ThumbnailTitle>
                  <S.GifticonDiv>
                    <S.GifticonImg
                      style={{
                        backgroundImage: `url(${props.fetchShop?.fetchShop.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                        overflow: "hidden",
                        backgroundPosition: "center",
                      }}
                    ></S.GifticonImg>
                    <S.GifticonLogoDiv>
                      <S.GifiticonLogo src="/images/storelogo.png"></S.GifiticonLogo>
                    </S.GifticonLogoDiv>
                  </S.GifticonDiv>
                </S.Thumbnail>

                <S.InfoSection>
                  <S.ShopNameArticle>
                    {props.fetchShop?.fetchShop.shopProductName} ㅣ{" "}
                    {props.fetchShop?.fetchShop.shopSeller} 식사권
                  </S.ShopNameArticle>

                  <S.ShopDescriptionArticle>
                    {props.fetchShop?.fetchShop.shopDescription}
                  </S.ShopDescriptionArticle>

                  <S.PriceArticle>
                    <S.OriginalPriceArticle>
                      {PointComma(props.fetchShop?.fetchShop.shopOriginalPrice)}
                      원
                    </S.OriginalPriceArticle>
                    <S.DiscountedPriceSection>
                      <S.DiscountedRate>
                        {props.fetchShop?.fetchShop.shopDisCount}%
                      </S.DiscountedRate>
                      <S.DiscountedPrice>
                        {PointComma(
                          props.fetchShop?.fetchShop.shopDisCountPrice
                        )}
                      </S.DiscountedPrice>
                      <S.DiscountedPriceWon>원</S.DiscountedPriceWon>
                    </S.DiscountedPriceSection>
                  </S.PriceArticle>

                  <S.PriceArticleMedia>
                    <S.DiscountedRateMedia>
                      {props.fetchShop?.fetchShop.shopDisCount}%
                    </S.DiscountedRateMedia>
                    <S.DiscountedPriceSectionMedia>
                      <S.DiscountedPriceMedia>
                        {PointComma(
                          props.fetchShop?.fetchShop.shopDisCountPrice
                        )}
                      </S.DiscountedPriceMedia>
                      <S.DiscountedPriceWonMedia>원</S.DiscountedPriceWonMedia>
                    </S.DiscountedPriceSectionMedia>
                    <S.OriginalPriceArticleMedia>
                      {PointComma(props.fetchShop?.fetchShop.shopOriginalPrice)}
                      원
                    </S.OriginalPriceArticleMedia>
                  </S.PriceArticleMedia>

                  <S.CountButtonArticle>
                    <S.CountButton onClick={props.buyAmountMinus}>
                      -
                    </S.CountButton>
                    <S.Count>{props.buyAmount}</S.Count>
                    <S.CountButton onClick={props.buyAmountPlus}>
                      +
                    </S.CountButton>
                  </S.CountButtonArticle>

                  <S.StockArticle>
                    <S.StockText>재고 현황 :&nbsp;</S.StockText>
                    <S.StockText>
                      {PointComma(props.fetchShop?.fetchShop.shopStock)}개
                    </S.StockText>
                  </S.StockArticle>
                  <S.GuideMessageSection>
                    본 식사권은 구매 후 마이페이지의 포인트 상세 내역에서
                    바코드를 받을 수 있습니다.
                  </S.GuideMessageSection>
                </S.InfoSection>
              </S.LeftTopInfoArticle>

              <S.LeftBottomInfoArticle>
                <div>
                  <S.ProductSmallSection>
                    <S.DetailProductTitleSection>
                      이용안내
                    </S.DetailProductTitleSection>

                    <S.ProductSmallContentsArticle>
                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;사용처&#93;{" "}
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 해당 지역 음식점
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>

                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;유의사항&#93;
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 본 식사권은 가게에서 이용 시 통신사 할인 및 적립이
                          불가능합니다.
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 본 식사권은 기타 할인쿠폰과 같이 사용이
                          불가능합니다.
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 본 식사권은 현금과 교환되지 않습니다.
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 사용 후 잔액은 상품권 유효기간 내 사용 가능합니다.
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>

                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;결제방법&#93;
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 메뉴 바코드 스캔 &gt; 식사권 바코드 스캔 &gt;
                          결제완료
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 바코드 인식이 안될 경우, 바코드 하단의 번호를
                          입력하여 결제 가능합니다.
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>

                      <S.DetailProductInfoSection>
                        <S.ProductSmallContents>
                          &#91;이용 관련 문의처&#93;
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          - 단짠맛집 고객센터: 010-0000-0000
                        </S.ProductSmallContents>
                        <S.ProductSmallContents>
                          &#8251;운영시간 : 평일 10:00 ~ 18:00 &#40;주말 및
                          공휴일 상담 불가&#41;
                        </S.ProductSmallContents>
                      </S.DetailProductInfoSection>
                    </S.ProductSmallContentsArticle>
                  </S.ProductSmallSection>
                </div>
              </S.LeftBottomInfoArticle>

              <S.MapSection>
                <S.MapTitleArticle>이용 식당 위치</S.MapTitleArticle>
                <S.MapArticle>
                  {props.fetchShop?.fetchShop.place.lat.length ? (
                    <DetailMapPage address={props?.fetchShop?.fetchShop} />
                  ) : (
                    <div>잠시만요</div>
                  )}
                </S.MapArticle>
              </S.MapSection>

              <S.ButtonDiv>
                <S.Button onClick={props.onClickList}>목록으로</S.Button>
                <S.Button onClick={props.onClickEdit}>수정하기</S.Button>
              </S.ButtonDiv>
            </S.MainLeftSection>
          </S.MainSection>
        </S.Padding>

        <S.MainRightSection isBuyBtn={props.isBuyBtn}>
          <S.RightTitleArticle>포인트 결제 상세</S.RightTitleArticle>
          <div>
            <S.RightSection>
              <div>
                <S.UserNameSection>
                  <S.UserName>
                    {props.fetchUserLoggedIn?.fetchUserLoggedIn.userNickname}
                    &nbsp;
                  </S.UserName>
                  <S.RightText>단짝님의</S.RightText>
                </S.UserNameSection>
                <S.RightText>현재 보유 포인트</S.RightText>
              </div>
              <S.UserAmountPoint>
                {PointComma(
                  props.fetchUserLoggedIn?.fetchUserLoggedIn.userPoint
                )}
              </S.UserAmountPoint>
            </S.RightSection>
            <S.RightSection>
              <S.RightText>식사권 금액</S.RightText>
              <S.PriceText>
                {PointComma(props.fetchShop?.fetchShop.shopDisCountPrice)}
              </S.PriceText>
            </S.RightSection>
            <S.RightSection>
              <S.RightText>선택한 수량</S.RightText>
              <S.AmountText>{PointComma(props.buyAmount)} 개</S.AmountText>
            </S.RightSection>
            <S.RightSection>
              <S.RightText>차감될 포인트</S.RightText>
              <S.AmountPoint>
                {isNaN(props.amountPoint) ? (
                  <S.AmountPointDefault>
                    수량을 선택해주세요
                  </S.AmountPointDefault>
                ) : props.amountPoint === 0 ? (
                  <S.AmountPointDefault>
                    수량을 선택해주세요
                  </S.AmountPointDefault>
                ) : (
                  PointComma(props.amountPoint)
                )}
              </S.AmountPoint>
            </S.RightSection>
            <S.RightSection>
              {props.remainPoint < 0 ? (
                <S.RightText>필요한 포인트</S.RightText>
              ) : (
                <S.RightText>잔여 포인트</S.RightText>
              )}
              <S.RemainPoint>
                {props.buyAmount === 0 ? (
                  <S.RemainPointDefault>
                    수량을 선택해주세요
                  </S.RemainPointDefault>
                ) : props.remainPoint > 0 ? (
                  PointComma(props.remainPoint)
                ) : (
                  PointComma(
                    props.amountPoint -
                      props.fetchUserLoggedIn?.fetchUserLoggedIn.userPoint
                  )
                )}
              </S.RemainPoint>
            </S.RightSection>

            <S.BuyButonSection>
              {props.remainPoint >= 0 && props.buyAmount !== 0 ? (
                <S.BuyButton
                  amountPoint={props.amountPoint}
                  disabled={props.amountPoint === 0}
                  onClick={props.onClickPay}
                >
                  <S.ButtonImage src="/images/Bag.png" />
                  구매하기
                </S.BuyButton>
              ) : (
                <S.ChargeButton onClick={props.chargePoint}>
                  <S.ButtonImage src="/images/Point.png" />
                  포인트 충전하기
                </S.ChargeButton>
              )}
            </S.BuyButonSection>
          </div>
        </S.MainRightSection>
      </S.Main>
      <S.ShopBuyBtnSection onClick={props.onClickBuyBtn}>
        <S.ShopBuyBtn src="/images/shopBuyBtn.png" />
      </S.ShopBuyBtnSection>
    </S.Page>
  );
}
