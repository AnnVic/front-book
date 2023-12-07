import React from 'react';

export type OptionType = {
  name: string;
};

export type CustomSelectProps = {
  placeholder: string;
  optionName: string;
  options: OptionType[] | undefined;
  value: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
  onBlur: (event: React.ChangeEvent<EventTarget>) => void;
  touched: boolean | undefined;
  errors: string | string[] | undefined;
  isMulti: boolean;
  isRequired: boolean;
};
export type SelectOptionProps = {
  option: OptionType;
  toggleOption: (option: OptionType) => void;
  value: string;
  isMulti: boolean;
};
