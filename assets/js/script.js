const formulario = document.querySelector('form')
btnAgregar.addEventListener('submit', (e)=>{
  e.preventDefault
  const ownerName = document.querySelector('#propietario').value
  const ownerPhone = document.querySelector('#telefono').value
  const ownerDress = document.querySelector('#direccion').value
  const petName = document.querySelector('#nombreMascota').value
  const petType = document.querySelector('#tipo').value
  const petSymptoms = document.querySelector('#enfermedad').value

  let currentAnimal = {}

  switch (petType) {
    case 'perro':
      currentAnimal = new Dog(petName, petType, petSymptoms)
      break;
    
    case 'gato':
      currentAnimal = new Cat(petName, petType, petSymptoms)
      break;

    case 'conejo':
      currentAnimal = new Rabbit(petName, petType, petSymptoms)
      break;
  }

  const owner = new Owner(ownerName, ownerDress, ownerPhone, currentAnimal)
  console.log(owner)

})

class Animal {
  constructor(name, type){
    this.name = name
    this.type = type
  }
  info(){
    return `El nombre del animal es: ${this.name}, y este es un: ${this.type}`
  }
}

class Dog extends Animal{
  constructor(name, type){
    super(name, type)
    this._symptoms = this.symptoms
  }
  get symptoms(){
    return this._symptoms
  }
  set symptoms(newSymptoms){
    this._symptoms = newSymptoms
  }
}

class Cat extends Animal{
  constructor(name, type){
    super(name, type)
    this._symptoms = this.symptoms
  }
  get symptoms(){
    return this._symptoms
  }
  set symptoms(newSymptoms){
    this._symptoms = newSymptoms
  }
}

class Rabbit extends Animal{
  constructor(name, type){
    super(name, type)
    this._symptoms = this.symptoms
  }
  get symptoms(){
    return this._symptoms
  }
  set symptoms(newSymptoms){
    this._symptoms = newSymptoms
  }
}

class Owner{
  constructor(name, direction, phone, animal = {}){
    this.name = name
    this.direction = direction
    this.phone = phone
    this.animal = animal
  }
  info(){
    return `El nombre del dueño es: ${this.name}, su dirección es: ${this.addres}, su numero de telefono es: ${this.phone}, y su mascota es. ${this.animal}`
  }
}