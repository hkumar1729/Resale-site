import dotIcon from '../assets/period.png'

const WhyChooseUS = () => {
    return (
      <div
        id="why choose us"
        className="flex flex-col items-center justify-evenly h-screen"
      >
        <h1 className='font-semibold font-mono text-2xl md:text-4xl underline -mb-28'>Why choose us</h1>
        <div className="flex flex-col items-start font-futura">
          <div className='flex flex-rows items-center justify-start'>
            <img src={dotIcon} className='h-10 w-10'/>
            <p className='font-normal'>Best Market Prices</p>
          </div>
          <p className='ml-10'>Get the highest value for your software licenses.</p>
          <div className='flex flex-rows items-center'>
            <img src={dotIcon} className='h-10 w-10'/>
            <p>Fast & Secure Transactions</p>
          </div>
          <p className='ml-10'> Quick payments with full security.</p>
          <div className='flex flex-rows items-center'>
            <img src={dotIcon} className='h-10 w-10'/>
            <p>Seamless Process</p>
          </div>
          <p className='ml-10'>Upload, get valuation, get paid.</p>
          <div className='flex flex-rows items-center'>
            <img src={dotIcon} className='h-10 w-10'/>
            <p>Dedicated Support</p>
          </div>
          <p className='ml-10'> 24/7 support for any queries.</p>
        </div>

      </div>
    );
  };
  
  export default WhyChooseUS;
  