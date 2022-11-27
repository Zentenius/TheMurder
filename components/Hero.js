export default function Hero() {
    return (
      <div id="homepage" className='px-32 py-24 min-h-screen' style={{ backgroundImage: `url("https://i.pinimg.com/originals/8c/c9/3c/8cc93ce6ebeecc582dda631776bde470.jpg")` }}>
        <div className='flex flex-row'>
          <div className='basis-1/2'>
              <h1 className='text-[60px] font-bold pb-8 pt-8'>The Murder At</h1>
              <h1 className='text-blue-900 font-bold text-[60px] testing'>Dunsinane</h1>
              <div className='pt-8'>
                <p className=''>
                <em>Would you kill so many people to secure your place as king of scotland?</em>
                </p>
              </div>
              <div className=' pt-8'>
               <a type='button' href="#summary" className='btn btn-outline rounded w-36 normal-case font-bold'>Explore</a>
              </div>
          </div>
        </div>
      </div>
  
    )
  
  }