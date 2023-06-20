import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  getCoreRowModel,
  useReactTable,
  flexRender
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const DataTable = <T extends object>({
  data,
  columns
}: ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
