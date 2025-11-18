export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      className="p-2 border rounded w-full mb-4"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
