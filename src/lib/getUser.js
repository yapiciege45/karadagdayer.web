export async function getUser(token) {
    const user = await fetch(`${process.env.API_URL}/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return user.json()
}