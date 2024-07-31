import  { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'



// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {

    const [home, setMenu] = useState("home")
    const {carts} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt='logo' className='logo'/></Link>
        <div className='navbar-menu'>
            <Link to="/" onClick={()=>setMenu("home")} className={home==="home"?"active":""}>Home</Link>
            <Link to="/category"><li href='#explore-menu' onClick={()=>setMenu("category")} className={home==="category"?"active":""}>Category</li></Link>
            <Link to="/mobile-app"> <li href='#app-download' onClick={()=>setMenu("mobile-app")} className={home==="mobile-app"?"active":""}>Mobile-app</li></Link>
            <Link to="/contact"><li href='#footer' onClick={()=>setMenu("contact-us")} className={home==="contact-us"?"active":""}>Contact Us</li></Link>
        </div>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
                <div className={Object.values(carts).flat().reduce((acc, cur) => acc + cur.price, 0)}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar