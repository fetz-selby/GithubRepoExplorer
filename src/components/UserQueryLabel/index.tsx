import { Box, Typography } from '@mui/material';

interface UserQueryLabelProps {
  query: string | null;
}

const UserQueryLabel = ({ query }: UserQueryLabelProps) => {
  return (
    <Box data-testid="search-results-label">
      {query ? (
        <Typography variant="h6">
          Showing users for: &quot; {query} &quot;
        </Typography>
      ) : null}
    </Box>
  );
};

export { UserQueryLabel };
