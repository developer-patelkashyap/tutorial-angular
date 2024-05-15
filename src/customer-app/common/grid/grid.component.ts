import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.view.html',
})
export class GridComponent {
  gridCols: Array<any> = new Array<any>();
  gridData: Array<any> = new Array<any>();

  @Input('grid-cols')
  set setGridCols(_gridCols: Array<any>) {
    this.gridCols = _gridCols;
  }

  @Input('grid-data')
  set setGridData(_gridData: Array<any>) {
    this.gridData = _gridData;
  }
}
