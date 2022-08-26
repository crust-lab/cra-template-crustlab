import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { FieldValues, useController, FieldPath } from 'react-hook-form';
import styled from 'styled-components';
import Text from '../typography/Text';
import { ControllerProps } from './types';

const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  rules,
  defaultValue,
  ...rest
}: ControllerProps<AntInputProps, TFieldValues, TFieldName>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  const { error } = fieldState;
  const { value, onChange, onBlur } = field;

  return (
    <>
      <StyledAntdInput
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && <Text text={error.message} type="danger" />}
    </>
  );
};

const StyledAntdInput = styled(AntInput)`
  width: ${({ width }) => (width ? width : '100%')};
`;

export default Input;
