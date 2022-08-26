import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';

export type ControllerProps<
  TInputComponentProps,
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TFieldName> & TInputComponentProps;
