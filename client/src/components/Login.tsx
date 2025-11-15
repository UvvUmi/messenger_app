//import {useState} from "react";
import {text, lang} from '../localizations.ts'
export default function Login() {


    return (
        <div id={"loginForm"}>
            <div id={"loginCard"}>
                <div id={`logoWrapper`}>
                    <img src={`/bird.png`} alt={text.logoAlt[lang]} id={`loginIcon`} title={`TSirp!`}/>
                </div>
                <form>
                    <input id={'logEmailInput'} type="email" placeholder={text.labelEmail[lang]} autoFocus={true}/>
                    <br/>
                    <input id={'logPassInput'} type="password" placeholder={text.labelPassword[lang]}/>
                    <br/>
                    <br/>
                    <button id={'loginButton'}>{text.loginButton[lang]}</button>
                </form>
                <div className="separator">{text.separatorAuth[lang]}</div>
                <div id={`registerTitle`}>
                    {text.registerHeader[lang]}
                </div>
            </div>
        </div>
    )
}
