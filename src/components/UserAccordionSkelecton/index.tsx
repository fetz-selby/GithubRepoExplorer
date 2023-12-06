import Stack from '@mui/material/Stack';
import Loading from '../Loading';
import { colors } from '../../styles';

const UserAccordionItem = () => {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Loading
        variant="circular"
        sx={{ width: '34px', height: '34px', margin: '2px' }}
      />
      <Loading variant="rectangular" sx={{ width: '100%', height: '34px' }} />
    </Stack>
  );
};

const UserAccordionLoading = () => {
  return (
    <Stack
      data-testid="accordion-loading"
      direction="column"
      sx={{
        width: '100%',
        background: `${colors.layout.main}`,
        padding: '5px',
      }}
    >
      <UserAccordionItem />
      <UserAccordionItem />
      <UserAccordionItem />
    </Stack>
  );
};

export default UserAccordionLoading;
