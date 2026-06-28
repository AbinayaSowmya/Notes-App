import { useMemo, useState } from "react"
import AddNote from "../components/AddNote"
import NoteCard from "../components/NoteCard"
import SearchBar from "../components/SearchBar"
import TagFilter from "../components/TagFilter"
import useNotes from "../hooks/useNotes"

function Home(){
  const { notes, addNote, updateNote, deleteNote, archiveNote, unarchiveNote } = useNotes()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const visibleNotes=useMemo(()=>{
    return notes.filter((note)=>{
      if (note.archived || note.trashed) return false

      const query = searchQuery.toLowerCase()
      const titleMatch = note.title?.toLowerCase().includes(query)
      const contentMatch = note.content?.toLowerCase().includes(query)
      const tagMatch = note.tags?.some((tag) => tag.toLowerCase().includes(query))
      const tagFilterMatch = selectedTag ? note.tags?.includes(selectedTag) : true

      return (titleMatch || contentMatch || tagMatch) && tagFilterMatch
    })
  }, [notes, searchQuery, selectedTag])

  const togglePin=(id)=>{
    const targetNote = notes.find((note)=>note.id === id)
    if (targetNote) {
      updateNote(id, { pinned: !targetNote.pinned })
    }
  }

  return(
    <div className="space-y-6">
      <div className="rounded-2xl border p-6 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Today</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Capture your next idea</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Write notes, tag them, and keep your workspace clean with archive and trash views.
        </p>
      </div>

      <AddNote addNote={addNote} />
      <SearchBar search={searchQuery} setSearch={setSearchQuery} />
      <TagFilter notes={notes.filter((note) => !note.archived && !note.trashed)} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleNotes.length > 0 ? (
          visibleNotes.map((note)=>(
            <NoteCard
              key={note.id}
              note={note}
              updateNote={updateNote}
              deleteNote={deleteNote}
              pinNote={togglePin}
              archiveNote={archiveNote}
              unarchiveNote={unarchiveNote}
            />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed p-8 text-center text-slate-400">
            No notes match your search.
          </div>
        )}
      </div>
    </div>
  )
}

export default Home