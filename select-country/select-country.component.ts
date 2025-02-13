import { DOCUMENT, Location } from "@angular/common";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import parse from "url-parse";
import { ALL_COUNTIES, CURRENCIES_FOR_COUNTRIES } from "../consts";
import { Countries } from "../enums/countries";
import { Currencies } from "../enums/currencies";
import { Languages } from "../enums/languages";
import { CURRENT_COUNTRY } from "../providers/current-country";
import { CURRENT_LANG } from "../providers/current-lang";

@Component({
  selector: "app-select-country",
  templateUrl: "./select-country.component.html",
  styleUrls: ["./select-country.component.scss"],
})
export class SelectCountryComponent implements OnInit {
  countries = ALL_COUNTIES[this.lang] || ALL_COUNTIES[Languages.en];

  @Input()
  width: number;

  countryControl = this.fb.control(this.country);
  form = this.fb.group({
    country: this.countryControl,
  });

  constructor(
    @Inject(CURRENT_LANG) private lang: Languages,
    @Inject(CURRENT_COUNTRY) private country: Countries,
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.countryControl.valueChanges.subscribe((country) => {
      const { pathname } = parse(this.location.path());
      const currency = CURRENCIES_FOR_COUNTRIES[country] || Currencies.usd;
      this.document.location = `${pathname}?country=${country}&currency=${currency}`;
    });
  }
}
