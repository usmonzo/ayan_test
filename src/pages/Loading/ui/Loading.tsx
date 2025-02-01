import { Spinner } from "@chakra-ui/react";
import cls from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={cls.container}>
      <Spinner size={"xl"} borderWidth="6px" />
    </div>
  );
};
