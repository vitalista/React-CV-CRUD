import React from "react";

function PrintButton() {
  const printTable = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      "<html><head><title>Print CV</title></head><body>"
    );
    printWindow.document.write("<h1>Hello World</h1>");
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.onafterprint = () => {
      printWindow.close();
    };

    printWindow.print();
  };

  return (
    <button
      className="bg-blue-500 text-white border-0 py-2 px-5 rounded cursor-pointer hover:bg-blue-700"
      onClick={printTable}
    >
      Print CV
    </button>
  );
}

export default PrintButton;
