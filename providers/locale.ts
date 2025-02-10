import { Langs } from "../enums/langs";

export function localeFactory(currentLang: Langs) {
  switch (currentLang) {
    case Langs.ru:
      return "ru";
    case Langs.de:
      return "de";
    case Langs.es:
      return "es";
    case Langs.ptBR:
      return "pt";
    case Langs.fr:
      return "fr";
    case Langs.ko:
      return "ko";
    case Langs.zhCN:
      return "zh";
    case Langs.zhTW:
      return "zh";
    case Langs.hi:
      return "hi";
    case Langs.tr:
      return "tr";
    case Langs.it:
      return "it";
    case Langs.en:
    default:
      return "en";
  }
}
