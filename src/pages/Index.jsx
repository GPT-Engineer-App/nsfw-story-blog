import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">NSFW Story Blog</Text>
        <Text>Welcome to our NSFW story blog. Explore thrilling and captivating stories that will keep you on the edge of your seat.</Text>
        <Image src="https://images.unsplash.com/photo-1567699631772-21be4f5ef2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteXN0ZXJpb3VzJTIwZm9yZXN0fGVufDB8fHx8MTcxNDg3MTQ4M3ww&ixlib=rb-4.0.3&q=80&w=1080" />
      </VStack>
    </Container>
  );
};

export default Index;
