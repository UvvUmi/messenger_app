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
    },
    logoAlt: {
        'en-US': 'TSirp! logo',
        'lt': 'TSirp! logotipas',
    },
    registerHeader: {
        'en-US': 'Create profile',
        'lt': 'Sukurti profilį',
    },
    returnToLogin: {
        'en-US': 'Login instead',
        'lt': 'Turiu paskyrą',
    },
    inputName: {
        'en-US': 'Enter your name',
        'lt': 'Įveskite savo vardą',
    },
    uploadAvatarText: {
        'en-US': 'Upload your avatar',
        'lt': 'Įkelkite savo avataro paveiksliuką',
    },
    registrationCheckbox: {
        'en-US': 'I Agree with the use of data and cookies policy',
        'lt': 'Sutinku su duomenų ir slapukų naudojimo politika',
    },
    agreementRequiredReminder: {
        'en-US': 'You must agree with data and cookies policy!',
        'lt': 'Reikia sutikti su duomenų ir slapukų politika!',
    }

};