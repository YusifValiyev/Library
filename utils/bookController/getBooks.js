async function getBooks() {
    const response = await fetch("https://northwind.vercel.app/api/suppliers");
    const datas = await response.json();
    return datas;
}
export default getBooks;