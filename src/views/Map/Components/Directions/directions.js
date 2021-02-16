// import React, {useEffect, useState} from 'react';
// // import MapViewDirections from 'react-native-maps-directions';
// import reactotron from 'reactotron-react-native';

// const GOOGLE_MAPS_API_KEY_OLD = 'AIzaSyAYHscykLHsALDzKuDDoYV-SjME_8YHHqI';

// export default React.memo(
//   ({checkpoints}) => {
//     const [directions, setDirections] = useState([]);
//     useEffect(() => {
//       if (checkpoints.length > 0) {
//         const e = [];
//         for (let i = 0; i < checkpoints.length - 1; i++) {
//           e.push({
//             origin: checkpoints[i].coordinate,
//             destination: checkpoints[i + 1].coordinate,
//           });
//         }
//         setDirections(e);
//       } else {
//         setDirections([]);
//       }
//     }, [checkpoints]);

// //     return directions.length
// //       ? directions.map(dir => (
// //           // <MapViewDirections
// //           //   {...dir}
// //           //   resetOnChange={false}
// //           //   apikey={GOOGLE_MAPS_API_KEY_OLD}
// //           //   strokeWidth={2.4}
// //           //   strokeColor={'cyan'}
// //           // />
// //         ))
// //       : null;
//   },
//   () => false,
// );
