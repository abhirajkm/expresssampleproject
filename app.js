var x=require('express')

app=x()

app.get('/' , (req,res)=>{
    res.send("Hello Welcome")
})

app.get ('/register' , (r,r1)=>{
    r1.send("Register page")
})
app.listen(3000)