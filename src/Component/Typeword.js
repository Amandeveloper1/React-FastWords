import React, { useContext } from 'react'
import './Css/typeword.css';
import img1 from './photos/headicon.png';
import './photos/loader.gif';
import contentContext from '../context/content/contentContext';


export default function Typeword(props) {

    const nodea = useContext(contentContext);

    document.onkeypress = (e) => {
        getPoint();
        let Active = document.getElementById('active');
        let activeElement = document.getElementById('now');
        let startNow = activeElement.innerText;
        let wordSec = document.getElementById('wordSec');
        let time = document.getElementById('time');
        let timenow = parseInt(time.innerText);

        if (wordSec.firstElementChild.firstElementChild === activeElement && timenow === 60) {
            timeStartNow();
            disabledAll();
        }

        if (e.key === startNow) {

            if (activeElement.nextElementSibling) {
                currectWords();
                activeElement.classList.add('correct');
                activeElement.removeAttribute('id');
                activeElement.nextElementSibling.setAttribute('id', 'now');
            } else if (!activeElement.nextElementSibling) {
                if (activeElement.classList.contains('correct')) {
                    activeElement.removeAttribute('id');
                    let addHtmlError = `<litter id="now" class="incorrect extra">` + e.key + `</litter>`;
                    Active.innerHTML += addHtmlError;
                } else {
                    if (activeElement.classList.contains('extra')) {
                        activeElement.removeAttribute('id');
                        let addHtmlError = `<litter id="now" class="incorrect extra">` + e.key + `</litter>`;
                        Active.innerHTML += addHtmlError;
                    } else {

                        activeElement.classList.add('correct');
                        currectWords();
                    }
                }
            }
            allWords();
        } else if (e.code === 'Space') {

            if (Active.nextElementSibling) {
                if (Active.firstElementChild.classList.contains('correct') || Active.firstElementChild.classList.contains('incorrect')) {

                    Active.nextElementSibling.setAttribute('id', 'active');
                    Active.removeAttribute('id');
                    Active.nextElementSibling.firstElementChild.setAttribute('id', 'now');
                    activeElement.removeAttribute('id');
                    currectWords();
                }
            }
            allWords();
        } else if (e.key !== startNow) {

            if (activeElement.nextElementSibling) {
                activeElement.classList.add('incorrect');
                activeElement.nextElementSibling.setAttribute('id', 'now');
                activeElement.removeAttribute('id');
            } else if (!activeElement.nextElementSibling) {

                if (activeElement.classList.contains('incorrect')) {

                    activeElement.removeAttribute('id');
                    let addHtmlError = `<litter id="now" class="incorrect extra">` + e.key + `</litter>`;
                    Active.innerHTML += addHtmlError;
                } else if (activeElement.classList.contains('correct')) {
                    activeElement.removeAttribute('id');
                    let addHtmlError = `<litter id="now" class="incorrect extra">` + e.key + `</litter>`;
                    Active.innerHTML += addHtmlError;
                } else {
                    activeElement.classList.add('incorrect')
                }
            }
            allWords();
        }

    }

    document.onkeyup = (e) => {

        let Active = document.getElementById('active');
        let activeElement = document.getElementById('now');
        let wordSec = document.getElementById('wordSec');

        if (e.code === 'Backspace') {

            if (activeElement.classList.contains('extra')) {
                activeElement.previousElementSibling.setAttribute('id', 'now')
                Active.removeChild(activeElement)
            } else if (activeElement.previousElementSibling) {
                if (activeElement.classList.contains('correct') || activeElement.classList.contains('incorrect')) {
                    if (activeElement.classList.contains('correct')) {
                        removeWords();
                    }
                    activeElement.removeAttribute('class');
                } else {
                    if (activeElement.previousElementSibling.classList.contains('correct')) {
                        removeWords();
                    }
                    activeElement.previousElementSibling.setAttribute('id', 'now')
                    activeElement.removeAttribute('id')
                    activeElement.previousElementSibling.removeAttribute('class')
                }
            } else if (!activeElement.previousElementSibling) {
                if (activeElement.classList.contains('correct') || activeElement.classList.contains('incorrect')) {
                    if (activeElement.classList.contains('correct')) {
                        removeWords();
                    }
                    activeElement.removeAttribute('class');
                } else {
                    if (wordSec.firstElementChild.firstElementChild === Active.firstElementChild) {
                        console.log('that is last.');
                    } else {
                        Active.previousElementSibling.lastElementChild.setAttribute('id', 'now');
                        activeElement.removeAttribute('id');
                        Active.previousElementSibling.setAttribute('id', 'active');
                        Active.removeAttribute('id')
                        removeWords();
                    }
                }
            }
        }
    }

    const currectWords = () => {

        let wordCount = document.getElementById('wordCount');
        let currentWords = parseInt(wordCount.innerText);
        wordCount.innerText = currentWords + 1;

    }

    const allWords = () => {

        let allWord = document.getElementById('allWord');
        let countingAllWords = parseInt(allWord.innerText);
        allWord.innerText = countingAllWords + 1;

    }

    const removeWords = () => {

        let wordCount = document.getElementById('wordCount');
        let currentWords = parseInt(wordCount.innerText);
        wordCount.innerText = currentWords - 1;

    }

    const setWordNow = () => {
        let wordsec = document.getElementById('wordSec');
        let speed = document.getElementById('speed');
        let time = document.getElementById('time');
        let wordCount = document.getElementById('wordCount');
        let allWord = document.getElementById('allWord');

        speed.innerText = '00';
        time.innerText = '60';
        wordCount.innerText = '00';
        allWord.innerText = '00';

        wordsec.removeAttribute('class')
        wordsec.setAttribute('class', 'wordSec')




        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
        let rand = getRandom(0, 4)
        let randvalue = parseInt(rand)
        let mySentence = nodea[randvalue].sentence;
        let my = mySentence;
        wordsec.innerHTML = ' ';

        for (let i = 0; i < my.split(' ').length; i++) {

            if (my.split(' ')[i] === my.split(' ')[0]) {

                let nowword = my.split(' ')[0];
                wordsec.innerHTML += ' <span class="word" id="active" > </span>'

                for (let i = 0; i < nowword.length; i++) {
                    let active = document.getElementById('active');

                    // if (nowword[0] === nowword[0] && !active.firstElementChild) { Rember this is the meybe error
                    if (nowword[0] && !active.firstElementChild) {

                        active.innerHTML += '<litter id="now" >' + nowword[i] + '</litter>';
                    } else {

                        active.innerHTML += '<litter >' + nowword[i] + '</litter>';
                    }

                }

            } else {

                wordsec.innerHTML += ' <span class="word" id="nextone"> </span>';
                let nextone = document.getElementById('nextone');
                let nowword = my.split(' ')[i];

                for (let i = 0; i < nowword.length; i++) {

                    if (nowword.length === nextone.childElementCount + 1) {
                        nextone.innerHTML += '<litter >' + nowword[i] + '</litter>';
                        nextone.removeAttribute('id');
                    } else {
                        nextone.innerHTML += '<litter >' + nowword[i] + '</litter>';
                    }

                }

            }
        }

    }

    const loadingfirst = () => {

        let wordsec = document.getElementById('wordSec');
        wordsec.innerHTML = ` <div style=" text-align: center;  margin-top: 30px;"> <img src="/static/media/loader.cfc783bb.gif" alt="This img not work" style=" width: 80px; "   /> </div>`;
        props.setnav('start');
        if (props.valueinv !== 'notset') {
            clearInterval(props.valueinv);
        }
        setTimeout(() => {
            setWordNow();
        }, 200);  
    }

    function getPoint() {

        var target = document.getElementById("active");
        console.log(target.offsetTop);

        if (target.offsetTop > 410) {

            let wordSec = document.getElementById('wordSec');


            if (wordSec.classList.contains('fristheight')) {
                wordSec.classList.remove('fristheight')
                wordSec.classList.add('secondheight');

            } else if (wordSec.classList.contains('secondheight')) {
                wordSec.classList.remove('secondheight')
                wordSec.classList.add('thridheight');

            } else if (wordSec.classList.contains('thridheight')) {

                wordSec.classList.remove('thridheight')
                wordSec.classList.add('forthheight');

            } else if (wordSec.classList.contains('forthheight')) {

                wordSec.classList.remove('forthheight')
                wordSec.classList.add('fivethheight');

            } else if (wordSec.classList.contains('fivethheight')) {

                wordSec.classList.remove('fivethheight')
                wordSec.classList.add('sixthheight');

            } else if (wordSec.classList.contains('sixthheight')) {

                wordSec.classList.remove('sixthheight')
                wordSec.classList.add('seventheight');

            } else if (wordSec.classList.contains('seventheight')) {

                wordSec.classList.remove('seventheight')
                wordSec.classList.add('eightheight');

            } else if (wordSec.classList.contains('eightheight')) {

                console.log('that is last one.');

            } else {
                wordSec.classList.add('fristheight');
            }
        }
    }

    const timeStartNow = () => {

        let startnow = document.getElementById('allWord');

        if (startnow.innerText === '00') {

            let timed = document.getElementById('time');
            let nowinterval = setInterval(() => {


                if (timed.innerText === '0') {
                    clearInterval(nowinterval)
                    let practiceUser = document.getElementById('p-u');
                    let resultUser = document.getElementById('r-u');
                    practiceUser.classList.add('d-none');
                    resultUser.removeAttribute('class');



                    let wpm = document.getElementById('wpm')
                    let cWrod = document.getElementById('cWrod')
                    let aWordd = document.getElementById('aWordd')

                    let speed = document.getElementById('speed')
                    let wordCount = document.getElementById('wordCount')
                    let allWord = document.getElementById('allWord')
                    let accurancy = document.getElementById('accurancy')
                    props.setnav('start');
                    wpm.innerText = speed.innerText;
                    cWrod.innerText = wordCount.innerText;
                    aWordd.innerText = allWord.innerText;
                    accurancy.innerText = parseInt(wordCount.innerText / allWord.innerText * 100) + '%';

                } else {
                    if (props.valueinv === 'notset') {
                        props.setinv(nowinterval)
                    }

                    timed.innerText = timed.innerText - 1;

                    let wordnow = document.getElementById('wordCount')
                    let word = wordnow.innerText;
                    let time = timed.innerText;

                    let speed = document.getElementById('speed');
                    let mines = 60 - time;
                    let minitetime = mines / 60;
                    let wordre = word / 5
                    let result = wordre / minitetime;
                    let showresult = parseInt(result)
                    speed.innerText = showresult;

                }

            }, 1000);
        }

    }

    setTimeout(() => {
        let now = document.getElementById('wordSec');
        let nowinner = now.innerHTML.length;
    
        if (nowinner === 0 ) {
            let havetoclick = document.getElementById('havetoclick');
            havetoclick.click();
        }
    }, 100);

    const restartUserInterface = () => {
        loadingfirst();
        let practiceUser = document.getElementById('p-u');
        let resultUser = document.getElementById('r-u');
       
        practiceUser.classList.remove('d-none');
        resultUser.classList.add('d-none');
    }

    const disabledAll = ()=>{
        props.setnav('stop');
    }

    return (
        <>
            <div className="container" id="p-u">
                <div className="userinfo" data-aos="fade-right" data-aos-duration="1000">
                    <div className="userdata timewid"  >
                        <div>   Time:-   </div> <p id="time" className="ps-2"> 60 </p>
                    </div>
                    <div className="userdata speedwid">
                        <div>  Speed:-  </div>  <p id="speed" className="ps-2"> 00 </p>
                    </div>
                    <div className="userdata Wcwid" >
                        <div> Currect Letters:-  </div>  <p id="wordCount" className="ps-2"> 00 </p>
                    </div>
                    <div className="userdata Awwid" >
                        <div>  All Letters:-  </div>  <p id="allWord" className="ps-2" > 00 </p>
                    </div>
                </div>
                <div className="userinputinfo" data-aos="fade-in" data-aos-duration="2000">
                    <div className="wordFrist">
                        <div id="wordSec" className="wordSec"></div>
                    </div>
                </div>
                <div className="text-center my-4" onClick={loadingfirst} id="havetoclick" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-clockwise reloadone" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                </div>
            </div>


            <div className='d-none' id="r-u" >
                <div className="container rou ">
                    <div className="a-c-r">
                        <div className="head-tr">
                            <div className="score-hear-f">
                                <img className="score-icon-head" src={img1} alt="" />
                                <h1>FastWords</h1>
                            </div>
                        </div>

                        <div className="score-f mt-5">
                            <div className="score-h-f">
                                WPM
                            </div>
                            <div className="score-a-f" id='wpm'>
                                100
                            </div>
                        </div>
                        <div className="score-f mt-3">
                            <div className="score-h-f">
                                Accurance
                            </div>
                            <div className="score-a-f" id='accurancy'>
                                100
                            </div>
                        </div>
                        <div className="score-f mt-3">
                            <div className="score-h-f">
                                Currect Letters
                            </div>
                            <div className="score-a-f" id='cWrod'>
                                100
                            </div>
                        </div>
                        <div className="score-f mt-3">
                            <div className="score-h-f">
                                All Letters 
                            </div>
                            <div className="score-a-f" id="aWordd">
                                100
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container rou">
                    <div>
                        <button onClick={restartUserInterface} className="btn third">Restart</button>
                        <button className="btn third ms-2">Shear</button>
                    </div>
                </div>

            </div>

        </>

    )

}
