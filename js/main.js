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
        searchName: "",
        currentChat: 0,
        yourMessage:{
            date: luxon.DateTime.now().toFormat('HH:mm'),
            text:'',
            status: 'sent',
        },
        otherMessage:{
            date: luxon.DateTime.now().toFormat('HH:mm'),
            text:'',
            status: 'received',
        },
        contacts:[
            {
                name:'Michele',
                image:'_1',
                active:true,
                messages: [
                    {
                        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm'),
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date:luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm'),
                        text: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date:luxon.DateTime.fromFormat('10/01/2020 16:15:22', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm') ,
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Fabio',
                image:'_2',
                active:true,
                messages: [
                    
                ],
            },
            {
                name:'Samuele',
                image:'_3',
                active:true,
                messages: [
                    {
                        date:luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm'),
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Alessandro B.',
                image:'_4',
                active:true,
                messages: [
                    {
                        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm'),
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Alessandro L.',
                image:'_5',
                active:true,
                messages: [
                    {
                        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm'),
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                ],
            },
            {
                name:'Claudia',
                image:'_6',
                active:true,
                messages: [
                    {
                        date: luxon.DateTime.fromFormat('10/01/2020 15:30:55', 'dd/MM/yy HH:mm:ss').toFormat('HH:mm'),
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
        },
        sendMessage(currentChat){
            this.yourMessage.text = document.getElementById('message-input').value;

            this.contacts[currentChat].messages.push({...this.yourMessage});
            this.yourMessage.text = '';
        },
        receiveMessage(currentChat){
            setTimeout(() => {
                this.otherMessage.text = 'okei',
                this.contacts[currentChat].messages.push({...this.otherMessage});
                
            }, 1000);
            this.otherMessage.text = '';
        },
        nameFilter(){
            this.contacts.forEach((element) =>{
                if (element.name.toLowerCase().includes(this.searchName.toLowerCase())){
                    element.active = true;
                } else{
                    element.active = false;
                }
            })
        }
    }
})


/*
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/