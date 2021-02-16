import {Parse} from 'parse/react-native';

export const fetchCheckpoints = async () => {
  const Checkpoint = Parse.Object.extend('Checkpoint');
  const query = new Parse.Query(Checkpoint);

  return query.find();
};
