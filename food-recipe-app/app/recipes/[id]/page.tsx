import Recipe from "@/models/Recipe";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// Fetch single recipe
const fetchRecipe = async (url: string) => {
  const res = await fetch(url);
  const recipe: Recipe = await res.json();
  return recipe;
};

const RecipeDetailPage = async ({ params }: { params: Params }) => {
  const recipe = await fetchRecipe(
    `http://localhost:8000/recipes/${params.id}`
  );
  return (
    <div className="bg-gray-100 gap-8 space-y-8">
      <div className="flex flex-col lg:flex-row p-4 lg:h-[30em] overflow-hidden">
        <img
          className="object-cover lg:w-1/3 shrink-0 rounded-t md:rounded-none md:rounded-l"
          src={recipe.img}
          alt={recipe.name}
        />
        <div className="p-8 flex flex-col items-center justify-center bg-gray-300 rounded-t md:rounded-none md:rounded-r">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            {recipe.name}
          </h2>
          <p className="text-sm md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            aut adipisci deserunt, repudiandae illo minima necessitatibus, cum
            labore excepturi facilis nobis maxime molestias velit cumque,
            ratione expedita consectetur exercitationem suscipit!
          </p>
          <p className="flex flex-col lg:flex-row md:gap-4 justify-between w-full mt-8">
            <span className="text-sm md:text-lg w-fit bg-white p-2  md:px-4 md:py-2 rounded-full">
              <span>
                <svg
                  className="inline-block w-5 align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              {recipe.time} MINS
            </span>
            <span className="text-sm w-fit md:text-lg bg-white px-4 py-2 rounded-full">
              Rating: ⭐⭐⭐⭐⭐
            </span>
          </p>
        </div>
      </div>

      <section className="flex gap-8 justify-center">
        <div className="space-y-4 p-8 text-justify">
          <h2 className="font-bold text-4xl">Ingredients</h2>
          <ul className="list-decimal marker:text-primary space-y-4 list-inside md:text-2xl">
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-justify w-1/3 p-8">
          <h2 className="font-bold text-4xl">Directions</h2>
          <ul className="list-decimal marker:text-primary list-inside space-y-4 md:text-2xl">
            {recipe.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetailPage;
