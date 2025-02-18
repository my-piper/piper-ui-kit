import { InjectionToken } from "@angular/core";
import { ALL_LANGUAGES } from "../consts";
import { Languages } from "../enums/languages";

export const CURRENT_LANGUAGE = new InjectionToken<Languages>(
  "current_language"
);
export const LANGUAGE_KEY = "language";

export function currentLangFactory(baseHref: string) {
  {
    let language = localStorage.getItem(LANGUAGE_KEY) as Languages;
    if (!!language && ALL_LANGUAGES.includes(language)) {
      return language;
    }
  }

  switch (baseHref) {
    case "/ru/":
      return Languages.ru;
    case "/de/":
      return Languages.de;
    case "/es/":
      return Languages.es;
    case "/pt-BR/":
    case "/pt-br/":
      return Languages.ptBR;
    case "/fr/":
      return Languages.fr;
    case "/ja/":
      return Languages.ja;
    case "/ko/":
      return Languages.ko;
    case "/zh-CN/":
    case "/zh-cn/":
      return Languages.zhCN;
    case "/zh-TW/":
    case "/zh-tw/":
      return Languages.zhTW;
    case "/hi/":
      return Languages.hi;
    case "/tr/":
      return Languages.tr;
    case "/it/":
      return Languages.it;
    case "/en/":
    default:
      return Languages.en;
  }
}
