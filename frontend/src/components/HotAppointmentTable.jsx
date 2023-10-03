import React from 'react';

function HotAppointmentTable({ data }) {
  return (
    <div className="flex justify-center">
      <table className="table-auto table-zebra bg-white rounded-lg w-4/5">
        <thead className="thead-light text-left border-b-2">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Time</th>
            <th className="p-4">State</th>
          </tr>
        </thead>
        <tbody className="tbody-light">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="font-light border-b p-4">{row.Name}</td>
              <td className="font-light border-b p-4">{row.Time}</td>
              <td className="font-light border-b p-4">
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
