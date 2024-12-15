import React from 'react';

export function Dailyreport({ weekDaysData }) {
  return (
    <>
      <div className="border-2 bg-slate-50 rounded-md shadow-md">
        <div className="p-4 text-center text-lg font-bold text-indigo-500">
          Daily Report
        </div>
        <div className="px-6 pb-4">
          <div className="overflow-x-auto border-2 rounded-lg bg-slate-100 shadow-sm">
            <table className="w-full text-sm text-slate-700">
              <thead className="bg-slate-200 text-left font-semibold">
                <tr>
                  <th className="px-4 py-2">Organization Name</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Order ID</th>
                </tr>
              </thead>
              <tbody>
                {weekDaysData.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="px-4 py-2">{data.organizationName}</td>
                    <td className="px-4 py-2">{data.amount}</td>
                    <td className="px-4 py-2">{data.orderId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dailyreport;
