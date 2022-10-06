import { InjectionToken } from '@angular/core';
import { AboutInterface } from './about.interface';

export const COLLEGE_ABOUT$ = new InjectionToken<AboutInterface>('About college');
