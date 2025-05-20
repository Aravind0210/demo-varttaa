// src/app/site/site.routes.ts
import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesComponent } from './services/services.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { SendEnquiryComponent } from './send-enquiry/send-enquiry.component';
import { HowItsWorksComponent } from './how-its-works/how-its-works.component';

export const SITE_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'quote', component: QuoteFormComponent },
  { path: 'enquiry', component: SendEnquiryComponent },
  { path: 'how-it-works', component: HowItsWorksComponent },
];
