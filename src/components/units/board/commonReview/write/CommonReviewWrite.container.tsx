import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CommonReviewWritePresenter from "./CommonReviewWrite.presenter";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD,
  CREATE_BOARD_REQ,
  CREATE_BOARD_RES,
  UPDATE_BOARD,
} from "./CommonReviewWrite.queries";
import { Editor } from "@toast-ui/react-editor";
export default function CommonReviewWriteContainer(props: any) {
  const editorRef = useRef<Editor>(null);
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [createBoardReq] = useMutation(CREATE_BOARD_REQ);
  const [createBoardRes] = useMutation(CREATE_BOARD_RES);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [subCategoryName, setSubCategoryName] = useState(
    String(props.checkPage)
  );
  const [boardTagMenu, setBoardTagMenu] = useState();
  const [moodHashTag, setMoodHashTag] = useState([]);
  const [address, setAddress] = useState({
    place_name: "",
    road_address_name: "",
    place_url: "",
    x: "",
    y: "",
  });
  const [cancelIsOpen, cancelSetIsOpen] = useState(false);
  const [registerIsOpen, registerSetIsOpen] = useState(false);
  const [resultId, setResultId] = useState("");
  const [menuTagData, setMenuTagData] = useState([
    { key: "0", value: "비건", checked: false, index: 0 },
    { key: "1", value: "아시안푸드", checked: false, index: 1 },
    { key: "2", value: "양식", checked: false, index: 2 },
    { key: "3", value: "일식", checked: false, index: 3 },
    { key: "4", value: "중식", checked: false, index: 4 },
    { key: "5", value: "한식", checked: false, index: 5 },
    { key: "6", value: "할랄", checked: false, index: 6 },
  ]);
  const [moodTagData, setMoodTagData] = useState([
    { key: "0", value: "가족들과", checked: false, index: 0 },
    { key: "1", value: "동창회자리로좋은", checked: false, index: 1 },
    { key: "2", value: "부모님과함께", checked: false, index: 2 },
    { key: "3", value: "소개팅", checked: false, index: 3 },
    { key: "4", value: "술자리로좋은", checked: false, index: 4 },
    { key: "5", value: "썸타는사람과", checked: false, index: 5 },
    { key: "6", value: "애인과함께", checked: false, index: 6 },
    { key: "7", value: "친구와함께", checked: false, index: 7 },
    { key: "8", value: "혼밥하기좋은", checked: false, index: 8 },
    { key: "9", value: "혼술하기좋은", checked: false, index: 9 },
    { key: "10", value: "회식자리로좋은", checked: false, index: 10 },
  ]);

  const [categoryData, setCategoryData] = useState([
    { key: "0", value: "REVIEW", name: "단짠리뷰", checked: false, index: 0 },
    {
      key: "1",
      value: "TASTER",
      name: "시식단 리뷰",
      checked: false,
      index: 1,
    },
    {
      key: "2",
      value: "REQUEST",
      name: "가주세요",
      checked: false,
      index: 2,
    },
  ]);
  useEffect(() => {
    const defaultMoodList = [];
    if (props.updateData) {
      // 음식분류
      for (let i = 0; i < menuTagData.length; i++) {
        if (
          menuTagData[i].value ===
          props.updateData?.boardSides[0]?.boardTags.boardTagName
        ) {
          menuTagData[i].checked = true;
        }
      }
      setBoardTagMenu(props.updateData?.boardSides[0]?.boardTags.boardTagName);
      // 분위기
      for (let i = 2; i < props.updateData.boardSides.length; i++) {
        if (
          props.updateData.boardSides[i].boardTags.boardTagRefName === "MOOD"
        ) {
          defaultMoodList.push(
            props.updateData?.boardSides[i].boardTags.boardTagName
          );
        }
      }
      for (let i = 0; i < moodTagData.length; i++) {
        if (defaultMoodList.includes(moodTagData[i].value)) {
          moodTagData[i].checked = true;
        }
      }
      setMoodHashTag(defaultMoodList);
    }
  }, [props.updateData]);
  // console.log(moodHashTag,"해시")
  // console.log(moodTagData,"무테데")
  const onChangeCheckMenu = (el: any) => (event: any) => {
    const select = menuTagData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setMenuTagData(select);

    setBoardTagMenu(el.value);
  };

  const onChangeCheckMood = (checked: any, item: any) => (event: any) => {
    if (checked) {
      setMoodHashTag([...moodHashTag, item]);
    } else if (!checked) {
      setMoodHashTag(moodHashTag.filter((el) => el !== item));
    }
    if (checked && moodHashTag.length > 2) {
      alert("분위기는 최대 3개까지 선택 가능합니다.");
      setMoodHashTag(moodHashTag.filter((el) => el !== item));
      event.target.checked = false;
    }
  };

  const onChangeCheckCategory = (el: any) => (event: any) => {
    const select = categoryData.map((el, idx) => {
      return { ...el, checked: idx === Number(event.target.id) };
    });
    setCategoryData(select);
    setSubCategoryName(el.value);
  };

  const { register, handleSubmit, setValue, getValues, formState } = useForm({
    // resolver: yupResolver(props.isEdit ? nonSchema : schema),
    mode: "onChange",
  });

  const onClickCancel = () => {
    cancelSetIsOpen((prev) => !prev);
  };
  const onClickReg = async (data: any) => {
    const contentsvalue = editorRef.current?.getInstance().getMarkdown();
    if (!address.road_address_name.split(" ")[0].includes("서울")) {
      alert("지금은 서울에 있는 맛집의 리뷰만 등록이 가능해요!");
      return;
    }
    if (subCategoryName === "REVIEW" || subCategoryName === "TASTER") {
      if (moodHashTag.length > 3) {
        alert("분위기는 3개까지 선택이 가능합니다.");
      } else {
        try {
          const result = await createBoard({
            variables: {
              createBoardInput: {
                boardTitle: data.boardTitle,
                boardSugar: data.boardSugar,
                boardSalt: data.boardSalt,
                boardContents: contentsvalue,
                subCategoryName,
                place: {
                  placeName: address.place_name,
                  placeAddress: address.road_address_name,
                  placeUrl: address.place_url,
                  lat: address.x,
                  lng: address.y,
                },
                tags: [
                  boardTagMenu,
                  ...moodHashTag,
                  address.road_address_name.split(" ")[1],
                ],
              },
            },
          });
          setResultId(result.data?.createBoard.boardId);
          registerSetIsOpen((prev) => !prev);
        } catch (error: any) {
          alert(error.message);
        }
      }
    } else if (subCategoryName === "REQUEST") {
      try {
        const result = await createBoardReq({
          variables: {
            createBoardReqInput: {
              boardTitle: data.boardTitle,
              boardContents: contentsvalue,
              subCategoryName,
              place: {
                placeName: address.place_name,
                placeAddress: address.road_address_name,
                placeUrl: address.place_url,
                lat: address.x,
                lng: address.y,
              },
            },
          },
        });
        setResultId(result.data?.createBoard.boardId);
        registerSetIsOpen((prev) => !prev);
      } catch (error: any) {
        alert(error.message);
      }
    } else if (subCategoryName === "VISITED") {
      try {
        const result = await createBoardRes({
          variables: {
            reqBoardId: props.wishId,
            createBoardInput: {
              boardTitle: data.boardTitle,
              boardSugar: data.boardSugar,
              boardSalt: data.boardSalt,
              boardContents: contentsvalue,
              subCategoryName,
              place: {
                placeName: address.place_name,
                placeAddress: address.road_address_name,
                placeUrl: address.place_url,
                lat: address.x,
                lng: address.y,
              },
            },
            boardTagsInput: {
              boardTagMenu,
              boardTagMood: moodHashTag,
              boardTagRegion: [address.road_address_name.split(" ")[1]],
            },
          },
        });
        setResultId(result.data?.createBoardRes.boardId);
        registerSetIsOpen((prev) => !prev);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const onClickSuccess = () => {
    if (
      subCategoryName === "REVIEW" ||
      subCategoryName === "TASTER" ||
      subCategoryName === "VISITED"
    ) {
      router.push(`/reviews/commonReview/${resultId}`);
    } else if (subCategoryName === "REQUEST") {
      router.push(`/reviews/wish/${resultId}`);
    }
  };

  const onClickUpdate = async (data: any) => {
    const contentsvalue = editorRef.current?.getInstance().getMarkdown();
    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          updateBoardInput: {
            boardTitle: data.boardTitle
              ? data.boardTitle
              : props.updateData?.boardTitle,
            boardSugar: data.boardSugar
              ? data.boardSugar
              : props.updateData?.boardSugar,
            boardSalt: data.boardSalt
              ? data.boardSalt
              : props.updateData?.boardSalt,
            boardContents: contentsvalue || props.updateData?.boardContents,
            subCategoryName: props.updateData?.subCategoryName,
            tags: [
              boardTagMenu,
              ...moodHashTag,
              props.updateData?.place.placeAddress.split(" ")[1],
            ],
            // props.updateData?.tags,
            place: {
              placeName: props.updateData?.place.placeName,
              placeAddress: props.updateData?.place.placeAddress,
              placeUrl: props.updateData?.place.placeUrl,
              lat: props.updateData?.place.lat,
              lng: props.updateData?.place.lng,
            },
          },
        },
      });
      alert("수정 완료");
      router.push(`/reviews/commonReview/${router.query.boardId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <CommonReviewWritePresenter
      onClickCancel={onClickCancel}
      moodHashTag={moodHashTag}
      setMoodHashTag={setMoodHashTag}
      getValues={getValues}
      setValue={setValue}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      setAddress={setAddress}
      menuTagData={menuTagData}
      setMenuTagData={setMenuTagData}
      onChangeCheckMenu={onChangeCheckMenu}
      moodTagData={moodTagData}
      setMoodTagData={setMoodTagData}
      onChangeCheckMood={onChangeCheckMood}
      categoryData={categoryData}
      setCategoryData={setCategoryData}
      onChangeCheckCategory={onChangeCheckCategory}
      checkPage={props.checkPage}
      communityCheckPage={props.communityCheckPage}
      onClickReg={onClickReg}
      onClickUpdate={onClickUpdate}
      subCategoryName={subCategoryName}
      updateData={props.updateData}
      isEdit={props.isEdit}
      cancelIsOpen={cancelIsOpen}
      cancelSetIsOpen={cancelSetIsOpen}
      registerIsOpen={registerIsOpen}
      registerSetIsOpen={registerSetIsOpen}
      onClickSuccess={onClickSuccess}
      editorRef={editorRef}
      setSubCategoryName={setSubCategoryName}
    />
  );
}
