import React from "react";
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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Topic from "./pages/Topic";
import {createTheme, ThemeProvider} from "@mui/material";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#5c4e46'
      },
      secondary: {
        main: '#C5A992'
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />}>
            </Route>
            <Route path="book" >
              <Route path=":id" element={<Book />} />
            </Route>
            <Route path="events" element={<Events />} />
            <Route path="events/:eventId" element={<Event />} />
            <Route path="contact" element={<Contact />} />
            <Route path="users" >
              <Route path=":id" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
            <Route path="topics/:topicId" element={<Topic/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
