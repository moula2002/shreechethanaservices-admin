const Table = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="font-semibold mb-4">Recent Orders</h3>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">1</td>
            <td className="p-2 border">John</td>
            <td className="p-2 border">₹500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
