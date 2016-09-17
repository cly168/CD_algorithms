function Slistmaxtoback(){
	this.head = null;
	this.maxtoback(){
		var max_prev = null;
		var max = this.head;
		var prev = this.head;
		var node = this.head.next;
		while(node){
			if(node.val > max.val){
				max_prev = prev;
				max = node;
			}
			prev = node;
			node = node.next;
		}
		if(max != prev && max != this.head){
			max_prev.next = max.next;
			prev.next = max;
			max.next = null;
		}
	}
}