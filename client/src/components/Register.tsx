import {useState} from "react";
import {text, lang} from '../localizations.ts'
import uploadImg from '../assets/uploadAvatar.png'
export default function Register() {

    const [disabled, setState] = useState(true); 
    
    return (
        
        <div id={"registerForm"}>
            <div id={"registerCard"}>
                <form>
                    <input id={'regNameInput'} className={'registerFormInputs'} type={'text'} placeholder={text.inputName[lang]} autoFocus={true}></input>
                    <br/>
                    <input id={'regEmailInput'} className={'registerFormInputs'} type={"email"} placeholder={text.labelEmail[lang]}/>
                    <br/>
                    <input id={'regPassInput'} className={'registerFormInputs'} type={"password"} placeholder={text.labelPassword[lang]}/>
                    <br/>
                    <input id={'uploadAvatar'} type={"file"}/>
                    <span id={'uploadAvatarLink'} onClick={()=>document.getElementById('uploadAvatar')?.click()}>
                        <img src={uploadImg} alt={text.uploadAvatarText[lang]}/>
                        {text.uploadAvatarText[lang]}
                    </span>
                </form>
                <div id={'regCheckBoxWrapper'}>
                    <input name={'registerAgreement'} onClick={()=>setState(!disabled)} id={'registerAgreement'} type={'checkbox'}/>
                    <label htmlFor={'registerAgreement'}>{text.registrationCheckbox[lang]}</label>
                </div>
                <div id={'registrationBtnWrapper'}>
                    <button id={'registerButton'} disabled={disabled} title={disabled ? text.agreementRequiredReminder[lang] : ''}>{text.registerHeader[lang]}</button>
                    <button >{text.returnToLogin[lang]}</button>
                </div>
            </div>
        </div>
    )
}
