import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import StoryWriters from "../Pages/StoryWriters/StoryWriters";
import StoryTellers from "../Pages/StoryTellers/StoryTellers";
import JoinStoryClub from "../Pages/JoinStoryClub/JoinStoryClub";
import JoinStoryClubForm from "../Pages/JoinStoryClubForm/JoinStoryClubForm";
import Submitted from "../Pages/JoinStoryClubFormSubmitted/Submitted";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/storyWriters" element={<StoryWriters />} />
            <Route path="/storyTellers" element={<StoryTellers />} />
            <Route path="/joinStoryClub" element={<JoinStoryClub />} />
            <Route path="/apply" element={<JoinStoryClubForm />} />
            <Route path="/formSubmitted" element={<Submitted />} />
        </Routes>
    );
}

export default AllRoutes