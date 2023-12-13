import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import RepoList from '../Repo/RepoList';
import { UserProps, UserTypes } from '../../interfaces';
import { Avatar, Chip } from '@mui/material';

interface UserAccordionProps {
  users: UserProps[];
}

const UserAccordion = ({ users }: UserAccordionProps) => {
  const renderGithubUserAccordionItem = () => (
    <>
      {users.map(({ id, login, reposUrl, avatar, type }) => {
        const chipColor = type === UserTypes.User ? 'success' : 'primary';

        return (
          <Accordion key={id} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={id.toString()}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt={login}
                  src={avatar}
                />
                <Typography variant="body1">{login}</Typography>
                <Chip
                  label={type}
                  color={chipColor}
                  variant="outlined"
                  sx={{
                    height: '18px',
                    textTransform: 'uppercase',
                    fontSize: '10px',
                  }}
                />
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <RepoList reposUrl={reposUrl} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );

  return (
    <Stack data-testid="accordion">{renderGithubUserAccordionItem()}</Stack>
  );
};

export default UserAccordion;
