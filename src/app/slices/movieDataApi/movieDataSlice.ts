import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovieById = createAsyncThunk(
  "movieData/fetchById",
  async function (id) {
    const response = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "1ATD5Y2-7NTMM0E-P60YE8E-5TQFN35",
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  }
);

export interface Imovie {
  externalId: {
    kpHD?: string | null;
    imdb?: string | null;
    tmdb?: number | null;
  };
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number | null;
  };
  backdrop?: {
    url: string;
    previewUrl: string;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number | null;
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  alternativeName: string | null;
  enName?: string | null;
  names?: {
    name?: string | null;
    language?: string | null;
    type?: string | null;
  }[];
  shortDescription: string | null;
  logo?: {
    url?: string | null;
  };
  watchability: {
    items:
      | {
          name: string;
          logo?: {
            url?: string | null;
          };
          url: string;
        }[]
      | null;
  };
}

const movieData: Imovie = {
  externalId: {
    kpHD: "4127663ed234fa8584aeb969ceb02cd8",
    imdb: "tt1675434",
    tmdb: 77338,
  },
  rating: {
    kp: 8.805,
    imdb: 8.5,
    filmCritics: 6.8,
    russianFilmCritics: 100,
    await: null,
  },
  votes: {
    kp: 1571449,
    imdb: 877853,
    filmCritics: 130,
    russianFilmCritics: 12,
    await: 15,
  },
  movieLength: 112,
  id: 535341,
  type: "movie",
  name: "1+1",
  description:
    "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
  year: 2011,
  poster: {
    url: "https://st.kp.yandex.net/images/film_big/535341.jpg",
    previewUrl:
      "https://st.kp.yandex.net/images/film_iphone/iphone360_535341.jpg",
  },
  genres: [
    {
      name: "драма",
    },
    {
      name: "комедия",
    },
    {
      name: "биография",
    },
  ],
  countries: [
    {
      name: "Франция",
    },
  ],
  alternativeName: "Intouchables",
  enName: null,
  names: [
    {
      name: "1+1",
    },
    {
      name: "Intouchables",
    },
    {
      name: "不可触碰",
      language: "CN",
      type: null,
    },
    {
      name: "最佳拍档",
      language: "CN",
      type: null,
    },
    {
      name: "无法触碰",
      language: "CN",
      type: null,
    },
    {
      name: "Untouchable",
      language: "GB",
      type: null,
    },
    {
      name: "不可触摸",
      language: "CN",
      type: null,
    },
    {
      name: "Неприкасаемые",
      language: "RU",
      type: "Literal",
    },
    {
      name: "1+1 [Intouchables]",
      language: "RU",
      type: null,
    },
    {
      name: "Saikyô no futari",
      language: "JP",
      type: null,
    },
    {
      name: "Amigos",
      language: "CL",
      type: null,
    },
    {
      name: "Mehubarim la'hayim",
      language: "IL",
      type: "Hebrew title",
    },
    {
      name: "Amigos para siempre",
      language: "VE",
      type: null,
    },
    {
      name: "Prijatelja",
      language: "SI",
      type: null,
    },
    {
      name: "En oväntad vänskap",
      language: "SE",
      type: null,
    },
    {
      name: "Intocáveis",
      language: "BR",
      type: null,
    },
    {
      name: "Intouchables – Ziemlich beste Freunde",
      language: "DE",
      type: null,
    },
    {
      name: "언터처블 1%의 우정",
      language: "KR",
      type: null,
    },
    {
      name: "De Uroerlige",
      language: "DK",
      type: null,
    },
  ],
  shortDescription:
    "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
  logo: {
    url: "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig",
  },
  watchability: {
    items: [
      {
        name: "Okko",
        logo: {
          url: "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig",
        },
        url: "https://okko.tv/movie/intouchables?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed",
      },
      {
        name: "Иви",
        logo: {
          url: "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig",
        },
        url: "https://www.ivi.ru/watch/109726?utm_source=yandex&utm_medium=wizard",
      },
      {
        name: "START",
        logo: {
          url: "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig",
        },
        url: "https://start.ru/watch/1-1?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=1-1",
      },
    ],
  },
};

export const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    loading: "",
    movieData,
  },
  reducers: {
    setCurrentMovie: (state, action: PayloadAction<Imovie>) => {
      state.movieData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchMovieById.fulfilled,
        (state, action: PayloadAction<Imovie>) => {
          (state.loading = "idle"), (state.movieData = action.payload);
        }
      );
  },
});

export const { setCurrentMovie } = movieDataSlice.actions;
export default movieDataSlice.reducer;
