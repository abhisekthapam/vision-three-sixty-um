import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeMain from "../pages/home/HomeMain";
import AboutUs from "../pages/AboutUs";
import OurWork from "../pages/OurWork";
import ContactUs from "../pages/ContactUs";
import Media from "../pages/visions/Media";
import Communication from "../pages/visions/Communication";
import ComingSoon from "../pages/ComingSoon";
import ScrollToTop from "../components/ScrollToTop";
import Gallery from "../pages/Gallery";
import WorkOne from "../pages/work/WorkOne";
import WorkThree from "../pages/work/WorkThree";
import WorkTwo from "../pages/work/WorkTwo";
import Events from "../pages/project/events/Events";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="text-white font-clash">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/our-work" element={<OurWork />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/talk-toilet" element={<WorkOne />} />
            <Route path="/mango" element={<WorkTwo />} />
            <Route path="/wow-nepal" element={<WorkThree />} />
            <Route path="/projects/events" element={<Events />} />
            <Route
              path="/development-communication-and-event"
              element={<Communication />}
            />
            <Route path="/impact-media-and-story-telling" element={<Media />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
