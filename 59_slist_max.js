function ListNode(val){
	this.val = val;
	this.next = null;
}
function max(){
	this.head = null;
	this.max = function(ListNode){
		var node = ListNode
		var max = node.val
		while(node){
			if(node.val > max){
				max = node.val;
			}
			node = node.next;
		}
		return max;
	}
	this.addFront = function(val){
		var node =  new ListNode(val);
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

var list = new max();
for(var i =0 ; i < 10; i++){
	list.addFront(i);
}
console.log(list.max(list.head));