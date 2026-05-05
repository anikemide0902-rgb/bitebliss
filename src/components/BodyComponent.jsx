import "./BodyComponent.css"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const BodyComponent = () => {

    const [recipes,setRecipe] = useState([])
    const navigate = useNavigate()

    const fetchData = () => {
        fetch("https://dummyjson.com/recipes")
        .then(res => res.json())
        .then(data => {
            setRecipe(data.recipes)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <div className="meal">

            

            <div className="wrapper">
                {
                    recipes.map((recipe) => (
                        <div 
                        className="card" 
                        key={recipe.id}
                        onClick={()=>navigate(`/recipe/${recipe.id}`)}
                        >

                            <img src={recipe.image} alt={recipe.name} />

                            <div className="details">
                                <h2>{recipe.name}</h2>

                                <div className="bottom">
                                    <div className="left">
                                        <p>{recipe.mealType}</p>
                                        <p><span>{recipe.cookTimeMinutes}</span> mins</p>
                                    </div>

                                    <div className="right">
                                        ⭐{recipe.rating}
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BodyComponent;