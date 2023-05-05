import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"White"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl">Bubble Chat</Text>
      </Box>
    </Container>
  );
};

export default HomePage;
