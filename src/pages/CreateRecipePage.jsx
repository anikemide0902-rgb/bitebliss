import { useFormik } from "formik";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./CreateRecipePage.css";

const recipeValidationSchema = object({
  title: string().required("Enter recipe title"),
  image: string().required("Add image URL"),
  ingredients: string().required("Enter ingredients"),
  instructions: string().required("Enter cooking steps"),
  category: string().required("Select category"),
  cooking_time: string().required("Enter cooking time"),
});

export default function CreateRecipePage() {
  const navigate = useNavigate();

  const createRecipePage = async (recipeData) => {
    try {
      const res = await fetch(
        "https://69b9203be69653ffe6a69bad.mockapi.io/recipes",
        {
          method: "POST",
          body: JSON.stringify(recipeData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed");

      toast.success("Recipe created successfully");
      navigate("/all-recipe");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      ingredients: "",
      instructions: "",
      category: "Breakfast",
      cooking_time: "",
    },
    validationSchema: recipeValidationSchema,
    onSubmit: (values) => {
      createRecipePage(values);
    },
  });

  return (
    <div className="create-page">
      <h2>Create Recipe</h2>

      <form onSubmit={formik.handleSubmit}>
        
        <input
          type="text"
          name="title"
          placeholder="Recipe title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <p>{formik.errors.title}</p>
        )}

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.image && formik.errors.image && (
          <p>{formik.errors.image}</p>
        )}

        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <input
          type="text"
          name="cooking_time"
          placeholder="Cooking time (e.g. 30 mins)"
          value={formik.values.cooking_time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cooking_time && formik.errors.cooking_time && (
          <p>{formik.errors.cooking_time}</p>
        )}

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={formik.values.ingredients}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.ingredients && formik.errors.ingredients && (
          <p>{formik.errors.ingredients}</p>
        )}

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formik.values.instructions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.instructions && formik.errors.instructions && (
          <p>{formik.errors.instructions}</p>
        )}

        <button type="submit" >Create Recipe</button>
      </form>
    </div>
  );
}