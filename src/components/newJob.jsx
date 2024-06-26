// src/components/JobForm.js
import React, { useState } from "react";
import {
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";
import CustomFormLabel from "./CustomFormLabel";
import JobForm from "./JobForm";

const NewJob = ({ data, getFormData }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const handleSubmit = (data) => {
    const id=Math.random().toString(36)
    const datawithId={...data , id:id}
  getFormData(datawithId)
  };

  return (
    <div>
      <Box>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button colorScheme="pink" onClick={onToggle}>
              New Job +
            </Button>
          </PopoverTrigger>
          <PopoverContent width="rem">
            <PopoverHeader fontWeight="semibold">
              Create a new Job Profile
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>    
              <JobForm  getFormData={handleSubmit} onClose={onClose} />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </div>
  );
};

// initial data for forms
const initialData = {
  active: true,
  postTitle: {
    desc: "",
    checked: true,
  },
  intro: {
    desc: "",
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

export default NewJob;
