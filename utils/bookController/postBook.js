async function postBook(data) {
    const response = await fetch('https://northwind.vercel.app/api/suppliers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.status === 201 ? true : false;
}

export default postBook;