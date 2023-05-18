import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any = {};

  constructor() {
  }

  ngOnInit(): void {
     this.user = {
      empCode: '9876',
      firstName: 'ผอ. สมบูรณ์',
      lastName: 'พูลผล',
      positionName: 'ผู้อำนวยการฝ่าย สปสช เขต 1 เชียงใหม่'
     }
  }

}
