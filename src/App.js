import { useState, useEffect } from "react";
import { getUsers, getLength } from "./api/users";
import "./App.css";
import Table from "./components/table";
import Pagination from "./components/pagination";
import SelectLimit from "./components/selectLimit";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(1); // state for total pages
  const [users, setUsers] = useState([]);

  // Fetch total page and users
  useEffect(() => {
    const fetchData = async () => {
      const total = await getLength(); // Ensure this is async if needed
      setTotalPage(Math.ceil(total / limit));
      const userData = await getUsers(page, limit);
      setUsers(userData);
    };
    fetchData();
  }, [page, limit]); // Dependency array to refetch when page or limit changes

  function handlePageChange(value) {
    if (value === "&laquo;" || value === "...") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === "...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  return (
    <div className="container">
      <Table users={users} />
      <div className="pagination-container">

        <SelectLimit onLimitChange={setLimit} />
      </div>
      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        siblings={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
