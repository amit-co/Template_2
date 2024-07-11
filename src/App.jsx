import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
import BookNow from './Pages/BookNow';
const PrivateDinning = lazy(() => import("./Pages/PrivatedDinning"));
const About = lazy(() => import("./Pages/About"));
const Gift = lazy(() => import("./Pages/GiftVoucher"));
const Restaurant = lazy(() => import("./Pages/Restaurant"));
const Bar = lazy(() => import("./Pages/Bar"));
const Cafe = lazy(() => import("./Pages/Cafe"));
const Ird = lazy(() => import("./Pages/Ird"));
const Contact = lazy(() => import("./Pages/Contact"));
const Team = lazy(() => import("./Pages/Team"));
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import { Navbar } from "./Components/Navbar";
import { Caring } from "./Components/Caring";
import { Sociable } from "./Components/Sociable";
import Food from "./Pages/Food";
import Drinks from "./Pages/Drinks";
import { Footer } from "./Components/Footer";
import Menu from "./Pages/Menu";
import Venue from "./Pages/Venue";
import Refund from "./Pages/Refund";

function App() {
    return (
        <div className="relative font-customFont">
            <BrowserRouter>
                <InnerApp />
            </BrowserRouter>
        </div>
    );
}

function InnerApp() {
    const location = useLocation();
    const shouldRenderNavbar = location.pathname !== "/";
   // const shouldRenderFooter = location.pathname !== "/";

    return (
        <>
            {shouldRenderNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookNow" element={<BookNow />} />
                <Route path="/menu" element={<Suspense fallback={<h1>Loading...</h1>}><Menu /></Suspense>} />
                <Route path="/privateDinning" element={<Suspense fallback={<h1>Loading...</h1>}><PrivateDinning /></Suspense>} />
                <Route path="/venue" element={<Suspense fallback={<h1>Loading...</h1>}><Venue /></Suspense>} />
                <Route path="/venue/restaurant" element={<Suspense fallback={<h1>Loading...</h1>}><Restaurant /></Suspense>} />
                <Route path="/venue/bar" element={<Suspense fallback={<h1>Loading...</h1>}><Bar /></Suspense>} />
                <Route path="/venue/cafe" element={<Suspense fallback={<h1>Loading...</h1>}><Cafe /></Suspense>} />
                <Route path="/venue/ird" element={<Suspense fallback={<h1>Loading...</h1>}><Ird /></Suspense>} />
                <Route path="/giftVoucher" element={<Suspense fallback={<h1>Loading...</h1>}><Gift /></Suspense>} />
                <Route path="/contact" element={<Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>} />
                <Route path="/refund" element={<Suspense fallback={<h1>Loading...</h1>}><Refund /></Suspense>} />
                <Route path="/gallery" element={<Suspense fallback={<h1>Loading...</h1>}><Gallery /></Suspense>} />
                <Route path="/gallery/food" element={<Suspense fallback={<h1>Loading...</h1>}><Food /></Suspense>} />
                <Route path="/gallery/drinks" element={<Suspense fallback={<h1>Loading...</h1>}><Drinks /></Suspense>} />
                <Route path="/gallery/teams" element={<Suspense fallback={<h1>Loading...</h1>}><Team /></Suspense>} />
                <Route path="/about" element={<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>} />
                <Route path="/caring" element={<Suspense fallback={<h1>Loading...</h1>}><Caring /></Suspense>} />
                <Route path="/sociable" element={<Suspense fallback={<h1>Loading...</h1>}><Sociable /></Suspense>} />
            </Routes>
            <SpeedInsights />
            <Analytics />
            
        </>
    );
}

export default App;
