class Movie {
    constructor(tittle,studio,rating="PG"){
        this.tittle =tittle,
        this.studio = studio,
        this.rating = rating
    }
    static getPG (array){
     let PGarr = [] ;
     for (let obj of array){
        if (obj.rating === "PG"){
            PGarr.push(obj);
        }
     }
     return PGarr
    }
}


MovieArray = [];
function addMovie(tittle,studio,rating){
    MovieArray.push(new Movie(tittle,studio,rating))
}
 addMovie("karudan","Lark Studio","PG");
 addMovie("Demon Slayer","Ufotable","TV-14");
 addMovie("The Revenant","Netflix Studios","NC-17");
 addMovie("Kung Fu Panda-4","DreamWorks");

 console.log("Movie with PG rating ;" )
 console.log(Movie.getPG(MovieArray));