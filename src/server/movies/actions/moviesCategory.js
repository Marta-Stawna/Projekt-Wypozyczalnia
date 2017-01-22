export default function about(request, response) {
  response.json({
    category:[
      {
        id:1,
        name:"fantasy"
      },
    {
      id:2,
      name:"comedy"
    },
    {
      id:3,
      name:"horror"
    }
  ]
  })
}
