const objofLanguages = [{
    img: './images/html 1.png',
    title: 'HTML',
    description: 'HTML (Hypertext Markup Language) is the standard markup language used for creating web pages and applications. It provides a structure for organizing and presenting content on the internet. HTML uses a combination of tags and attributes to define the structure and layout of a web page, including text, images, links, tables, forms, and more.'

}]
function displayData() {
    let str = ''
    objofLanguages.map((v) => {
        str += `<div class="col mb-4">
    <div class="card" style="background-color: #1B263B; color: #E0E1DD;">
        <img src="${v.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${v.title}</h5>
            <p class="card-text text-center">${v.description}</p>
            <a href="#">Play>>></a>
        </div>
    </div>
</div>`
    })
    document.getElementById('container').innerHTML = str
}
displayData()

