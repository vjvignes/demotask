import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JobService } from 'src/service/job.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatejobportalComponent } from './createjobportal/createjobportal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobapplypotalComponent } from './jobapplypotal/jobapplypotal.component';
import { AppliedjobComponent } from './appliedjob/appliedjob.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreatejobportalComponent,
    JobapplypotalComponent,
    AppliedjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
 ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
