import uploadLicense from '../assets/submit.png'
import arrow from '../assets/right-arrow.png'
import valuation from '../assets/audit.png'
import getPaid from '../assets/get-paid.png'

const HowItWorks = () => {
    return (
      <div
        id="working"
        className="flex flex-col items-center justify-center h-screen p-10"
      >
        <h1 className='p-12 mb-8 font-semibold font-mono text-4xl underline'>How it works?</h1>
        <div className='flex flex-row items-center justify-center'>
          <div className="text-center items-center mr-5">
          <img src={uploadLicense} className='h-24 w-24'/>
          <h1 className='font-medium mt-5'>Upload license</h1>
          </div>
          <div><img src={arrow} className='h-10 w-10 mb-8'/></div>
          <div className="text-center mr-5 ml-5">
            <img src={valuation} className='h-24 w-24'/>
            <h1 className='font-medium mt-5'>Get Valuation</h1>
          </div>
          <div><img src={arrow} className='h-10 w-10 mb-8'/></div>
          <div className="text-center ml-5">
            <img src={getPaid} className='h-24 w-24'/>
            <h1 className='font-medium mt-5'>Get Paid</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  