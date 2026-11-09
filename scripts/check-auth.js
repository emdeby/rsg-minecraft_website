async function checkAuth() {
    const { data, error } = await supabaseClient.auth.getSession();
    const loginButton = document.getElementById("login");
    const logoutButton = document.getElementById("logout-button");
    const userButton = document.getElementById("user-button");

    if (data.session) {
        const user = data.session.user;

        console.log("User is authenticated.");
        console.log(data.session.user);

        const { data: profile, error: profileError } = await supabaseClient
            .from("profiles")
            .select("minecraft_username")
            .eq("id", user.id)
            .single();

        if (profileError) {
            console.error("Error loading profile:", profileError);
            return;
        }

        console.log("Minecraft Username:", profile.minecraft_username);
        window.dispatchEvent(new CustomEvent("profileLoaded", {
            detail: {
                profile: profile,
                user: user
            }
        }));

        if (userButton) {
            userButton.textContent = profile.minecraft_username;
            const head = document.createElement("img");
            head.src = `https://mc-heads.net/avatar/${encodeURIComponent(profile.minecraft_username)}`;
            userButton.appendChild(head);
            
            userButton.classList.remove("hidden");
            loginButton.classList.add("hidden");
            logoutButton.classList.remove("hidden");
        }

    } else {
        console.log("No user is currently authenticated.")
        loginButton.classList.remove("hidden");
        logoutButton.classList.add("hidden");
        userButton.classList.add("hidden");
    }
}

checkAuth();