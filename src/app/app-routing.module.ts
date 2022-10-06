import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'about', 
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path: "courses",
        component: CoursesComponent
    },
    {
        path: "teachers",
        component: TeachersComponent
    },
    {
        path: "contacts",
        component: ContactsComponent
    },
    { 
        path: "**", 
        redirectTo: "/notfound" 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
