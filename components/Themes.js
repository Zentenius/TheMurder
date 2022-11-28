export default function Themes() {

    return(
            <section  data-aos="fade-up" className='min-h-screen bg-gradient-to-r from-black to-[#313236] justify-items-center pt-3'>
                <h1 className='text-center m-auto'>Themes</h1>
                <div className="overflow-x-auto pt-10 w-3/4 m-auto hidden md:block">
                    <table className="table">
                    {/*<!-- head -->*/}
                    <thead>
                        <tr>
                        <th></th>
                        <th>Theme</th>
                        <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*-- row 1 -->*/}
                        <tr className="hover h-40 p-0">
                        <th>1</th>
                        <td>Ambition</td>
                        <td>The theme of ambition is  seen in Macbeth&apos;s constant need to become the king and to remain the king without being overthrown by anyone. <br></br>This ambition caused him to become  very involved in his own desires and to lose consideration of other persons he cared about. This ambition led to his ultimate downfall.</td>
                        </tr>
                        {/*<!-- row 2 -->*/}
                        <tr className="hover h-40">
                        <th>2</th>
                        <td>Bravery/Courage</td>
                        <td>Macbeth displays extreme bravery when he fights for his country and wins and is awarded the title of Thane of Cawdor.
                
                Macbeth is also courageous when he fearlessly fights <br></br>with Macduff at the very end of the story.</td>
                        </tr>
                        {/*<!-- row 3 -->*/}
                        <tr className="hover h-40">
                        <th>3</th>
                        <td>Good versus evil</td>
                        <td>In the beginning, Macbeth is a very good man who is loyal, trustworthy, responsible and honourable. He becomes evil as he is influenced by his wicked wife to kill King Duncan He is also influenced by the three witches who are evil and deceive him. Ultimately, Macbeth changes and becomes evil through deception, violence and greed.</td>
                        </tr>
                
                        {/*<!-- row 4 -->*/}
                        <tr className='hover h-40'>
                        <th>4</th>
                        <td>Deception</td>
                        <td> Lady Macbeth and Macbeth trick, lie and kill persons in order to become King and Queen of Scotland. King Duncan is deceived by his  trusted and loyal subject Macbeth. <br></br >He felt safe staying at Dunsinane Castle with the Macbeths who ultimately  killed him.  Macbeth is tricked by the witches who make him think that he is immortal and cannot be hurt by anyone <br></br>. This makes him feel  overconfident and he is eventually killed by Macduff.</td>
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
                                    Ambition
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                            The theme of ambition is  seen in Macbeth&apos;s constant need to become the king and to remain the king without being overthrown by anyone. This ambition caused him to become very involved in his own desires and to lose consideration of other persons he cared about. This ambition led to his ultimate downfall.
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#2</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                    Bravery/Courage
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        Macbeth displays extreme bravery when he fights for his country and wins and is awarded the title of Thane of Cawdor.
                
                Macbeth is also courageous when he fearlessly fights <br></br>with Macduff at the very end of the story.
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#3</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                    Good versus Evil
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        In the beginning, Macbeth is a very good man who is loyal, trustworthy, responsible and honourable. He becomes evil as he is influenced by his wicked wife to kill King Duncan <br></br>. He is also influenced by the three witches who are evil and deceive him. Ultimately, Macbeth changes and becomes evil through deception, violence and greed.
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="text-white font-bold hover:underline">#4</a>
                                <div class="badge bg-black gap-2 p-4 mx-3 rounded-lg">
                                    Deception
                                </div>
                            </div>

                        </div>
                        <div className="text-sm text-gray-700">
                        Lady Macbeth and Macbeth trick, lie and kill persons in order to become King and Queen of Scotland. King Duncan is deceived by his  trusted and loyal subject Macbeth. He felt safe staying at Dunsinane Castle with the Macbeths who ultimately  killed him.  Macbeth is tricked by the witches who make him think that he is immortal and cannot be hurt by anyone. This makes him feel  overconfident and he is eventually killed by Macduff. 
                        </div>
                    </div>
                </div>

            </section>
        )
          

}