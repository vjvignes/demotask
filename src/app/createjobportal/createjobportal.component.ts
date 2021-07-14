import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/service/job.service';

@Component({
  selector: 'app-createjobportal',
  templateUrl: './createjobportal.component.html',
  styleUrls: ['./createjobportal.component.css']
})
export class CreatejobportalComponent implements OnInit {

  joblists: any = {};
  jobportalForm!: FormGroup;
  submitted = false;
  loading = false;
  customer: string = '';

  constructor(public _http: HttpClient, private _jobservice: JobService, private fb: FormBuilder, private route: Router) { }
  ngOnInit(): void {
    this.jobportalForm = this.fb.group({
      company_name: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      email_id: ["", Validators.required],
      phone_number: ["", Validators.required],
      job_code: ["", Validators.required],
      description: ["", Validators.required],
      job_title: ["", Validators.required],
      last_date: ["", Validators.required],
      created_date: ["", Validators.required]
    });
  }
  get registerFormControl() {
    return this.jobportalForm.controls;
  }
  onSave() {
    this.submitted = true;
    if (this.jobportalForm.valid) {
           this.loading = true;
      this._jobservice.onSave(this.joblists).subscribe((res: any) => {
           this.customer = res.result;
       if (res.status == '200') {
          this.jobportalForm.reset();
          this.route.navigate(['homepage']);
        }
      })
      return
    }

  }

}
