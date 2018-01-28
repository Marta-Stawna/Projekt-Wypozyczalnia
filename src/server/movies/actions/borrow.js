export default function borrow(request, response) {
  response.json({
    form: {
      firstName: 'string',
      lastName: 'string',
      phone: 'number'
    },
    movieIds: [1]
  });
};
