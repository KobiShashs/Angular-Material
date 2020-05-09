import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message, action) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => { console.log('The snackbar was dismissed'); });

    snackBarRef.onAction().subscribe(() => { console.log('The snackbar action was triggered'); });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 });
  }
  ngOnInit(): void {
  }

}

@Component({
  selector: 'customr-snackbar',
  template: `<span style='color: orange'> Custom Snakbar</span>`
})
export class CustomSnackBarComponent { }