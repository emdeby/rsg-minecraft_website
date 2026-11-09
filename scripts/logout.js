async function logOut() {
    const { error } = await supabaseClient.auth.signOut()

    if (error) {
        console.log("Logout failed!");
        console.error(error);
        return;
    }

    console.log("Logout successful!");
};