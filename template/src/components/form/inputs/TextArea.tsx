import React from 'react';
import { Input } from 'antd';
import {Controller, DeepMap, FieldError as RHFFieldError} from 'react-hook-form';
import FieldError from './../commons/FieldError';

type Props = {
    label: string,
    name: string,
    placeholder: string,
    control: any,
    errors: DeepMap<any, RHFFieldError>
}

const TextArea: React.FC<Props> = ({label, name, placeholder, control, errors}) => (
    <>
        <span>{label}</span>
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <Input
                    placeholder={placeholder}
                    onChange={field.onChange}
                />
            )}
        />
        {<FieldError error={errors?.[name]?.message}/>}
    </>
);

export default TextArea;