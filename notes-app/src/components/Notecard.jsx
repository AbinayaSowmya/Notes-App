import { useState } from "react"

const NoteCard=({note, updateNote, deleteNote, pinNote, archiveNote, unarchiveNote})=>{
  const [isEditing, setIsEditing]=useState(false)
  const [editTitle, setEditTitle]=useState(note.title || "")
  const [editContent, setEditContent]=useState(note.content || "")
  const [editTags, setEditTags]=useState((note.tags || []).join(", "))

  //to edit the notes
  const handleEdit=()=>{
    setIsEditing(true)
    setEditTitle(note.title || "")
    setEditContent(note.content || "")
    setEditTags((note.tags || []).join(", "))
  }

  const handleSave=()=>{
    const updatedTags=editTags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)

    updateNote(note.id,{
      title: editTitle,
      content: editContent,
      tags: updatedTags,
    })
    setIsEditing(false)
  }

  const formattedDate=new Date(note.createdAt).toLocaleDateString("en-US",{
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  if(isEditing){
    return (
      <div className="flex flex-col gap-3 rounded-2xl border border-yellow-400 bg-slate-800 p-4 shadow-lg">
        <input
          className="w-full rounded-lg bg-slate-700 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-yellow-400"
          value={editTitle}
          onChange={(e)=>setEditTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="min-h-24 w-full resize-none rounded-lg bg-slate-700 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-yellow-400"
          value={editContent}
          onChange={(e)=>setEditContent(e.target.value)}
          placeholder="Content"
          rows={4}
        />
        <input
          className="w-full rounded-lg bg-slate-700 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-yellow-400"
          value={editTags}
          onChange={(e)=>setEditTags(e.target.value)}
          placeholder="Tags(comma separated)"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="rounded-lg bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Save
          </button>
          <button
            onClick={()=>setIsEditing(false)}
            className="rounded-lg bg-slate-700 px-4 py-1.5 text-sm text-white transition hover:bg-slate-600"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-slate-800 p-4 shadow transition hover:shadow-lg">
      <div className="flex items-start justify-between gap-2">
        <h3 className="line-clamp-1 text-base font-semibold text-white">{note.title || "Untitled"}</h3>
        {note.pinned && <span className="text-xs text-yellow-400">📌</span>}
      </div>

      <p className="line-clamp-3 text-sm text-slate-400">{note.content}</p>

      {(note.tags || []).length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1">
          {(note.tags || []).map((tag, i)=>(
            <span key={i} className="rounded-full bg-slate-700 px-2 py-0.5 text-xs text-yellow-400">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <p className="mt-auto pt-1 text-xs text-slate-600">{formattedDate}</p>

      <div className="mt-1 flex gap-3 text-lg text-slate-500">
        <button onClick={handleEdit} className="transition hover:text-white" title="Edit">
          Edit
        </button>
        <button
          onClick={()=>pinNote(note.id)}
          className={`transition ${note.pinned ? "text-yellow-400" : "hover:text-white"}`}
          title={note.pinned ? "Unpin" : "Pin"}
        >
          Pin
        </button>
        {note.archived ? (
          <button onClick={()=>unarchiveNote(note.id)} className="transition hover:text-white" title="Unarchive">
            Unarchive
          </button>
        ) : (
          <button onClick={()=>archiveNote(note.id)} className="transition hover:text-white" title="Archive">
            Archive
          </button>
        )}
        <button onClick={()=>deleteNote(note.id)} className="transition hover:text-red-400" title="Delete">
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard
