import { DOCUMENT, Location } from "@angular/common";
import { Component, Inject } from "@angular/core";
import cookie from "cookiejs";
import { Languages } from "../enums/languages";
import { CURRENT_LANGUAGE } from "../providers/current-language";

export const LANG_KEY = "lang";
const COOKIE_PATH = "/";

@Component({
  selector: "app-select-language",
  templateUrl: "./select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {
  languages = Languages;

  constructor(
    @Inject(CURRENT_LANGUAGE) public lang: Languages,
    @Inject(DOCUMENT) private document: Document,
    private location: Location
  ) {}

  setLanguage(e: MouseEvent, language: Languages) {
    e.preventDefault();
    cookie("language", language, { expires: 365, path: COOKIE_PATH });
    const slug = language.toLowerCase();
    this.document.location = `/${slug}${this.location.path()}`;
  }
}
