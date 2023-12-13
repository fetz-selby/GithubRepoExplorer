import Typography from '@mui/material/Typography';
import { colors } from '../../../styles';

const RepoLabel = ({ message }: { message: string }) => (
  <Typography
    variant="body1"
    sx={{ fontStyle: 'italic', color: `${colors.typography.medium}` }}
  >
    {message}
  </Typography>
);

export default RepoLabel;
