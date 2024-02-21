import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
// import StoryWriters from "../Pages/StoryWriters/StoryWriters";
import StoryTellers from "../Pages/StoryTellers/StoryTellers";
import JoinStoryClub from "../Pages/JoinStoryClub/JoinStoryClub";
import JoinStoryClubForm from "../Pages/JoinStoryClubForm/JoinStoryClubForm";
import Submitted from "../Pages/JoinStoryClubFormSubmitted/Submitted";
import StoryWritersP1 from "../Pages/StoryWriters/Page1/StoryWritersP1";
import StoryWritersP2 from "../Pages/StoryWriters/Page2/StoryWritersP2";
import StoryWritersP3 from "../Pages/StoryWriters/Page3/StoryWritersP3";
import StoryWriterSubmission from "../Pages/StoryWriters/Submitted/StoryWriterSubmission";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/storyWriters/page1" element={<StoryWritersP1 />} />
            <Route path="/storyWriters/page2" element={<StoryWritersP2 />} />
            <Route path="/storyWriters/page3" element={<StoryWritersP3 />} />
            <Route path="/storyWriters/submitted" element={<StoryWriterSubmission />} />
            <Route path="/storyTellers" element={<StoryTellers />} />
            <Route path="/joinStoryClub" element={<JoinStoryClub />} />
            <Route path="/apply" element={<JoinStoryClubForm />} />
            <Route path="/formSubmitted" element={<Submitted />} />
        </Routes>
    );
}

export default AllRoutes