import React, { useRef, useState } from 'react';
import {
  CustomSelectContainer,
  Flex,
  Label,
  OptionsContainer,
  SelectOptions,
} from 'styles/index.ts';
import { CustomSelectProps, OptionType } from './types.ts';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import SelectOption from './SelectOption.tsx';
import ErrorComponent from 'features/profilePage/uploadBook/ErrorComponent.tsx';

function CustomSelect({
  placeholder,
  optionName,
  options,
  value,
  onChange,
  onBlur,
  touched,
  errors,
  isMulti,
  isRequired,
}: CustomSelectProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = ({ name }: OptionType): void => {
    if (isMulti) {
      const values = value.split(',');
      let optionValue;
      if (values.includes(name)) {
        optionValue = values.filter((item: string) => item !== name).join();
      } else {
        optionValue = value ? [...values, name].join() : name;
      }
      onChange({
        target: {
          name: optionName,
          value: optionValue,
        },
      });
    } else {
      onChange({
        target: {
          name: optionName,
          value: value === name ? '' : name,
        },
      });
    }
  };

  const toggleShow = () => {
    setShowOptions((show) => !show);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur(event);
    setShowOptions(false);
  };

  return (
    <CustomSelectContainer ref={dropdownRef}>
      <div>
        <Flex direction="column">
          <Label>{optionName}</Label>
          <Flex
            $justifyContent="space-between"
            $alignItems="center"
            onClick={toggleShow}
          >
            <SelectOptions
              $isInvalid={Boolean(
                (!value && isRequired && touched) ||
                  (!value && touched && isRequired),
              )}
              type="text"
              name={optionName}
              value={value}
              onBlur={(event) => handleBlur(event)}
              placeholder={placeholder}
              readOnly
            />
            <div className="icon">
              <Flex direction="column">
                {showOptions ? (
                  <FiChevronUp size={14} />
                ) : (
                  <FiChevronDown size={14} />
                )}
              </Flex>
            </div>
          </Flex>
        </Flex>
      </div>
      <OptionsContainer $isActive={showOptions}>
        {options?.map((option: OptionType, index: number) => (
          <SelectOption
            isMulti={isMulti}
            value={value}
            key={index}
            option={option}
            toggleOption={toggleOption}
          />
        ))}
      </OptionsContainer>

      {isRequired && ((!value && touched) || (touched && errors)) && (
        <ErrorComponent error={errors} />
      )}
    </CustomSelectContainer>
  );
}

export default CustomSelect;
