import * as React from "react";

import { DataGridPro, GridColDef, GridRenderCellParams, GridRowsProp } from "@mui/x-data-grid-pro";

const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "col1",
    width: 55,
    renderCell: (params: GridRenderCellParams) => (
      <div tw="w-full flex justify-center">
        <img src="https://avatars.githubusercontent.com/u/64312219?s=80&v=4" />
      </div>
    ),
    sortable: false,
    filterable: false,
  },
  {
    field: "col1",
    headerName: "col1",
    width: 180,
    renderCell: (params: GridRenderCellParams) => (
      <a href="https://google.com" target="_blank" style={{ color: "#556cd6", cursor: "pointer" }}>
        {params.value}
      </a>
    ),
  },
  {
    field: "col2",
    headerName: "col2",
    width: 180,
    renderCell: (params: GridRenderCellParams) => (
      <a href="https://google.com" target="_blank" style={{ color: "#556cd6", cursor: "pointer" }}>
        {params.value}
      </a>
    ),
  },
];

const rows: GridRowsProp = [
  { id: "1", col1: "Hello", col2: "World" },
  { id: "2", col1: "XGrid", col2: "is Awesome" },
  { id: "3", col1: "Material-UI", col2: "is Amazing" },
  { id: "4", col1: "Hello", col2: "World" },
  { id: "5", col1: "XGrid", col2: "is Awesome" },
  { id: "6", col1: "Material-UI", col2: "is Amazing" },
];

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const MyApp = (props) => {
  return <DataGridPro rows={rows} columns={columns} pageSize={100} autoHeight rowHeight={55} />;
};

export default MyApp;
