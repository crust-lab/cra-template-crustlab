import React from 'react';
import {Form, Input, Checkbox, Button, Row, Col} from 'antd';
import {useIntl, FormattedMessage} from 'react-intl';
import messages from './messages';

type FormValues = {
    firstName: string;
    description: string;
    agreement: boolean;
}

const Contact = () => {
    const {formatMessage: f} = useIntl();
    const [form] = Form.useForm();

    const onSubmit = (data: FormValues) => {
        console.log('Result: ', JSON.stringify(data));
    };

    return (
        <Row justify="center">
            <Col sm={16}>
                <Form
                    form={form}
                    name="Contact"
                    onFinish={onSubmit}
                    scrollToFirstError
                >
                    <Form.Item
                        name="firstName"
                        label={f(messages.contactPageFirstName)}
                        rules={[
                            {
                                required: true,
                                message: f(messages.contactPageFirstNameRequired)
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label={f(messages.contactPageDescription)}
                        rules={[
                            {
                                required: true,
                                message: f(messages.contactPageDescriptionRequired)
                            }
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error(f(messages.contactPageAgreementRequired)))
                            }
                        ]}
                    >
                        <Checkbox>
                            <FormattedMessage
                                id="contact.form.agreement"
                                defaultMessage={f(messages.contactPageAgreement)}
                            />
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            <FormattedMessage
                                id="contact.form.sendButton"
                                defaultMessage={f(messages.contactPageSendButton)}
                            />
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Contact;
