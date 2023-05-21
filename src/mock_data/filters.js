const sorting = [
    {name: 'Популярное по убыванию', reducer: 'popularityDescending'},
    {name: 'Популярные по возрастанию', reducer: 'popularityAscending'},
    {name: 'Рейтинг по убыванию', reducer: 'ratingDescending'},
    {name: 'Рейтинг по возрастанию', reducer: 'raitingAscending'},
    {name: 'Избранные', reducer: 'favourites'},
    {name: 'Посмотреть позже', reducer: 'saved'}
];

const dates = [2020, 2019, 2018, 2017];

export { sorting, dates }