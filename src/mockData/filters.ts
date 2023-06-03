const sorting = [
  { name: "Популярное по убыванию", reducer: "popularityDescending" },
  { name: "Популярные по возрастанию", reducer: "popularityAscending" },
  { name: "Рейтинг по убыванию", reducer: "ratingDescending" },
  { name: "Рейтинг по возрастанию", reducer: "raitingAscending" },
  { name: "Избранные", reducer: "favourites" },
  { name: "Посмотреть позже", reducer: "saved" },
];

const dates = [
  2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008,
  2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];

export { sorting, dates };
