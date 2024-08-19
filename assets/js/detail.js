'use strict';


import { api_key, fetchDataFromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";

const pageContent  = document.querySelector("[page-content]")


sidebar()