import { Location } from "@angular/common";
import { InjectionToken } from "@angular/core";
import parse from "url-parse";
import { CURRENCIES, CURRENCIES_FOR_COUNTRIES } from "../consts";
import { Countries } from "../enums/countries";
import { Currencies } from "../enums/currencies";

export const CURRENT_CURRENCY = new InjectionToken<Countries>("currency");
export const CURRENCY_KEY = "currency";

export function currentCurrencyFactory(
  country: Countries,
  location: Location
): Currencies {
  {
    const url = parse(location.path());
    const urlParams = new URLSearchParams(url.query);
    let currency = urlParams.get("currency") as Currencies;
    if (!!currency && CURRENCIES.includes(currency)) {
      localStorage.setItem(CURRENCY_KEY, currency);
      return currency;
    }
  }

  {
    let currency = localStorage.getItem(CURRENCY_KEY) as Currencies;
    if (!!currency && CURRENCIES.includes(currency)) {
      return currency;
    }
  }

  return CURRENCIES_FOR_COUNTRIES[country] || Currencies.usd;
}
