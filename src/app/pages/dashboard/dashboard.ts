import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import { getData, getPieData } from '../../data';

@Component({
  selector: 'app-dashboard',
  imports: [AgCharts, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  public options: any;
  public pieoptions: any;

  constructor() {
    this.options = {
      title: {
        text: "Apple's Revenue by Product Category",
      },
      subtitle: {
        text: "In Billion U.S. Dollars",
      },
      data: getData(),
      series: [
        {
          type: "bar",
          xKey: "quarter",
          yKey: "iphone",
          yName: "iPhone",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "mac",
          yName: "Mac",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "ipad",
          yName: "iPad",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "wearables",
          yName: "Wearables",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "services",
          yName: "Services",
        },
      ],
    };

    this.pieoptions = {
      data: getPieData(),
      title: {
        text: "Portfolio Composition",
      },
      series: [
        {
          type: "pie",
          angleKey: "amount",
          legendItemKey: "asset",
        },
      ],
    };
  }

  callAnalyticsData = [
    {
      dealer: {
        name: 'Ritik Beniwal',
        id: 'DMI1029384',
        logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png' // sample icon
      },
      additionalInfo: {
        type: 'Lead',
        id: '03AAAKDJ9283KNS4NDI'
      },
      issueCategory: 'KYC',
      issueStatus: 'UnResolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Rescheduled',
      callDetails: {
        date: '20 Apr 2025',
        time: '01:12 PM',
        duration: '04:12 min'
      },
      actions: ['info', 'calendar', 'message']
    },
    {
      dealer: {
        name: 'Avika Sharma',
        id: 'DMI1029384',
        logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
      },
      additionalInfo: {
        type: 'Opportunity',
        id: '03AAAKDJ9283KNS4NDI'
      },
      issueCategory: 'e-Mandate',
      issueStatus: 'Resolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDetails: {
        date: '20 Apr 2025',
        time: '01:30 PM',
        duration: '05:10 min'
      },
      actions: ['info', 'calendar', 'message']
    },
    {
      dealer: {
        name: 'Naman Jain',
        id: 'DMI1029384',
        logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
      },
      additionalInfo: {
        type: 'Contact ID',
        id: '03AAAKDJ9283KNS4NDI'
      },
      issueCategory: 'e-Mandate',
      issueStatus: 'Pending',
      comments: 'Lorem Ipsum',
      callStatus: 'Cancelled',
      callDetails: {
        date: '20 Apr 2025',
        time: '02:00 PM',
        duration: '03:55 min'
      },
      actions: ['info', 'calendar', 'message']
    }
  ];

  callDashboardMetrics = [
    {
      title: 'Total Calls Originated',
      value: '9232',
    },
    {
      title: 'Answered Calls',
      value: '7293',
      percentageChange: '78.9%',
      trend: 'up',
    },
    {
      title: 'Abandoned Calls',
      value: '1939',
      percentageChange: '21.1%',
      trend: 'down',
    },
    {
      title: 'Total Talk Time',
      value: '730',
      unit: 'Hrs',
    },
    {
      title: 'Avg. Wait Time',
      value: '1 Min 50 Sec',
    },
    {
      title: 'Avg. Call Time',
      value: '6 Min 15 Sec',
    }
  ];

}
