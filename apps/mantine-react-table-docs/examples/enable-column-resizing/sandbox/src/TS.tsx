import React, { FC, useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data, Person } from './makeData';

const Example: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name', //uses the default width from defaultColumn prop
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        enableResizing: false, //disable resizing for this column
      },
      {
        accessorKey: 'email',
        header: 'Email Address',
        size: 200, //increase the width of this column
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 120, //decrease the width of this column
      },
      {
        accessorKey: 'country',
        header: 'Country',
        size: 100, //decrease the width of this column
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      //optionally override the default column widths
      defaultColumn={{
        maxSize: 400,
        minSize: 80,
        size: 150, //default size is usually 180
      }}
      enableColumnResizing
      columnResizeMode="onChange" //default is "onEnd"
    />
  );
};

export default Example;
