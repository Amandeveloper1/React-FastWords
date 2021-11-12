import React from 'react'
import './Css/competition.css';
import img1 from './photos/typingimg.jpg';

export default function Competition() {
    const competitionclick = () => {
        let firstone = document.getElementById('blockone');
        firstone.classList.add('block');
        let secondone = document.getElementById('secondone');
        secondone.classList.remove('block');

    }
    return (
        <>
            <div className="container" id="blockone" style={{ marginBottom: "80vh" }} >

                <div className="firstone" id="firstone" onClick={competitionclick}>
                    <div className="disflesc">
                        <img className="typimg" src={img1} alt="" />
                        <div className="com-rules">
                            <h1>FastWrods.con competition</h1>
                            <div className="fn-c">
                                This competition oragnise by FastWrod.com or this competition orgains for fast typer and who are not in fast typing then practice on typing on this website.
                            </div>
                            <div className="fn-c">
                                In the practice section wrod are come in the competition then you have to practice on the word give in the practice section.
                            </div>
                            <div className="mt-2 fn-c ">
                                For More information have to click here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="secondone" className="block ">
                <div className="details container fn-c ">
                    <div className="mt-4">
                        <h1>FastWrods.con competition</h1>
                        <div >
                            This competition oragnise by FastWrod.com or this competition orgains for fast typer and who are not in fast typing then practice on typing on this website.
                        </div>
                        <div >
                            In the practice section wrod are come in the competition then you have to practice on the word give in the practice section.
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1>Which trems and condition we have to follow</h1>
                        <div>
                            1. Your have to frist create your account and login us.
                        </div>
                        <div>
                            2. Any person who can participate in competition and we are give a participation date this date you have to partticepate.
                        </div>
                        <div>
                            3. Then you are participate in the competition and wait for competition date in the time you have practice on the website.
                        </div>
                        <div>
                            4. In the website practice section the word are in competition round.
                        </div>
                        <div>
                            5. Now are the important point are there, competition who to organis now competition community give 15 minites and in 15 minites 3 round in there.
                        </div>
                        <div>
                            6. frist round you write your test and wait some 2,3 minites then write sound round  and wait 2,3 minites then write third round and wait 2,3 minites every round we count your wpm the all three ruond wpm speed count then which wpm speed is give rank then top 5 plears win the competition.
                        </div>
                    </div>
                </div>

                <div className="details container fn-c mt-4">
                    <div>
                        <h1>Time and Date of competition</h1>
                        <div>Competition date on 2 janvary 2022</div>
                        <div>Participate date are open on 20 to 26 decamber 2021</div>
                    </div>
                    <div className="mt-4">
                        <button disabled className='btn third'>Particepate Now </button>
                    </div>
                </div>
            </div>
        </>

    )
}
// who guy is frist and same littel bit small who guy is sound then we are give a rank