import { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

interface SearchProps {
  onQuery: (value: string | null) => void;
  isLoading?: boolean;
}

const Search = ({ onQuery, isLoading }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Grid item xs={12} md={6}>
        {/* intentionally made it uncontrolled input to save unneccesary re-rendering */}
        <TextField
          data-testid="search-input"
          sx={{
            color: '#555555',
            backgroundColor: '#ffffff',
            width: '100%',
            height: '100%',
          }}
          inputRef={inputRef}
          label="Enter Github username"
          variant="outlined"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onQuery(inputRef.current?.value || null);
            }
          }}
          disabled={isLoading}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Stack sx={{ justifyContent: 'center', height: '56px' }}>
          <Button
            data-testid="search-button"
            variant="contained"
            onClick={() => onQuery(inputRef.current?.value || null)}
            sx={{ width: '100%', height: '45px' }}
            disabled={isLoading}
          >
            Search
          </Button>
        </Stack>
      </Grid>
    </>
  );
};

export default Search;
