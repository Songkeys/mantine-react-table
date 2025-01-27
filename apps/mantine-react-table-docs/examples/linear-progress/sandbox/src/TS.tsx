import React, { FC, useEffect, useMemo, useState } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { data, Person } from './makeData';
import { Button } from '@mantine/core';

const Example: FC = () => {
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
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
    ],
    [],
    //end
  );

  const [progress, setProgress] = useState(0);

  //simulate random progress for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.random() * 20;
        return Math.min(oldProgress + newProgress, 100);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      mantineProgressProps={({ isTopToolbar }) => ({
        color: 'secondary',
        variant: 'determinate', //if you want to show exact progress value
        value: progress, //value between 0 and 100
        sx: {
          display: isTopToolbar ? 'block' : 'none', //hide bottom progress bar
        },
      })}
      renderTopToolbarCustomActions={() => (
        <Button onClick={() => setProgress(0)} variant="filled">
          Reset
        </Button>
      )}
      state={{ showProgressBars: true }}
    />
  );
};

export default Example;
