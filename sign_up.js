function signUpEventHandler() {
    alert("sign up");
}
function processUserName() {
    var _user_name = document.getElementById("_name");
    const _is_password_validation_exist = document.getElementById("password conditions");
    const _is_ip_validation_exist = document.getElementById("ip conditions");
    if (_is_password_validation_exist != null) { _is_password_validation_exist.remove(); }
    if (_is_ip_validation_exist != null) { _is_ip_validation_exist.remove(); }
    if (_user_name.value.includes('!') || _user_name.value.includes('@') || _user_name.value.includes('#') ||
        _user_name.value.includes('$') || _user_name.value.includes('%') || _user_name.value.includes('^') ||
        _user_name.value.includes('*') || _user_name.value.includes(':') || _user_name.value.includes('?') ||
        _user_name.value.includes('/') || _user_name.value.includes('-') || _user_name.value.includes('.')) {
        alert('Invalid UserName'); _user_name.value = null;
    }
    _user_name.value = _user_name.value.toLowerCase();
}
function passwordCheck() {
    const _is_self_div_element_exist = document.getElementById("password conditions");
    const _is_other_div_element_exist = document.getElementById("ip conditions");
    if (_is_other_div_element_exist != null) { _is_other_div_element_exist.remove(); }
    //console.log(_is_element_exist);
    if (_is_self_div_element_exist == null) {
        const _div = document.createElement("div");
        const _container = document.getElementsByTagName("footer");
        _container[0].appendChild(_div);
        _div.id = "password conditions";
        _div.style.display = "flex";
        _div.style.flexDirection = "column";
        _div.style.alignItems = "center";
        _div.style.border = "2px solid black";

        const _li = [];
        for (var i = 0; i < 3; ++i) { _li[i] = document.createElement("li"); _div.appendChild(_li[i]); }
        _li[0].textContent = "password must not contain ~ ` ; , . ' {} [] () \\";
        _li[1].textContent = "password must be of more than 8 characters";
        _li[2].textContent = "password must not start with @ or # or ! etc";
    }

    const _pass = document.getElementById("_password");
    const _el = document.getElementById("password conditions");
    console.log(_pass.value);
    if (_pass.value.includes('`') || _pass.value.includes('~') || _pass.value.includes(';') || _pass.value.includes(',')
        || _pass.value.includes('.') || _pass.value.includes('\'') || _pass.value.includes('{') || _pass.value.includes('}')
        || _pass.value.includes('[') || _pass.value.includes(']') || _pass.value.includes('(') || _pass.value.includes(')')
        || _pass.value.includes('\\')) {
        alert("Invalid Input");
        _el.children[0].style.color = "red";
        _pass.value = null;
    }
    else { _el.children[0].style.color = "black"; }
    if (_pass.value[0] == '@' || _pass.value[0] == '#' || _pass.value[0] == '!') {
        console.log(_pass.value);
        _el.children[2].style.color = "red";
        _pass.value = null;
    }
    else { _el.children[2].style.color = "black"; }
    if (_pass.value.length < 8) { _el.children[1].style.color = "red"; }
    else { _el.children[1].style.color = "black"; }
}

