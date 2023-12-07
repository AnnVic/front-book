import { Button, Flex, ProfileForm } from 'styles/index.ts';
import { Container, InputContainer } from 'styles/Container.styled.tsx';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/storeHooks.ts';
import {
  User,
  useGetUserQuery,
  useUpdateUserMutation,
} from 'services/profileApiService.ts';
import { Form, Formik } from 'formik';
import { profileSchema } from 'features/profilePage/personalProfile/profileSchema.ts';
import { useEffect } from 'react';
import { setUser } from 'features/profilePage/personalProfile/profileSlice.ts';
import { TextField } from 'features/profilePage/personalProfile/TextField.tsx';

const initialValues: User = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
};

function PersonalProfileCover() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data = initialValues, isError, isSuccess } = useGetUserQuery();
  const [patch, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUser(data));
    }
  }, [data, isSuccess, isError, dispatch, navigate]);

  function onSubmit(values: User) {
    patch(values);
  }

  return (
    <Container>
      <Formik
        initialValues={data}
        validationSchema={profileSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleSubmit, values, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <ProfileForm $minWidth="unset">
              <InputContainer>
                <Flex direction="column" $width="50%" $gap="20px">
                  <TextField
                    name="firstName"
                    fieldType="text"
                    isChanged={data.firstName !== values.firstName}
                  />
                  <TextField
                    name="email"
                    fieldType="email"
                    isChanged={data.email !== values.email}
                  />
                  <TextField
                    name="userName"
                    fieldType="text"
                    isChanged={data.userName !== values.userName}
                  />
                </Flex>
                <Flex direction="column" $width="50%" $gap="16px">
                  <TextField
                    name="lastName"
                    fieldType="text"
                    isChanged={data.lastName !== values.lastName}
                  />
                </Flex>
              </InputContainer>
              <Flex direction="row" $justifyContent="flex-end">
                <Button
                  disabled={
                    !isValid ||
                    isLoading ||
                    JSON.stringify(data) === JSON.stringify(values)
                  }
                  type="submit"
                  $backgroundColor="var(--color-primary-light)"
                  $color="var(--color-primary-medium)"
                  $onhoverBackgroundColor="var(--color-primary-gray)"
                  $onhoverColor="var(--color-primary-dark)"
                >
                  Save Changes
                </Button>
              </Flex>
            </ProfileForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default PersonalProfileCover;
