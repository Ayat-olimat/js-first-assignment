function Key(check) {
    if (check === true) return true;
    else return false;
}

function person (check) {
    if (check === "Mohammad") return true;
    else return false;
}

function security(KeyVar,nameValue) {
if (KeyVar === true && nameValue === true) return "Welcome";
else return "You can't access"; 
}

const result = security(key(true), person('Mohammad'))
alert (result)