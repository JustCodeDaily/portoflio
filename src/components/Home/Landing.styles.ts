import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #fafafa;
  text-align: center;

  h1 {
    margin-bottom: rem;
    font-size: 2.5rem;
    color: #333;
  }
`;

export const IconGrid = styled.div`
  display: grid;
  place-items: center;

  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 6rem;
  width: 80%;
  height: 20%;
  max-width: 600px;
`;

export const IconCard = styled.div`
  

  padding: 1rem;
  cursor: pointer;
 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-weight: bold;
    color: #555;
  }
`;
