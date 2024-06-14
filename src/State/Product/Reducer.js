import {
  FIND_ALL_PRODUCTS_SUCCESS,
  FIND_ALL_PRODUCTS_FAILURE,
  FIND_ALL_PRODUCTS_REQUEST,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  FIND_ALL_BRANDS_REQUEST,
  FIND_ALL_BRANDS_SUCCESS,
  FIND_ALL_BRANDS_FAILURE,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_SOLD_AT_REQUEST,
  SEARCH_PRODUCTS_SOLD_AT_SUCCESS,
  SEARCH_PRODUCTS_SOLD_AT_FAILURE,
  ADD_PRODUCT_TO_FAVOURITE_REQUEST,
  ADD_PRODUCT_TO_FAVOURITE_SUCCESS,
  ADD_PRODUCT_TO_FAVOURITE_FAILURE,
  FIND_ALL_PRODUCT_FAVOURITE_REQUEST,
  FIND_ALL_PRODUCT_FAVOURITE_SUCCESS,
  FIND_ALL_PRODUCT_FAVOURITE_FAILURE,
  REMOVE_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_REQUEST,
  REMOVE_FAVOURITE_FAILURE,
  FIND_PRODUCTS_BY_BRANDS_FAILURE,
  FIND_PRODUCTS_BY_BRANDS_REQUEST,
  FIND_PRODUCTS_BY_BRANDS_SUCCESS,
  FIND_PRODUCTS2_FAILURE,
  FIND_PRODUCTS2_SUCCESS,
  FIND_PRODUCTS2_REQUEST,
  FIND_PRODUCTS1_FAILURE,
  FIND_PRODUCTS1_SUCCESS,
  FIND_PRODUCTS1_REQUEST,
  FIND_PRODUCTS3_REQUEST,
  FIND_PRODUCTS3_SUCCESS,
  FIND_PRODUCTS3_FAILURE,
  FIND_PRODUCTS4_REQUEST,
  FIND_PRODUCTS4_SUCCESS,
  FIND_PRODUCTS4_FAILURE,
  FIND_PRODUCTS5_REQUEST,
  FIND_PRODUCTS5_SUCCESS,
  FIND_PRODUCTS5_FAILURE,
  FIND_PRODUCTS6_REQUEST,
  FIND_PRODUCTS6_SUCCESS,
  FIND_PRODUCTS6_FAILURE,
  FIND_PRODUCTS7_REQUEST,
  FIND_PRODUCTS7_SUCCESS,
  FIND_PRODUCTS7_FAILURE,
  FIND_PRODUCTS8_REQUEST,
  FIND_PRODUCTS8_SUCCESS,
  FIND_PRODUCTS8_FAILURE,
  FIND_PRODUCTS9_REQUEST,
  FIND_PRODUCTS9_SUCCESS,
  FIND_PRODUCTS9_FAILURE,
  FIND_PRODUCTS10_REQUEST,
  FIND_PRODUCTS10_SUCCESS,
  FIND_PRODUCTS10_FAILURE,
  FIND_PRODUCTS_BY_BRAND_ID_SUCCESS,
  FIND_PRODUCTS_BY_BRAND_ID_REQUEST,
  FIND_PRODUCTS_BY_BRAND_ID_FAILURE,
  REMOVE_PRODUCT_TO_DEALHOT_REQUEST,
  ADD_PRODUCT_TO_DEALHOT_REQUEST,
  ADD_PRODUCT_TO_DEALHOT_SUCCESS,
  REMOVE_PRODUCT_TO_DEALHOT_SUCCESS,
  REMOVE_PRODUCT_TO_DEALHOT_FAILURE,
  ADD_PRODUCT_TO_DEALHOT_FAILURE,
  GET_PRODUCTS_BY_DEALHOT_FAILURE,
  GET_PRODUCTS_BY_DEALHOT_SUCCESS,
  GET_PRODUCTS_BY_DEALHOT_REQUEST,
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  brands: [],
  searchProducts: [],
  soldAt: [],
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
    case FIND_ALL_PRODUCTS_REQUEST:
    case FIND_ALL_BRANDS_REQUEST:
    case SEARCH_PRODUCTS_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case SEARCH_PRODUCTS_SOLD_AT_REQUEST:
    case ADD_PRODUCT_TO_FAVOURITE_REQUEST:
    case REMOVE_FAVOURITE_REQUEST:
    case FIND_PRODUCTS_BY_BRANDS_REQUEST:
    case FIND_PRODUCTS_BY_BRAND_ID_REQUEST:
    case ADD_PRODUCT_TO_DEALHOT_REQUEST:
    case REMOVE_PRODUCT_TO_DEALHOT_REQUEST:
    case GET_PRODUCTS_BY_DEALHOT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        findAllProducts: action.payload,
      };
    case FIND_ALL_PRODUCT_FAVOURITE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        findAllBrand: action.payload,
      };
    case FIND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS_BY_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_ALL_PRODUCT_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case ADD_PRODUCT_TO_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        addProductToFavourite: action.payload,
      };
    case ADD_PRODUCT_TO_DEALHOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload,
      };
    case REMOVE_PRODUCT_TO_DEALHOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload,
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case SEARCH_PRODUCTS_SOLD_AT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        brands: action.payload,
      };
    case FIND_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
        findAllProducts: action.payload,
      };
    case GET_PRODUCTS_BY_DEALHOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleteProduct: action.payload,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case REMOVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        removeFavourite: action.payload,
        products: state.products.filter(
          (products) => products.id !== action.payload
        ),
      };
    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deleteBrand: action.payload,
        brands: state.brands.filter((brands) => brands.id !== action.payload),
      };
    case FIND_ALL_PRODUCT_FAVOURITE_FAILURE:
    case FIND_PRODUCTS_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
    case FIND_ALL_PRODUCTS_FAILURE:
    case FIND_ALL_BRANDS_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case DELETE_BRAND_FAILURE:
    case SEARCH_PRODUCTS_FAILURE:
    case ADD_PRODUCT_TO_FAVOURITE_FAILURE:
    case SEARCH_PRODUCTS_SOLD_AT_FAILURE:
    case REMOVE_FAVOURITE_FAILURE:
    case FIND_PRODUCTS_BY_BRANDS_FAILURE:
    case FIND_PRODUCTS_BY_BRAND_ID_FAILURE:
    case REMOVE_PRODUCT_TO_DEALHOT_FAILURE:
    case ADD_PRODUCT_TO_DEALHOT_FAILURE:

    case GET_PRODUCTS_BY_DEALHOT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_PRODUCT_REQUEST:
    case CREATE_BRAND_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, action.payload],
      };
    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        brands: [...state.brands, action.payload],
      };
    case CREATE_PRODUCT_FAILURE:
    case CREATE_BRAND_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const product1HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS1_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS1_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS1_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const products3HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS2_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS2_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS2_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products4HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS3_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS3_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS3_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products5HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS4_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS4_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS4_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products6HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS5_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS5_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS5_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products7HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS6_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS6_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS6_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products8HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS7_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS7_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS7_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products9HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS8_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS8_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS8_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products10HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS9_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS9_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS9_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const products11HomeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FIND_PRODUCTS10_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PRODUCTS10_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FIND_PRODUCTS10_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
