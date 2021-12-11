import './css/reset.css'
import './css/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing/Landing'

function App(){
    return(
        <>
            <Landing />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"))