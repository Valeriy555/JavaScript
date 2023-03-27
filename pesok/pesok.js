let movies = [28, 12, 16]
let genres = [ // JSON from BE API // react how to serialize json object to model
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 55,
        "name": "Porno"
    },
    {
        "id": 16,
        "name": "Animation"
    }]


const mergedGenres = []
const valArr = () => {
    for (let movie of movies) {
        for (let obj of genres) {

            if (obj.id === movie)
                mergedGenres.push(obj)
        }
    }
}

valArr()
console.log(mergedGenres);





