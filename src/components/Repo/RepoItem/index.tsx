import { Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import moment from 'moment';

export interface RepoItemProps {
  id: number;
  title: string;
  description: string;
  stargazersCount: number;
  language: string;
  updatedAt: string;
}

const RepoItem = ({
  title,
  description,
  stargazersCount,
  language,
  updatedAt,
}: RepoItemProps) => {
  return (
    <>
      <Divider />
      <Stack direction="column" pb="10px">
        <Stack direction="row" pb="5px">
          <Stack justifyContent="space-between" sx={{ width: '100%' }}>
            <Typography variant="h6">{title}</Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 200, lineHeight: 1.2 }}
            >
              {description}
            </Typography>
          </Stack>
          {stargazersCount > 0 ? (
            <Stack direction="row">
              <StarIcon sx={{ width: '16px', marginRight: '5px' }} />
              <Typography variant="body1">{stargazersCount}</Typography>
            </Stack>
          ) : null}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="body1"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#1565c0',
            }}
          >
            {language}
          </Typography>
          <Typography
            sx={{ fontWeight: 200, fontStyle: 'italic', fontSize: '14px' }}
          >
            updated {moment(updatedAt, 'YYYYMMDD').fromNow()}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export { RepoItem };
