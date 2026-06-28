import useNotes from "../hooks/useNotes"
import NoteCard from "../components/NoteCard"

const Archive = () => {
  const { notes, updateNote, deleteNote, archiveNote, unarchiveNote } = useNotes()

  const archivedNotes = notes.filter((n) => n.archived && !n.trashed)

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] px-5 py-4 text-underline">Archive</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Archived notes</h2>
      </div>

      {archivedNotes.length === 0 ? (
        <div className="rounded-2xl border-dashed border p-8 text-center text-slate-400">
          No archived notes.
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-3">
          {archivedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              updateNote={updateNote}
              deleteNote={deleteNote}
              pinNote={() => updateNote(note.id, { pinned: !note.pinned })}
              archiveNote={archiveNote}
              unarchiveNote={unarchiveNote}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Archive

