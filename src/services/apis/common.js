import { Api } from '../config/request';


//TODO: get request for every content and end point

export const GetApis = {


 
  cities: {
    get: {
      data: (params = '') => Api.getRequest(`cities/?${params}`),        
    },
    // create: {
    //   data: (payload) => Api.postRequest('cities', payload),
    //   dispatch: (payload) => RootActionCreators.addData(payload, 'cities'),
    // },
    // edit: {
    //   data: (id, payload) => Api.putRequest(`cities/${id}`, payload),
    //   dispatch: (payload) => RootActionCreators.updateData(payload, 'cities'),
    // },
   
    // filters: {
    //   dispatch: (payload) =>
    //     RootActionCreators.updateFilters(payload, 'cities'),
    // },
  },
  states: {
    get: {
      data: (params = '') => Api.getRequest(`states/?${params}`),
 
    },
    // create: {
    //   data: (payload) => Api.postRequest('states', payload),
    //   dispatch: (payload) => RootActionCreators.addData(payload, 'states'),
    // },
    // edit: {
    //   data: (id, payload) => Api.putRequest(`states/${id}`, payload),
    //   dispatch: (payload) => RootActionCreators.updateData(payload, 'states'),
    // },
    // filters: {
    //   dispatch: (payload) =>
    //     RootActionCreators.updateFilters(payload, 'states'),
    // },
  },
};

