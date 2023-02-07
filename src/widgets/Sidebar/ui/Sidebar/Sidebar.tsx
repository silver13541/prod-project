import { PropsWithChildren, useState } from "react";

import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: PropsWithChildren<SidebarProps>) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
