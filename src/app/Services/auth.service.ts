import { Injectable } from '@angular/core';
/* import { HttpClient, HttpHeaders } from '@angular/common/http'; */


function _window(): any{
  return window;
}
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*   constructor (private httpService: HttpClient) {} */
  
  get nativeWindow() :any {
    return _window();
 }

}
