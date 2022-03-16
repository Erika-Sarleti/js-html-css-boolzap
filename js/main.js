/*
 contacts: [
{
name: 'Michele',
avatar: '_1',
visible: true,
messages: [
{
date: '10/01/2020 15:30:55',
message: 'Hai portato a spasso il cane?',
status: 'sent'
},
{
date: '10/01/2020 15:50:00',
message: 'Ricordati di stendere i panni',
status: 'sent'
},
{
date: '10/01/2020 16:15:22',
message: 'Tutto fatto!',
status: 'received'
}
],
},
*/


const app = new Vue({
    el: '.app',
    data:{
        currentChat: 0,
        contacts:[
            {
                name:'Michele',
                image:'_1',
                active:true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Fabio',
                image:'_2',
                active:false,
                messages: [
                    
                ],
            },
            {
                name:'Samuele',
                image:'_3',
                active:false,
                messages: [
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Alessandro B.',
                image:'_4',
                active:false,
                messages: [
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Alessandro L.',
                image:'_5',
                active:false,
                messages: [
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Claudia',
                image:'_6',
                active:false,
                messages: [
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
        ]
    },
    methods: {
        selectChat(i){
           this.currentChat = i 
        }
    }
})


/*
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
    -al click sul contatto
        currentChat = contatto cliccato

Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/