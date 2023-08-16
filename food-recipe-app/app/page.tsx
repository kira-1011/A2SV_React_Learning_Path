import Card from "@/components/Card";
import Recipe from "@/models/Recipe";
import Link from "next/link";

const fetchRecipes = async(url: string) => {

  const res = await fetch(url, {cache: "no-cache"});
  const recipes: Recipe[] = await res.json();

  return recipes;
}

export default async function Home() {

  // fetch recipes
  const recipes = await fetchRecipes("http://localhost:8000/recipes");

  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="text-primary flex gap-4 justify-center md:justify-end">
          <Link
            className="btn border border-primary md:border-2 hover:bg-primary hover:text-white transition ease-in duration-300"
            href=""
            >Log in</Link>
          <Link
            className="btn border border-primary md:border-2 hover:bg-primary hover:text-white transition duration-300"
            href=""
            >Sign up</Link>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For All</h3>
        </header>

        <div>
          <h4
            className="font-bold md:text-2xl mt-12 pb-2 border-b border-b-gray-200"
          >
            Latest Recipes
          </h4>

         {/* Cards */}
          <div className="mt-8 grid lg:grid-cols-3 text-xl gap-10">
              
              {/* render each recipes */}
              {recipes.map((recipe) => <Card key={recipe.id} recipe={recipe}/>)}
          </div>

          <h4 className="font-bold md:text-2xl mt-12 pb-2 border-b border-b-gray-200">
            Most Popular
          </h4>

          <div className="mt-8">
           {/* card */}
          </div>

          <div className="flex justify-center">
            <button className="btn bg-gray-200 hover:bg-gray-300 hover:scale-110 transition duration-300">Load more</button>
          </div>

        </div>
      </main>
  )
}
