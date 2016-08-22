app.filter('inStock',function(){
  return function(input){
    return input ? 'Yes' : 'No';
  }
})
app.filter('bagFilter',function(){
  return function(bag){
    var quantity = 0;
    if(bag){
      bag.forEach(function(product){
        quantity += product.quantity;
      })
    }
    return quantity > 0 ? '('+quantity+')' : ': empty';
  }
})
app.filter('name', function(){
  return function(items, name){
    if(name){
      return items.filter(function(item){
        return item.name.includes(name)
      })
    }
    return items;
  }
})
app.filter('category', function(){
  return function(items, category){
    if(category){
      return items.filter(function(item){
        return item.categories.includes(category)
      })
    }
    return items;
  }
})
