
import { TableCell, TableRow } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TittleComponent } from "../../Ui/Components/TittleComponent"
import { AdminPanelLayout } from "../Layout/AdminPanelLayout"


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'apellido', headerName: 'Apellido', width: 130 },
    { field: 'edad', headerName: 'Edad', width: 130 },
    { field: 'rol', headerName: 'Rol', width: 130 },
    { field: 'esport', headerName: 'Esport', width: 130 },
    {
        field: 'fullName',
        headerName: 'Nombre completo',
        description: 'Esta columna no puede ser ordenable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.nombre || ''} ${params.row.apellido || ''}`,
    },
];

const rows = [
    { id: 1, apellido: 'Snow', nombre: 'Jon', edad: 35, rol: "", esport: "", },
    { id: 2, apellido: 'Lannister', nombre: 'Cersei', edad: 42, rol: "", esport: "", },
    { id: 3, apellido: 'Lannister', nombre: 'Jaime', edad: 45, rol: "", esport: "", },
    { id: 4, apellido: 'Stark', nombre: 'Arya', edad: 16, rol: "", esport: "", },
    { id: 5, apellido: 'Targaryen', nombre: 'Daenerys', edad: null, rol: "", esport: "", },
    { id: 6, apellido: 'Melisandre', nombre: null, edad: 150, rol: "", esport: "", },
    { id: 7, apellido: 'Clifford', nombre: 'Ferrara', edad: 44, rol: "", esport: "", },
    { id: 8, apellido: 'Frances', nombre: 'Rossini', edad: 36, rol: "", esport: "", },
    { id: 9, apellido: 'Roxie', nombre: 'Harvey', edad: 65, rol: "", esport: "", },
];

const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    console.log(selectedRowsData);
};

export const Applicants = () => {
    return (
        <AdminPanelLayout>
            <TittleComponent tittle="POSTULANTES" />
            <div style={{ height: "75vh", width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                />
            </div>
        </AdminPanelLayout>
    )
}



