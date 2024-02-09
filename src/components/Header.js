import {useState} from 'react'



const Header =()=>{
//pour lorsque le header est en haut soit sans couleur si dépasse 50 en Y change couleur en noir
    const[changeHeader,setChangeHeader]=useState(false);
    
    const changeHeaderColor= () => {

        if(window.scrollY>=50){
            setChangeHeader(true)
        }else{
            setChangeHeader(false)
        }
    }
    window.addEventListener('scroll',changeHeaderColor)

    return (
        <header className={`header ${changeHeader && 'scroll-header'}`}  id="header">
        <nav className="nav container">
        <a href="#home" className="nav__logo">Cafino<span>.</span>co </a>

        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
            <li className="nav__item">
                <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
                <a href="#products" className="nav__link">Products</a>
            </li>
            <li className="nav__item">
                <a href="#place" className="nav__link">Place</a>
            </li>
            <li className="nav__item">
                <a href="#blog" className="nav__link">Blog</a>
            </li>
            </ul>

            <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
            </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
        </div>
        </nav>
    </header>
    );
};
export default Header;