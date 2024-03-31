import { Outlet } from "react-router-dom";
import HeaderSection from "../components/header/header";

export default function RootLayout() {
  return (
    <>
    <HeaderSection/>
    <Outlet/>
    </>
  )
}
