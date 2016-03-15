/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 //
 */
function linkedListGenerator() {

	var head = null;
	var tail = null;
	

            
    function getHead() {
    	return head;
    }

    function getTail() {
    	return tail;
    }

    function add(value) {
    	var node = {
			value: value,
			next: null
		};
		if (head === null && tail === null){
		head = node;
		tail = node;
	}else {
		tail.next = node;
		tail = node;
	}
		return node;
    }
    

    function get(number) {
    	var newHead = head;
    	for (var i = 0; i < number; i++){
    		if (newHead.next === null){
    			return false;
    		}
    		else {
    			newHead = newHead.next;
    		}
    	}
    	console.log(newHead);
    return newHead;
} 

    	



    

    function remove(number) {

    }

    function insert(value, number) {

    }




    return {

        getHead: getHead,
        getTail: getTail,
        add: add,
        get: get,
        remove: remove,
        insert: insert
	};   

}