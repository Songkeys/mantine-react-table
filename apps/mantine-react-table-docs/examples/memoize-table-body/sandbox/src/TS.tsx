import React, { FC, useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { Title } from '@mantine/core';
import { data, Person } from './makeData';

export const Example: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
    //end
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableBottomToolbar={false} //no need for bottom toolbar if no pagination
      enableColumnActions={false} //no need for column actions if none of them are enabled
      enableColumnFilters={false} //filtering does not work with memoized table body
      enableDensityToggle={false} //density does not work with memoized table body
      enableGlobalFilter={false} //searching does not work with memoized table body
      enableHiding={false} //column hiding does not work with memoized table body
      enablePagination={false} //pagination does not work with memoized table body
      enableSorting={false} //sorting does not work with memoized table body
      enableStickyHeader
      memoMode="table-body" // memoize table body to improve render performance, but break all features
      mantineTableContainerProps={{ sx: { maxHeight: '500px' } }}
      renderTopToolbarCustomActions={() => (
        <Title order={4}>Static Memoized Table</Title>
      )}
    />
  );
};

export default Example;
