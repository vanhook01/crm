import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #007bff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonLink = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
    return (
        <Container>
            <Title>Welcome to Panther Alumni Den</Title>
            <Description>Sign up or log in to access exclusive features!</Description>

            <ButtonContainer>
                <ButtonLink to="/signup">Sign Up</ButtonLink>
                <ButtonLink to="/login">Log In</ButtonLink>
            </ButtonContainer>
        </Container>
    );
};

export default HomePage;
