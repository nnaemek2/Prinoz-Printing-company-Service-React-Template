import React from 'react'
import { Link } from 'react-router-dom'
import CurrentDoler from './CurrentDoler';

const HeaderTopbar = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="container-fluid">
            <div className="header-top-wrapper">
                <p><Link onClick={ClickHandler} to="del:+41888567890">(+41)-888-56-7890</Link>  (Mon - Sat 9am to 6pm)</p>
                <p> 🔥 Free shipping on all U.S. orders $50+</p>
                <div className="header-top-right">
                    <div className="social-icon d-flex align-items-center">
                        <Link onClick={ClickHandler} to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link onClick={ClickHandler} to="#"><i className="fab fa-twitter"></i></Link>
                        <Link onClick={ClickHandler} to="#"><i className="fab fa-instagram"></i></Link>
                        <Link onClick={ClickHandler} to="#"><i className="fab fa-pinterest-p"></i></Link>
                    </div>
                    <CurrentDoler />
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;