import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService){

  }

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map( user => {
          if (user) return true;
          else {
            //console.log(error);
          return false;
          }
        })
    )
  }
  
}
