export function counter(state=0,action){
	switch (action.type){
		case "plus":
		  return state+1
		case "min" :
		  return state-1
		default:
		  return state
	}
 }