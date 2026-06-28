function Empty({ message = "Empty here." }) {
  return(
    <div className="rounded-2xl border border-dashed border-slate-600 p-8 text-center text-sm text-slate-400">
      {message}
    </div>
  )
}

export default Empty