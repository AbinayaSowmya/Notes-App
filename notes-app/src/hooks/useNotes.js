import { useState, useEffect } from "react"

const useNotes = ()=>{
  const [notes, setNotes] = useState(()=>{
    const stored = localStorage.getItem("notes")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote=(title, content, tags)=>{
    const trimmedTitle = title?.trim() || "Untitled"
    const trimmedContent = content?.trim() || ""
    const normalizedTags = tags
      ? tags.split(",").map((t) => t.trim()).filter(Boolean)
      : []

    const newNote ={
      id: Date.now(),
      title: trimmedTitle,
      content: trimmedContent,
      tags: normalizedTags,
      pinned: false,
      archived: false,
      trashed: false,
      createdAt: new Date().toISOString(),
    }

    setNotes((prev)=>[newNote, ...prev])
    return newNote
  }
   const deleteNote=(id)=>{
    setNotes((prev)=>
      prev.map((note)=>(note.id === id ? { ...note, trashed: true, pinned: false } : note))
    )
  }

  const updateNote=(id, updatedFields)=>{
    setNotes((prev)=>
      prev.map((note)=>(note.id === id ? { ...note, ...updatedFields } : note))
    )
  }

 

  const restoreNote=(id)=>{
    setNotes((prev)=>
      prev.map((note)=>(note.id === id ? { ...note, trashed: false, archived: false, pinned: false } : note))
    )
  }

  const deleteForever=(id)=>{
    setNotes((prev)=>prev.filter((note) => note.id !== id))
  }

  const archiveNote=(id)=>{
    setNotes((prev)=>
      prev.map((note)=>
        note.id === id ? { ...note, archived: true, pinned: false } : note
      )
    )
  }

  const unarchiveNote=(id)=>{
    setNotes((prev)=>
      prev.map((note)=>(note.id === id ? { ...note, archived: false } : note))
    )
  }

  return {
    notes,
    addNote,
    deleteNote,
    updateNote,
    
    restoreNote,
    deleteForever,
    archiveNote,
    unarchiveNote,
  }
}

export default useNotes