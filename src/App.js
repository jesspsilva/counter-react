import { useState } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  background-color: rgba(133, 29, 65, 0.9);
  border: 1px solid  rgb(133, 29, 65);
  padding: .1rem 4rem 2rem 4rem;
  border-radius: .2rem;
  text-align: center;
  font-size: 2rem;
    &:hover{
      cursor: pointer;
    }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
    &:hover{
      cursor: pointer;
    }
    &:focus{
      outline: none;
    }
`;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <StyledCounter>
      <h1>{counter}</h1>
      <StyledButtons>
        <StyledButton 
        onClick={() => setCounter(counter + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </StyledButton>
        <StyledButton 
        onClick={() => setCounter(counter - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </StyledButton>
      </StyledButtons>
    </StyledCounter>
  );
}

export default App;
