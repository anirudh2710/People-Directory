import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Container, Card, CardContent, Avatar, Typography} from '@mui/material';


export default function PersonDetails() {
  const {users} = useContext(UserContext);
  const { email } = useParams();
  const detail = users.find(user => user.email === email);

  return (
    <Container maxWidth="sm" sx={{mt:2}}>
    <Card sx={{bgcolor:"lightblue"}}variant="outlined">
      <CardContent>
        <Avatar
          alt={detail.name.first}
          src={detail.picture.large}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <Typography variant="h4" component="h2" gutterBottom>
          {detail.name.first} {detail.name.last}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Age: {detail.dob.age}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> {detail.email}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> {detail.phone}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Address:</strong> {detail.location.street.number} {detail.location.street.name}, {detail.location.city}, {detail.location.state}, {detail.location.postcode}
        </Typography>
        <Typography variant="body1" paragraph>
            <Link to="/">Go Back</Link>
          </Typography>
      </CardContent>
    </Card>
  </Container>
);
}
