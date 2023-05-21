import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { data } from './mock_data/allMovies'
import { setTotalPages } from "./app/slices/pagination/paginationSlice";

function App() {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(data.length/10);
  dispatch(setTotalPages(totalPages));
  return (
    <>
      <Navbar />
        <Outlet/>
      <Footer />
    </>
  );
}

export default App;
