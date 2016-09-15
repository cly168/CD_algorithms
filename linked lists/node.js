function Node(val){
	this.val = val;
	this.next = null;
}
function sLList(){
	this.head;

	this.addFront = function(val){
		var node = new Node(val);
		if(!this.head){
			this.head = node;
		else{
			node.next = this.head;
			this.head = node;
		}
		return this.head;
		}
	this.contains = function(val){
		if(!this.head){
			return false;
		}
		var current = this.head
		while(current){
			if(current.val == val){
				return true;
			}
			current = current.next;
		}
		return false;
	}