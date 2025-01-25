import { ToastContainer } from "react-toastify";
import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";

const Home = async () => {
  return (
    <>
      <Header />
      <NotesView />
      <Modal />
      <ToastContainer theme="colored" />
    </>
  );
};

export default Home;
