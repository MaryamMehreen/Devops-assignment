const express= require('express')
const app = express()
const PORT =process.env.PORT || 3001;
app.get('/',(req,res)=>{
    res.send('Dockerised image deployed on Render');
});
app.get('/hello', (req, res) => {
    res.send('Hello fromDockerise image deployed on heroku');
});
app.listen(PORT, ()=>{
    console.log('Backend server running on port $(PORT)');
    
});
