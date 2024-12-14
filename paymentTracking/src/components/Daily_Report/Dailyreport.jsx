import React from 'react';

export function Dailyreport({weekDaysData}) {
  return (
    <>
    <div>
      <div className='p-2 my-2 text-center font-bold'>
        Daily Report
      </div>
      <div className='px-8'>
        <table class= "border flex flex-col rounded-lg">
          <thead className="font-bold p-2 border-b border-gray-300">
            <tr class= "flex justify-between space-x-4"> 
              <td>Organization Name</td>
              <td>Amount</td>
              <td>Order ID</td>
            </tr>
          </thead>
          <tbody className="p-4 border-b border-gray-300">
            {weekDaysData.map((data, index) => (
              <tr key={index} class= "flex justify-between space-x-4">
                <td >{data.organizationName}</td>
                <td>{data.amount}</td>
                <td>{data.orderId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Dailyreport;
