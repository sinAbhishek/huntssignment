import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker"
const Add = () => {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState(today)
  const test = (e) => {
    console.log(e)
  }
  return (
    <tr><td className=' border'>N/A</td><td>N/A</td><td><DatePicker
      multiple={false}
      value={values}
      onChange={test}
    /></td><td>End Date</td><td>Montd,Year</td><td>Dates Excluded</td><td>Lead Count</td><td>Start Date</td><td>Expected DRR</td><td>Last Updated</td></tr>
  )
}

export default Add