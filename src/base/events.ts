// 阻止冒泡
export const stopBubble = (e:Event) => {
  // w3c
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    // ie浏览器
    (<any>window).event.cancelBubble = true;
  }
};

// 阻止默认
export const stopDefault = (e:Event) => {
  // w3c
  if (e && e.preventDefault) {
    e.preventDefault();
  } else {
    // ie
    (<any>window).event.returnValue = false;
  }
  return false;
};


/** 剪贴板 */
export function copy(text: string, success: () => {}, error: () => {}) {
  /** 复制文本，不用传递 dom 节点 */
  function clipboard(window: any, document: any, navigator: any) {
    var textArea: any;

    // 判断是不是ios端
    function isOS() {
      return navigator.userAgent.match(/ipad|iphone/i);
    }
    // 创建文本元素
    function createTextArea(text: string) {
      textArea = document.createElement("textArea");
      textArea.value = text;
      document.body.appendChild(textArea);
    }
    // 选择内容
    function selectText() {
      var range, selection;

      if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
    }

    // 复制到剪贴板
    function copyToClipboard(success: () => {}, error: () => {}) {
      try {
        if (document.execCommand("Copy")) {
          // alert('复制成功！')
          if (success) {
            success && success();
          } else {
            alert("复制成功！");
          }
        } else {
          // alert('复制失败！请手动复制！')
          if (error) {
            error && error();
          } else {
            alert("复制失败！请手动复制！");
          }
        }
      } catch (err) {
        console.log("err: ", err);
        if (error) {
          error && error();
        } else {
          alert("复制出错！请手动复制！");
        }
      }
      document.body.removeChild(textArea);
    }

    return function (text: string, success: () => {}, error: () => {}) {
      createTextArea(text);
      selectText();
      copyToClipboard(success, error);
    };
  }
  const clipboardCallback = clipboard(window, document, navigator);
  return clipboardCallback(text, success, error);
}

/**
 *转换成 excel
 *
 * @param {string} tableId - 表格 ID 或 node
 * @param {string} filename - 存储表格名称 [filename="test"]
 */
export function toExcel(tableId: HTMLElement|string | any, filename = "test") {
  let uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head>' +
      "<!--[if gte mso 9]><xml>" +
      "<x:ExcelWorkbook>" +
      "<x:ExcelWorksheets>" +
      "<x:ExcelWorksheet>" +
      "<x:WorksheetOptions><x:Print><x:ValidPrinterInfo /></x:Print></x:WorksheetOptions>" +
      "</x:ExcelWorksheet>" +
      "</x:ExcelWorksheets>" +
      "</x:ExcelWorkbook></xml><![endif]--> </head><body><table>{table}</table></body></html>";
  if (!tableId.nodeType) tableId = document.getElementById(tableId);
  var ctx = {
    worksheet: filename || "Worksheet",
    table: tableId.innerHTML,
  };
  let base64 = function (s: any) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function (s: any, c: any) {
      return s.replace(/{(\w+)}/g, function (m: any, p: any) {
        return c[p];
      });
    };
  var path = uri + base64(format(template, ctx));
  var dlink = document.createElement("a");
  dlink.href = path;
  dlink.download = `${filename}.xls`;
  document.body.appendChild(dlink);
  dlink.click();
  dlink.remove();
}

/**
 *转成 csv 文件
 *
 * @param {string} tableId - 表格 ID 值
 * @param {string} filename - 保存的文件名
 */
export function toCSV(this: any, tableId: string | any, filename: string) {
  const { URL, navigator } = window;
  const _filename: string =
    typeof filename === "undefined" ? tableId : filename;
  // Generate our CSV string from out HTML Table
  var csv = this.tableToCSV(document.getElementById(tableId));
  // Create a CSV Blob
  var blob = new Blob([csv], {
    type: "text/csv",
  });

  // Determine which approach to take for the download
  if ((<any>navigator).msSaveOrOpenBlob) {
    // Works for Internet Explorer and Microsoft Edge
    (<any>navigator).msSaveOrOpenBlob(blob, _filename + ".csv");
  } else {
    this.downloadAnchor(URL.createObjectURL(blob), filename, "csv");
  }
}

/** 下载文件
 * @param {string} content 内容
 * @param {string} ext 后缀名
 * @param {string} filename 文件名
 */
toCSV.prototype.downloadAnchor =  function(content: string, filename: string, ext: string) {
  var anchor: any = document.createElement("a");
  anchor.style = "display:none !important";
  anchor.id = "downloadanchor";
  document.body.appendChild(anchor);

  // If the [download] attribute is supported, try to use it

  if ("download" in anchor) {
    anchor.download = filename + "." + ext;
  }
  anchor.href = content;
  anchor.click();
  anchor.remove();
}



toCSV.prototype.tableToCSV = function(table: any) {
  // We'll be co-opting `slice` to create arrays
  var slice = Array.prototype.slice;
  return slice
    .call(table.rows)
    .map(function (row) {
      return slice
        .call(row.cells)
        .map(function (cell) {
          return '"t"'.replace("t", cell.textContent);
        })
        .join(",");
    })
    .join("\r\n");
}