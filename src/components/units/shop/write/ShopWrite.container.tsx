import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ShopWritePresenterPage from "./ShopWrite.presenter";
import { CREATE_SHOP, UPDATE_SHOP, UPLOAD_FILE } from "./ShopWrite.queries";

export default function ShopWriteContainerPage(props: any) {
  const router = useRouter();
  const [createShop] = useMutation(CREATE_SHOP);
  const [updateShop] = useMutation(UPDATE_SHOP);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [address, setAddress] = useState({
    place_name: "",
    road_address_name: "",
    place_url: "",
    x: "",
    y: "",
  });

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const [fileUrls, setFileUrls] = useState("");

  const onClickSubmit = async (data: any) => {
    try {
      await createShop({
        variables: {
          createShopInput: {
            shopProductName: data.menu,
            shopSeller: data.seller,
            shopDisCount: Number(data.discount),
            shopDisCountPrice: Number(data.discountPrice),
            shopOriginalPrice: Number(data.originalPrice),
            shopDescription: data.description,
            shopStock: Number(data.stock),
            thumbnail: String(fileUrls),
            shopUrl: data.pageUrl,
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
      router.push("/shop");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onChangeFile = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const result = await uploadFile({ variables: { file } });
      const urldata = `https://storage.googleapis.com/${result?.data.uploadFile}`;
      setFileUrls(urldata);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setValue("menu", props.fetchShop?.shopProductName);
    setValue("seller", props.fetchShop?.shopSeller);
    setValue("discount", props.fetchShop?.shopDisCount);
    setValue("discountPrice", props.fetchShop?.shopDisCountPrice);
    setValue("originalPrice", props.fetchShop?.shopOriginalPrice);
    setValue("description", props.fetchShop?.shopDescription);
    setValue("stock", props.fetchShop?.shopStock);
    setAddress(props.fetchShop?.place);
  }, []);

  const onClickUpdate = async (data: any) => {
    try {
      await updateShop({
        variables: {
          shopId: String(router.query.shopId),
          updateShopInput: {
            shopProductName: data.menu
              ? data.menu
              : props.fetchShop?.shopProductName,
            shopSeller: data.seller ? data.seller : props.fetchShop?.shopSeller,
            shopDisCount: Number(data.discount)
              ? Number(data.discount)
              : Number(props.fetchShop?.shopDisCount),
            shopDisCountPrice: Number(data.discountPrice)
              ? Number(data.discountPrice)
              : Number(props.fetchShop?.shopDisCountPrice),
            shopOriginalPrice: Number(data.originalPrice)
              ? Number(data.originalPrice)
              : Number(props.fetchShop?.shopOriginalPrice),
            shopDescription: data.description
              ? data.description
              : props.fetchShop?.shopDescription,
            shopStock: Number(data.stock)
              ? Number(data.stock)
              : Number(props.fetchShop?.shopStock),
            shopUrl: data.pageUrl,
          },
        },
      });
      alert("수정완료");
      router.push(`/shop/${router.query.shopId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <ShopWritePresenterPage
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onChangeFile={onChangeFile}
      setAddress={setAddress}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
    />
  );
}
