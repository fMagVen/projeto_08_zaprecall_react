import './css/reset.css'
import './css/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing/Landing'
import CardPage from './CardPage/CardPage'

function App(){
    return(
        <>
            <Landing />
            <CardPage />
            {/*<Result />*/}
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"))