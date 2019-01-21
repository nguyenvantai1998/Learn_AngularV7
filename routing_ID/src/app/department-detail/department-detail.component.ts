import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Bạn vừa click lên tôi và có giá trị id={{departmentID}} </h3>

    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>


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

  // 1
  gotoDepartments(){
    let selectedId = this.departmentID ? this.departmentID : null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
  }
}
