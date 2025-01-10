"use client";

import { useStore } from "../lib/store";
import { ActionType } from "../lib/type";
import FormNote from "./FormNote";
import CloseIcon from "./icons/CloseIcon";

type Config = {
  title: string;
  content: React.ReactNode;
  buttonSuccess: {
    text: string;
    onClick: () => void;
  };
};

type ModalConfigs = Record<ActionType, Config>;

const MODAL_CONFIGS: ModalConfigs = {
  create: {
    title: "Add note",
    content: <FormNote />,
    buttonSuccess: {
      text: "Add",
      onClick: () => {
        console.log("CREAR TAREA");
      },
    },
  },
  edit: {
    title: "Edit note",
    content: "",
    buttonSuccess: {
      text: "Edit",
      onClick: () => {
        console.log("EDIT TAREA");
      },
    },
  },
  delete: {
    title: "Delete note",
    content: "",
    buttonSuccess: {
      text: "Delete",
      onClick: () => {
        console.log("DELETE NOTE");
      },
    },
  },
};

const Modal = () => {
  const actionType = useStore((state) => state.modal.actionType);
  const closeModal = useStore((state) => state.closeModal);
  const {
    title,
    content,
    buttonSuccess: { text, onClick },
  } = MODAL_CONFIGS[actionType];

  const bgColorBtn =
    actionType === "create" || actionType === "edit"
      ? "bg-[#42A5F5] hover:bg-[#2196F3]"
      : "bg-[#EF5350] hover:bg-[#F44336]";

  return (
    <div className="inset-0 fixed bg-[#00000052] flex items-center justify-center">
      <div className="rounded-xl shadow-xl bg-white p-6 w-[600px] space-y-7">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-[#212121DE]">{title}</p>
          <button onClick={closeModal} className="p-1">
            <CloseIcon />
          </button>
        </div>
        {content}
        <div className="flex justify-end itemse-center gap-8">
          <button
            onClick={closeModal}
            className="text-[#656565] hover:text-[#212121DE]"
          >
            Cancel
          </button>
          <button
            onClick={onClick}
            className={`${bgColorBtn} rounded-full px-4 py-2 text-white gap-2`}
          >
            <p>{text}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
