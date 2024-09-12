import { Component } from '@angular/core';
import { DonutModel, Result } from '../../models/donut-model';
import { DonutService } from '../../services/donut.service';
import { BrainComponent } from "../brain/brain.component";

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [BrainComponent],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
  donut:DonutModel = {} as DonutModel;
  constructor(private donutService:DonutService){}

  ngOnInit(){
    this.callDonutApi();
  }

  callDonutApi(){
    this.donutService.getDonuts().subscribe((response:DonutModel) => {
      console.log(response);
      this.donut = response;
    })
  }
}
   