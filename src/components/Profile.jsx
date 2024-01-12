import React from 'react'
import man from '../assets/man.jpeg'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Profile() {
  return (
    <div className='profile px-6 '>
      <div className='px-3  flex w-max-full py-[10%]'>
        <img className='w-[30%] h-[30%] rounded-[100%]' src={man} />
        <div className='py-4'>
          <p className='  ml-3 text-2xl'>
            <strong> Hi Mike,</strong>
          </p>

          <p className=' px-3'> welcome back.</p>
        </div>
      </div>
      <div className='px-6 '>
        <p className='text-md'>
          <strong>Today</strong>
        </p>
        <br></br>
        <p className=' text-3xl font-bold'>$19,892</p>
        <p className='text-sm text-[#526D82]'>Account balance.</p>
        <br></br>
        <p className=' text-lg font-bold'>$4000</p>
        <p className=' text-[#526D82] text-sm'>Year-to-Date Contributions</p>
        <br></br>
        <p className=' text-lg font-bold'>$1,892</p>
        <p className=' text-[#526D82] text-sm'>Total interest</p>
        <br></br>
        <div className='w-[50%] '>
          <DropdownButton
            id='dropdown-basic-button'
            title='I want to'
            className=' bg-primary rounded-lg '
            data-bs-theme='dark'
          >
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <br></br>
        <div className=''>
          <p className=' text-lg font-bold'>Recent Transactions</p>
          <b></b>
          <p className=' text-[#526D82] text-sm'>2020-09-07</p>
          <p className='font-bold'>Withdrawal Transfer to Bank-XXX11</p>
          <br></br>
          <p className=' text-[#526D82] text-sm'>2020-09-07</p>
          <p className='font-bold'>Withdrawal Transfer to Bank-XXX11</p>
          <br></br>
          <p className=' text-[#526D82] text-sm'>2020-09-07</p>
          <p className='font-bold'>Withdrawal Transfer to Bank-XXX11</p>
        </div>
      </div>
    </div>
  )
}

export default Profile