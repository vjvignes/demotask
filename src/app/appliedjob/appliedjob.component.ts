import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/service/job.service';
@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.component.html',
  styleUrls: ['./appliedjob.component.css']
})
export class AppliedjobComponent implements OnInit {
  public jobapplicationlists: any = [];
  job_title: any;

  constructor(private _jobservice:JobService , private _router:Router) { }

  ngOnInit() {
    this._jobservice.getjobapplicationlist().subscribe(data => {
      this.jobapplicationlists = data;
    });
  }
  search() {
    if (this.job_title == "") {
      this.ngOnInit();
    } else {
      this.jobapplicationlists = this.jobapplicationlists.filter((res: any) => {
        return res.job_title.toLowerCase().match(this.job_title.toLowerCase());
      })
    }
  }

}
