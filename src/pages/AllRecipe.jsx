import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen } from "lucide-react";
import { toast } from "react-toastify";
import "./AllRecipe.css"; 
import { GiHotMeal } from "react-icons/gi";
import { MdOutlineAccessTime } from "react-icons/md";

export default function AllRecipe() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://69b9203be69653ffe6a69bad.mockapi.io/recipes"
        );
        const data = await res.json();
        setAllRecipes(data);
        toast.success("Recipes fetched successfully");
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch recipes");
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = allRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipes-page">
  
      <div className="recipes-header">
        <h1>Recipe Directory</h1>
        <p>Browse all recipes in your collection.</p>
        <div className="recipes-controls">
          <div className="recipes-search">
            <Search />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link to="/create-recipe" className="add-recipe-button">
            <BookOpen />
          </Link>
        </div>
      </div>

      <div className="recipes-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div  className="recipe-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} referrerPolicy="no-referrer" />

              <div className="recipe-content">
                <div className="recipe-title">
                  <h3>{recipe.title}</h3>
                </div>

                <div className="recipe-type">
                  <span className="recipe-category"><GiHotMeal />{recipe.category}</span>
                  <span><MdOutlineAccessTime /> {recipe.cooking_time}</span>
                </div>

                <button>
                  <Link to={`/recipes/${recipe.id}`} className="view-recipe">
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-recipes">
            <h3>No recipes found</h3>
            <p>Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}