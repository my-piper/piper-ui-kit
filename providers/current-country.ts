import { Location } from "@angular/common";
import { InjectionToken, makeStateKey } from "@angular/core";
import parse from "url-parse";
import { DEFAULT_COUNTRY } from "../consts";
import { Countries } from "../enums/countries";

export const CURRENT_COUNTRY_KEY = makeStateKey<Countries>("current_country");
export const CURRENT_COUNTRY = new InjectionToken<Countries>("current_country");
export const COUNTRY_KEY = "country";

export function currentCountryFactory(location: Location): Countries {
  {
    let url = parse(location.path());
    const urlParams = new URLSearchParams(url.query);
    const country = urlParams.get("country");
    if (!!country) {
      localStorage.setItem(COUNTRY_KEY, country);
      return country as Countries;
    }
  }

  {
    let country = localStorage.getItem(COUNTRY_KEY) as Countries;
    if (!!country) {
      return country;
    }
  }

  return DEFAULT_COUNTRY;
}
