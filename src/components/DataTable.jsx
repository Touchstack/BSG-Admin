import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getUsers } from '../../services/ListUsersService';
import PropTypes from 'prop-types';

const columns = [
  {
    field: 'id',
    headerName: 'User ID',
    width: 300,
  },
  {
    field: 'email',
    headerName: 'Email address',
    width: 300,
  }
];

const DataTable = ({ onUsersLengthChange }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      getUsers()
        .then((res) => {
          const usersData = res.data.data.map((user) => ({ id: user._id, email: user.email }));
          setRows(usersData);
          onUsersLengthChange(usersData.length);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
  
    fetchData();
  }, [onUsersLengthChange]);

  return (
    <div style={{ height: 450, width: '60%', backgroundColor: "#FFFFFF" }}>
      <DataGrid
        rows={rows}
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
