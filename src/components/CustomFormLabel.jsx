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
}) => {
  console.log("8888",activeValue)
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
            <Box>
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
            >
              {Array.from({ length: 10 }, (v, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </Select>
          )}
        </HStack>
      </FormControl>
    </div>
  );
};

export default CustomFormLabel;
