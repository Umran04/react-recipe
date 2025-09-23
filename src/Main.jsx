import React from 'react'
import AIRecipe from './AIRecipe'

export default function Main() {
    //MOVE THESE INTO DIFFERENT FILES FOR READABILITY

    const [ingredients, setIngredients] = React.useState(['all the main spices', 'tomato', 'beef', 'pasta'])
    function addNewIngredients(newIngredient){
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const [recipeShown,setRecipeShown] = React.useState(false)

    function recipeBtn(){
        setRecipeShown(prevShown => !prevShown)
    }



    function handleSubmit(formData){
        
        const newIngredient = formData.get("ingredient")
        addNewIngredients(newIngredient)
        
        
    }

    
    return (
        <main>
            <div className='main-content'>
                <form action={handleSubmit} className="add-ingredient-form">
                    <input 
                        type="text"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button>Add ingredient</button>
                    
                </form>
               {ingredients.length > 0 && 
                <section className='section1'>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
                    {ingredients.length > 2 && <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={recipeBtn}>Get a recipe</button>
                    </div>}
                </section>}
                {recipeShown && <AIRecipe /> }
            </div>
        </main>
    )
}