import React from 'react';
import "./css/signup.css"
import "./css/font.css"
import "./css/base.css"

function Signup() {
    const script = document.createElement("script");
    script.src = "./js/placeholder.js";
    script.async = true;
    document.body.appendChild(script);
    return (
        <div class="container">
            <div class="title">sign up</div>
            <div class="flex">
                <div class="input-div">
                    <label class="label">아이디</label>
                    <input class='input' type="text" />
                </div>
                <div class="input-div">
                    <label class="label">비밀번호</label>
                    <input class='input' type="password" />
                </div>
                <div class="input-div">
                    <label class="label">비밀번호 확인</label>
                    <input class='input' type="password" />
                </div>
                <div class="input-div">
                    <label class="label">이메일</label>
                    <input class='input' type="text" />
                </div>
                    
            </div>
            <button>
                next
            </button>
        </div>
    )
}

export default Signup