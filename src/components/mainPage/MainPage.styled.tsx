import styled from 'styled-components';

export const MainPageContainer = styled.div`
  padding: 96px;
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr;
  gap: 96px;
`;

export const BooksListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 64px;
  align-items: start;
`;
