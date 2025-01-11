import { useStore } from "../lib/store";
import { Note } from "../lib/type";
import { formatDate } from "../lib/utils";
import BadgeCategory from "./BadgeCategory";
import { nunito } from "./fonts";
import CheckboxOutlineIcon from "./icons/CheckboxOutlineIcon";
import PencilIcon from "./icons/PencilIcon";
import TrashIcon from "./icons/TrashIcon";

type NoteCardProps = {
  note: Note;
};

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { title, description, category, updatedAt } = note;

  const showModal = useStore((state) => state.showModal);

  const handleEditNote = () => {
    showModal("edit", note);
  };

  return (
    <article className="bg-white rounded-2xl p-5 h-[248px] flex flex-col gap-4 shadow-lg">
      <div className="flex justify-between">
        <BadgeCategory category={category} />
        <div className="flex gap-3.5 items-center text-gray-600 mr-3">
          <button>
            <CheckboxOutlineIcon />
          </button>
          <div className="relative">
            <button
              onClick={handleEditNote}
              className="peer p-2 rounded-full hover:bg-black-12 transition-all duration-300"
            >
              <PencilIcon />
            </button>
            <p className="bg-gray-600 text-white rounded-md p-2 text-sm mt-2 absolute peer-hover:opacity-100 opacity-0">
              Edit
            </p>
          </div>
          <button>
            <TrashIcon />
          </button>
        </div>
      </div>
      <p className="text-gray-900-87 font-semibold text-2xl">{title}</p>
      <div className="flex-1">
        {description && <p className="text-gray-900-87">{description}</p>}
      </div>
      <p className={`text-end text-sm text-gray-900-60 ${nunito.className}`}>
        {formatDate(updatedAt)}
      </p>
    </article>
  );
};

export default NoteCard;
