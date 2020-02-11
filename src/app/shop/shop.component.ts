import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  details=[
    {
      name:"addidas New Hammer sole for Sports person",
      price:"$150",
      cutPrice:"$210",
      des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Nike for Sports person",
      price:"$120",
      cutPrice:"$210",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"puma for Sports person",
      price:"$125",
      cutPrice:"$210",
        des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  iter;
  constructor( private route:ActivatedRoute ) {
    this.iter=this.route.snapshot.params['id'];
    console.log(this.iter);

   }

  ngOnInit() {
  }

}
