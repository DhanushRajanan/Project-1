import '../App.css'
import Cartlist from './Cartlist';

function Header(props) {
  return (
    <div className='flex shoping-cart'>
        <h1>POLO</h1>
        <div onClick={() => props.handleShow(false)}>Shooping Cart App</div>
        <div onClick={() => props.handleShow(true)}>Cart
            <sup>{props.count}</sup>
        </div>
    </div>
  )
}

export default Header