import { useEffect } from 'react'
import  { Link } from "react-router-dom";
import '../assets/css/RecipeResult.css'
import Header from './Header';

function SearchResult(props) {
    const {recipe, searchQuery, loading} = props;

    useEffect(() => {
        window.scrollTo(0, -1)
      }, [])

    return (
        <div className="results">
            
            <Header searchQuery={searchQuery}/>
            <div className="allresult">
            
            {loading && 
            recipe.map((rec, idx) => {
                                return(
                                    <div className="result" key={idx}>
                                        <div className="oneresult">
                                            <Link className="link" to={`/view/${idx}`}><img src={rec.recipe.image} alt="" /></Link>
                                            <Link className="link" to={`/view/${idx}`}>{rec.recipe.label}</Link>
                                        </div>
                                    </div>  
                                )
                            })
                        }
            </div>
                </div>
    )
}

export default SearchResult
