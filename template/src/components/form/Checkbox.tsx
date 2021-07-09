import React from 'react';
import {Controller, DeepMap, FieldError as RHFFieldError} from 'react-hook-form';
import { Checkbox as AntCheckbox } from 'antd';
import FieldError from './commons/FieldError';

type Props = {
    label: string,
    name: string,
    control: any,
    errors: DeepMap<any, RHFFieldError>
};

const Checkbox: React.FC<Props> = ({label, name, control, errors}) => (
    <>
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <AntCheckbox
                    onChange={field.onChange}
                >{label}</AntCheckbox>
            )}
        />
        <FieldError error={errors?.[name]?.message}/>
    </>
);

export default Checkbox;
