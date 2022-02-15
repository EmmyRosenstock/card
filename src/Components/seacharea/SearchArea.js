import { MdOutlineSearch } from "react-icons/md";
import './search.css'
const SearchArea=()=> {
    

    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Pesquise por termos ou categorias"  />
                <button>
                <MdOutlineSearch size={30}/>
                </button>
            </div>
        </div>
    )
}
export default SearchArea;