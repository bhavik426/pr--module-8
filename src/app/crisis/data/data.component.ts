import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listdata, ListdataService } from 'src/app/services/listdata.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  student=this.ser.data
  filter!:Listdata
  text!:string
  constructor(private router:ActivatedRoute,private ser:ListdataService)
  {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params:any)=>{
      console.log(params)
      let res = this.student.find(x=>x.id==params.id)
      if(res!=null)
      {
        this.filter = res
        this.text=res.title
      }
    })
  }

  update(data:Listdata,p1:string)
  {
    data.title=p1
    this.ser.adddata(data)
  }
}
