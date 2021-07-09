import React from 'react';
import styled from 'styled-components';

type Props = {
    error: string
};

const FieldError: React.FC<Props> = ({error}) => (
    <Wrapper>
        {error}
    </Wrapper>
);

const Wrapper = styled.div`
    height: 1.75rem;
    color: ${props => props.theme.color.error};
`;

export default FieldError;
