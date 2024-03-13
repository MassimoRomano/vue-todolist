const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: [
                {
                    text: '',
                    done: false
                },
            ],

            tasks: [
                {
                    text: 'ciao',
                    done: true
                },
                {
                    text: 'arrivederci',
                    done: false
                },
                {
                    text: 'buonanotte',
                    done: true
                }
            ]
        }
    },

    methods: {
        /* funzione per aggiungere le task alla dom */
        addTask() {
            this.newTask.push({ ...this.newTodo });
            this.tasks.unshift(this.newTask)
            this.newTask = ''
        },
        
    }
}).mount('#app')
