function ListNode(val){
	this.val = val;
	this.next = null;
}
function SListDisplay(){
	this.head = null;
	this.display = function(){
		var list = '';
		var node = this.head;
		while(node){
			list += node.val;
			node = node.next;
		}
		return list;
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

var list = new SListDisplay();
for(var i =0 ; i < 10; i++){
	list.addFront(i);
}
console.log(list.display());