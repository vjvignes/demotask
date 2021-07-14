import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { throwError } from 'rxjs';
import {  joblist } from 'src/model/employer';
import { jobapplicationlist } from 'src/model/user';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _url: string = "http://www.gussystems.com/vjvicky/getjoblist.php"
  private get_url: string = "http://www.gussystems.com/vjvicky/getapplicationList.php"


  constructor(private _http: HttpClient) { }
  getjoblist() {
    return this._http.get(this._url)
      .pipe(catchError(this.handleError));
  }
  getjobapplicationlist() {
    return this._http.get(this.get_url)
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  Userport(jobapplicationlists:jobapplicationlist[]) {
    return this._http.post(`http://www.gussystems.com/vjvicky/jobapplication.php`, jobapplicationlists).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something Went Wrong!');
        })
      )
  }
  onSave(joblists:joblist[]) {
    return this._http.post(`http://www.gussystems.com/vjvicky/Jobposting.php`, joblists).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something Went Wrong!');
        })
      )
  }

 
}
