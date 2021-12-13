import {useState} from 'react'
import LogoS from '../LogoS'
import ArrowTurn from '../img/ArrowTurn.png'
import './CardPage.css'

export default function CardPage(props)
{
    const [frontShow, setFrontShow] = useState(1);
    const [colorScore, setColorScore] = useState('');
    const [firstTime, setFirstTime] = useState(1);

    function score(event)
    {
        if(firstTime === 1)
        {
            setFirstTime(0);
            const getScore = event.target.className.split(' ');
            setColorScore(getScore[1]);
            if(getScore[1] === 'no-recall')
            {
                props.setForgot(props.forgot + 1)
                console.log(props.forgot)
            }
            if(getScore[1] === 'zap')
            {
                props.setZaps(props.zaps + 1)
                console.log(props.zaps)
            }
        }
        else
        {
            props.setCard(props.card + 1);
            if(props.number === props.total)
            {
                props.setAdvancePage(6)
            }
        }
    }

    return(
        <>
        <div className={`cardPage js flex flex-column ${props.card === props.number && props.advancePage === 5 ? '' : 'hidden'}`}>
            <LogoS />
            <div className="page-title weight-700 size-28">JS Vanilla</div>
            <div className={`card ${colorScore}`} data-identifier="flashcard">
                <div className={`side flex flex-column ${frontShow === 1 ? 'front' : 'front-turn'}`}>
                    <div className="number-front weight-400 size-18" data-identifier="counter">{props.number}/{props.total}</div>
                    <div className="question weight-700 size-28">{props.question}</div>
                    <div className="turn" onClick={() => setFrontShow(0)} data-identifier="arrow"><img src={ArrowTurn} alt="click to turn the card" /></div>
                </div>
                <div className={`side flex flex-column ${frontShow === 1 ? 'back' : 'back-turn'}`}>
                    <div className="flex back-top">
                        <div className="card-title weight-700 size-12">{props.question}</div>
                        <div className="number-back weight-400 size-18" data-identifier="counter">{props.number}/{props.total}</div>
                    </div>
                    <div className="answer weight-400 size-16">{props.answer}</div>
                    <div className="remember-time flex">
                        <button className='remember-button just-learned weight-400 size-10' onClick={e => score(e)}>Aprendi agora</button>
                        <button className='remember-button no-recall weight-400 size-10' onClick={e => score(e)}>Não lembrei</button>
                        <button className='remember-button recall-effort weight-400 size-10' onClick={e => score(e)}>Lembrei com esforço</button>
                        <button className='remember-button zap weight-700 size-10' onClick={e => score(e)}>Zap!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}