console.log("hello");




/*

Rifare l'esercizio della to do list. 
//Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//text, una stringa che indica il testo del todo
//done, un booleano (true/false) che indica se il todo è stato fatto oppure no

*/



const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            todoList: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Studiare VUE',
                    done: false
                },
                {
                    text: 'Allenarsi',
                    done: false
                },
                {
                    text: 'Preparare cena',
                    done: false
                },
            ]
        }
    },
    methods:{
        done(i){
            console.log(this.todoList[i]);
            console.log(this.todoList[i].done);     
            this.todoList[i].done = true
            if (this.todoList[i].done = true) {
            }  
        }
    }
}).mount('#app')
