
const  express = require('express')
const app = express();
const port = 5000;
const cors = require ('cors')
const fetch = require('node-fetch')

app.use(cors())

app.get('/covers/:id', (req, res) => {
const id = req.params.id
fetch(`https://onepiececover.com/api/chapters/${id}`)
    .then(res => {
      if(res.status >= 200 && res.status <= 299){
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .then( body => res.send(body)).catch((error) => {
      console.log(error)
    })
    
})

app.get('/chapters/:id', (req, res) => {
const id = req.params.id
fetch(`https://onepiececover.com/api/chapters/${id}`)
    .then(res => {
      if(res.status >= 200 && res.status <= 299){
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .then( body => res.send(body)).catch((error) => {
      console.log(error)
    })
    
})

app.listen(port, () => console.log(`listen at port ${port} `))
