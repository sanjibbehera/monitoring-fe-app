// // utils/auth.ts
// // import { RootState } from '../path-to-rootReducer/rootReducer';
import { RootState } from '@/store/reducers/rootReducers';
import { useRouter } from 'next/router';

export const redirectIfAuthenticated = (user: RootState['user']) => {
    const router = useRouter();

    if (user && isAuthenticated(user)) {
        router.replace('/dashboard'); // Redirect to your dashboard page
        return true; // Indicate that redirection has occurred
    }

    return false; // Indicate that no redirection has occurred
};

export const isAuthenticated = (user: RootState['user']) => {
    // Check if there is at least one non-empty value in the user object
    const hasNonEmptyValue = Object.values(user).some((value) => !!value);
    // Implement your logic to check if the user is authenticated
    // For example, check if user exists and isEmailVerified
    return hasNonEmptyValue;
};
