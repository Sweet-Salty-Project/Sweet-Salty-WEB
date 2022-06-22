import ReviewMenuPage from "../../../../commons/reviewMenu";
import TopButton from "../../../../commons/topbutton";
import * as S from "./TesterReviewList.styled";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import SearchCategoryItemContainerPage from "../../../../commons/card/CategorySearchReviewCard/CategorySearchReviewCard.container";
import FilterContainer from "../../../../commons/filter/filter.container";
import WriteBtnContainerPage from "../../../../commons/writeBtn/WriteBtn.container";
import CardItemContainerPage from "../../../../commons/card/CardItem/CardItem.container";
import BestReviewItemContainerPage from "../../../../commons/card/BestReviewCard/BestReviewItem.container";
export default function TesterReviewPresenterPage(props: any) {
  const dataForCategory = props.fetchBoardsCategoryData?.fetchBoardCategoryPick;
  const dataForTags = props.fetchBoardWithTagData?.fetchBoardWithTags.hits.hits;

  return (
    <S.CommonReviewWrapper>
      <S.Title>시식단 게시판</S.Title>
      <S.CommonReviewOutBox>
        <S.SearchbarBox>
          <WriteBtnContainerPage checkPage={props.checkPage} />
        </S.SearchbarBox>

        <ReviewMenuPage />

        <S.CommonReviewInnerBox>
          <FilterContainer setSearch={props.setSearch} search={props.search} />

          <S.TopThreeBox>
            <S.TopThreeTitle>
              <S.TopDiv>실시간</S.TopDiv>
              <S.BottomDiv>Top 3</S.BottomDiv>
            </S.TopThreeTitle>
            <S.BestContentsMediaTitleArticle>
              실시간 TOP 3
            </S.BestContentsMediaTitleArticle>
            <S.ReviewSection>
              {props.fetchBoardBestData?.fetchBoardBest.map(
                (el: any, idx: any) => (
                  <BestReviewItemContainerPage
                    key={uuidv4()}
                    el={el}
                    id={el.boardId}
                    idx={idx}
                  />
                )
              )}
            </S.ReviewSection>
          </S.TopThreeBox>

          <S.CommonReviewHr />
          {props.search?.length ? (
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.filterDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.ReviewList>
                  {dataForTags?.map((el: any) => (
                    <SearchCategoryItemContainerPage
                      el={el._source}
                      key={uuidv4()}
                      id={el._source.boardid}
                    />
                  ))}
                </S.ReviewList>
              </InfiniteScroll>
            </div>
          ) : (
            <div style={{ height: "auto", overflow: "auto" }}>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.categoryDataLoadMore}
                hasMore={false}
                useWindow={false}
              >
                <S.ReviewList>
                  {dataForCategory?.map((el: any) => (
                    <CardItemContainerPage
                      key={uuidv4()}
                      el={el}
                      id={el.boardId}
                    />
                  ))}
                </S.ReviewList>
              </InfiniteScroll>
            </div>
          )}
        </S.CommonReviewInnerBox>
      </S.CommonReviewOutBox>
      <S.TopButtonArticle>
        <TopButton />
      </S.TopButtonArticle>
    </S.CommonReviewWrapper>
  );
}
