"use server"
type ContactRequest = {
    firstname:string,
    lastname:string,
    email:string,
    msg:string,
}

async function onContactRequest({firstname,lastname,email,msg} : ContactRequest){
    
    console.log(firstname+ " " + lastname + " " +email + " " + msg);
}

export {
    onContactRequest
}