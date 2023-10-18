import React, { useState } from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Heading from './components/heading/heading';
import Rowdata from './components/rowdata/rowdata';
import DatePicker from "react-multi-date-picker"
import Add from './components/addingdata/Add';

const Home = () => {
  const [state, setState] = useState({
    date: null,
    focused: null,
  });
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])
  const test = (e) => {
    console.log(e[0].day)
  }
  return (
    <div style={{ width: "100vw" }} className=''>
      <table style={{ width: "100%" }} className=' border'>
        <Heading />
        <Add />
        <Rowdata />
      </table>
      <DatePicker
        multiple
        value={values}
        onChange={test}
      />


      <button onClick={() => console.log(state.date._d.getTime())}>Test</button>
    </div>
  )
}

export default Home
{/* <SingleDatePicker
noBorder
date={state.date}
id="your_unique_id"
onDateChange={(date) => {
  setState((prev) => ({ ...prev, date }));
}}
focused={state.focused}
onFocusChange={({ focused }) =>
  setState((prev) => ({ ...prev, focused }))
}
numberOfMonths={1}
/> */}
