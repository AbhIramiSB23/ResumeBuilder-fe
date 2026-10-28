import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ResumeGenerate from "./Pages/ResumeGenerate";
import ResumeDetails from "./Pages/ResumeDetails";
import AllResumes from "./Pages/AllResumes";
import AllDownloads from "./Pages/AllDownloads";
import SingleResume from "./Pages/SingleResume";
import PNF from "./Pages/PNF";
import Home from "./Pages/Home";
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeGenerate />} />
        <Route path="/resume-details" element={<ResumeDetails />} />
        <Route path="/all-resumes" element={<AllResumes />} />
        <Route path="/all-downloads" element={<AllDownloads />} />
        <Route path="/resume/:id" element={<SingleResume />} />

        <Route path="/*" element={<PNF />} />
      </Routes>
      <Footer />
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Zoom}
/>
    </>
  );
}

export default App;
