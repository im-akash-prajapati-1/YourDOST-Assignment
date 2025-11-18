export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center space-x-3 mt-4">
      <button
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span className="px-3 py-1">{page} / {totalPages}</span>

      <button
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
