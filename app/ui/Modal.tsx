"use client";

import { useStore } from "../lib/store";
import { ActionType } from "../lib/type";
import FormNote from "./FormNote";
import CloseIcon from "./icons/CloseIcon";

type Config = {
  title: string;
  content: React.ReactNode;
};

type ModalConfigs = Record<ActionType, Config>;

const MODAL_CONFIGS: ModalConfigs = {
  create: {
    title: "Add note",
    content: <FormNote />,
  },
  edit: {
    title: "Edit note",
    content: "",
  },
  delete: {
    title: "Delete note",
    content: "",
  },
};

const Modal = () => {
  const actionType = useStore((state) => state.modal.actionType);
  const closeModal = useStore((state) => state.closeModal);
  const { title, content } = MODAL_CONFIGS[actionType];

  return (
    <div className="inset-0 fixed bg-[#00000052] flex items-center justify-center">
      <div className="rounded-xl shadow-xl bg-white p-6 w-[600px] space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-[#212121DE]">{title}</p>
          <button onClick={closeModal} className="p-1">
            <CloseIcon />
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
