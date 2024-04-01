async function updateBook(id, data) {
    const response = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.status == 200 ? true : false;

}

export default updateBook;

