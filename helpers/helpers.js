function categoriesArray(items){
  var categories = [];
  items.forEach(function(item){
    for(var i=0; i<item.categories.length; i++){
      if(!categories.includes(item.categories[i])){
        categories.push(item.categories[i])
      }
    }
  })
  return categories.sort();
}
