import jwt_decode from "jwt-decode";

const TokenManager = {
    getAccessToken: () => sessionStorage.getItem("accessToken"),

    getClaims: () => {
        if (!sessionStorage.getItem("claims")) {
            return undefined;
        }
        return JSON.parse(sessionStorage.getItem("claims"));
    },

    setAccessToken: (token) => {
        try {
            const claims = jwt_decode(token);
            sessionStorage.setItem("accessToken", token);
            sessionStorage.setItem("claims", JSON.stringify(claims));
            return claims;
        } catch (error) {
            console.error("Failed to decode JWT with token: ", token, error);
            throw error;
        }
    },


    clear: () => {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("claims");
        sessionStorage.removeItem('user');
    }
}

export default TokenManager;
