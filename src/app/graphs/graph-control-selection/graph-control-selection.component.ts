import { Component, SimpleChanges, Input } from '@angular/core';
import { VertigoRawData, VertigoProcessedData } from '../../processing/vertigo-data';
import { DataType } from '../../processing/datatype';
import { Data } from '../../processing/data';
import { Dataspec } from '../../processing/dataspec';
import { RawData } from 'src/app/processing/processes/rawdata';

@Component({
  selector: 'graph-control-selection',
  templateUrl: './graph-control-selection.component.html',
})
export class GraphControlSelectionComponent {

  @Input() public VertigoRawData: VertigoRawData;
  @Input() public VertigoProcessedData: VertigoProcessedData;
  public SelectedSeries: DataType[] = [];

  public seriesChanged(event: DataType[]) {
    this.SelectedSeries = event;
  }

  public onLoaded(event: VertigoRawData) {
    this.VertigoRawData = event;
  }

  public onProcessedLoaded(event: VertigoProcessedData) {
    this.VertigoProcessedData = event;
  }
}