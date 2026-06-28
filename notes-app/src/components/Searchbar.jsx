const SearchBar = ({ search, setSearch })=>{
  return (
    <input
      type="text"
      placeholder="🔍 Search notes..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full rounded-xl border px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-yellow-400"
    />
  )
}

export default SearchBar