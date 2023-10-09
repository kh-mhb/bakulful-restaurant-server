const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.port || 5000;
app.use(cors())

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/chefs', (req, res) => {
  const size =req.query.size;
  if(size==0){
    res.send(chefs.slice(0,4))

  }
  else{
  res.send(chefs)

  }
  // console.log(chefs.slice(0,2))
})
app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
  // res.send(news)
  const id = req.params.id;
  console.log(id);
  const selectedItem = recipes.find(n => n._id == id);
  res.send(selectedItem);
});
app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  if(id == 0) {
     res.send(recipes);
  }
  // console.log(id);
  else{
    const selectedChef = recipes.filter(n => n.category_id == id);
    console.log(id);
    console.log(selectedChef)
    res.send(selectedChef);

  }
 
 
})