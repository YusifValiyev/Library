
async function deleteBook(id) {
    const response = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.status == 200 ? true : false;
}

export default deleteBook;