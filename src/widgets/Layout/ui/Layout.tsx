import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/Navbar";
import cls from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={cls.container}>
      <Navbar />
      <div className={cls.content}>
        <Suspense fallback={""}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
