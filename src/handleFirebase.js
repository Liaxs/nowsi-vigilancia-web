import firebase from 'firebase';
import store from './store'
export default null;

export function getCoords(user){
	let ref = firebase.database().ref('Path');
	ref.off();
	ref.orderByChild('user').equalTo(user).on('value',snapshot=>{
		snapshot.forEach(snap=>{
			 store.dispatch({
		        type: "MARKED_PLACE",
		        coords: {lng:snap.val().long, lat: snap.val().lat}
		      });
		});
	})
}
export function Users() {
	firebase.database().ref('Users').on('value', snapshot=>{
		snapshot.forEach(snap=>{
			store.dispatch({
				type: "USERS",
				users: snap.val().user
			});
		});
	});
}