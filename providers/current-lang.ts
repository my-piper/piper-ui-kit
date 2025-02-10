import { InjectionToken } from "@angular/core";
import { LANGS } from "../consts";
import { Langs } from "../enums/langs";

export const CURRENT_LANG = new InjectionToken<Langs>("current_lang");
export const LANG_KEY = "lang";

export function currentLangFactory(baseHref: string) {
  {
    let lang = localStorage.getItem(LANG_KEY) as Langs;
    if (!!lang && LANGS.includes(lang)) {
      return lang;
    }
  }

  switch (baseHref) {
    case "/ru/":
      return Langs.ru;
    case "/de/":
      return Langs.de;
    case "/es/":
      return Langs.es;
    case "/pt-BR/":
    case "/pt-br/":
      return Langs.ptBR;
    case "/fr/":
      return Langs.fr;
    case "/ja/":
      return Langs.ja;
    case "/ko/":
      return Langs.ko;
    case "/zh-CN/":
    case "/zh-cn/":
      return Langs.zhCN;
    case "/zh-TW/":
    case "/zh-tw/":
      return Langs.zhTW;
    case "/hi/":
      return Langs.hi;
    case "/tr/":
      return Langs.tr;
    case "/it/":
      return Langs.it;
    case "/en/":
    default:
      return Langs.en;
  }
}
