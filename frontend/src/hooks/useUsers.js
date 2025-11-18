import { useEffect, useState } from "react";

export default function useUsers(page, search, sortField, filterDomain) {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      const res = await fetch(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
      });

      const data = await res.json();

      let list = data.data || [];

      // search filter
      if (search) {
        list = list.filter(
          (u) =>
            u.first_name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
        );
      }

      // email domain filter
      if (filterDomain) {
        list = list.filter((u) => u.email.endsWith(filterDomain));
      }

      // sort
      if (sortField === "first_name") {
        list.sort((a, b) => a.first_name.localeCompare(b.first_name));
      } else if (sortField === "email") {
        list.sort((a, b) => a.email.localeCompare(b.email));
      }

      setUsers(list);
      setTotalPages(data.total_pages);
      setLoading(false);
    }

    loadUsers();
  }, [page, search, sortField, filterDomain]);

  return { users, totalPages, loading };
}
