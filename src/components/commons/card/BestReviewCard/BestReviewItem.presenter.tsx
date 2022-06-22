import * as S from "./BestReviewItem.styles";

export default function BestReviewItemPresenterPage(props: any) {
  return (
    <S.ItemMainDiv onClick={props.onClickDetailPage} id={props.id}>
      <S.ItemImg
        style={{
          backgroundImage: `url(https://storage.googleapis.com/${props.fetchBestDetailData?.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <S.ItemRankingDiv>
          {props.idx === 0 && (
            <S.ItemRanking src="/images/first.png"></S.ItemRanking>
          )}
          {props.idx === 1 && (
            <S.ItemRanking src="/images/second.png"></S.ItemRanking>
          )}
          {props.idx === 2 && (
            <S.ItemRanking src="/images/third.png"></S.ItemRanking>
          )}
          {props.fetchBestDetailData?.boardSubject === "TASTER" && (
            <S.ItemTitle>시식단 리뷰</S.ItemTitle>
          )}
          {props.fetchBestDetailData?.boardSubject === "REVIEW" && (
            <S.ItemTitle>단짠 리뷰</S.ItemTitle>
          )}
          {props.fetchBestDetailData?.boardSubject === "REQUEST" && (
            <S.ItemTitle>가주세요!</S.ItemTitle>
          )}
        </S.ItemRankingDiv>
      </S.ItemImg>
      <S.ItemInfoDiv>
        <S.ItemInfoTopDiv>
            <S.ItemInfoTitleDiv>
              {props.fetchBestDetailData?.boardTitle}
            </S.ItemInfoTitleDiv>
        </S.ItemInfoTopDiv>

        <S.ItemInfoMidDiv>
          <S.MidStoreInfoDiv>
            <S.ItemInfoStoreName>
              {props.fetchBestDetailData?.place.placeName}
            </S.ItemInfoStoreName>
            <S.ItemInfoBarDiv>|</S.ItemInfoBarDiv>
            <S.ItemInfoLocationDiv>
              {props.fetchBestDetailData?.place.placeAddress.split(" ")[1]}
            </S.ItemInfoLocationDiv>
          </S.MidStoreInfoDiv>
          <S.ItemInfoUserDiv>
            {props.fetchBestDetailData?.boardWriter} 단짝님
          </S.ItemInfoUserDiv>
        </S.ItemInfoMidDiv>

        <S.ItemInfoBottomDiv>
          <S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/likeCount.png" alt="하트" />
              <S.ItemInfoCountDiv>
                {props.fetchBestDetailData?.boardLikeCount}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
            <S.ItemInfoLeftDiv>
              <S.ItemInfoImg src="/images/viewCount.png" alt="뷰" />
              <S.ItemInfoCountDiv>
                {props.fetchBestDetailData?.boardHit}
              </S.ItemInfoCountDiv>
            </S.ItemInfoLeftDiv>
          </S.ItemInfoLeftDiv>
          <S.IteminfoDateDiv>
            {props.fetchBestDetailData?.createAt.slice(0, 10)}
          </S.IteminfoDateDiv>
        </S.ItemInfoBottomDiv>
      </S.ItemInfoDiv>
    </S.ItemMainDiv>
  );
}
