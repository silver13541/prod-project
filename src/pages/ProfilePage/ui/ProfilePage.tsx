import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((first?: string) => {
        dispatch(profileActions.updateProfile({ first }));
    }, [dispatch]);

    const onChangeLastname = useCallback((lastname?: string) => {
        dispatch(profileActions.updateProfile({ lastname }));
    }, [dispatch]);

    const onChangeAge = useCallback((age?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(age) }));
    }, [dispatch]);

    const onChangeCity = useCallback((city?: string) => {
        dispatch(profileActions.updateProfile({ city }));
    }, [dispatch]);

    const onChangeUsername = useCallback((username?: string) => {
        dispatch(profileActions.updateProfile({ username }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((avatar?: string) => {
        dispatch(profileActions.updateProfile({ avatar }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
