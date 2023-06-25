import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Language = {
  value: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public currentLanguage: string|undefined;
  public supportedLanguages: Language[] = [
    {
      value: 'fr',
      img: 'assets/flags/fr.jpg'
    },
    {
      value: 'en',
      img: 'assets/flags/en.png'
    }
  ];

  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.getBrowserLang() || 'en';
    this.translate.use(this.currentLanguage);
    this.translate.onLangChange.subscribe(value => {
      console.log(`Language changed to : `, value.lang);
      this.currentLanguage = value.lang;
    });
  }
}
