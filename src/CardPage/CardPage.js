import {useState} from 'react'
import LogoS from '../LogoS'
import ArrowTurn from '../img/ArrowTurn.png'
import './CardPage.css'

export default function CardPage()
{
    const [frontShow, setFrontShow] = useState(1);

    function turn(event)
    {
        console.log(event.target.parent)
    }

    return(
        <>
        <div className="cardPage flex flex-column hidden">
            <LogoS />
            <div className="page-title weight-700 size-28">React</div>
            <div className="card">
                <div className={`side flex flex-column ${frontShow === 1 ? 'front' : 'front-turn'}`}>
                    <div className="number-front weight-400 size-18">1/8</div>
                    <div className="question weight-700 size-28">O que é JSX?</div>
                    <div className="turn" onClick={() => setFrontShow(0)}><img src={ArrowTurn} alt="click to turn the card" /></div>
                </div>
                <div className={`side flex flex-column ${frontShow === 1 ? 'back' : 'back-turn'}`}>
                    <div className="flex back-top">
                        <div className="card-title weight-700 size-12">O que é JSX?</div>
                        <div className="number-back weight-400 size-18">1/8</div>
                    </div>
                    <div className="answer weight-400 size-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Dolore, vitae nulla dolorum inventore ex voluptatem cum id maiores quisquam nesciunt vero sequi in expedita 
                    consequuntur assumenda rem explicabo veniam labore a accusantium obcaecati tempore. 
                    Numquam delectus quasi quod commodi, obcaecati alias animi distinctio ipsam ducimus amet eius qui eum debitis.</div>
                    <div className="remember-time flex">
                        <button className='remember-button just-learned weight-400 size-10'>Aprendi agora</button>
                        <button className='remember-button no-recall weight-400 size-10'>Não lembrei</button>
                        <button className='remember-button recall-effort weight-400 size-10'>Lembrei com esforço</button>
                        <button className='remember-button zap weight-700 size-10'>Zap!</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}