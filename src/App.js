import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@astrouxds/ag-grid-theme/dist/main.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
 //import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import createEvents from './createEvents';
function App() {

  const columnDefs = [
    {
      headerName: 'Track ID',
      field: 'track-id',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: 'Status',
      field: 'status',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: 'Hits',
      field: 'hits',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: 'First Detect',
      field: 'first-detect',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: 'Duration',
      field: 'duration',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: 'Location',
      field: 'location',
      sortable: true,
      filter: true,
      checkboxSelection: true
    }
  ]

  const rowDefs = [];

  const initialState= {
    columnDefs: columnDefs,
    rowData: rowDefs,
  }

  for(let i = 0; i < 1000; i += 1) {
    rowDefs[i] = createEvents();
  }
  const [events, setEvents] = useState(initialState);

    var gridOptions = {
      // PROPERTIES
      // Objects like myRowData and myColDefs would be created in your application
      rowData: events.rowData,
      columnDefs: events.columnDefs,
      // pagination: true,
      rowSelection: 'single',
  
      // EVENTS
      // Add event handlers
      onRowClicked: event => console.log('A row was clicked'),
      onColumnResized: event => console.log('A column was resized'),
      onGridReady: event => console.log('The grid is now ready'),
  
      // CALLBACKS
      isScrollLag: () => false
  }


  return (
    <div
    className="ag-theme-balham"
    style={{
      height: '1000px',
      width: '1600px'
    }}
  >
    <AgGridReact 
      gridOptions={gridOptions}
      ></AgGridReact>
      </div>
  );
}

export default App;
