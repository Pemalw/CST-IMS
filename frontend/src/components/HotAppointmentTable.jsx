import React from 'react';

function HotAppointmentTable({ data }) {
  return (
    <div>
      <table className="table-auto">
        <thead className='thead-light border-b-2'>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody className='tbody-light'>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="font-light text-left border-b p-4">{row.Name}</td>
              <td className="font-light text-left border-b p-4">{row.Time}</td>
              <td className="font-light text-left border-b p-4">
                {row.State === 'yes' ? (
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Came
                  </button>
                ) : (
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Did Not Come
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotAppointmentTable;
