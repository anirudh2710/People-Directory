import { useContext,  useEffect} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Container, Typography, Card, Grid, Avatar, CardContent, Box, Pagination } from '@mui/material';


export default function DisplayParams() {

  const { users, setPage, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    setPage(page);
  }, [page, setPage]);

  const handlePageChange = (event, value) => {
    setSearchParams({page: value})
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ bgcolor: "lightblue", mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }

  return (            
        <Container maxWidth="lg" sx={{bgcolor:"lightblue", mt:4, mb:4}}>
        <Typography  variant="h4" align="center" gutterBottom>
        PEOPLE DIRECTORY
        </Typography>
        <Grid container spacing={3}>
        {users.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
        <Card variant="outlined" 
        sx={{ minHeight:"200px",bgcolor: "", display: 'flex', alignItems: 'center', p: 2, mb:4, '&:hover': {
                  boxShadow: 10,
                }, }}
        onClick={() => navigate(`/details/${user.email}`)}
        >
              <Avatar
                alt={user.name.first}
                src={user.picture.large}
                sx={{ width: 100, height: 100, marginRight: 2 }}
              />
          <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {user.name.first} {user.name.last}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  City: {user.location.city}  
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Age: {user.dob.age}
                </Typography>                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination count={5} page = {page} color="primary" onChange={handlePageChange} />
      </Box>
    </Container>
  );
}
