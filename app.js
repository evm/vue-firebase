new Vue({

  el: "#app",

  data: {
      title: 'Becoming a Vue ninja',
      name: 'Ernst',
      url: 'http://youtube.com',
      wage: 0,
      coords: {
          x: 0,
          y: 0
      },
      classes:['one-class','two-class'],
      showName: false,
      showAge: true,
      items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
      ninjas: [
        { name: 'Crystal', age: 25, belt: 'Black'},
        { name: 'Arthur', age: 31, belt: 'Yellow'},
        { name: 'Ernst', age: 29, belt: 'White'}
      ],
  },

  methods: {
      greet(time, stop){
        return `Hello there ${this.name}, good ${time} and ${stop}!`
      },
      logEvent(e){
          console.log(e)
      },
      changeWage(amount){
          this.wage += amount
      },
      logCoords(e){
          this.coords.x = e.offsetX
          this.coords.y = e.offsetY
      },
      updateName(e){
        //console.log(e.target.value)
        this.name = e.target.value
      },
      logMessage(){
        console.log('Hello world')
      },
      toggleName(){
        this.showName = !this.showName
      },
      toggleAge(){
        this.showAge = !this.showAge
      }
  },


  if(condition){
    //do something
  }


})