import useNotes from "../hooks/useNotes"

const Trash=()=>{
  const { notes, restoreNote, deleteForever } = useNotes()

  const trashedNotes = notes.filter((n) => n.trashed)

  return(
    <div className="space-y-6">
      <div className="rounded-2xl border shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] px-5 py-4 text-underline">Trash</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Deleted notes</h2>
      </div>

      {trashedNotes.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-8 text-center text-slate-400">
          Trash is empty.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {trashedNotes.map((note) => (
            <div key={note.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow">
              <h3 className="text-base font-semibold text-white">{note.title || "Untitled"}</h3>
              <p className="mt-2 text-sm text-slate-400">{note.content}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => restoreNote(note.id)}
                  className="rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-400"
                >
                  Restore
                </button>
                <button
                  onClick={() => deleteForever(note.id)}
                  className="rounded-full bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-400"
                >
                  Delete Forever
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Trash