import React from 'react';
import AddPatientRecord from './AddPatientsRecord';

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
                <th>
                  
                </th>
                </tr>
            </thead>
            <tbody className='tbody-light'>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {headers.map((header, colIndex) => (
                    <td className="font-light text-left border-b p-4 " key={colIndex}>{row[header]}</td>
                    ))}
                    <td>
                        <button className="btn btn-sm normal-case bg-[#003046] text-base-100 btn-accent border-0" onClick={()=>document.getElementById('my_modal').showModal()}>
                            Generate Report
                        </button>
                        <dialog id="my_modal" className="modal">
                          <div className="modal-box w-11/12 max-w-5xl bg-slate-50">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <AddPatientRecord />
                            <div className="modal-action">
                            </div>
                          </div>
                        </dialog>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  );
}

export default Table;
