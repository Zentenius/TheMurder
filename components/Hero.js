
export default function Hero() {
    return (
      <div id="homepage" className='md:px-32 p-14 py-24 min-h-screen custom' style={{ backgroundImage: `url("https://i.pinimg.com/originals/8c/c9/3c/8cc93ce6ebeecc582dda631776bde470.jpg")` }}>
        <div className='flex flex-row mx-auto'>
          <div className=''>
              <h1 className='text-4xl md:text-[60px] font-bold pb-8 pt-8'>The Murder At</h1>
              <h1 className='text-blue-900 font-bold  text-4xl md:text-[60px] testing sm:mb-5'>Dunsinane</h1>
              <div className='pt-8'>
                <p className='md:text-left mx-auto'>
                <em>Would you kill so many people to secure your place as king of scotland?</em>
                </p>
              </div>
              <div className=' pt-8 justify-center'>
               <a type='button' href="#summary" className='btn btn-outline rounded w-36 normal-case font-bold'>Explore</a>
              </div>
          </div>
        </div>
      </div>
  
    )
  
  }
  


/*
export default function Hero() {

    return (
        <section>
            <div className="container flex flex-col-reverse md:flex-row items-center mx-auto mt-10 space-y-0 md:space-y-0">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold md:text-5xl md:textleft">The Murder At<br/><span className="testing">Dunsinane</span></h1>
                </div>
            </div>
        </section>
    )

}
*/
