function Node(val){
	this.val = val;
	this.next = null;
}

function sLList(){
	this.head;
	this.front = function(){
		if(!this.head){
			return null; 
		}
		else{
			return this.head.val;
		}
	}
	this.addFront = function(val){
		var node = new Node(val);
		if(!this.head){
			this.head = node;
		}
		else{
			node.next = this.head;
			this.head = node;
		}
		return this.head;
	}
}

list = new sLList();
for(var i = 0 ; i < 1; i++){
	list.addFront(i);
}
console.log(list);
console.log(list.front());