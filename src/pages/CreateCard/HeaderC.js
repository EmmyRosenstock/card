import brand from '../../assets/brand-insights@3x.svg';
import avatar from '../../assets/happy-business-man-in-shirt-with-crossed-arms-looking-away.jpg'
import { Link } from 'react-router-dom'

import { MdArrowBack } from "react-icons/md";
import './HeaderC.css'
const HeaderC=()=>{
    return (
    <div className="Headerc">
        <div className="contents">

       <Link to ="/"  className="btnback"><MdArrowBack size={30}/></Link> 
         </div>
         <div className="inform">
         <p className="criar">CRIAR <strong>INSIGHTS</strong></p>
         </div>
    </div>
)
}
export default HeaderC;