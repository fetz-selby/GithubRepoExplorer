import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Error = () => {
  return (
    <Stack justifyContent="center" alignItems="center" padding="40px">
      <ElectricalServicesIcon sx={{ width: '120px', height: '120px' }} />
      <Typography variant="h6">
        Oops! Github Baby just pulled out the connection cable. Please try again
        later
      </Typography>
    </Stack>
  );
};

export { Error };
