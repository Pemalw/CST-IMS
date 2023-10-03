import React from 'react';

function Table({ headers, data, captions }) {

  return (
    <div className="flex justify-center my-16">
        <table className="table-auto w-5/6">
            <caption className='text-left text-xl font-bold drop-shadow-4 mb-10'>{captions}</caption>
            <thead className='thead-light border-b-2'>
                <tr>
                {headers.map((header, index) => (
                    <th key={index} className="p-3 text-left">{header}</th>
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
