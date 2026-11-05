const SUPABASE_URL = "https://gkcsmtjtkbblgescqwem.supabase.co";
const SUPABASE_KEY = "sb_publishable_KyWjBhpTf5XIhlK7lSMqhw_gckCd-yc";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function logOut() {
    const { error } = await supabaseClient.auth.signOut()

    if (error) {
        console.log("Logout failed!");
        console.error(error);
        return;
    }

    console.log("Logout successful!");
};