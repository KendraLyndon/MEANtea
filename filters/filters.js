app.filter('inStock',function(){
  return function(input){
    return input ? 'Yes' : 'No';
  }
})
app.filter('name', function(){
  return function(items, name){
    var filtered = [];
    if(name){
      items.forEach(function(item){
        if(item.name.includes(name)){
          filtered.push(item)
        }
      })
      return filtered;
    }
    return items;
  }
})
app.filter('category', function(){
  return function(items, category){
    console.log(category);
    var filtered = [];
    if(category){
      items.forEach(function(item){
        if(item.categories.includes(category)){
          filtered.push(item)
        }
      })
      return filtered;
    }
    return items;
  }
})
