import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 90px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const FeedbackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FeedbackBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 600;
  padding: 10px 20px;
  background: #fff;
  border: 2px solid black;
  border-radius: 5px;

  :active {
    background: #ffe9e9;
  }
`;
