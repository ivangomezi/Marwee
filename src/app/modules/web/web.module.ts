import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//routers
import { WebRouting } from "./web.routing";

//pages
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";

//components
import { SectionInitComponent } from "./components/home.components/section-init/section-init.component";
import { SectionServicesComponent } from './components/home.components/section-services/section-services.component';
import { SectionTaskComponent } from './components/home.components/section-task/section-task.component';
import { SectionPartnersComponent } from './components/home.components/section-partners/section-partners.component';
import { SectionAboutComponent } from './components/home.components/section-about/section-about.component';
import { SectionTalkComponent } from './components/home.components/section-talk/section-talk.component';

@NgModule({
    declarations: [
      //pages
      HomeComponent,
      ContactComponent,

      //components
      SectionInitComponent,
        SectionServicesComponent,
        SectionTaskComponent,
        SectionPartnersComponent,
        SectionAboutComponent,
        SectionTalkComponent
  ],
    imports: [
        CommonModule,
        WebRouting
    ]
})

export class WebModule {}