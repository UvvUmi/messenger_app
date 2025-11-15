import Cookies from "js-cookie";


export const lang: string = Cookies.get('lang') || 'en-US';
export const text: Record<string, Record<string, string>> = {
    currentLanguage: {
        'en-US': 'English',
        'lt': 'Lithuanian',
    },
    cookieNoticeTitle: {
        'en-US': 'Cookie Notice',
        'lt': 'Informacija dėl slapukų',
    },
    cookieNoticeDesc: {
        'en-US': 'By continuing to browse this website, you agree to our use of cookies.',
        'lt': 'Naršydami svetainėje toliau, Jūs sutinkate su mūsų slapukų politika.',
    },
    buttonUnderstood: {
        'en-US': 'Understood',
        'lt': 'Supratau',
    },
    labelEmail: {
        'en-US': 'Email address',
        'lt': 'El. paštas',
    },
    labelPassword: {
        'en-US': 'Password',
        'lt': 'Slaptažodis',
    },
    loginButton: {
        'en-US': 'Login',
        'lt': 'Prisijungti',
    },
    openRegisterForm: {
        'en-US': 'Don\'t have an account? Register here!',
        'lt': 'Neturite paskyros? Prisiregistruokite!',
    },
    separatorAuth: {
        'en-US': 'or',
        'lt': 'arba',
    }

};