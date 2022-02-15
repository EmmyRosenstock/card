import HeaderC from "./HeaderC";
import "./CreateCard.css"

const CreateCard =()=>{
  
    return(
        <div className="createCard">
            <header className='headerc'>
         <HeaderC/>
               
            </header> 
            <div className="Conteudo">
                <form className='form'>
                    <span>INSIGHT</span>
                    <textarea maxLength='400' cols="30" rows="10" placeholder="Escreva aqui o seu insight..."  />
                    <span className="lim">limite de caracteres: 400</span>
                    <div className="tagin">
                  
                <span className="tags">CATEGORIA</span>
                <textarea placeholder="Adicione uma categoria (opcional)..." />
                    </div>
                
               
                    
                    
                

                </form>
              
            </div>
            
            <button className="btnpub" >PUBLICAR</button> 
                
           
        </div>
    )
}
export default CreateCard;