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
    }
})
