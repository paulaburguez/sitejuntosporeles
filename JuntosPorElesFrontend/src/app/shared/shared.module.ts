import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ HeaderComponent, FooterComponent, ToggleFullscreenDirective],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [ HeaderComponent, FooterComponent]
})
export class SharedModule { }
