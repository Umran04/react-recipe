export default function Main() {

    const ingredients = ['Chicken','Tomato paste', 'Pasta']

    const ingredientsList = ingredients.map(ingredient => {
        <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')

    }
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}