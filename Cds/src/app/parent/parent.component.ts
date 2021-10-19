import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  parentMsg:any;
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.parentMsg="Welcome"
      this.cdr.markForCheck();
    },2000);
  }

  triggerParent(){
    console.log("Parent Trigger");
  }

}
