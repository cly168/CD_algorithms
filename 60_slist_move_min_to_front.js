function Slistmoveminfront(){
	this.head = null;
	this.minfront = function(){
		var min_prev = null;
		var min = this.head;
		var prev = this.head;
		var node = this.head.next;
		while(node){
			if(node.val < min.val){
				min = node;
				min_prev = prev;
			}
			prev = node;
			node = node.next;
		}
		if(min != this.head){
			min_prev.next = min.next;
			min.next = this.head;
			this.head = min;
		}
	}
}