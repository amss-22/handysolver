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

const NewJob = ({ data, getFormData }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [formData, setFormData] = useState(data ? data : initialData);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        desc: value,
      },
    }));
  };

  const handleCheckboxChange = (field, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        checked: checked,
      },
    }));
  };
 
  const handleActiveStatus=(field)=>{

    setFormData((prevData)=>({
      ...prevData,
active:!prevData["active"]
    }))
  }

  const handleExperienceChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      experience: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const id=Math.random().toString(36)
    const data={...formData , id:id}
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
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">
              Create a new Job Profile
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <form onSubmit={handleSubmit}>
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  placeholder="Job Post Title"
                  ActiveSwitch
                  input
                  value={formData.postTitle.desc}
                  onChange={(value) => handleInputChange("postTitle", value)}
                  activeValue={formData.active}
                  checkboxValue={formData.postTitle.checked}
                  onActiveChange={(e)=> handleActiveStatus("active")}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("postTitle", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  placeholder="The ideal candidate is someone..."
                  label="Introduction"
                  width="100%"
                  textArea
                  value={formData.intro.desc}
                  onChange={(value) => handleInputChange("intro", value)}
                  checkboxValue={formData.intro.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("intro", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  placeholder="Your job will include"
                  label="Roles and Responsibilities"
                  width="100%"
                  textArea
                  value={formData.roles.desc}
                  onChange={(value) => handleInputChange("roles", value)}
                  checkboxValue={formData.roles.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("roles", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  label="Experience Range (yrs)"
                  min
                  max
                  value={formData.experience}
                  onChange={handleExperienceChange}
                />
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  placeholder="Qualifications"
                  input
                  width="100%"
                  value={formData.qualification.desc}
                  onChange={(value) => handleInputChange("qualification", value)}
                  checkboxValue={formData.qualification.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("qualification", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  placeholder="Salary Range"
                  width="50%"
                  input
                  value={formData.salaryRange.desc}
                  onChange={(value) => handleInputChange("salaryRange", value)}
                  checkboxValue={formData.salaryRange.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("salaryRange", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  placeholder="Call to Action Concluding Statement..."
                  width="100%"
                  textAreaHeight="150px"
                  textArea
                  value={formData.conclusion.desc}
                  onChange={(value) => handleInputChange("conclusion", value)}
                  checkboxValue={formData.conclusion.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("conclusion", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  placeholder="Company"
                  input
                  value={formData.company.desc}
                  onChange={(value) => handleInputChange("company", value)}
                  checkboxValue={formData.company.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("company", e.target.checked)
                  }
                />
                <CustomFormLabel
                  checkboxPresent
                  defaultCheck
                  placeholder="Job Location (Map search)"
                  input
                  value={formData.jobLocation.desc}
                  onChange={(value) => handleInputChange("jobLocation", value)}
                  checkboxValue={formData.jobLocation.checked}
                  onCheckboxChange={(e) =>
                    handleCheckboxChange("jobLocation", e.target.checked)
                  }
                />
                <Button type="submit" colorScheme="blue">
                  Create Job
                </Button>
              </form>
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
  }
};

export default NewJob;
