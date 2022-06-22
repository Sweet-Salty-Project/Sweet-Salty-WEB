import * as S from "./filter.styles";
import LocationFilterPage from "./LocationFilter/LocationFilter";
import MenuFilterPage from "./MenuFilter/MenuFilter";
import MoodFilterPage from "./MoodFilter/MoodFilter";

export default function FilterPresenter(props: any) {
  return (
    <>
      {props.isOpen ? (
        <S.Wrapper>
          <S.FilterBox>
            <S.FilterTitle>지역</S.FilterTitle>
            <S.TagBox>원하는 지역을 선택하세요.(서울특별시 한정)</S.TagBox>
          </S.FilterBox>

          <S.FilterBoxLine>
            <S.FilterTitle>메뉴</S.FilterTitle>
            <S.TagBox>원하는 메뉴 유형을 선택하세요.</S.TagBox>
          </S.FilterBoxLine>

          <S.FilterBox>
            <S.FilterTitle>분위기</S.FilterTitle>
            <S.TagBox>원하는 분위기 유형을 선택하세요.</S.TagBox>
          </S.FilterBox>
          <S.FilerIcon
            onClick={props.onClickFilterOpen}
            src="/images/filter.png"
          />
          <S.MobileFiler>
          <S.MobileFilerIcon
            onClick={props.onClickFilterOpen}
            src="/images/moblieFilter.png"
          /></S.MobileFiler>
        </S.Wrapper>
      ) : (
        <S.OpenFilter>
          <S.OpenFilterBox>
            <S.FilterTitle>지역</S.FilterTitle>
            <S.OpenTagBox>
              <LocationFilterPage
                locationHashTag={props.locationHashTag}
                setLocationHashTag={props.setLocationHashTag}
                locationTagCheckList={props.locationTagCheckList}
                setLocationTagCheckList={props.setLocationTagCheckList}
              />
            </S.OpenTagBox>
          </S.OpenFilterBox>

          <S.HorizontalLine />

          <S.OpenFilterBox>
            <S.FilterTitle>메뉴</S.FilterTitle>
            <S.OpenTagBox>
              <MenuFilterPage
                menuHashTag={props.menuHashTag}
                setMenuHashTag={props.setMenuHashTag}
                menuTagCheckList={props.menuTagCheckList}
                setMenuTagCheckList={props.setMenuTagCheckList}
              />
            </S.OpenTagBox>
          </S.OpenFilterBox>

          <S.HorizontalLine />

          <S.OpenFilterBox>
            <S.FilterTitle>분위기</S.FilterTitle>
            <S.OpenTagBox>
              <MoodFilterPage
                moodHashTag={props.moodHashTag}
                setMoodHashTag={props.setMoodHashTag}
              />
            </S.OpenTagBox>
          </S.OpenFilterBox>

          <S.ButtonBox>
            <S.Button onClick={props.onClickReset}>다시하기</S.Button>
            <S.Button onClick={props.onClickFilterApply}>적용하기</S.Button>
          </S.ButtonBox>
        </S.OpenFilter>
      )}
    </>
  );
}
