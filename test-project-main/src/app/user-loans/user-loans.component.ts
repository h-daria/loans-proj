import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { JSONDataService } from '../json-data.service';


@Component({
  selector: 'app-user-loans',
  templateUrl: './user-loans.component.html',
  styleUrls: ['./user-loans.component.css']
})
export class UserLoansComponent implements OnInit {
loans: any[] = [];
userBalance : any;

  constructor(private jsonDataService: JSONDataService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loans = this.jsonDataService.getLoans();
    console.log(this.loans)
    this.userBalance = this.loans[0].amount;
  }

  openDialog(loan: any): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '20rem',
      data: loan,
    });

    dialogRef.afterClosed().subscribe(result => {
      loan.available = parseFloat(loan.available.replace(/,/g, ''));
      loan.available = loan.available as number - result;
      this.userBalance = parseFloat(this.userBalance.replace(/,/g, ''));
      this.userBalance = this.userBalance as number - result;
      loan.available = loan.available.toLocaleString();
      this.userBalance = this.userBalance.toLocaleString();
      
      if(result > 0) {
        loan.isInvested = true;
      }
    }
  );
}
}