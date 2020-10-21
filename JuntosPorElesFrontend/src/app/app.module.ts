import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InformativoModule } from './modules/informativo/informativo.module';
import { SobreModule } from './modules/sobre/sobre.module';
import { JunteSeNosModule } from './modules/junte-se-nos/junte-se-nos.module';
import { VoluntarioModule } from './modules/voluntario/voluntario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HomeModule,
    NgxSpinnerModule,
    InformativoModule,
    SobreModule,
    JunteSeNosModule,
    VoluntarioModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
