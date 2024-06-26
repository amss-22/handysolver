import { Box, Heading, Text, Badge, HStack, Button } from '@chakra-ui/react';

const JobCard = ({ data }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} m={4} width="80%">
    <HStack justifyContent="space-between">
    <Heading size="md">{data.postTitle.checked && `${data.postTitle.desc}` }</Heading>
    <Box display="flex" gap={2}>
    <Button colorScheme='yellow'>{data.jobType.checked && `${data.jobType.desc}`}</Button>
    <Button colorScheme='cyan'>{data.label.checked && `${data.label.desc}`}</Button>
    </Box>
    </HStack>

      <Heading size="md">{data.intro.checked && "Intro"}</Heading>
      {data.intro.checked && <Text>{data.intro.desc}</Text>}

      <Heading size="md">{data.roles.checked && "Roles"}</Heading>
      {data.roles.checked && <Text>{data.roles.desc}</Text>}

      <Heading size="md">{data.qualification.checked && "Qualification"}</Heading>
      {data.qualification.checked && <Text>{data.qualification.desc}</Text>}

      <Heading size="md">{data.jobLocation.checked && "Job Location"}</Heading>
      {data.jobLocation.checked && <Text>{data.jobLocation.desc}</Text>}

      <Heading size="md">{data.conclusion.checked && "Conclusion"}</Heading>
      {data.conclusion.checked && <Text>{data.conclusion.desc}</Text>}
      
      {data.experience.min !== "0" || data.experience.max !== "0" ? (
        <Box>
          <Heading size="md">Experience</Heading>
          <Text>{`Min: ${data.experience.min}, Max: ${data.experience.max}`}</Text>
        </Box>
      ) : null}

      {data.salaryRange.checked && (
        <Box>
          <Heading size="md">Salary Range</Heading>
          <Text>{data.salaryRange.desc}</Text>
        </Box>
      )}

      {data.company.checked && (
        <Box>
          <Heading size="md">Company</Heading>
          <Text>{data.company.desc}</Text>
        </Box>
      )}
    </Box>
  );
};



export default JobCard;
