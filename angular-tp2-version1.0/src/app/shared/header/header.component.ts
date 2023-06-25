import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from 'src/app/services/main.service';

type Language = {
  value: string,
  img: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService,
              public mainService: MainService) {

  }

  changeLanguage(newLangugage: Language) {
    this.translate.use(newLangugage.value);
  }

}
