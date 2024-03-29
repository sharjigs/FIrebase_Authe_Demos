// sign up
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get users information
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the users
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User Sign Out');
    });
});

// login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get User Info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(crd => {
        console.log(crd.user);
        // close the login Modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})