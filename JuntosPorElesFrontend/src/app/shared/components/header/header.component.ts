import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { CustomizerService } from '../../services/customizer.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems: Menu[];
  public items: Menu[];
  public text: string;
  public openNav: boolean = false;
  public open : boolean = false;

  constructor(
    public navServices: NavService, 
    public customize: CustomizerService, 
    public api: ApiService, 
    private router: Router){
  }

  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }

  openHeaderMenu(){
    this.open = !this.open;
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  quemSomos(){
    this.router.navigate(['/sobre']);
  }

  junteSeNos(){
    this.router.navigate(['/junte-se']);
  }

  
  cuidarDeles(){
    this.router.navigate(['/cuidar-deles']);
  }

  adote(){
    this.router.navigate(['/adote']);
  }

}
