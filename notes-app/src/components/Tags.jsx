const TagFilter = ({ notes, selectedTag, setSelectedTag })=>{
  const allTags = [...new Set(notes.flatMap((note) => note.tags))]

  if (allTags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 my-3">
      {allTags.map((tag, i)=>(
        <button
          key={i}
          onClick={()=>setSelectedTag(tag === selectedTag ? "" : tag)}
          className={
            selectedTag === tag
              ? "bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold transition"
              : "bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full hover:bg-gray-700 transition"
          }
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}

export default TagFilter