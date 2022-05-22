import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'marwee', component: HomeComponent},
            {path: 'contact', component: ContactComponent},
            {path: '**', redirectTo: 'marwee'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class WebRouting {}