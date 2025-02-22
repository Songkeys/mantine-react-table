import React, { FC, useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data, Person } from './makeData';

const Example: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      //column definitions...
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      //end
      {
        accessorKey: 'state',
        enableColumnOrdering: false, //disable column ordering for this column,
        header: 'State',
      },
    ],
    [],
  );

  return (
    <MantineReactTable columns={columns} data={data} enableColumnOrdering />
  );
};

export default Example;
