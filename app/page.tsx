import { ToastContainer } from "react-toastify";
import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";
import { Category } from "./lib/type";

type HomeProps = {
  searchParams: Promise<{ query?: string; category?: Category }>;
};

const Home: React.FC<HomeProps> = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams.query ?? "";
  const categoryFilter = searchParams.category;

  return (
    <>
      <Header />
      <NotesView query={query} categoryFilter={categoryFilter} />
      <Modal />
      <ToastContainer theme="colored" />
    </>
  );
};

export default Home;
