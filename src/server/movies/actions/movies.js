export default function movies(request, response) {
  response.json({
    success: true,
    data:[
     {
       id:1,
       name:"Harry Potter",
       category:"fantasy",
       price:20,
       available:true
     },
     {
       id:2,
       name:"Hobbit",
       category:"fantasy",
       price:25,
       available:false
     },
     {
       id:3,
       name:"You again",
       category:"comedy",
       price:20,
       available:true
     }
   ]
  });
}
