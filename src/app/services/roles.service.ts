import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { AllApplicationData } from '../../shared/to/all-application-data';
import { Http } from '@angular/http';

@Injectable()
export class RolesService {

  constructor(private http: Http) { }

  loadApplicationRoles(): Observable<AllApplicationData> {
    return this.http.get('/api/roles').map(res => res.json())   
  }

}
