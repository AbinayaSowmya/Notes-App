const TagFilter = ({ notes, selectedTag, setSelectedTag })=>{
  const allTags = [...new Set(notes.flatMap((note) => note.tags || []))]

  if (allTags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag, i)=>(
        <button
          key={i}
          onClick={()=>setSelectedTag(tag === selectedTag ? "" : tag)}
          className={
            selectedTag === tag
              ? "rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-950 transition"
              : "rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400 transition hover:bg-slate-700 hover:text-white"
          }
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

export default TagFilter
