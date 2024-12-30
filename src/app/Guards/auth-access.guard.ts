import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Service/user-auth.service';
import { inject } from '@angular/core';

export const authAccessGuard: CanActivateFn = (route, state) => {
  let userAuth=inject(UserAuthService)
  let router=inject(Router)
  if(userAuth.isuserlogin)
  {
    return true;
  }
  else
  {
    router.navigate(['/signup'])
    return false;
  }

};
