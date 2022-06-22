import TopButton from "../../commons/topbutton";
import * as S from "./MainPage.styles";
import { v4 as uuidv4 } from "uuid";
import StoreItemContainerPage from "../../commons/card/StoreCard/StoreItem.container";
import MainReviewItemContainerPage from "../../commons/card/MainReviewCard/ReviewItem.container";
import CardItemPresenterPage from "../../commons/card/CardItem/CardItem.presenter";
export default function MainpagePresenter(props: any) {
  return (
    <S.Page>
    <S.MainPageWrapper>
      <S.MainPageOutBox>
        <S.ReviewMenuBox>
          {props.categoryData.map((el: any) => (
            <label className="checkbox" key={el.key}>
              <input
                type="checkbox"
                id={el.id}
                onChange={(e) => {
                  props.onChangeCategory(e.target.checked, e.target.id);
                }}
                checked={props.category === el.id}
              />
              <span className="checkbox_text">{el.title}</span>
            </label>
          ))}
        </S.ReviewMenuBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>
              {props.category === "REVIEW"
                ? "최신 단짠 리뷰"
                : props.category === "REQUEST"
                ? "가주세요! 최신 글"
                : "가봤어요! 최신 글"}
            </S.ReviewTitle>
          </S.ReviewHeader>
          <S.ReviewSection>
            {props.recentBoardsData?.fetchRecentBoards.map((el: any) => (
              <S.CardBoxDiv key={uuidv4()}>
                <MainReviewItemContainerPage
                  subject={el.boardSubject}
                  id={el.boardId}
                  el={el}
                />
              </S.CardBoxDiv>
            ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>광고(시식단) 단짠 리뷰</S.ReviewTitle>
          </S.ReviewHeader>
          <S.ReviewSection>
            {props.recentBoardsTasterData?.fetchRecentBoards.map((el: any) => (
              <S.CardBoxDiv key={uuidv4()}>
                <MainReviewItemContainerPage
                  subject={el.boardSubject}
                  id={el.boardId}
                  el={el}
                />
              </S.CardBoxDiv>
            ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>
      <div>
        <S.MainPageOutBox>
          <S.MainPageInnerBox>
            <S.ReviewHeader>
              <S.ReviewTitle>
                {props.loggedInNickname} 단짝님을 위한 리뷰
              </S.ReviewTitle>
              <S.ReviewArrow></S.ReviewArrow>
            </S.ReviewHeader>
            <S.ReviewSection>
              {!props.loggedInNickname && <CardItemPresenterPage />}
              {props.preferData?.fetchPreferBoards.map((el: any) => (
                <S.CardBoxDiv key={uuidv4()}>
                  <MainReviewItemContainerPage
                    subject={el.boardSubject}
                    id={el.boardId}
                    el={el}
                  />
                </S.CardBoxDiv>
              ))}
            </S.ReviewSection>
          </S.MainPageInnerBox>
          {!props.loggedInNickname && (
            <S.MainPageLoginOutBox>
              <S.MainPageLoginInnerBox>
                <S.MainPageInnerText>
                  단짝님이 선호하는 맛집 리뷰를 보고싶다면?
                </S.MainPageInnerText>
                <S.FlexBox>
                  <S.Login onClick={props.onClickLogin}>로그인</S.Login>
                  <S.P>|</S.P>
                  <S.Signup onClick={props.onClickSignUp}>회원가입</S.Signup>
                </S.FlexBox>
              </S.MainPageLoginInnerBox>
            </S.MainPageLoginOutBox>
          )}
        </S.MainPageOutBox>
      </div>
      <S.MainPageOutBox>
        <S.MainPageInnerBox>
          <S.ReviewHeader>
            <S.ReviewTitle>단짝 스토어</S.ReviewTitle>
            <S.ReviewArrow onClick={props.onClickShopPage}>→</S.ReviewArrow>
          </S.ReviewHeader>
          <S.ReviewSection>
            {props.recentShopData?.realTimeShop.map((el: any) => (
              <S.CardBoxDiv key={uuidv4()}>
                <StoreItemContainerPage id={el.shopId} el={el} />
              </S.CardBoxDiv>
            ))}
          </S.ReviewSection>
        </S.MainPageInnerBox>
      </S.MainPageOutBox>

      <S.TopButtonBox>
        <TopButton />
      </S.TopButtonBox>
    </S.MainPageWrapper>
    </S.Page>
  );
}
