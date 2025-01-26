import { ToastContainer } from "react-toastify";
import Header from "./ui/Header";
import Modal from "./ui/Modal";
import NotesView from "./ui/NotesView";
import { Category } from "./lib/type";

type HomeProps = {
  searchParams: Promise<{
    query?: string;
    category?: Category;
    showCompletedNotes?: boolean;
  }>;
};

const Home: React.FC<HomeProps> = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams.query ?? "";
  const categoryFilter = searchParams.category;
  const showCompletedNotes = !!searchParams.showCompletedNotes;

  return (
    <>
      <Header />
      <NotesView
        query={query}
        categoryFilter={categoryFilter}
        showCompletedNotes={showCompletedNotes}
      />
      <Modal />
      <ToastContainer theme="colored" />
    </>
  );
};

export default Home;