var _password_condition_div_box_exist_count = 0;
function validateReEnteredPassword() {
    const _pas_val = document.getElementById("_password");
    const _re_en_pass_val = document.getElementById("_confirm_password");
    const _is_element_exist = document.getElementById("password conditions");
    var _is_pass_recheck_el_exist = document.getElementById("confirm_password conditions");


    if (_is_element_exist == null && _password_condition_div_box_exist_count == 0) { alert('please enter password'); ++_password_condition_div_box_exist_count; }
    else {
        if (_is_element_exist != null) _is_element_exist.remove();
        ++_password_condition_div_box_exist_count;
        if (_is_pass_recheck_el_exist == null) {
            const _div = document.createElement("div");
            const _icons = document.createElement("div");
            const _container = document.getElementsByTagName("footer");
            _container[0].appendChild(_icons);
            _icons.appendChild(_div);
            _div.id = "confirm_password conditions";
            // _div.textContent = "password matched";
            // _div.textContent = '<i class="fa-solid fa-check"></i>';
            _div.className = "fas fa-regular fa-circle-check";
            // <i class="fa-regular fa-circle-check"></i>
            // <i class="fa-regular fa-circle-check"></i>
            _icons.style.color = "green";
            _div.style.display = "None";
        }
        if (_re_en_pass_val.value == _pas_val.value) {
            _is_pass_recheck_el_exist.style.display = "flex";
            _is_pass_recheck_el_exist.style.justifyContent = "center";
        }
    }
}
function isUserThere(user_name) {
    var _userEntry = localStorage.getItem(user_name);
    if (_userEntry == null) return false;
    return true;
}
function phoneNumberVal() {
    var _is_ip_validation_exist = document.getElementById("ip conditions");
    const _is__password_validation_exist = document.getElementById("password conditions");
    if (_is__password_validation_exist != null) { _is__password_validation_exist.remove(); }
    if (_is_ip_validation_exist != null) { _is_ip_validation_exist.remove(); }

    var _phone_num = document.getElementById("_phone_number");
    // var _is_key_integer = parseInt(_phone_num.value);
    // console.log(_is_key_integer);
    if (isNaN(_phone_num.value)) { alert("phone number should integer"); _phone_num.value = null; }
}
function ipConditions() {
    const _is_other_div_el_exist = document.getElementById("password conditions");
    const _is_self_div_el_exist = document.getElementById("ip conditions");
    if (_is_other_div_el_exist != null) { _is_other_div_el_exist.remove(); }
    if (_is_self_div_el_exist != null) { _is_self_div_el_exist.remove(); }
    const _div = document.createElement("div");
    const _container = document.getElementsByTagName("footer");
    _container[0].appendChild(_div);
    _div.id = "ip conditions";
    _div.style.display = "flex";
    _div.style.flexDirection = "column";
    _div.style.alignItems = "center";
    _div.style.justifyContent = "center";
    _div.style.border = "2px solid black";

    const _li_1 = document.createElement("li"); _div.appendChild(_li_1);
    _li_1.textContent = "AN IP FORMAT MUST BE A.B.C.D";
    const _li_2 = document.createElement("li"); _div.appendChild(_li_2);
    _li_2.textContent = "0 < A,B,C,D < 256  INTEGER FORM";
}
function validateIp() {
    var _ip = document.getElementById("_ip_address").value;
    if (!_ip.includes(".")) { alert("invalid ip"); }
    _ip = _ip.split('.');
    for (var i = 0; i < _ip.length; ++i) {
        if (_ip[i] <= 0 || _ip[i] > 255 || isNaN(_ip[i])) { alert("Invalid IpAddress"); document.getElementById("_ip_address").value = null; }
    }
}
function storeUserData() {
    let _user_name = document.getElementById("_name").value;
    let _user_password = document.getElementById("_password").value;
    if (!isUserThere(_user_name)) localStorage.setItem(_user_name, _user_password);
}
function confirmAsUser() {
    var _user_name = document.getElementById("_name").value;
    var _user_password = document.getElementById("_password").value;
    var _user_re_password = document.getElementById("_confirm_password").value;
    var _email_val = document.getElementById("_email_id").value;
    var _phone_number = document.getElementById("_phone_number").value;
    if (isUserThere(_user_name)) alert("this user already exist!");
    else {
        if (_user_name != null && _user_password.length >= 8 &&
            _user_password == _user_re_password && _email_val.includes("@nirmauni.ac.in")
            && _phone_number.length == 10) {
            storeUserData();
            alert("sign up successful");
        }
        else {
            alert('sign up unsuccessful');
        }
    }
}

