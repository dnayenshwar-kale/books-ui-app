import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog-component',
  templateUrl: './confirm-dialog-component.component.html',
  styleUrls: ['./confirm-dialog-component.component.css']
})
export default  class ConfirmDialogComponentComponent implements OnInit {

constructor ( public dialogRef: MatDialogRef<ConfirmDialogComponentComponent>, @Inject (MAT_DIALOG_DATA) public data: any )
 { }


  ngOnInit(): void { }

onNoClick (): void { 
	this.dialogRef.close (); 
}

}
