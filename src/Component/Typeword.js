import React,{useContext} from 'react'
import './Css/typeword.css';
import contentContext from '../context/content/contentContext';


export default function Typeword() {
   const  nodea = useContext(contentContext);


    document.onkeypress = (e) => {

        let Active = document.getElementById('active');
        let activeElement = document.getElementById('now');
        let startNow = activeElement.innerText;
        let wordSec = document.getElementById('wordSec');
        let time = document.getElementById('time');
        let timenow = parseInt(time.innerText);

        if (wordSec.firstElementChild.firstElementChild === activeElement && timenow === 60) {

            timeStartNow();
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

    const speedNow = (time, word) => {
        console.log(time, word, 'in the speednow');

        let speed = document.getElementById('speed');
        let mines = 60 - time;
        let minitetime = mines / 60;
        let wordre = word / 5
        let result = wordre / minitetime;
        let showresult = parseInt(result)
        console.log(result);
        console.log(showresult);
        speed.innerText = showresult;

    }

    function timeStartNow() {
        let time = document.getElementById('time');
        let nowTime = 60;
        time.innerText = nowTime;

        let notstart = setInterval(() => {
            if (time.innerText === '0') {

                time.innerText = '00'
                clearInterval(notstart);
            } else {
                time.innerText = time.innerText - 1;
                let wordnow = document.getElementById('wordCount')
                let nowwordinhere = wordnow.innerText;
                speedNow(time.innerText, nowwordinhere);
            }
        }, 1000);
    }

    const setWordNow = () => {

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
        let rand = getRandom(0,4)
        let randvalue = parseInt(rand)
        let mySentence= nodea[randvalue].sentence;

        let my = mySentence;
        let wordsec = document.getElementById('wordSec');
        wordsec.innerHTML = ' ';

        for (let i = 0; i < my.split(' ').length; i++) {
        
            if (my.split(' ')[i] === my.split(' ')[0]) {

                let nowword = my.split(' ')[0];
                wordsec.innerHTML += ' <span class="word" id="active" > </span>'

                for (let i = 0; i < nowword.length; i++) {
                    let active = document.getElementById('active');

                    if (nowword[0] === nowword[0] && !active.firstElementChild) {

                        active.innerHTML += '<litter id="now" >'+nowword[i]+'</litter>';
                    } else {

                        active.innerHTML += '<litter >'+nowword[i]+'</litter>';
                    }

                }

            } else {

                wordsec.innerHTML += ' <span class="word" id="nextone"> </span>';
                let nextone = document.getElementById('nextone');
                let nowword = my.split(' ')[i];

                for (let i = 0; i < nowword.length; i++) {

                    if (nowword.length === nextone.childElementCount + 1) {
                        nextone.innerHTML += '<litter >'+nowword[i]+'</litter>';
                        nextone.removeAttribute('id');
                    } else {
                        nextone.innerHTML += '<litter >'+nowword[i]+'</litter>';
                    }

                }

            }
        }

    }

    setTimeout(() => {
        let reload = document.getElementById('reloadthedog');
        reload.click();
    }, 200);

    return (
        <>
            <div className="container">
                <div className="userinfo" data-aos="fade-right" data-aos-duration="1000">
                    <div className="d-flex">
                        <div>   Time:-   </div> <p id="time"> 60 </p>
                    </div>
                    <div className="d-flex">
                        <div>  Speed:-  </div>  <p id="speed"> 00 </p>
                    </div>
                    <div className="d-flex">
                        <div> Currect Words:-  </div>  <p id="wordCount"> 00 </p>
                    </div>
                    <div className="d-flex">
                        <div>  All words:-  </div>  <p id="allWord"> 00 </p>
                    </div>
                    <button onClick={setWordNow} id='reloadthedog' className="btn third">reload the document</button>
                    
                </div>
                <div className="userinputinfo" data-aos="fade-in" data-aos-duration="2000">
                    <div className="wordFrist">
                        <div id="wordSec" className="wordSec">
                            
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}
