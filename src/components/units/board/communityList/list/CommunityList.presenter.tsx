import * as S from "./CommunityList.styled";
import InfiniteScroll from "react-infinite-scroller";
import ReviewMenuPage from "../../../../commons/reviewMenu";
import TopButton from "../../../../commons/topbutton";
import WriteBtnContainerPage from "../../../../commons/writeBtn/WriteBtn.container";
import CardItemContainerPage from "../../../../commons/card/CardItem/CardItem.container";

export default function CommunityListPresenterPage(props: any) {
  return (
    <S.CommonReviewWrapper>
      <S.Title>전체 게시판</S.Title>
      <S.CommonReviewOutBox>
        <S.SearchbarBox>
          <WriteBtnContainerPage
            communityCheckPage={props.communityCheckPage}
          />
        </S.SearchbarBox>
        <ReviewMenuPage />

        <S.CommonReviewInnerBox>
          <div style={{ height: "auto", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadMore}
              hasMore={false}
              useWindow={false}
            >
              <S.ReviewList>
                {props.fetchBoardsData?.fetchBoards.map((el: any) => (
                  <CardItemContainerPage
                    key={el.boardId}
                    el={el}
                    id={el.boardId}
                  />
                ))}
              </S.ReviewList>
            </InfiniteScroll>
          </div>
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
