function Slistback(){
	this.head = null;
	this.back = function(){
		if(this.head != null){
			var node = this.head
			while(node.next){
				node = node.next
			}
		}
		return node.val;
	}
}