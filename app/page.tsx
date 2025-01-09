"use client";
import { useStore } from "./lib/store";
import Header from "./ui/Header";
import Modal from "./ui/Modal";

export default function Home() {
  const isShowModal = useStore((state) => state.modal.isShow);
  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-scroll bg-[#eee]">
        <p>notes</p>
      </main>

      {isShowModal && <Modal />}
    </>
  );
}
