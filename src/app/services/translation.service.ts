import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations: any;
  private currentLang = 'en';

  constructor(private httpClient: HttpClient) {}

  loadTranslations(lang: string) {   
    return this.httpClient.get(`i18n/${lang}.json`).subscribe((res) => {
      this.translations = res;
    })
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  get currentLanguage(): string {
    return this.currentLang;
  }

  set setLanguage(lang: string) {
    this.currentLang = lang;
  }
}