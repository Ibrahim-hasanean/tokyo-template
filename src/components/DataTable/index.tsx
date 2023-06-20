import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TablePagination
} from '@mui/material';
import {
  getCoreRowModel,
  useReactTable,
  flexRender
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ChangeEventHandler, MouseEvent } from 'react';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showPagination?: boolean;
  count?: number;
  page?: number;
  limit?: number;
  handlePageChange?: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    page: number
  ) => void;
  onRowsPerPageChange?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

export const DataTable = <T extends object>({
  data,
  columns,
  showPagination = false,
  count,
  page,
  limit,
  handlePageChange,
  onRowsPerPageChange
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
      {showPagination && (
        <Box p={2}>
          <TablePagination
            component="div"
            count={count}
            onPageChange={handlePageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      )}
    </TableContainer>
  );
};
