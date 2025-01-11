import { Category } from "../lib/type";

type BadgeCategoryProps = {
  category: Category;
};

const categoryStyles = {
  Personal: "bg-orange-200 text-orange-900",
  Home: "bg-green-200 text-green-900",
  Business: "bg-purple-200 text-purple-900",
};

const BadgeCategory: React.FC<BadgeCategoryProps> = ({ category }) => {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-sm ${categoryStyles[category]} self-center`}
    >
      {category}
    </span>
  );
};

export default BadgeCategory;
