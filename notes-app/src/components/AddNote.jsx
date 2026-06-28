import { useState } from "react"

function AddNote({addNote}){
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [tags,setTags] = useState("")

//submit new notes
  const handleSubmit=(e)=>{
    e?.preventDefault?.()

    const trimmedTitle=title.trim()
    const trimmedContent=content.trim()

    if (!trimmedTitle && !trimmedContent && !tags.trim()) return

    addNote(trimmedTitle || "Untitled", trimmedContent, tags)
    setTitle("")
    setContent("")
    setTags("")
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl">
      <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Fill the title here..."
        className="w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-sm placeholder:text-slate-500"
/>
        <input
          value={tags}
          onChange={(e)=>setTags(e.target.value)}
          placeholder="Tags(comma separated)"
          className="w-full rounded-xl px-4 py-3 border text-sm placeholder:text-slate-500"
        />
      </div>
      <textarea
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        placeholder="Write your note here..."
        rows={4}
        className="mt-3 w-full rounded-xl border border-slate-700 px-4 py-3 text-sm text-white placeholder:text-slate-500"
      />
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-full border border-green-500 bg-green-400 px-4 py-2 text-slate-950 transition hover:bg-green-300"
        >
          Add Note
        </button>
      </div>
    </form>
    
  )
}

export default AddNote
