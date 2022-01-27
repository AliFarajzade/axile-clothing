import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 200px;
        padding-bottom: 100px;
    }
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;

    height: 100%;
    width: 95px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

const OptionStyles = css`
    padding: 10px 15px;
    font-size: 20px;
    min-width: max-content;
    cursor: pointer;

    @media (max-width: 400px) {
        margin: 5px 0;
    }
`;
export const OptionDiv = styled.div`
    ${OptionStyles};
`;

export const OptionLink = styled(Link)`
    ${OptionStyles}
`;
