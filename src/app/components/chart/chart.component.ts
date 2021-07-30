import {Component, OnInit, Input} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {

  @Input() chartBg!: string;
  @Input() chartTitle!: string;
  @Input() chartLine!: string;
  @Input() chartData!: Array<number>;
  @Input() chartType!: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        backgroundColor: this.chartBg
      },
      title: {
        text: this.chartTitle,
      },
      series: [{
        data: this.chartData,
        type: this.chartType,
        color: this.chartLine
      }]
    }
  }
}
