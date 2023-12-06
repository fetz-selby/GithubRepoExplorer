import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

const AppTitle = () => {
  return (
    <Grid item xs={12} md={8}>
      <Stack direction="row" sx={{ justifyContent: 'center', height: '56px' }}>
        <Typography
          variant="h5"
          sx={{ letterSpacing: '1px', marginRight: '10px' }}
        >
          GitHub Repo Explorer
        </Typography>
        <SearchIcon sx={{ fontSize: '32px', color: '#2196f3' }} />
      </Stack>
    </Grid>
  );
};

export { AppTitle };
