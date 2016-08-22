app.factory('BagService', function(){
  return {
    all : [],
    add : function(item, quantity){
      if(!quantity){quantity = 1}
      if(this.all){
        var added = false;
        this.all.forEach(function(bagItem){
          if(bagItem._id === item._id){
            bagItem.quantity += Number(quantity);
            added = true;
          }
        })
        if(added === false){
          item.quantity = Number(quantity);
          this.all.push(item);
        }
      } else {
        item.quantity = Number(quantity);
        this.all.push(item);
      }
    },
    remove : function(item){
      var spliceIndex;
      this.all.forEach(function(product,i){
        if(product._id === item._id){
          spliceIndex = i;
        }
      })
      this.all.splice(spliceIndex,1);
    }
  }
})
