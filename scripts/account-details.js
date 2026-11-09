window.addEventListener("profileLoaded", (event) => {
    const profile = event.detail.profile;
    const user = event.detail.user;

    const usernameField = document.getElementById("username");
    const emailField = document.getElementById("email");
    usernameField.textContent = profile.minecraft_username;
    emailField.textContent = user.email;

    const head = document.getElementById("user-head");
    head.src = `https://mc-heads.net/avatar/${encodeURIComponent(profile.minecraft_username)}`;
});