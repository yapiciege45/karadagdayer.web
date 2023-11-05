import { getCookie } from "cookies-next"

export const getCustomers = async (search = '') => {
    const res = await fetch(`${process.env.API_URL}/customer`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    const customers = data.customers

    const searchedCustomers = customers.filter(x => {
        const companySetupDate = new Date(x.company_setup_date);
        const sessionDate = new Date(x.session_date);
        const sessionEndDate = new Date(x.session_end_date);

        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const formattedSessionDate = sessionDate.toLocaleString('tr-TR', options);
        const formattedSessionEndDate = sessionEndDate.toLocaleString('tr-TR', options);
        const formattedCompanySetupDate = companySetupDate.toLocaleString('tr-TR', options);

        const searchables = x.name + ' ' + x.surname + ' ' + x.company_name + ' ' + formattedSessionDate + formattedSessionEndDate + formattedCompanySetupDate

        return searchables.toLowerCase().search(search.toLowerCase()) > -1
    })

    return searchedCustomers
}

export const searchCustomers = async (customers, search = '') => {
    const searchCustomers = customers.filter(x => {
        const fullName = x.name + ' ' + x.surname
        const isTrue = fullName.toLowerCase().search(search.toLowerCase()) > -1

        return isTrue
    })

    return searchCustomers
}
