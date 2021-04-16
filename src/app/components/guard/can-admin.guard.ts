import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { PagesService } from '../pages/services/pages.service';

@Injectable({
  providedIn: 'root'
})
export class CanAdminGuard implements CanActivate {
  constructor(private pagesSvc: PagesService){ }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.pagesSvc.user$.pipe(
      take(1),
      map( (user) => user && this.pagesSvc.isAdmin(user)),
      tap( canAdmin => {
        if(!canAdmin){
          window.alert('Access denied.')
        }
      })
    )
  }
  
}
