export async function isAuth(token) {
    const user = await fetch(`${process.env.API_URL}/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if(user.json().status == 400) return false

    return true
}