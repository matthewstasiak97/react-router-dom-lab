import "./App.css";
import "./index.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      ...formData,
    };
    setMailboxes((prev) => [...prev, newBox]);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <h1>Post Office</h1>
              </main>
            }
          />
          <Route
            path="/mailboxes"
            element={<MailboxList mailboxes={mailboxes} />}
          />
          <Route
            path="/new-mailbox"
            element={<MailboxForm addBox={addBox} />}
          />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
