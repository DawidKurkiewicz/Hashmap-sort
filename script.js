//task 1

const HashMap = function(){
    this.size = 0;
    this.map = {};
  }
  HashMap.prototype = {
    add: function(key, value){
      if(!this.containsKey(key)){
        this.size++;
      }
      this.map[key] = value;
    },
    remove:function(key){
      if(this.containsKey(key)){
        this.size--;
        var value = this.map[key];
        delete this.map[key];
        return value;
      }
      else{
        return null;
      }
    },
    containsKey: function(key){
      return this.map.hasOwnProperty(key);
    },
    get: function(key){
      return this.containsKey(key) ? this.map[key] : null;
    },

}

//task 2

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
          map.set(key, [item]);
      } else {
          collection.push(item);
      }
  });
  return map;
}

const array = [
    {age:"22", name:"dawid",gender: "male"},
    {age:"22", name:"ola",gender: "female"},
    {age:"28", name:"patrycja",gender: "female"},
    {age:"24", name:"dawid",gender: "male"}
];

const groupedByName = groupBy(array, person => person.name);
const groupedByGender = groupBy(array, person => person.gender);
const groupedByAge = groupBy(array, person => person.age);

console.log(groupedByName.get("dawid"));
console.log(groupedByAge.get("22"));
console.log(groupedByGender.get("male"));

