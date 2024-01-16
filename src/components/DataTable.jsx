import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/ListUsersService";
import moment from "moment";
import PropTypes from "prop-types";

const columns = [
  {
    field: "email",
    headerName: "Email address",
    width: 300,
  },
  {
    field: "id",
    headerName: "Subscribed at",
    width: 300,
  },
];

const DataTable = ({ onUsersLengthChange }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      getUsers()
        .then((res) => {
          const usersData = res.data.data.map((user) => ({
            id: moment(user.timestamp).format("dddd, Do MMMM YYYY (h:mm A)"),
            email: user.email,
          }));
          setRows(usersData);
          onUsersLengthChange(usersData.length);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, [onUsersLengthChange]);

  return (
    <div
      style={{ height: 450, backgroundColor: "#FFFFFF" }}
      className="lg:w-8/12 md:w-11/12 sm:w-11/12 w-11/12"
    >
      <DataGrid
        rows={rows}
        loading={rows.length === 0}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
};

DataTable.propTypes = {
  onUsersLengthChange: PropTypes.func.isRequired,
};

export default DataTable;
