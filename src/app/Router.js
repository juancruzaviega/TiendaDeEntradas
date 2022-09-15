import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/contact/" element={<Contact />} />

        </Routes>
    </BrowserRouter>
)

export default Router;