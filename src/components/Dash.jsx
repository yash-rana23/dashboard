import React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from './Chart'
import CircularProgress from '@mui/joy/CircularProgress'

function Dash() {
    const percentage1 = 78
    const percentage2=95
    const percentage3=59
  return (
    <div className='ml-[5%] py-6 mt-10 profile'>
      <p className='text-[blue]'>Retirement Income</p>
      <h1 className='text-3xl profile font-bold'>Starting Year 2056</h1>
      <br />
      <div className='grid grid-cols-3 gap-4  '>
        <div className='border-b-2 border-blue-400 pb-2'>
          <h1 className='font-bold text-3xl'>$300,000</h1>
          <p className='text-[#526D82]'>My Goal</p>
        </div>
        <div className='border-b-2 border-blue-400 pb-2'>
          <h1 className='font-bold text-3xl'>59%</h1>
          <p className='text-[#526D82]'>Goal Achieved</p>
        </div>
        <div className='border-b-2 border-blue-400 pb-2'>
          <h1 className='font-bold text-3xl'>$300</h1>
          <p className='text-[#526D82]'>Est. Monthly Income</p>
        </div>
      </div>
      <br></br>
      <div className='my-2'>
        <h1 className='font-bold mb-2 text-lg '>Contributions Overtime</h1>
        <div className='grid grid-cols-3 gap-4  '>
          <div className='flex'>
            <p className='text-[#526D82]'>Employer: </p>
            <p className='ml-2 font-bold'>K 73,500</p>
          </div>
          <div className='flex'>
            <p className='text-[#526D82]'>Employee: </p>
            <p className='ml-2 font-bold'>K 52,500</p>
          </div>
          <div className='flex'>
            <p className='text-[#526D82]'>Total Interest: </p>
            <p className='ml-2 font-bold'>K 244,313</p>
          </div>
        </div>

        <Chart />
        <br></br>
        <h2 className='font-bold text-lg'>How do I compare to my peers?</h2>
        <p className='text-[#526D82]'>
          These numbers represent current goals achievements:
        </p>
        <br></br>
        <div className=' mt-2 grid grid-cols-4   '>
          <div className='flex flex-col'>
            <div>
              <p>Age: Under 30</p> 
            </div>
            <div>
              <p>Salary: K 20-K 30</p>
            </div>
            <div>
              <p>Gender: Male</p>
            </div>
          </div>
          <div className=' '>
            <CircularProgress size='lg' determinate value={78}>
              78
            </CircularProgress>
            <p className='pl-2'>Average</p>
          </div>
          <div className=''>
            <CircularProgress size='lg' determinate value={95}>
              95
            </CircularProgress>
            <p className='pl-5'>Top</p>
          </div>
          <div className=''>
            <CircularProgress size='lg' determinate value={59}>
              59
            </CircularProgress>
            <p className='pl-5'>Me</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash