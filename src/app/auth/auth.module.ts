import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter(): any{
  return sessionStorage.getItem('token');
}

@NgModule({
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['https://203.157.19.162', 'localhost:3003'],
        disallowedRoutes: ['localhost:3000/login/']
      }
    })
  ]
})
export class AuthModule { }
