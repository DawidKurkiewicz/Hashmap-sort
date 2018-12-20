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