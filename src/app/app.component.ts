import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Paste it';
  val: any;
  displayedColumns: string[];
  dataSource: any[] = [];

  data(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    console.log(clipboardData);
    let pastedText = clipboardData.getData('text');
    console.log(pastedText);
    let row_data = pastedText.split('\n');
    console.log(row_data);
    this.displayedColumns = row_data[0].split('\t');
    delete row_data[0];
    // Create table dataSource
    let data = [];

    row_data.forEach((row_data) => {
      let row = {};
      this.displayedColumns.forEach((a, index) => {
        row[a] = row_data.split('\t')[index];
      });
      data.push(row);
    });
    this.dataSource = data;
  }
}
