import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass']
})
export class ChartsComponent implements OnInit {

  charts!: Array<any>
  compareChart!: any
  compareData!: any

  ngOnInit() {
    this.compareChart = {
      bg: "#505050",
      title: "Temperature",
      line: "#2a9d8f",
      data: this.compareData,
      type: "line"
    }

    this.charts = [
      {
        bg: "#404040",
        title: "Temperature",
        line: "#2a9d8f",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        type: "line",
        compare: false
      },
      {
        bg: "#404040",
        title: "Humidity",
        line: "#e76f51",
        data: [9, 8, 7, 6, 5, 4, 3, 21, 1],
        type: "line",
        compare: false
      },
      {
        bg: "#404040",
        title: "Light",
        line: "#457b9d",
        data: [16, 511, 864, 16, 5, 441, 515, 4],
        type: "line",
        compare: false
      }
    ]
  }
}
