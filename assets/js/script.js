class Prophet{
  constructor(name, direction, phone){
    this.name = name
    this.direction = direction
    this.phone = phone
    this.datosPropietario()
  }
}

class Animal {
  constructor(name, type){
    this.name = name
    this.type = type
    this.datosAnimal
  }
}

class Perro extends Animal{
  constructor(name, type){
    super(name, type)
    this.enfermedad()
  }
}
class Gato extends Animal{
  constructor(name, type){
    super(name, type)
    this.enfermedad()
  }
}
class Conejo extends Animal{
  constructor(name, type){
    super(name, type)
    this.enfermedad()
  }
}