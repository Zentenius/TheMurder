export default function Location() {

    return(
      <section data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236] m-auto'>
        <h1 className='text-center m-auto text-5xl p-10'>Location</h1>
        <p className='mx-auto p-5 md:w-3/5 indent-8 m-auto text-gray-400 md:text-2xl text-center'>This story takes place in at Dunsinane Castle located at a place called Dunisnane hill in Scotland</p>
        <div className='relative md:w-1/2 w-72 m-auto md:h-96 h-72'>
        <iframe src="https://maps.google.com/maps?q=Dunisnane&t=&z=13&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
        </div>
      </section>
    )
  
  }