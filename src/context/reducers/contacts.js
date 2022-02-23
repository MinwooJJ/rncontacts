import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
} from '../../constants/actionTypes';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          data: payload,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          data: state.getContacts.data.map(item => {
            if (item.id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          loading: false,
          error: null,
        },
      };
    case EDIT_CONTACT_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };
    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
          error: null,
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          data: state.getContacts.data.filter(item => item.id !== payload),
          loading: false,
          error: null,
        },
      };
    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContact,
          loading: false,
          error: payload,
        },
      };
    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          data: payload,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          data: [payload, ...state.getContacts.data],
          loading: false,
          error: null,
        },
      };
    case CREATE_CONTACT_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          data: payload,
          loading: false,
          error: null,
        },
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default contacts;
