
import { Box, VStack } from '@chakra-ui/react';
import './App.css';
import JobForm from './components/JobForm';
import { useState } from 'react';
import NewJob from './components/newJob';
import JobModal from './components/JobModal';


function App() {
  const [arr, setArr] = useState(new Array(10).fill(initialData).map((item, i) => ({ ...item, id: i.toString() })));

  const getFormData = (updatedData) => {
    console.log("---", updatedData)
    setArr(arr.map(item => item.id === updatedData.id ? updatedData : item));
  }

  return (
    <Box p={5} pt={10} style={{ border: "1px solid red" }}>
      <Box>
        <NewJob getFormData={getFormData} />
      </Box>
      <VStack align="flex-start" mt={10}>
        {arr.length > 0 &&
          arr.map((item, i) => <JobModal key={item.id} data={item} i={i + 1} getFormData={getFormData} />)
        }
      </VStack>
    </Box>
  );
}







const initialData = {
  
  active: true,
  postTitle: {
    desc: "Web Developer",
    checked: true,
  },
  intro: {
    desc: "full stack web developer",
    checked: true,
  },
  roles: {
    desc: "",
    checked: true,
  },
  experience: {
    min: "0",
    max: "0",
  },
  qualification: {
    desc: "",
    checked: true,
  },
  salaryRange: {
    desc: "",
    checked: false,
  },
  company: {
    desc: "",
    checked: false,
  },
  jobLocation: {
    desc: "",
    checked: true,
  },
  conclusion: {
    desc: "",
    checked: true,
  }
};


export default App;
