import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {DevTool} from '@hookform/devtools';
import {Button} from 'antd';
import BasicInput from '../components/form/inputs/BasicInput';
import TextArea from '../components/form/inputs/TextArea';
import Checkbox from '../components/form/Checkbox';

type FormValues = {
    firstName: string;
    description: string;
    agreement: boolean;
    website: string;
}

const ContactSchema = yup.object().shape({
    firstName: yup.string().required(),
    description: yup.string(),
    agreement: yup.bool().required().oneOf([true], 'Field must be checked'),
    website: yup.string().url()
});

const Contact = () => {
    const {handleSubmit, formState: {errors}, control} = useForm<FormValues>({
        resolver: yupResolver(ContactSchema),
        mode: 'onChange'
    });

    const onSubmit = (data: FormValues) => {
        console.log('Result: ', JSON.stringify(data));
    };

    return (
        <>
            <DevTool control={control} placement={"top-right"} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <BasicInput
                    label="First Name"
                    name="firstName"
                    control={control}
                    errors={errors}
                    placeholder="First Name"
                />
                <TextArea
                    label="Description"
                    name="description"
                    control={control}
                    errors={errors}
                    placeholder="Description"
                />
                <Checkbox
                    label="I have read the agreement"
                    name="agreement"
                    control={control}
                    errors={errors}
                />
                <Button type="primary" htmlType="submit">Send</Button>
            </form>
        </>
    );
};

export default Contact;
