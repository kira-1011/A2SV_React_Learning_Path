import { useDispatch } from "react-redux";
import { BlogType, ReactionType } from "@/redux/features/blogs/blogsSlice";

const reactions = {
  thumbsup: "👍",
  heart: "♥",
  thumbsdown: "👎",
  thinking: "🤔",
  fire: "🔥",
};

const ReactionButtons = ({ blog }: { blog: BlogType }) => {

    const dispatch = useDispatch();

  return (
    <div className="flex gap-2">
      {Object.entries(reactions).map(([key, value]) => (
        <button key={key} className="border border-gray-400 rounded px-2 py-1">
          {value}
          {blog.reactions[key as ReactionType]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
