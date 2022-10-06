let max = -99999;
let maxi;
class Student{
    constructor(id, name, surname, gpa){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gpa = gpa;

    }
    getStudentData(){
        console.log(this.name + " " + this.surname);
    }
    topStudent(){
        for (let Student of listOfStudents){
            if (Student.gpa>this.max){
                this.max = this.Student.gpa;
            }
            console.log(this.max);
        }

    }
}
let student1 = new Student (1, "Sanzhar", "Kipshakbaev", 4.00);
let student2 = new Student (2, "Arthur", "Boranbaev", 3.00);
let student3 = new Student (3, "Yernar", "Yerkin", 2.00);
let student4 = new Student (4, "Zhaksylyk", "Ashym", 3.50);
let student5 = new Student (5, "Cristiano", "Ronaldo", 3.75);

let listOfStudents=[];
listOfStudents.push(student1, student2, student3, student4, student5);


class Player{
    constructor(number, name, surname, position){
        this.number = number;
        this.name = name;
        this.surname = surname;
        this.position = position;
    }
    getPlayers(){
        return this.number + " " + this.name + " " + this.surname + " " + 
        this.position;
    }
}

class Club{
    constructor(name, country, ratingPoints, Player){
        this.name = name;
        this.country = country;
        this.ratingPoints = ratingPoints;
        this.Player = Player;
    }
    printClubData(){
        return this.name + " " + this.country + " " + 
        this.ratingPoints + " "  + this.Player;
    }
}

let listOfPlayers = [new Player (1, "Sanzhar", "Kipshakbaev", "Almaty"),
new Player (2, "Arthur", "Boranbaev", "Baykonur"),
new Player (3, "Yernar", "Yerkin", "UlanBator"),
new Player (4, "Zhaksylyk", "Ashym", "Aksu"),
new Player (5, "Cristiano", "Ronaldo", "Lissabon")];

let listOfClubs = [
    new Club("Bacha", "Kazakhstan", 5, listOfPlayers),
    new Club("Gang", "America", 4, listOfPlayers)
];