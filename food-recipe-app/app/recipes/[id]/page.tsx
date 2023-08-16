import Recipe from "@/models/Recipe";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// Fetch single recipe
const fetchRecipe = async(url: string) => {
    const res = await fetch(url);
    const recipe: Recipe = await res.json();
    return recipe;
}

const RecipeDetailPage = async ({ params }: { params: Params}) => {

    const recipe = await fetchRecipe(`http://localhost:8000/recipes/${params.id}`)
    return (  
        <div className="bg-gray-100 gap-8 col-span-1 space-y-8">
            <div className="h-1/4 flex bg-slate-400 overflow-hidden">
                <img className="object-cover flex-1" src={recipe.img} alt={recipe.name} />
            </div>

            <div className="space-y-4 p-8">
                <h2 className="font-bold text-4xl">Ingredients</h2>
                <ul className="list-disc marker:text-primary list-inside md:text-2xl">
                    {recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)}
                </ul>
            </div>

            <div className="space-y-4 text-justify p-8">
                <h2 className="font-bold text-4xl">Directions</h2>
                <ul className="list-disc marker:text-primary list-inside space-y-4 md:text-2xl">
                    {recipe.instructions.map((instruction) => <li>{instruction}</li>)}
                </ul>
            </div>
        </div>

    ); 
}
 
export default RecipeDetailPage;