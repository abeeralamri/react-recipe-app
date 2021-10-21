import '../assets/css/SearchRecipe.css'
import { useHistory } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { useEffect } from 'react';

const SearchRecipe = (props) => {
    
    let history = useHistory();
    const {setRecipe, setLoading} = props;
    const {searchQuery, setSearchQ} = props;
    
    const API_Id = 'c714216d';
    const API_key = 'b7afa918e3c5b5c221cb2eed84e28d4b';

    useEffect(() => {
        window.scrollTo(0,-1)
      }, [])

    async function Search (e){
        e.preventDefault();
        const response = await fetch(`https://api.edamam.com/search?&q=${searchQuery}&app_id=${API_Id}&app_key=${API_key}`);
        const data = await response.json();
        setRecipe(data.hits);
        console.log(data);  
        setLoading(true);
        history.push(`/result`);    
    }

    

    
  
    return(
            
            <div className = "container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search">
                    <form  onSubmit={Search} action="/result" method="POST">
                        <div className="form">
                            <p className="txtabovesearch">Learn how to make your favorite dishes</p>
                            <div className="searcharea">
                                <input type="text" placeholder="I want to make..."onChange={(r) => {setSearchQ(r.target.value)}}/>
                                <button className="search"> Search </button>
                            </div>
                        </div>
                    </form>
                        
                    
                    
                </div>
            </div>
        
    )
}

export default SearchRecipe;