import { ReactNode, MouseEvent } from "react";

type TButtonProps = {
  onClickFun: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};
const Button = ({ onClickFun, children }: TButtonProps) => {
  return (
    <button
      onClick={onClickFun}
      className="border-none bg-[#e98d8d] text-white p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#c27e7e]"
    >
      {children}
    </button>
  );
};

export default Button;
