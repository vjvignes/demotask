import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/service/job.service';
@Component({
  selector: 'app-jobapplypotal',
  templateUrl: './jobapplypotal.component.html',
  styleUrls: ['./jobapplypotal.component.css']
})
export class JobapplypotalComponent implements OnInit {
  jobapplicationlists: any = {};
  userportalForm!: FormGroup;
  submitted = false;
  loading = false;
  customer: string = '';
  jobname: string = "php";
  jobcode:any='12';

 
  constructor(public _http: HttpClient, private _jobservice: JobService, private fb: FormBuilder, private route: Router,private router:ActivatedRoute) {
  //   if( this.router.snapshot.queryParamMap.get("jobcode") != null){
  //     this.jobapplicationlists.job_code = this.router.snapshot.queryParamMap.get("jobcode");

  //  }
   }
  ngOnInit(): void {
   

    this.userportalForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["",Validators.required],
      email_id: ["", Validators.required],
      phone_number: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      education: ["",Validators.required],
      job_code: ["", Validators.required],
      description: ["", Validators.required],
      apply_date: ["", Validators.required],
     
    });
  }
  
  get registerFormControl() {
    return this.userportalForm.controls;
  }
  
  Userport() {
    this.submitted = true;
    if (this.userportalForm.valid) {
           this.loading = true;
      this._jobservice.Userport(this.jobapplicationlists).subscribe((res: any) => {
           this.customer = res.result;
       if (res.status == '200') {
          this.userportalForm.reset();
          this.route.navigate(['homepage']);
        }
      })
      return
    }

  }

}
