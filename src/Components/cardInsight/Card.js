import { Col, Row } from "react-bootstrap";
import { useState } from "react"
import './card.css'
const CardInsight=()=>{
    const[card, setCard] = useState('');
  
 return(
    <div className="card" gap={3}>
        <p>Feed de <strong>Insights</strong> </p>
    <div className="component">
        <h1>Flamengo consegue boa vitória fora de casa na Copa Libertadores 2021</h1>
    </div>
   
    <div className="component">
        <h1>Primeira partida de um grupo difícil exigiu que o time carioca virasse o plavar em dois momentos do jogo</h1>
    </div>
    <div className='tag'>
        <h2>TEMPORADA</h2>
    </div>
    
    </div>
 )
}
export default CardInsight;