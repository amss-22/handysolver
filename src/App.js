
import { Box } from '@chakra-ui/react';
import './App.css';
import JobForm from './components/JobForm';

function App() {
const getFormData=(data)=>{
  console.log("getting for data in app", data)
}

  return (
    <Box p={5} pt={10} style={{border:"1px solid red"}}>
    <Box>
    <JobForm getFormData={getFormData}/>
    </Box>
    </Box>
  );
}









export default App;
