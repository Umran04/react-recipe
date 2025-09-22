import React from 'react'

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    function addNewIngredients(newIngredient){
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


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
                <ul>{ingredientsList}</ul>
            </div>
        </main>
    )
}