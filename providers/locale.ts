import { Languages } from "../enums/languages";

export function localeFactory(currentLang: Languages) {
  switch (currentLang) {
    case Languages.ru:
      return "ru";
    case Languages.de:
      return "de";
    case Languages.es:
      return "es";
    case Languages.ptBR:
      return "pt";
    case Languages.fr:
      return "fr";
    case Languages.ko:
      return "ko";
    case Languages.zhCN:
      return "zh";
    case Languages.zhTW:
      return "zh";
    case Languages.hi:
      return "hi";
    case Languages.tr:
      return "tr";
    case Languages.it:
      return "it";
    case Languages.en:
    default:
      return "en";
  }
}
