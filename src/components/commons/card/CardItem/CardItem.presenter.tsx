import * as S from "./CardItem.styles";

export default function CardItemPresenterPage(props: any) {
  return (
    <S.ItemMainDiv onClick={props.onClickDetailPage} id={props.id}>
      <S.ItemImg
        style={{
          backgroundImage: `url(https://storage.googleapis.com/${props.fetchBoardsCategoryData?.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {props.fetchBoardsCategoryData?.boardSubject === "TASTER" && (
          <S.ItemTitle>시식단 리뷰</S.ItemTitle>
        )}
        {props.fetchBoardsCategoryData?.boardSubject === "REVIEW" && (
          <S.ItemTitle>단짠 리뷰</S.ItemTitle>
        )}
        {props.fetchBoardsCategoryData?.boardSubject === "REQUEST" && (
          <S.ItemTitle>가주세요!</S.ItemTitle>
        )}
        {props.fetchBoardsCategoryData?.boardSubject === "VISITED" && (
          <S.ItemTitle>가봤어요!</S.ItemTitle>
        )}
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoTitleDiv>
              {props.fetchBoardsCategoryData?.boardTitle}
            </S.ItemInfoTitleDiv>
          </S.ItemInfoLeftDiv>
        </S.ItemInfoTopDiv>

        <S.ItemInfoMidDiv>
          <S.MidStoreInfoDiv>
            <S.ItemInfoStoreName>
              {props.fetchBoardsCategoryData?.place?.placeName}
            </S.ItemInfoStoreName>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>
              {props.fetchBoardsCategoryData?.place?.placeAddress.split(" ")[1]}
            </S.ItemInfoLocationDiv>
          </S.MidStoreInfoDiv>
          <S.ItemInfoUserDiv>
            {props.fetchBoardsCategoryData?.boardWriter} 단짝님
          </S.ItemInfoUserDiv>
        </S.ItemInfoMidDiv>

        <S.ItemInfoBottomDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/likeCount.png" alt="하트" />
              <S.ItemInfoCountDiv>
                {props.fetchBoardsCategoryData?.boardLikeCount}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/viewCount.png" alt="뷰" />
              <S.ItemInfoCountDiv>
                {props.fetchBoardsCategoryData?.boardHit}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
          </S.ItemInfoLeftDiv>
          <S.IteminfoDateDiv>
            {props.fetchBoardsCategoryData?.createAt?.slice(0, 10)}
          </S.IteminfoDateDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
