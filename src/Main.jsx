import React from 'react'
import AIRecipe from './components/AIRecipe'
import IngredientsList from './components/IngredientsList'

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

    function toggleShown(){
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
                <IngredientsList
                toggleShown={toggleShown}
                ingredientsList={ingredientsList}
                length={ingredients.length}
                
                />}
                {recipeShown && <AIRecipe /> }
            </div>
        </main>
    )
}