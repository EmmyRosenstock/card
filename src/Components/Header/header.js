import brand from '../../assets/brand-insights@3x.svg';
import avatar from '../../assets/happy-business-man-in-shirt-with-crossed-arms-looking-away.jpg'
import { MdAdd } from "react-icons/md";
import './header.css'
const Header=()=>{
    return (
    <div className="header">
        <div className="content">
            <img src={brand}/>
            <div className="avatar">
                <img src={avatar}/>
            </div>
            <a className="btnplus" href='/criarCard' ><MdAdd size={40}/></a>
         </div>
         <div className="infor">
             <h1>Olá Antonio!</h1>
             <h2>antonio.pina@g_globo</h2>
         </div>
    </div>
)
}
export default Header;