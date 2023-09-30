// Import necessary modules
import { defineStore } from "pinia";
import { ref, reactive } from 'vue';

import router from "../router/router.js";

// Create the Pinia store
const usersStore = defineStore('usersStore', () => {
    const usersData = reactive([]);

    // Load usersData from localStorage on store creation
    if (localStorage.getItem('usersData')) {
        usersData.push(...JSON.parse(localStorage.getItem('usersData')));
    }
    const userData = reactive({
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Function to create a new user
    function createNewUser() {
        if (userData.password !== userData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Check if the email is already registered
        const isEmailTaken = usersData.some(user => user.email === userData.email);
        if (isEmailTaken) {

            alert("Email is already registered. Please use a different email.");
            return;
    }



        const newUser = { ...userData };
        usersData.push(newUser);
        // Clear the form data after creating a user
        userData.email = "";
        userData.password = "";
        userData.confirmPassword = "";

        // Save usersData to localStorage
        localStorage.setItem('usersData', JSON.stringify(usersData));
    }


    
    const authStore = reactive({
        isAuthenticated: localStorage.getItem('auth') == 1,

        user: ref({}),

        authenticate(username, password){
            console.log("Attempting login with username:", username, "and password:", password);
            // check usersData for matching email and password

            const user = usersData.find(user => user.email === username && user.password === password);
            console.log("Found user:", user);
            if (user) {
                authStore.isAuthenticated = true;
                authStore.user.value = user;
                localStorage.setItem('auth', '1');
                localStorage.setItem('user', JSON.stringify(user));
                router.push({ name: 'dashboard', params: { user: user } }); 

                console.log("Authentication successful.");

            }
            else {
                console.log("Authentication failed.");
                alert("Invalid username or password.");
            }
        },
        logout(){
            authStore.isAuthenticated = false
            authStore.user.value = {}
            localStorage.removeItem('auth')
            localStorage.removeItem('user')
            router.push('/login')
        }

    })


    return {
        usersData,
        userData,
        createNewUser,
        authStore
    };
});
export default usersStore;
