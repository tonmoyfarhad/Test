import { Mongo } from 'meteor/mongo'


export const Resolutions = new Mongo.Collection("real_time_worker_count")//realtimeworkercount
export const TAMvsSYSTEMloss = new Mongo.Collection("floor_wise_active_npt")