import { DOCUMENT, Location } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import parse from "url-parse";
import { CURRENCIES_REGIONS } from "../consts";
import { Currencies } from "../enums/currencies";
import { CURRENT_CURRENCY } from "../providers/current-currency";

@Component({
  selector: "app-select-currency",
  templateUrl: "./select-currency.component.html",
  styleUrls: ["./select-currency.component.scss"],
})
export class SelectCurrencyComponent implements OnInit {
  regions = CURRENCIES_REGIONS;

  currencyControl = this.fb.control(this.currency);
  form = this.fb.group({
    currency: this.currencyControl,
  });

  constructor(
    @Inject(CURRENT_CURRENCY) public currency: Currencies,
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.currencyControl.valueChanges.subscribe((currency) => {
      const { pathname } = parse(this.location.path());
      this.document.location = `${pathname}?currency=${currency}`;
    });
  }
}
