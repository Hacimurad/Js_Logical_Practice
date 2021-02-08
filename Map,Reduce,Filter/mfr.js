const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names

const mapname=characters.map(function(item){
    return  item.name
})
console.log(mapname);

//2. Get array of all heights

const mapheight=characters.map(function(item){
    return item.height
})
console.log(mapheight);

//3. Get array of objects with just name and height properties

const name_height=characters.map(function(item){
    return item.name +"  "+ item.height
})
console.log(name_height);

//4. Get array of all first names

const name_first=characters.map(function(item){

    const name_split=item.name.split(" ")
    return  name_split[0]

})
console.log(name_first);



//***REDUCE***
//1. Get total mass of all characters
const mass=characters.reduce(function(total,item){
    return total + item.mass
},0)
console.log(mass);//346

//2. Get total height of all characters

const reduce_height=characters.reduce(function(total,item){
    return total + item.height
},0)

console.log(reduce_height);//712


//3. Get total number of characters by eye color

const reduce_eye=characters.reduce(function(total,item){

    return total+ item.eye_color.length

    // total=item.eye_color.length;

},0)//4

console.log(reduce_eye);

//4. Get total number of characters in all the character names


const reduce_character_name=characters.reduce(function(total,item){

    return  total + item.name.length

},0)//4

console.log(reduce_character_name);


//***FILTER***
//1. Get characters with mass greater than 100

const filter_mass=characters.filter(function(item){
    if(item.mass > 100){
        return item.mass;
    }
})
console.log(filter_mass);

//2. Get characters with height less than 200


const filter_height=characters.filter(function(item){
    if(item.height > 200){
        return true;
    }
})
console.log(filter_height);

//3. Get all male characters

const filter_male=characters.filter(item=>item.gender==="male");
console.log(filter_male);

//4. Get all female characters

const filter_female=characters.filter(item=>item.gender==="female");
console.log(filter_female);

//***SORT***
//1. Sort by mass
const sort_mass=characters.sort(function(item1,item2){
    if(item1.mass>item2.mass){
        return 1
    }else{
        return -1
    }
});
console.log(sort_mass);
//2. Sort by height

const sort_height=characters.sort(function(item1,item2){
    if(item1.height>item2.height){
        return 1
    }else{
        return -1
    }
});
console.log(sort_height);

//3. Sort by name
const sort_name=characters.sort(function (items) {
   return items.name
});
console.log(sort_name)

//***EVERY***

//1. Does every character have blue eyes?
const every_blue=characters.every(function(item){

        return item.eye_color === "blue"
    
})
console.log(every_blue);//false

//***SOME***

//1. Is there at least one male character?
const some_gender=characters.some(function(item){

    return item.gender === "male"

})
console.log(some_gender);//true
