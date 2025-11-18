export default function UserTable({ users, loading, sortField, setSortField }) {
  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  return (
    <table className="min-w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">Avatar</th>

          <th className="p-2 border cursor-pointer"
              onClick={() => setSortField("first_name")}>
            First Name ⬍
          </th>

          <th className="p-2 border">Last Name</th>

          <th className="p-2 border cursor-pointer"
              onClick={() => setSortField("email")}>
            Email ⬍
          </th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="border-b">
            <td className="p-2 border">
              <img src={u.avatar} className="w-12 h-12 rounded-full" />
            </td>
            <td className="p-2 border">{u.first_name}</td>
            <td className="p-2 border">{u.last_name}</td>
            <td className="p-2 border">{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
