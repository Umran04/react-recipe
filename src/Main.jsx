import React from 'react'
import AIRecipe from './AIRecipe'
import IngredientsList from './IngredientsList'



export default function Main() {
    

    const [ingredients, setIngredients] = React.useState(['all the main spices', 'tomato', 'beef', 'pasta'])
    function addNewIngredients(newIngredient){
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    
    const [recipeShown,setRecipe] = React.useState(false)

   

    function toggleRecipeShown(){
        setRecipe(prevShown => !prevShown)
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
                <IngredientsList
                toggleRecipeShown={toggleRecipeShown}
                ingredients={ingredientsList}
                length={ingredients.length}
                
                />}
                {recipeShown && <AIRecipe /> }
            </div>
        </main>
    )
}

////STOPPING THE PROJ HERE -> AI BREAKS EVERYTHING