import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";

const Home = async () => {
  return (
    <>
      <Header />
      <NotesView />
      <Modal />
    </>
  );
};

export default Home;
