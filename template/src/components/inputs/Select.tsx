import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { FieldValues, useController, FieldPath } from 'react-hook-form';
import styled from 'styled-components';
import Text from '../typography/Text';
import { ControllerProps } from './types';

type SelectProps = {
  width?: string;
} & AntSelectProps;

const Select = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  rules,
  defaultValue,
  ...rest
}: ControllerProps<SelectProps, TFieldValues, TFieldName>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  const { error } = fieldState;
  const { value, onBlur, onChange } = field;

  return (
    <>
      <StyledAntSelect
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...rest}
      />
      {error && <Text text={error.message} type="danger" />}
    </>
  );
};

const StyledAntSelect = styled(AntSelect)<SelectProps>`
  width: ${({ width }) => (width ? width : '100%')};
` as typeof AntSelect;

export default Select;
