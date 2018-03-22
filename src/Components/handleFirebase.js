import firebase from 'firebase';

export default null;

export function getCoords(){
	firebase.database().ref('Path').on('value',snapshot=>{
		snapshot.forEach(snap=>{
			console.log(snap.val().user);

		});
	})
}