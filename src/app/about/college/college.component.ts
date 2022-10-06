import { Input, Component, Inject, OnInit } from '@angular/core';
import { COLLEGE_ABOUT$ } from '../about.providers';
import { Observable } from 'rxjs';
import { AboutInterface } from '../about.interface';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],
    providers:
        [{
            provide: COLLEGE_ABOUT$,
            useValue: new Observable<AboutInterface>(observer => {
                observer.next({
                    id: 1,
                    name: "TEST",
                    photo: "/assets/icons/angular_logo.svg",
                    about: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                    media_type: 12312,
                    vimeo_video_id: 12412414,
                })
            })
        }]
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;
    isLoading = true;

    constructor(
        @Inject(COLLEGE_ABOUT$) private college$: Observable<AboutInterface>,
        public translate: TranslateService
    ) {
        translate.addLangs(['ru', 'en', 'he']);
        translate.setDefaultLang('ru');
    }

    ngOnInit() {
        this.getCollege();
    }

    getCollege(): void {
        this.college$.subscribe(college => {
            this.college = college;
            setTimeout(() => {}, 100);
        });
    }

    translateLanguageTo(lang: string) {
        this.translate.use(lang);
    }
}
