import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Leaderboard = () => {
  return (
    <Box as="main">
      <Button
        variant="theme"
        onClick={() =>
          fetch('http://localhost:4000/users', {
            credentials: 'include',
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:4000',
            },
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
        }
      >
        Fetch users
      </Button>
    </Box>
  );
};

export default Leaderboard;
