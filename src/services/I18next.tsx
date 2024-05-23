import i18n, { TFunction, i18n as Ii18n } from "i18next";
import React, { PropsWithChildren } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import enTranslate from "./en/translation.json";
import esTranslate from "./es/translation.json";
import ruTranslate from "./ru/translation.json";

i18n.use(initReactI18next).init({
  debug: true,
  lng: localStorage.getItem("locale") || "en",
  resources: {
    en: { translation: enTranslate },
    es: { translation: esTranslate },
    ru: { translation: ruTranslate },
  },
});

export const I18nContext = React.createContext<Record<string, unknown>>({});

export const I18nProvider: React.FC = (
  props: PropsWithChildren<Record<string, unknown>>
) => {
  return (
    <I18nContext.Provider value={{}}>{props.children}</I18nContext.Provider>
  );
};

export const useI18n = (
  defaultPrefix?: string
): { t: TFunction; i18n: Ii18n } => {
  const { t, i18n } = useTranslation();

  function wrappedT(key: string | string[], ...args: any[]) {
    const keys: string[] = Array.isArray(key) ? [...key] : [key];
    const prefixedKeys =
      typeof defaultPrefix !== "undefined"
        ? keys.map((k) => `${defaultPrefix}.${k}`)
        : [];
    return t.apply(t, [prefixedKeys.concat(keys), ...args] as any);
  }

  return { t: wrappedT, i18n };
};

export const staticI18n = (
  defaultPrefix?: string
): { t: TFunction; i18n: Ii18n } => {
  const t = i18n.t.bind(i18n);

  function wrappedT(key: string | string[], ...args: any[]) {
    const keys: string[] = Array.isArray(key) ? [...key] : [key];
    const prefixedKeys =
      typeof defaultPrefix !== "undefined"
        ? keys.map((k) => `${defaultPrefix}.${k}`)
        : [];
    return t.apply(t, [prefixedKeys.concat(keys), ...args] as any);
  }

  return { t: wrappedT, i18n };
};
