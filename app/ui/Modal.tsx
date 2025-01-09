"use client";

import { useStore } from "../lib/store";
import { ActionType } from "../lib/type";
import CloseIcon from "./icons/CloseIcon";

type Config = {
  title: string;
  content: string;
  buttonSuccess: {
    text: string;
    onClick: () => void;
    backgroundColor: string;
    backgroundColorHover: string;
  };
};

type ModalConfigs = Record<ActionType, Config>;

const MODAL_CONFIGS: ModalConfigs = {
  create: {
    title: "Add note",
    content: "",
    buttonSuccess: {
      text: "Add",
      onClick: () => {
        console.log("CREAR TAREA");
      },
      backgroundColor: "#42A5F5",
      backgroundColorHover: "#2196F3",
    },
  },
};

const Modal = () => {
  const actionType = useStore((state) => state.modal.actionType);
  const closeModal = useStore((state) => state.closeModal);
  const {
    title,
    content,
    buttonSuccess: { text, onClick, backgroundColor, backgroundColorHover },
  } = MODAL_CONFIGS[actionType];

  return (
    <div className="inset-0 fixed bg-[#00000052] flex items-center justify-center">
      <div className="rounded-xl shadow-xl bg-white p-6 w-[500px] space-y-7">
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
            className={`bg-[${backgroundColor}] rounded-full px-4 py-2 text-white gap-2 hover:bg-[${backgroundColorHover}]`}
          >
            <p>{text}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
