import { styled } from "styled-components";

export const UserInformationContainer = styled.div``;

export const UserNameContainer = styled.div`
border-right: 1px solid gray;
`;

export const UserDetailContainer = styled.div`
    border: 1px solid grey;
    padding: 10px;
    margin: 5px;
    /* height: 100vh; */
    background-color: #faebd7;
`;

export const UserNameAndEmailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom:10px;
`;

export const UserName = styled.div`
    text-align: left;
    font-weight: bold;
`;


export const EmailAndPhone = styled.div`
    display: grid;
    grid-row-gap: 2px;
    text-transform: lowercase;
    text-align: right;
`;

export const CompanyContainer = styled.div`
    text-transform:capitalize;
    display: grid;
    grid-row-gap: 2px;
`;

export const EmptyResponseContainer = styled.div`
`;