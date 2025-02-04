import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Test from "./pages/Test";
import reviews from "./data";
import Blog from "./pages/Blog";
import Download from "./pages/Download";
import Cbt from "./pages/Cbt";

import BookDetails from "./pages/BookDetails";
import SingleBlog from "./pages/SingleBlog";
import Program from "./pages/Program";
import CourseDetails from "./pages/CourseDetails";
import Career from "./pages/Career";
import Finger from "./pages/Finger";
import Lebana from "./pages/Lebana";
import Shade from "./pages/Shade";
import Register from "./pages/Register";
import About2 from "./pages/About2";
import People from "./pages/People";
import Onboard from "./pages/Onboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cbt" element={<Cbt />} />
          <Route path="/about-us" element={<About2 />} />
          <Route path="/resources" element={<Download />} />
          <Route path="/resources-details" element={<BookDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/program" element={<Program />} />
          <Route path="/fingerprint-commission" element={<Finger />} />
          <Route path="/lebana-academy" element={<Lebana />} />
          <Route path="/the-shade" element={<Shade />} />
          <Route path="/program-details" element={<CourseDetails />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<Register />} />
          <Route path="/people" element={<People />} />
          <Route
            path="/fingerprint-commission-registration"
            element={<Onboard />}
          />

          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
