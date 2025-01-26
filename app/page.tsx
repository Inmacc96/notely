import { ToastContainer } from "react-toastify";
import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";

type HomeProps = {
  searchParams: Promise<{ query?: string }>;
};

const Home: React.FC<HomeProps> = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams.query ?? "";
  return (
    <>
      <Header />
      <NotesView query={query} />
      <Modal />
      <ToastContainer theme="colored" />
    </>
  );
};

export default Home;
