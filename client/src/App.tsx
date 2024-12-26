import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Homepage from "./pages/HomePage.tsx";
import SigninAndRegister from "./pages/SignInAndRegister.tsx";
import BusinessPostsFeed from "./pages/BusinessPostsFeed.tsx";
import PostPage from "./pages/PostPage.tsx";

// redux import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signinAndRegister" element={<SigninAndRegister />} />
        {/* <Route path="/user-profile" element={<Profile />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/business-posts-feed" element={<BusinessPostsFeed />} />
        <Route path="/business-post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
