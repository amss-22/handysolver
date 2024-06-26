// src/components/CustomFormLabel.js
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Switch,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CustomFormLabel = ({
  checkboxPresent,
  placeholder,
  ActiveSwitch,
  label,
  input,
  defaultCheck,
  width,
  textAreaHeight,
  min,
  max,
  textArea,
  value,
  onChange,
  checkboxValue,
  onActiveChange,
  onCheckboxChange,
  activeValue,
  jobType,
  labelType,
}) => {
  return (
    <div>
      <FormControl mb={3}>
        <HStack>
          {checkboxPresent && (
            <Checkbox
              colorScheme="red"
              defaultChecked={defaultCheck}
              isChecked={checkboxValue}
              onChange={onCheckboxChange}
            ></Checkbox>
          )}
          <VStack width={width} align="flex-start" gap={0}>
            <FormLabel mb={0} mt={0}>
              {label}
            </FormLabel>
            {input && (
              <Input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
            {textArea && (
              <Textarea
                placeholder={placeholder}
                height={textAreaHeight}
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            )}
          </VStack>
          {ActiveSwitch && (
            <Box justifySelf="flex-end">
              <FormLabel htmlFor="active-switch" mb="0">
                Active?
              </FormLabel>
              <Switch id="active-switch" onChange={onActiveChange} isChecked={activeValue} />
            </Box>
          )}

          {min && (
            <Select
              placeholder="Min"
              value={value.min}
              onChange={(e) => onChange({ ...value, min: e.target.value })}
              width="%"
            >
              {Array.from({ length: 10 }, (v, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </Select>
          )}
          {max && (
            <Select
              placeholder="Max"
              value={value.max}
              onChange={(e) => onChange({ ...value, max: e.target.value })}
               width="%"
            >
              {Array.from({ length: 10 }, (v, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </Select>
          )}
          {
            jobType &&
            (
              <Select
              placeholder="Job Type"
              value={value.desc}
              onChange={(e) => onChange(e.target.value)}
              width="%"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contractual">Contractual</option>
              <option value="Internship">Internship</option>
            </Select>
            )
          }

          {
            labelType &&
            (
              <Select
              placeholder="Labels"
              value={value.desc}
              onChange={(e) => onChange( e.target.value)}
              width="%"
            >
              <option value="Remote">Remote</option>
              <option value="5 Days a Week">5 Days a Week</option>
            </Select>

            )
          }

     
        
          
        </HStack>
      </FormControl>
    </div>
  );
};

export default CustomFormLabel;
