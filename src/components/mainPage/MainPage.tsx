import { useState } from 'react';

import {
  BooksListWrapper,
  MainPageContainer,
} from 'components/mainPage/MainPage.styled.tsx';
import { useGetBooksQuery } from 'services/bookApiService.ts';
import { Flex, Spinner } from 'components/styles';
import BookItem from 'components/mainPage/bookItem/BookItem.tsx';
import Pagination from 'components/mainPage/pagination/Pagination.tsx';
import { BookType } from 'features/profilePage/uploadBook/bookSlice.ts';

function MainPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: books,
    isFetching,
    isLoading,
    isSuccess,
    isError,
  } = useGetBooksQuery(currentPage);

  return (
    <MainPageContainer>
      {(isFetching && isLoading) || isFetching ? (
        <Spinner />
      ) : isSuccess ? (
        <Flex
          direction="column"
          $gap="64px"
          $justifyContent="center"
          $alignItems="center"
        >
          {books.items.length === 0 ? (
            <p>No book found</p>
          ) : (
            <>
              <BooksListWrapper>
                {books.items.map((book: BookType, index: number) => (
                  <BookItem book={book} key={index} />
                ))}
              </BooksListWrapper>
              <Pagination
                totalPages={books.totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </Flex>
      ) : (
        isError && <p>Failed to get data</p>
      )}
      <p>Filter</p>
    </MainPageContainer>
  );
}

export default MainPage;
