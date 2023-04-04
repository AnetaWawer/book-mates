import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Event from "./pages/Event";
import Account from "./pages/Account";
import Events from "./pages/Events";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="books" >
              <Route path=":bookId" element={<Book />} />
            </Route>
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<Contact />} />
              <Route path="account" element={<Account />} />
            <Route path="*" element={<NoPage />} />
            <Route path="books/:bookId/events/:eventId" element={<Event />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
