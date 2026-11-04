const SUPABASE_URL = "https://gkcsmtjtkbblgescqwem.supabase.co";
const SUPABASE_KEY = "sb_publishable_KyWjBhpTf5XIhlK7lSMqhw_gckCd-yc";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase initalized successfully");

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error(error);
        document.getElementById("login-message").textContent = "Login failed!";
        return;
    }

    console.log("Login successful!", data);

    document.getElementById("login-message").textContent = "Login successful!";
});