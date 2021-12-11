import FFlogo from './img/FFlogo.png'

export default function(props){
    return(
        <button className='button weight-700 size-20 flex center'>
            {props.children}
            <img src={FFlogo} alt="fast forward logo" />
        </button>
    );
}