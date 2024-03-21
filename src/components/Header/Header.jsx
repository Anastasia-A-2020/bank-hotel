import { Logo } from "../Logo/Logo";
import { NavigationList } from "../../NavigationList/NavigationList";

export function Header() {
  return (
    <header className="pl-[20px] pr-[20px] w-full min-h-[80px] flex flex-row justify-between items-center bg-[#313F38]">
      <Logo />
      <NavigationList />
      <p className="text-white text-sm">+38 032 297 50 20</p>
    </header>
  );
}
