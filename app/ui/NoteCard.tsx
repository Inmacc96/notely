"use client";
import { toggleCompletedNote } from "../lib/actions";
import { useStore } from "../lib/store";
import { Note } from "../lib/type";
import { formatDate } from "../lib/utils";
import ActionButton from "./ActionButton";
import BadgeCategory from "./BadgeCategory";
import { nunito } from "./fonts";
import ChecboxIcon from "./icons/ChecboxIcon";
import CheckboxOutlineIcon from "./icons/CheckboxOutlineIcon";
import PencilIcon from "./icons/PencilIcon";
import TrashIcon from "./icons/TrashIcon";

type NoteCardProps = {
  note: Note;
};

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { id, title, description, category, updatedAt, completedAt } = note;
  const isCompleted = !!completedAt;

  const showModal = useStore((state) => state.showModal);
  //const toggleCompleted = useStore((state) => state.toggleCompleted);

  const handleEditNote = () => {
    showModal("edit", note);
  };

  const handleDeleteNote = () => {
    showModal("delete", note.id);
  };

  const handleCompleteNote = async () => {
    await toggleCompletedNote(id);
  };

  return (
    <article className="bg-white rounded-2xl p-5 h-[248px] flex flex-col gap-4 shadow-lg">
      <div className="flex justify-between">
        <BadgeCategory category={category} isNeutralStyle={isCompleted} />
        <div className="flex gap-1.5 items-center mr-1.5">
          <ActionButton
            onClick={handleCompleteNote}
            Icon={isCompleted ? ChecboxIcon : CheckboxOutlineIcon}
            tooltipText="Mark as Complete"
            isCompleted={isCompleted}
          />
          <ActionButton
            onClick={handleEditNote}
            Icon={PencilIcon}
            tooltipText="Edit"
            isCompleted={isCompleted}
          />
          <ActionButton
            onClick={handleDeleteNote}
            Icon={TrashIcon}
            tooltipText="Delete"
            isCompleted={isCompleted}
          />
        </div>
      </div>
      <p
        className={`font-semibold text-2xl ${
          isCompleted ? "text-gray-900-36 line-through" : "text-gray-900-87"
        }`}
      >
        {title}
      </p>
      <div className="flex-1">
        {description && (
          <p
            className={`${
              isCompleted ? "text-gray-900-36 line-through" : "text-gray-900-87"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      <p className={`text-end text-sm text-gray-900-60 ${nunito.className}`}>
        {formatDate(updatedAt)}
      </p>
    </article>
  );
};

export default NoteCard;
