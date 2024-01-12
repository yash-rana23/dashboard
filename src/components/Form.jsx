import React from 'react'

  import InputSlider from './Slider'
  import { ChevronRight } from 'lucide-react'
function Form() {
  return (
    <div className='flex flex-col h-full ml-[8%] pt-[1%] text-md'>
      <div className='border rounded-xl  py-2  profile my-3 w-full bg-[#FAFAFA]'>
        <div className='mt-4 px-6'>
          <div className='border-b-2 pb-4 mb-4'>
            <h1 className='font-bold text-xl'>Retirement Strategy</h1>
            <br></br>
            <h4 className='font-bold mb-2'>Employee Contribution</h4>
            <InputSlider />
            <br></br>
            <h1 className='font-bold text-md'>Retirement Strategy</h1>
            <br></br>
            <h3 className='font-bold mb-2'>Employee Contribution</h3>
            <InputSlider />
          </div>
          <div className='font-bold'>
            <div className='flex justify-between my-3'>
              <h2 className='text-md'>Employer Contribution:</h2>
              <h2>8.4%</h2>
            </div>
            <div className='flex justify-between'>
              <h2>Interest Rate:</h2>
              <h2>5%</h2>
            </div>
          </div>
          <div className='my-3 flex flex-col items-center'>
            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 3 rounded-full w-[70%]'>
              Update
            </button>

            <div className='flex  items-center'>
              <a href='' className='text-[blue] text-lg '>
                View Help Docs
              </a>
              <div className=''>
                <ChevronRight size={20} strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-l-2 border-[blue] px-4 '>
        <h3>
          Are you considering a <br></br>
          <strong>Housing Advance?</strong>
        </h3>
        <p className='text-[#526D82]'>Limited time reduced interests.</p>
        <div className='flex items-center'>
          <a href='' className='text-[blue] '>
            Learn More
          </a>
          <ChevronRight size={15} strokeWidth={1.25} />
        </div>
      </div>
    </div>
  )
}

export default Form