var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Libro familiar","Ranbir Singh - Abuelo", "Diljeet Singh - Padre", "Alia Singh - Madre", "Rocky Singh - Hermano", "Soni Singh - Hermana"];

var age = [60, 40, 60, 30, 25, 20];

/*Debemos ordenar los elementos presentes dentro del aray "age" para imprimir los valores de la edad de cada miembro de la familia.
 Para eso usamos la funcion sort()*/
age.sort();

/* Debemos invertir los elementos dentro del array "age" para imprimir los valores de la edad de cada miembro de la familia.
Despues de ordenar el array "age",  todos los elementos se organizaran en orden ascendente y nuestro libro familiar consistira en la lista opuesta,
 es decir, el primer miembro sera el abuelo, segundo del papa, y asi sucesivamente de forma descendente.
 para eso se usa .reverse()*/
age.reverse();

var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];

    var updatedAge = age[i];
    
    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /* Para encontrar el valor de la edad maxima o la edad mas alta entre los miembros de las familiaas, necesitamos usar las funciones Math y max 
    para mostrar la edad mas alta e imprimir el valor y asi usar la consola.

    Escribe:  var max_number = Math.max.apply(Math, age);
              console.log("La edad mas alta es de: ", max_number);
    */          
    var max_number = Math. .apply(Math, age);
    console.log("La edad mas alta es de: ", max_number );


    /* Para encontrar el valor de la edad minimo o la edad mas baja entre los miembros de las familiaas, necesitamos usar las funciones Math y min 
    para mostrar la edad mas baja e imprimir el valor y asi usar la consol*/
   
    var min_number = Math. .apply(Math, age);
    console.log("La edad mas baja es de: ", min_number);
}