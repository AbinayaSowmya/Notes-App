import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/archive", label: "Archive" },
  { to: "/trash", label: "Trash" },
]

function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl font-semibold text-white">Notes App</h1>
          <p className="text-sm text-slate-400">Capture ideas and keep them organized</p>
        </div>
        <div className="flex gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-yellow-400 text-slate-950" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
