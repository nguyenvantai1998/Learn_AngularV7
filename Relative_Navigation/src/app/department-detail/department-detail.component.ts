import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Bạn vừa click lên tôi và có giá trị id={{departmentID}} </h3>

    <p>
      <button (click)='showOverview()'>Overview</button>
      <button (click)='showContact()'>Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    


    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentID = id;

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentID = id;
    });
  }

  goPrevious(){
    let previousID = this.departmentID - 1;
    this.router.navigate(['/departments',previousID]);
  }
  goNext(){
    let previousID = this.departmentID + 1;
    this.router.navigate(['/departments',previousID]);
  }

  gotoDepartments(){
    let selectedId = this.departmentID ? this.departmentID : null;
    //this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
