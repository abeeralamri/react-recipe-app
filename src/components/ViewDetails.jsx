import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import '../assets/css/Details.css'
import Header from './Header';
import MaterialIcon from 'react-google-material-icons';

const ViewDetails = (props) =>{
    const {recipe} = props;
    const { id } = useParams();
    let cal = Math.round(recipe[id].recipe.calories)
    const searchQuery = recipe[id].recipe.label;
    let carb = Math.round(recipe[id].recipe.totalNutrients.CHOCDF.quantity);
    let fat = Math.round(recipe[id].recipe.totalNutrients.FAT.quantity);
    let protein = Math.round(recipe[id].recipe.totalNutrients.PROCNT.quantity);
    

    useEffect(() => {
        window.scrollTo(0, -1)
      }, [])
    return (
        <div>
            <Header searchQuery={searchQuery}/>
            <div className="details">
                <div className="top">
                    <img src={recipe[id].recipe.image} alt="imageofrecipe" />
                    <div className="nutrition">
                    <table>
                        <tr>
                            <td>Calories</td>
                            <td>{cal}</td>
                        </tr>

                        <tr>
                            <td>Protein</td>
                            <td>{protein}g</td>
                        </tr>

                        <tr>
                            <td>Carb </td>
                            <td>{carb}g</td>
                        </tr>

                        <tr>
                            <td>Fat </td>
                            <td>{fat}g</td>
                        </tr>
                        
                        <tr>
                            <td>Dish type </td>
                            <td>{recipe[id].recipe.dishType}</td>
                        </tr>

                        <tr>
                            <td>Meal type </td>
                            <td>{recipe[id].recipe.mealType[0]}</td>
                        </tr>

                        <tr>
                            <td>Cuisine</td>
                            <td>{recipe[id].recipe.cuisineType}</td>
                        </tr>

                    </table>
                         
                    </div>
                </div>

                {/* ingredients word with icon */}
                <div className="ingred">
                    <span className="icon"><MaterialIcon icon="kitchen_outlined" /></span>
                    <p className="ingtxt">Ingredients </p>
                </div>
               
               
                {/* diplay ingredients */}
                    {
                
                    recipe[id].recipe.ingredients.map((ing, idx)=>(
                            <div className="ingredient" key={idx}>
                               
                               
                                <ul>
                                    <li>{ing.text}</li>
                                </ul>
                                
                            </div>
                            ))}
                        <button className="headerbutton"><a href={recipe[id].recipe.url} rel="noreferrer"  target="_blank">View sourse</a></button>

            </div>
            

            </div>
    )
    
}

export default ViewDetails
