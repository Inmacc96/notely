"use client";
import { useStore } from "./lib/store";
import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";

export default function Home() {
  const isShowModal = useStore((state) => state.modal.isShow);
  return (
    <>
      <Header />
      <NotesView />

      {isShowModal && <Modal />}
    </>
  );
}
