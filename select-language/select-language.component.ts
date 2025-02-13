import { DOCUMENT, Location } from "@angular/common";
import { Component, Inject } from "@angular/core";
import cookie from "cookiejs";
import { Langs } from "../enums/langs";
import { CURRENT_LANG } from "../providers/current-lang";

export const LANG_KEY = "lang";
const COOKIE_PATH = "/";

@Component({
  selector: "app-select-language",
  templateUrl: "./select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {
  langs = Langs;

  constructor(
    @Inject(CURRENT_LANG) public lang: Langs,
    @Inject(DOCUMENT) private document: Document,
    private location: Location
  ) {}

  setLanguage(e: MouseEvent, lang: Langs) {
    e.preventDefault();
    cookie("language", lang, { expires: 365, path: COOKIE_PATH });
    const slug = lang.toLowerCase();
    this.document.location = `/${slug}${this.location.path()}`;
  }
}
