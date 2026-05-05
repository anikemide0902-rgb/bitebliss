import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SingleRecipePage.css";

const SingleRecipePage = ({}) => {
    
    const {id} = useParams();
    
    const navigate = useNavigate();


     const [recipe, setRecipe] = useState({});


      const fetchData = () => {
       
        fetch(`https://dummyjson.com/recipes/${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setRecipe(data);
          })
          .catch(err => console.log(err));
      }
    
    
      useEffect(() => {
    
        // alert("something has changed");
        fetchData();
    
      }, [id]);

    return(
        <div className="recipe-container">

            {/* <button className="back-btn" onClick={()=>navigate("/")}>
                ← Back
            </button> */}

            <h1 className="recipe-title">{recipe.name}</h1>

            <img 
                src={recipe.image} 
                alt={recipe.name}
                className="recipe-image"
            />

            <div className="recipe-info">
                <p>⭐ {recipe.rating}</p>
                <p>⏱ {recipe.cookTimeMinutes} mins</p>
                <p>🍽 {recipe.mealType}</p>
            </div>

            <div className="recipe-content">

                <div className="ingredients">
                    <h2>Ingredients</h2>

                    <ul>
                        {recipe?.ingredients?.map((item, index) => (
                        <li key={index}>{item}</li>
))}

                    </ul>
                </div>

                <div className="instructions">
                    <h2>Instructions</h2>

                    <ol>
                        {recipe?.instructions?.map((step,index)=>(
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>

            </div>

        </div>
    )
}

export default SingleRecipePage;