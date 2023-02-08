import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/Button";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button
      onClick={toggleLang}
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
