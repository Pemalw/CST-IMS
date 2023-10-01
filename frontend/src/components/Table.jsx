import React from 'react';

function Table({ headers, data, captions }) {

  return (
    <div>
        <table className="table-auto">
            <caption className='text-left font-bold drop-shadow-4'>{captions}</caption>
            <thead className='thead-light border-b-2'>
                <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
                </tr>
            </thead>
            <tbody className='tbody-light'>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {headers.map((header, colIndex) => (
                    <td className="font-light text-left border-b p-4 " key={colIndex}>{row[header]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  );
}

export default Table;
