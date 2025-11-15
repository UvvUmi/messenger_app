import {text, lang} from '../localizations.ts'
export default function Login() {

    return (
        <div id={"loginForm"}>
            <div id={"loginCard"}>
                <img src={`/tsirp.svg`}/>
                <form>
                    <input id={'logEmailInput'} type="email" placeholder={text.labelEmail[lang]} autoFocus={true}/>
                    <br/>
                    <input id={'logPassInput'} type="password" placeholder={text.labelPassword[lang]}/>
                    <br/>
                    <br/>
                    <button id={'loginButton'}>{text.loginButton[lang]}</button>
                    <div className="separator">{text.separatorAuth[lang]}</div>
                </form>
            </div>
        </div>
    )
}
