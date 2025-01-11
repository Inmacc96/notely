"use client";

import { useStore } from "../lib/store";
import { ActionType, Note } from "../lib/type";
import AlertConfirmDelete from "./AlertConfirmDelete";
import FormNote from "./FormNote";
import CloseIcon from "./icons/CloseIcon";

type Config = {
  title: string;
  content: (payload?: unknown) => React.ReactNode;
};

type ModalConfigs = Record<ActionType, Config>;

const MODAL_CONFIGS: ModalConfigs = {
  create: {
    title: "Add note",
    content: () => <FormNote />,
  },
  edit: {
    title: "Edit note",
    content: (payload) => <FormNote note={payload as Note} />,
  },
  delete: {
    title: "Delete note",
    content: () => <AlertConfirmDelete />,
  },
};

const Modal = () => {
  const { actionType, payload } = useStore((state) => state.modal);
  const closeModal = useStore((state) => state.closeModal);
  const { title, content } = MODAL_CONFIGS[actionType];

  return (
    <div className="inset-0 fixed bg-black-32 flex items-center justify-center">
      <div className="rounded-xl shadow-xl bg-white p-6 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-gray-900-87">{title}</p>
          <button
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-black-12 transition-all duration-300"
          >
            <CloseIcon />
          </button>
        </div>
        {content(payload)}
      </div>
    </div>
  );
};

export default Modal;
