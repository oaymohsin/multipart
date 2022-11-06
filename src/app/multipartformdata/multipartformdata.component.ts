import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-multipartformdata',
  templateUrl: './multipartformdata.component.html',
  styleUrls: ['./multipartformdata.component.css']
})
export class MultipartformdataComponent implements OnInit {

  categories=["cap","Hoodies","Watch","Bags"];
  selectsize=["S","M","L","X-L","XX-L"];
  myformgroup:FormGroup | any;
  constructor(
    // private formBuider:FormBuilder,
    // private ToastrService:ToastrService,
   
    ) { }

  ngOnInit(): void {
  }

}
