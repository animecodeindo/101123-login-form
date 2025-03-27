const modalOverlay = document.querySelector(".modal-overlay"),
    modalBox = document.querySelector(".modal-box"),
    close = document.querySelector(".close"),
    submitButton = document.querySelector(".submit-button"),
    usernameError = document.querySelector("#username-error"),
    passwordError = document.querySelector("#password-error"),
    charError = document.querySelector(".error-img"),
    charDefault = document.querySelector(".default-img"),
    loginButton = document.querySelector(".login"),
    loginModal = document.querySelector(".login-overlay"),
    closeLogin = document.querySelector(".close-login");

let usernameInput = document.querySelector(".username-input"),
    passwordInput = document.querySelector(".password-input");

window.onload = () => {
    let tl = gsap.timeline({
        duration: 0.5,
        ease: "power4.out",
    });
    tl.from(".modal-overlay", {
        opacity: 0,
    });
    tl.from(".modal-box",{
        opacity: 0,
        yPercent: 60,
    },0.2);

    let e = gsap.timeline();
    e.to(".login-overlay", {
        display: "flex",
    })
    e.from(".login-overlay", {
        duration: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0)",
        ease: "expo.out",
    });

    e.from(".login-outer-box", {
        duration: 0.5,
        scaleY: 0,
        ease: "expo.out",
    });

    e.from(".fade-animate", {
        duration: 0.5,
        opacity: 0,
        ease: "power4.out",
    })

    e.from(".chibi-container", {
        duration: 1,
        yPercent: 100,
        ease: "power4.out"
    }, 1.3)

    e.reverse();

    close.onclick = () => {
        tl.reverse();
        setTimeout(() => {
            modalOverlay.style.display = "none";
        }, 1000);
    };

    loginButton.onclick = () => {
        e.restart();
        closeLogin.onclick = () => {
            e.reverse();
        }
    };

    submitButton.onclick = (e) => {
        e.preventDefault();
    };

    usernameInput.onblur = () => {
        if (usernameInput.value.length > 0) {
            usernameError.innerText = "";
            charError.classList.remove("active");
            charDefault.classList.add("active");
        } else {
            usernameError.innerText = "Account cannot be empty";
            submitButton.disabled = true;
            charError.classList.add("active");
            charDefault.classList.remove("active");
        }

        updateSubmitButton();
    };

    passwordInput.onblur = () => {
        if (passwordInput.value.length > 0) {
            passwordError.innerText = "";
            charError.classList.remove("active");
            charDefault.classList.add("active");
        } else {
            passwordError.innerText = "Password cannot be empty";
            submitButton.disabled = true;
            charError.classList.add("active");
            charDefault.classList.remove("active");
        }
        updateSubmitButton();
    };
};

function updateSubmitButton() {
    if (passwordInput.value.length > 0 && usernameInput.value.length > 0) {
        submitButton.classList.add("active");
    } else {
        submitButton.classList.remove("active");
    }
}
