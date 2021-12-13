import './css/reset.css'
import './css/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Data from './Data'
import Landing from './Landing/Landing'
import CardPageRJS from './CardPage/CardPageRJS'
import CardPageHTML from './CardPage/CardPageHTML'
import CardPageCSS from './CardPage/CardPageCSS'
import CardPageJS from './CardPage/CardPageJS'
import Result from './Result/Result'


function App(){

    const [zaps, setZaps] = React.useState(0);
    const [card, setCard] = React.useState(1);
    const [forgot, setForgot] = React.useState(0);
    const [advancePage, setAdvancePage] = React.useState(1);

    return(
        <>
            <Landing advancePage={advancePage} setAdvancePage={setAdvancePage} />

            {Data.RJS.map(item => <CardPageRJS
            number={item.number}
            total={item.total}
            question={item.question}
            answer={item.answer}
            zaps={zaps}
            setZaps={setZaps}
            card={card}
            setCard={setCard}
            forgot={forgot}
            setForgot={setForgot}
            advancePage={advancePage}
            setAdvancePage={setAdvancePage}
            />)}

            {Data.HTML.map(item => <CardPageHTML
            number={item.number}
            total={item.total}
            question={item.question}
            answer={item.answer}
            zaps={zaps}
            setZaps={setZaps}
            card={card}
            setCard={setCard}
            forgot={forgot}
            setForgot={setForgot}
            advancePage={advancePage}
            setAdvancePage={setAdvancePage}
            />)}

            {Data.CSS.map(item => <CardPageCSS
            number={item.number}
            total={item.total}
            question={item.question}
            answer={item.answer}
            zaps={zaps}
            setZaps={setZaps}
            card={card}
            setCard={setCard}
            forgot={forgot}
            setForgot={setForgot}
            advancePage={advancePage}
            setAdvancePage={setAdvancePage}
            />)}

            {Data.JS.map(item => <CardPageJS
            number={item.number}
            total={item.total}
            question={item.question}
            answer={item.answer}
            zaps={zaps}
            setZaps={setZaps}
            card={card}
            setCard={setCard}
            forgot={forgot}
            setForgot={setForgot}
            advancePage={advancePage}
            setAdvancePage={setAdvancePage}
            />)}

            <Result
            zaps={zaps}
            setZaps={setZaps}
            card={card}
            setCard={setCard}
            forgot={forgot}
            setForgot={setForgot}
            advancePage={advancePage}
            setAdvancePage={setAdvancePage}/>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"))