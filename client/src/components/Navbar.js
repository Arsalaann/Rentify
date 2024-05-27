import style from './Navbar.module.css';
const Navbar=(props)=>{
    return(
        <div className={style['navbar']}>
            <span onClick={props.onLoginButtonClick}>{props.userName}</span>
            <span className={style['company-mark']}>Rentify</span>
            <button className={style['intention']} onClick={props.toggleIntention}>{props.buttonText}</button>
        </div>
    )
}

export default Navbar;