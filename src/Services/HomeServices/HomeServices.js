import { Get } from "../privateApiService"

const homeServices = {
    get: async () => {
        const users = await Get("users")
        return users
    }
}
