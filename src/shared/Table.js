import React from 'react'

function TableRow (props) {

    const weather = props.weather
   const listItems = weather.map((value) => 
       <tr key={value.dt}>
          <td>{value.dt_txt}</td>
          <td>{value.main.temp}</td>
           <td>{value.weather.map(a => a.main)}</td>
          </tr>
       
    )
    return (<table className="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Temperature (Celsium)</th>
        <th>Weather condition</th>
      </tr>
      </thead>
      <tbody>{listItems}</tbody> 
      </table>
    ) 

} 
export default TableRow