import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Archive from "./Pages/Archive"
import Trash from "./Pages/Trash"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App