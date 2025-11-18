import { useState } from "react";
import useUsers from "../hooks/useUsers";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import UserTable from "../components/UserTable";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("");
  const [filterDomain, setFilterDomain] = useState("");

  const { users, totalPages, loading } = useUsers(
    page, 
    search, 
    sortField, 
    filterDomain
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4 text-center">
        User Directory
      </h1>

      <SearchBar search={search} setSearch={setSearch} />

      {/* Filter by domain */}
      <select
        className="p-2 border rounded mb-4"
        value={filterDomain}
        onChange={(e) => setFilterDomain(e.target.value)}
      >
        <option value="">Filter by Email Domain</option>
        <option value="@reqres.in">@reqres.in</option>
      </select>

      <UserTable
        users={users}
        loading={loading}
        sortField={sortField}
        setSortField={setSortField}
      />

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
