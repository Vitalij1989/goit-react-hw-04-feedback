import { GlobalStyle } from './Global/global.styed';
import { Wrapper } from './WrapperList/WrapperList.styled';
import { Feedback } from './Feedback';

export const App = () => {
  return (
    <Wrapper>
      <Feedback />
      <GlobalStyle />
    </Wrapper>
  );
};
