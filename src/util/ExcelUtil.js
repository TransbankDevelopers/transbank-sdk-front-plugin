import { Workbook } from 'exceljs';
import FileSaver from 'file-saver';

export const jsonToFileDownload = (headers, data, names, filename) => {
    let wb = new Workbook();
    let ws = wb.addWorksheet("data");
    addTableToWorksheet(ws, headers, data, names);
    wb.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], 
            { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        FileSaver.saveAs(blob, filename);
    });
  }

  export const addTableToWorksheet = (ws, headers, names, data) => {
    addTitleRow(ws, headers);
    data.forEach(item => {
      let array = names.map(name => item[name]);
      ws.addRow(array);
    });
  }

  export const addTitleRow = (ws, headers) => {
    let row = ws.addRow(headers);
    return row;
  }
