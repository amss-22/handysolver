import React, { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import NewJob from "./components/newJob";
import JobModal from "./components/JobModal";
import JobCard from "./components/JobCard";

const initialData = {
  active: true,
  postTitle: {
    desc: "Web Developer",
    checked: true,
  },
  intro: {
    desc: "Bachelor's Degree in Computer Science, Information Technology, or equivalent degree and/or experience 8+ plus years of software development experience 5+ years of web application development experience in React JS We are looking resources with strong knowledge and experience in ReactJS, Node JS, HTML 5, Boot Strap, JavaScript, CSS Development, CI/CD, GitLab. The ideal candidate should be able to develop and maintain web applications and be able to troubleshoot and debug code. Should have a good understanding of web design principles and be able to create and modify web pages to meet customer requirements. Should also have a good understanding of databases and be able to design and implement database solutions. Should have excellent problem-solving skills and be able to work independently or as part of a team Should have excellent communication skills and be able to work with customers to ensure their satisfaction",
    checked: true,
  },
  roles: {
    desc: "-As a key member of our development team, you will be responsible for designing, implementing, and maintaining complex front-end applications. Design and develop efficient, reusable, and scalable front-end components using React.js. Collaborate closely with UI/UX designers to implement visually appealing and user-friendly interfaces. Architect and build complex frontend applications that meet business requirements. Ensure the technical feasibility of UI/UX designs and implement responsive designs for various devices. Optimize applications for maximum speed and scalability. Collaborate with backend developers to integrate frontend components seamlessly. Participate in code reviews to maintain code quality and ensure best practices. Stay updated on industry trends and emerging technologies to bring innovative solutions to the team",
    checked: true,
  },
  experience: {
    min: "0",
    max: "2",
  },
  qualification: {
    desc: "Bachelor's degree in Computer Science or related field",
    checked: true,
  },
  salaryRange: {
    desc: "15k - 20 k",
    checked: true,
  },
  company: {
    desc: "Virtusa",
    checked: true,
  },
  jobLocation: {
    desc: "Bengaluru , Karnataka",
    checked: true,
  },
  conclusion: {
    desc: "We take care of you, so you can take care of business. We care about our people. That’s why we provide everything you—and your career—need to thrive at S&P Global.",
    checked: true,
  },
 jobType: {
    desc: "Full-Time",
    checked: true,
  },
  label: {
    desc: "Remote",
    checked: true,
  },
};

function App() {
  const [arr, setArr] = useState(new Array(2).fill(initialData).map((item, i) => ({ ...item, id: i.toString() })));

  const getFormData = (updatedData) => {
    if (arr.some((item) => item.id === updatedData.id)) {
      setArr(arr.map((item) => (item.id === updatedData.id ? updatedData : item)));
    } else {
      setArr([...arr, updatedData]);
    }
  };

  const handleDuplicate = (data) => {
    const newData = { ...data, id: Date.now().toString() };
    setArr([...arr, newData]);
  };

  const handleDelete = (id) => {
    setArr(arr.filter((item) => item.id !== id));
  };


  return (
    <Box p={5} pt={10} height="100vh" display="flex">
      <VStack width="50%" height="100%" alignItems="flex-start" flex={1}>
        <Box flex={1}>
          <NewJob getFormData={getFormData} />
        </Box>
        <Box
          flex={20}
          overflow="auto"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <VStack align="flex-start" mt={10}>
            {arr.length > 0 &&
              arr.map((item, i) => (
                <JobModal
                  key={item.id}
                  data={item}
                  i={i + 1}
                  getFormData={getFormData}
                  onDuplicate={handleDuplicate}
                  onDelete={handleDelete}
                />
              ))}
          </VStack>
        </Box>
      </VStack>
      <VStack flex={2} overflow="auto">
        {arr.length > 0 && arr.map((item, i) => item.active && <JobCard key={item.id} data={item} />)}
      </VStack>
    </Box>
  );
}

export default App;
