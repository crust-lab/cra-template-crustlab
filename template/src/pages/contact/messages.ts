import {defineMessages} from 'react-intl';

const messages = defineMessages({
    contactPageFirstName: {
        id: 'contact.page.form.firstName',
        defaultMessage: 'First Name'
    },
    contactPageDescription: {
        id: 'contact.page.form.description',
        defaultMessage: 'Description'
    },
    contactPageAgreement: {
        id: 'contact.page.form.agreement',
        defaultMessage: 'I have read the agreement'
    },
    contactPageSendButton: {
        id: 'contact.page.form.send',
        defaultMessage: 'Send'
    },

    contactPageFirstNameRequired: {
        id: 'contact.page.firstName.required',
        defaultMessage: 'Please input your first name'
    },
    contactPageDescriptionRequired: {
        id: 'contact.page.description.required',
        defaultMessage: 'Describe your problem'
    },
    contactPageAgreementRequired: {
        id: 'contact.page.agreement.required',
        defaultMessage: 'Should accept agreement'
    },
});

export default messages;
