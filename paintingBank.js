const data = [
    { id: 1, year: 1890, title: "The picador", caption: "A picador on a horse before an audience." },
    { id: 2, year: 1893, title: "House in the field", caption: "A narrow two-story building in a sparse landscape" },
    { id: 3, year: 1893, title: "Plaster male torso", caption: "Male monochrome classical torso" },
    { id: 4, year: 1895, title: "Academical study", caption: "Figure with staff in profile" },
    { id: 5, year: 1895, title: "Bust of young man", caption: "Young man in portrait" },
];



const list = () => {
    return [...data];
};

const find = (id) => {
    const post = data.find(post => post.id === +id);
    return { ...post };
};

module.exports = { list: list, find: find }


// const list = () => {
//     return [...data];
// };

// const find = (id) => {
//     const painting = data.find(painting => painting.id === parseInt(id);
//     return painting;
// };
