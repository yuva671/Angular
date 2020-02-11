import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details=[
    {
      name:"addidas New Hammer sole for Sports person",
      price:"$150",
      cutPrice:"$210"
    },
    {
      name:"Nike for Sports person",
      price:"$120",
      cutPrice:"$210"
    },
    {
      name:"puma for Sports person",
      price:"$125",
      cutPrice:"$210"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
