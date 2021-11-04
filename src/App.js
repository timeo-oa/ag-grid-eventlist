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
      checkboxSelection: false,
      cellStyle: function (params) {
        //console.log('Params obj rowHeight is', params.data)
        if (params.value == 'New') {
          //Here you can check the value and based on that you can change the color
          return { color: 'black', backgroundColor: '#FF3838' };
        } else {
          return { color: 'black', backgroundColor: 'yellow' };;
        }
      }
    },

    {
      headerName: 'Hits',
      field: 'hits',
      sortable: true,
      filter: true,
      checkboxSelection: false
    },
    {
      headerName: 'First Detect',
      field: 'first-detect',
      sortable: true,
      filter: true,
      checkboxSelection: false
    },
    {
      headerName: 'Duration',
      field: 'duration',
      sortable: true,
      filter: true,
      checkboxSelection: false
    },
    {
      headerName: 'Location',
      field: 'location',
      sortable: true,
      filter: true,
      checkboxSelection: false,
      cellRenderer: function(param){
        return param.value[0] + '<br/>' + param.value[1];
      }
    }
  ]

  const rowDefs = [];

  const initialState = {
    columnDefs: columnDefs,
    rowData: rowDefs,
  }

  for (let i = 0; i < 1000; i += 1) {
    rowDefs[i] = createEvents();
  }
  const [events, setEvents] = useState(initialState);

  var gridOptions = {
    // PROPERTIES
    // Objects like RowData and ColDefs would be created in your application
    rowData: events.rowData,
    columnDefs: events.columnDefs,
    animateRows: true,
    maxWidth: 50,
    width:50,
    // pagination: true,
    rowSelection: 'single',
    rowHeight: 50,
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
        height: '700px',
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
