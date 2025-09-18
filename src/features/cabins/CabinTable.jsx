import { useCabins } from './useCabins';

import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all';

  let filterdCabins;
  if (filterValue === 'all') filterdCabins = cabins;
  if (filterValue === 'no-discount')
    filterdCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filterdCabins = cabins.filter((cabin) => cabin.discount > 0);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          data={filterdCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
