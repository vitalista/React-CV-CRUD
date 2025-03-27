import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
function PrintButton() {

    const printTable = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print CV</title></head><body>');
        printWindow.document.write('<h1>Hello World</h1>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.onafterprint = () => {
            printWindow.close();
        };

        printWindow.print();
    };

    return (
        <>
            <Button onClick={printTable}>Print CV</Button>
        </>
    );
}

export default PrintButton;
