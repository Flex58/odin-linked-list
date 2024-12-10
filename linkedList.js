const node = (value = null, next = null) => {
    return {
        value: value,
        next: next,
    }
}


const linkedList = (value) => {
    return {
        head: node(value),
        
        append(value) {
            let newNode = node(value);
            if (this.head.next == null) {
               return this.head.next = newNode;
            }
            let index = this.head.next
            while (index.next != null) {
                index = index.next  
            }
            return index.next = newNode;
        },

        prepend(value){
            let newNode = node(value)
            newNode.next = this.head;
            this.head = newNode;
        },
        
        toString() {
            let string = this.head.value 
            let index = this.head
            while (index.next != null) {
                index = index.next
                string += " -> "
                string += index.value
            }
            string += " -> "
            string += index.next
            console.log(string)
        }
    }
}

const list = linkedList("dog")
list.append("cat")
list.append("bun")
list.prepend("kuik")
list.toString()