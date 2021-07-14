import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/service/job.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public joblists: any = [];
  job_title: any;
  constructor(private _jobservice:JobService , private _router:Router) { }

  ngOnInit() {
    this._jobservice.getjoblist().subscribe(data => {
      this.joblists = data;
    });
  }
  public onCreateJobPortal(): void{
    this._router.navigate(['createjobportal']);
  }
  public jobapply_Portal(): void{

    this._router.navigate(['jobapplyportal'])
  }
  public onAppliedJobPortal(): void{
    this._router.navigate(['appliedjob'])
  }
  search() {
    if (this.job_title == "") {
      this.ngOnInit();
    } else {
      this.joblists = this.joblists.filter((res: any) => {
        return res.job_title.toLowerCase().match(this.job_title.toLowerCase());
      })
    }
  }

}
