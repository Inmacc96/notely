import { useStore } from "../lib/store";

type AlertConfirmDeleteProps = {
  noteId: string;
};

const AlertConfirmDelete: React.FC<AlertConfirmDeleteProps> = ({ noteId }) => {
  const closeModal = useStore((state) => state.closeModal);
  const deleteNote = useStore((state) => state.deleteNote);

  const handleDeleteNote = () => {
    deleteNote(noteId);
    closeModal();
  };

  return (
    <div className="w-[320px]">
      <p className="text-gray-900-87">
        Are you sure you want to delete this note?
      </p>
      <div className="col-span-2 flex justify-end items-center gap-8 mt-6">
        <button
          type="button"
          onClick={closeModal}
          className="font-medium text-base text-gray-600 hover:text-gray-900-87 tracking-widest"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleDeleteNote}
          className="font-medium text-base tracking-wider bg-red-400 hover:bg-red-500 rounded-full px-4 py-2 text-white gap-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AlertConfirmDelete;
