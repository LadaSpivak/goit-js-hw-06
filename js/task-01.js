const categoriesList = document.getElementById('categories');
 const categoriesItems = categoriesList.querySelectorAll('li.item');
 console.log('Number of categories:', categoriesItems.length);

 categoriesItems.forEach(item => {
   const categoryTitle = item.querySelector('h2').textContent;
   const elements = item.querySelectorAll('li');

   console.log(`Category: ${categoryTitle}`);
   console.log(`Elements: ${elements.length}`);
 });