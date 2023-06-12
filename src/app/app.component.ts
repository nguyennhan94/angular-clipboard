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
    console.log('clipboardData', clipboardData);

    let pastedText = clipboardData.getData('text');
    console.log('pastedText', pastedText);

    let row_data = pastedText.split('\n');
    console.log('row_data', row_data);

    this.displayedColumns = row_data[0].split('\t');
    this.displayedColumns.pop();
    console.log('displayedColumns', this.displayedColumns);
    // delete row_data[0];
    // Create table dataSource
    let data = [];

    row_data.forEach((row_data) => {
      let row = {};
      this.displayedColumns.forEach((a, index) => {
        row[a] = row_data.split('\t')[index];
      });
      data.push(row);
    });
    console.log('data', data);
    this.dataSource = data;

    // this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    // this.dataSource = [
    //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    // ];
  }
}
