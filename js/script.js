const app = new Vue(
    {
        el: '#app',
        data:{
            user:{
                name: 'Flavio',
                avatar: '_io'
            },
            contactActive: 0,
            text : "",
            search : "",
            contacts:[
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages:[
                        {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages:[
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Lorenzo',
                    avatar: '_3',
                    visible: true,
                    messages:[
                        {
                            date: '20/03/2020 11:30:00',
                            text: 'Ciao, come stai?',
                            status: 'sent'            
                        },
                        {
                            date: '20/03/2020 12:00:55',
                            text: 'Bene grazie! Stasera andiamo a reperire dello sballo??',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 12:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare il vaccino.',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Damiano',
                    avatar: '_4',
                    visible: true,
                    messages:[
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Hai pushato?',
                            status: 'sent'            
                        },
                        {
                            date: '20/03/2020 16:35:55',
                            text: 'No, mi sono dimenticato. Adesso provvedo!',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:36:00',
                            text: 'Bravo, è importante per noi che tu pushi il più possibile.',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Valentina',
                    avatar: '_5',
                    visible: true,
                    messages:[
                        {
                            date: '20/03/2020 18:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'            
                        },
                        {
                            date: '20/03/2020 18:30:20',
                            text: 'Bene grazie! Stasera andiamo a fare la spesa?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 18:31:00',
                            text: 'Mi piacerebbe ma devo uscire con una persona.',
                            status: 'sent'
                        }
                    ]
                }                              
            ]
        }, 
        methods: {
            setContactActive(indice){
                this.contactActive = indice;
                console.log(this.contactActive);
            },
            
            sentMessage(){
                
                if (this.text) {                    

                    this.contacts[this.contactActive].messages.push({ text: this.text, status: 'sent'});
                    
                    setTimeout(function(){
                        app.contacts[app.contactActive].messages.push({text:"Ok", status: 'received'})
                    }, 2000);
                }

                this.text = ""
            },

            searchInList(){
                this.contacts.filter(contacts => contacts.name.toLowerCase().includes(this.search.toLowerCase()));
                
            }
        },  
        
        
         
        


    }
);
