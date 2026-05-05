import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Image as ImageIcon,
  FileText,
  Send,
  Calendar,
} from "lucide-react";
import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import { object, string } from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const recipeValidationSchema = object({
  title: string().required("Enter recipe title"),
  image: string().required("Add image URL"),
  ingredients: string().required("Enter ingredients"),
  instructions: string().required("Enter cooking steps"),
  category: string().required("Select category"),
  cooking_time: string().required("Enter cooking time"),
});

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [displayPopup, setDisplayPopup] = useState(false);


  useEffect(() => {
    fetch(`https://69b9203be69653ffe6a69bad.mockapi.io/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        toast("Recipe fetched successfully");
      })
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ Delete
  const deleteRecipe = () => {
    fetch(`https://69b9203be69653ffe6a69bad.mockapi.io/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then(() => {
        toast("Recipe deleted successfully");
        navigate("/all-recipe");
      })
      .catch((err) => console.log(err));
  };

  // ✅ Update
  const updateRecipe = (data) => {
    fetch(`https://69b9203be69653ffe6a69bad.mockapi.io/recipes/${recipe.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast("Recipe updated successfully");
        setDisplayPopup(false);
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: recipe?.title || "",
      image: recipe?.image || "",
      ingredients: recipe?.ingredients || "",
      instructions: recipe?.instructions || "",
      category: recipe?.category || "",
      cooking_time: recipe?.cooking_time || "",
    },
    validationSchema: recipeValidationSchema,
    onSubmit: (values) => {
      updateRecipe(values);
      setRecipe(values);
    },
  });

  if (!recipe) {
    return <h2 className="loading">Recipe not found</h2>;
  }

  return (
    <div className="recipe-detail">
      <div className="container">
        <Link to="/all-recipe" className="back-link">
          <ArrowLeft /> Back
        </Link>

        <div className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />

          <h1 className="recipe-title">{recipe.title}</h1>

          <p className="recipe-category">{recipe.category}</p>

          <p className="recipe-time">
            <Calendar /> {recipe.cooking_time}
          </p>

          <div className="recipe-section">
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
          </div>

          <div className="recipe-section">
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
          </div>

          <div className="button-group">
            <button
              onClick={() => setDisplayPopup(true)}
              className="btn-update"
            >
              Update
            </button>

            <button onClick={deleteRecipe} className="btn-delete">
              Delete
            </button>
          </div>
        </div>
      </div>

      {displayPopup && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="form-title">Update Recipe</h2>

            <form onSubmit={formik.handleSubmit} className="recipe-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <p>{formik.errors.title}</p>

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={formik.handleChange}
                value={formik.values.image}
              />
              <p>{formik.errors.image}</p>

              <input
                type="text"
                name="category"
                placeholder="Category"
                onChange={formik.handleChange}
                value={formik.values.category}
              />
              <p>{formik.errors.category}</p>

              <input
                type="text"
                name="cooking_time"
                placeholder="Cooking Time"
                onChange={formik.handleChange}
                value={formik.values.cooking_time}
              />
              <p>{formik.errors.cooking_time}</p>

              <textarea
                name="ingredients"
                placeholder="Ingredients"
                onChange={formik.handleChange}
                value={formik.values.ingredients}
              />
              <p>{formik.errors.ingredients}</p>

              <textarea
                name="instructions"
                placeholder="Instructions"
                onChange={formik.handleChange}
                value={formik.values.instructions}
              />
              <p>{formik.errors.instructions}</p>

              <div className="form-actions">
                <button type="submit" className="btn-save">
                  <Send /> Save
                </button>

                <button
                  type="button"
                  onClick={() => setDisplayPopup(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}