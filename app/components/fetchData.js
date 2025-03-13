const USERS_URL = "https://randomuser.me/api/?results=10";

export const fetchData = async () => {
    const resp = await fetch(USERS_URL);

    if (!resp.ok) {
        throw new Error("Failed to fetch data");
    }
    const result = resp.json();

    return result;
};

export default fetchData;
