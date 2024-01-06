import { DataGrid } from '@mui/x-data-grid';

const columns = [
 
  {
    field: 'email',
    headerName: 'Email address',
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
     <div style={{ height: 400, width: '60%', backgroundColor:"#FFFFFF" }} >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
   </div>
  );
};

export default DataTable;
