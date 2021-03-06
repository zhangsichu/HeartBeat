import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/dora/service/api.service';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss'],
})
export class ExportCsvComponent implements OnInit {
  @Input() includeBoardData: boolean;
  @Input() includePipelineData: boolean;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  downloadBoardCsv() {
    this.apiService.fetchExportData('board').subscribe((res) => {
      const exportedFilenmae = 'board-data.csv';
      const blob = new Blob([res], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', exportedFilenmae);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    });
  }

  downloadPipelineCsv() {
    this.apiService.fetchExportData('pipeline').subscribe((res) => {
      const exportedFilenmae = 'pipeline-data.csv';
      const blob = new Blob([res], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', exportedFilenmae);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    });
  }
}
