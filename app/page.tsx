"use client";
import { useEffect } from "react";
import { useStore } from "./lib/store";
import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";
import { Note } from "./lib/type";

export default function Home() {
  const isShowModal = useStore((state) => state.modal.isShow);
  const setNotes = useStore((state) => state.setNotes);

  useEffect(() => {
    const notes: Note[] =
      JSON.parse(localStorage.getItem("notes") ?? "[]")?.state ?? [];

    setNotes(
      notes.map((note) => ({
        ...note,
        completedAt: note.completedAt ? new Date(note.completedAt) : undefined,
        updatedAt: new Date(note.updatedAt),
      }))
    );
  }, [setNotes]);

  return (
    <>
      <Header />
      <NotesView />

      {isShowModal && <Modal />}
    </>
  );
}
