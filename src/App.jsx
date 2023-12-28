import React from 'react'
import Calender from './components/Calender'
import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns/AdapterDateFns"

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div><Calender /></div>
    </LocalizationProvider>
  )
}

export default App