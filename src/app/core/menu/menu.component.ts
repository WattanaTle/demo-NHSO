import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[class.active-menuitem]': 'active',
  },
  animations: [
    trigger('children', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class MenuComponent implements OnInit {

  menuList: any[] = [];

  active = true;

  constructor() {

  }

  ngOnInit(): void {
    this.menuList = [
      {
        code: '001',
        name: 'หน้าแรก',
        iconPath: PrimeIcons.HOME,
        subMenu: []
      },
      {
        code: '002',
        name: 'งานของฉัน',
        iconPath: PrimeIcons.ALIGN_LEFT,
        subMenu: []
      },
      {
        code: '003',
        name: 'แผนจัดซื้อจัดจ้าง',
        iconPath: PrimeIcons.DOLLAR,
        subMenu: []
      },
      {
        code: '004',
        name: 'โครงการจัดซื้อจัดจ้าง',
        iconPath: PrimeIcons.FOLDER,
        subMenu: [
          { code: '001', name: 'โครงการและแจ้งความจำนง', iconPath: PrimeIcons.CREDIT_CARD },
          { code: '002', name: 'กระบวนการยกเลิกจัดซื้อจัดจ้าง', iconPath: PrimeIcons.FILE_EXPORT },
          { code: '003', name: 'รายงาน', iconPath: PrimeIcons.FILE }
        ]
      }
    ]

  }

  showSubmenu(event: any) {
    console.log(event);
    
  }

}
