import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ShopDetailPresenterPage from "./ShopDetail.presenter";
import {
  FETCH_SHOP,
  FETCH_USER_LOGGED_IN,
  PAY_SHOP,
} from "./ShopDetail.queries";

export default function ShopDetailContainerPage(props: any) {
  const router = useRouter();
  const [buyAmount, setBuyAmount] = useState(0);
  const [isBuyBtn, setIsBuyBtn] = useState(false);
  const [payShop] = useMutation(PAY_SHOP);
  const { data: fetchUserLoggedInData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: fetchShopData } = useQuery(FETCH_SHOP, {
    variables: { shopId: String(router.query.shopId) },
  });

  const [amountPoint, setAmountPoint] = useState(
    fetchShopData?.fetchShop.shopDisCountPrice
  );

  const [remainPoint, setRemainPoint] = useState(
    fetchUserLoggedInData?.fetchUserLoggedIn.userPoint - amountPoint
  );

  const chargePoint = () => {
    router.push(`/${fetchUserLoggedInData?.fetchUserLoggedIn?.userNickname}/`);
  };

  const onClickPay = async () => {
    try {
      await payShop({
        variables: {
          stock: buyAmount,
          shopId: String(router.query.shopId),
        },
        refetchQueries: [
          {
            query: FETCH_SHOP,
          },
        ],
      });
      alert("결제 완료");
      router.push(
        `/${fetchUserLoggedInData?.fetchUserLoggedIn?.userNickname}/point/`
      );
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setAmountPoint(buyAmount * fetchShopData?.fetchShop.shopDisCountPrice);
  }, [buyAmount]);

  useEffect(() => {
    setRemainPoint(
      fetchUserLoggedInData?.fetchUserLoggedIn.userPoint - amountPoint
    );
  }, [amountPoint]);

  const buyAmountPlus = () => {
    if (buyAmount >= fetchShopData.fetchShop.shopStock) return;
    setBuyAmount((prev) => prev + 1);
  };
  const buyAmountMinus = () => {
    if (buyAmount <= 0) return;
    setBuyAmount((prev) => prev - 1);
  };

  const onClickList = () => {
    router.push("/shop");
  };

  const onClickEdit = () => {
    router.push(`/shop/${router.query.shopId}/edit`);
  };

  const onClickBuyBtn = () => {
    setIsBuyBtn((prev) => !prev);
  };

  return (
    <ShopDetailPresenterPage
      fetchUserLoggedIn={fetchUserLoggedInData}
      fetchShop={fetchShopData}
      buyAmountPlus={buyAmountPlus}
      buyAmount={buyAmount}
      buyAmountMinus={buyAmountMinus}
      amountPoint={amountPoint}
      remainPoint={remainPoint}
      chargePoint={chargePoint}
      onClickPay={onClickPay}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      isBuyBtn={isBuyBtn}
      onClickBuyBtn={onClickBuyBtn}
    />
  );
}
