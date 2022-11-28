export default function Vocab() {

    return(
            <section  data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236]'>
                <h1 className='text-center m-auto'>Vocabulary</h1>
                <div className="overflow-x-auto pt-10 w-3/4 m-auto hidden md:block">
                <table className="table m-auto">
                    {/*<!-- head -->*/}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Word</th>
                        <th>Defintion</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*-- row 1 -->*/}
                    <tr className="hover h-40 p-0">
                        <th>1</th>
                        <td>Torrential</td>
                        <td>(of rain) falling rapidly and in copious quantities.</td>
                    </tr>
                    {/*<!-- row 2 -->*/}
                    <tr className="hover h-40">
                        <th>2</th>
                        <td>Brandish</td>
                        <td>wave or flourish (something, especially a weapon) as a threat or in anger or excitement.</td>
                    </tr>
                    {/*<!-- row 3 -->*/}
                    <tr className="hover h-40">
                        <th>3</th>
                        <td>Desolate</td>
                        <td>(of a place) uninhabited and giving an impression of bleak emptiness.</td>
                    </tr>

                    {/*<!-- row 4 -->*/}
                    <tr className='hover h-40'>
                        <th>4</th>
                        <td>Moor</td>
                        <td>a tract of open uncultivated upland, typically covered with heather.</td>
                    </tr>

                        {/*<!-- row 5 -->*/}
                        <tr className='hover h-40'>
                        <th>5</th>
                        <td>Brooding</td>
                        <td>engaged in or showing deep thought about something that makes one sad, angry, or worried.</td>
                    </tr>
                    </tbody>
                </table>

                    
                </div>
                <div className="grid grid-cols-1 gap-4 md:hidden m-5">
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#1</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                Torrential
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        (of rain) falling rapidly and in copious quantities.
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#2</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                Brandish
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        wave or flourish (something, especially a weapon) as a threat or in anger or excitement
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#3</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                    Desolate
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        (of a place) uninhabited and giving an impression of bleak emptiness.
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#4</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                    Moor
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        a tract of open uncultivated upland, typically covered with heather.
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#5</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                    Brooding
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                            engaged in or showing deep thought about something that makes one sad, angry, or worried.
                        </div>
                    </div>
                </div> 


            </section>
        )
          

}