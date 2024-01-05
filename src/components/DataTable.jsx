import { DataGrid } from '@mui/x-data-grid';
import { BsPersonCircle } from 'react-icons/bs';

const columns = [
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    renderCell: () => (
      <BsPersonCircle
        style={{ width: '30px', height: '50px', borderRadius: '50%', color: '#063231' }}
      />
    ),
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
];

const rows = [
  {id: 1, email: 'user1@example.com' },
  {id: 2, email: 'user2@example.com' },
  // Add more rows as needed
];

const DataTable = () => {
  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
