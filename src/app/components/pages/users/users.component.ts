import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ListService } from 'src/app/shared/components/services/list.service';
import { PagesService } from '../services/pages.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  employees$ = this.listSvc.employee;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }


  constructor(private listSvc: ListService, private router:Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }


  onGoToDelete(){}

  create(){
    this.router.navigate(['new']);
  }

}
