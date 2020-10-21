import { Component, OnInit } from '@angular/core';
import { CustomizerService } from '../../services/customizer.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {



  constructor(public customize: CustomizerService) { }

  ngOnInit() {
  }

}
