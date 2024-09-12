import { Component } from '@angular/core';
import { BrainModel } from '../../models/brain-model';
import { BrainService } from '../../services/brain.service';
import { DonutComponent } from '../donut/donut.component';

@Component({
  selector: 'app-brain',
  standalone: true,
  imports: [DonutComponent],
  templateUrl: './brain.component.html',
  styleUrl: './brain.component.css'
})
export class BrainComponent {
  genius:BrainModel = {} as BrainModel;
  constructor(private brainService:BrainService){}

  ngOnInit(){
    this.callBrainApi
  }

  // getBrains is in service/brain.ts
  callBrainApi(){
    this.brainService.getBrains().subscribe((response:BrainModel) => {
      console.log(response);
      this.genius = response
    })
  }
}
