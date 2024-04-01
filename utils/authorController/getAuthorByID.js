async function getAuthorByID(id) {
    const response = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`);
    const data = await response.json()
    return data;
}

export default getAuthorByID;