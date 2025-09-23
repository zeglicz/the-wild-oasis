import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import Spinner from '../../ui/Spinner';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isPending } = useRecentBookings();
  const { stays, confirmedStays, isPending: isPending2 } = useRecentStays();

  if (isPending || isPending2) return <Spinner />;

  console.log(bookings, stays, confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>List of activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
