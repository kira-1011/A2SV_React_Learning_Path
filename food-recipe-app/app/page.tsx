// Import necessary components and modules
import Card from "@/components/Card"; // Importing the Card component
import Recipe from "@/models/Recipe"; // Importing the Recipe model
import Link from "next/link"; // Importing the Link component from Next.js

// Asynchronous function to fetch recipes from a given URL
const fetchRecipes = async (url: string) => {
  // Using fetch to retrieve data from the provided URL
  const res = await fetch(url, { cache: "no-cache" });
  // Parsing the JSON response into an array of Recipe objects
  const recipes: Recipe[] = await res.json();

  return recipes; // Returning the fetched recipes
};

// Exporting the default component for the Home page
export default async function Home() {
  // Fetch recipes using the fetchRecipes function
  const recipes = await fetchRecipes("http://localhost:8000/recipes");

  return (
    <main className="sm:px-16 py-6 bg-gray-100 h-screen w-full">
      {/* Navigation Links */}
      <div className="text-primary flex gap-4 justify-center md:justify-end">
        <Link
          className="btn border border-primary md:border-2 hover:bg-primary hover:text-white transition ease-in duration-300"
          href=" "
        >
          Log in
        </Link>
        <Link
          className="btn border border-primary md:border-2 hover:bg-primary hover:text-white transition duration-300"
          href=""
        >
          Sign up
        </Link>
      </div>

      {/* Page Header */}
      <header className="text-center mt-8">
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
      </header>

      <div>
        {/* Latest Recipes Section */}
        <h4 className="font-bold md:text-2xl mt-12 pb-2 border-b border-b-gray-200">
          Latest Recipes
        </h4>
        {/* Display Cards for each recipe */}
        <div className="mt-8 grid lg:grid-cols-3 text-xl gap-10">
          {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Most Popular Recipes Section */}
        <h4 className="font-bold md:text-2xl mt-12 pb-2 border-b border-b-gray-200">
          Most Popular
        </h4>
        <div className="mt-8">{/* Placeholder for most popular recipes */}</div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="btn bg-gray-200 hover:bg-gray-300 hover:scale-110 transition duration-300">
            Load more
          </button>
        </div>
      </div>
    </main>
  );
}
