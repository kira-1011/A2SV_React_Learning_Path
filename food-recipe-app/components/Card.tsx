import Recipe from "@/models/Recipe";
import Link from "next/link";

const Card = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="card transition duration-300 hover:shadow-lg hover:scale-110">
      <Link href={`recipes/${recipe.id}`}>
        <img
          className="w-full object-cover h-32 sm:h-48"
          src={recipe.img}
          alt="stew"
        />
        <div className="m-4">
          <span className="font-bold">{recipe.name}</span>
          <span className="block text-sm text-gray-500">
            Recipe by {recipe.by}
          </span>
        </div>
        <div className="badge">
          <svg
            className="inline-block w-5"
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
          <span>{recipe.time} mins</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
