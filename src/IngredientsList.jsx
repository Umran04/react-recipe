import React from "react";
export default function IngredientsList(props){
    
    return(
        <>
                <section className='section1'>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{props.ingredients}</ul>
                    {props.length > 2 && <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.toggleRecipeShown}>Get a recipe</button>
                    </div>}
                </section>
        
        </>

    )
}