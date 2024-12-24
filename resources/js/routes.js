import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import LoggedInLayout from "./components/layouts/LoggedInLayout.vue";

const routes = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        path: '/register',
        component: RegistrationPage,
    },

    {
        path: '/',
        component: LoggedInLayout,
        children: [
            {
                path: '/home',
                component: HomePage,
                meta: { title: 'Home' }
            },
        ]
    },
];

export default routes;
