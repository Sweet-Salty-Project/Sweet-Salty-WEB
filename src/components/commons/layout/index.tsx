import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner/Banner.container";
import LayoutFooter from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background: #f3f3f3;
`;
export const HiddenBox = styled.div`
  width: 100%;
  height: 84px;
`;
const Body = styled.div``;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const NO_HEADER_LIST = [
    "/message/received/[messageInfoId]",
    "/message/send/[messageInfoId]",
    "/message/received",
    "/message/send",
    "/message",
    "/message/write",
    "/login",
    "/signup",
  ];
  const NP_FOOTER_LIST = [
    "/message/received/[messageInfoId]",
    "/message/send/[messageInfoId]",
    "/message/received",
    "/message",
    "/message/send",
    "/message/write",
  ];
  const MainPage = ["/"];
  const isMainPage = MainPage.includes(router.pathname);
  const noHeader = NO_HEADER_LIST.includes(router.pathname);
  const noFooter = NP_FOOTER_LIST.includes(router.pathname);

  return (
    <Wrapper>
      {!noHeader && <LayoutHeader />}
      {!noHeader && <HiddenBox>훼이크 박스</HiddenBox>}

      {isMainPage && <LayoutBanner />}

      <Body>{props.children}</Body>

      {!noFooter && <LayoutFooter />}
    </Wrapper>
  );
}
