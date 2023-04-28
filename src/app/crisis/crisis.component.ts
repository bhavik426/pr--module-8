import { Component } from '@angular/core';
import { ListdataService } from '../services/listdata.service';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent {

  constructor(private ser:ListdataService)
  {

  }

  list=this.ser.data

}
