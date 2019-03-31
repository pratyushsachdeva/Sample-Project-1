const app=require('express')()

const PORT=process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})