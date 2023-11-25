


class Gathering {

    eventId
    name
    description
    location
    hostedBy
    registeredPeoples = []

    constructor(name, description, location, hostedBy){
        this.eventId = "EV"+Math.floor(Date.now()+Math.random()*100)
        this.name = name
        this.description = description
        this.location = location
        this.hostedBy = hostedBy

        const numberOfPeople = Math.floor(Math.random()*100*Math.random()*9999) % 1000;
        for(let i=0; i<numberOfPeople; i++){
            this.registeredPeoples.push(this.generateName());
        }
    }

    generateName(){
        let firstname = ["Kai", "Eliana", "Jaden", "Ezra", "Luca", "Rowan", "Nova", "Amara", "Aaliyah", "Finn"];
        let lastname= ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Wilson"];
        let rand_first = Math.floor(Math.random()*firstname.length); 
        let rand_last = Math.floor(Math.random()*lastname.length); 
        
        return rand_first+" "+rand_last;
    }

}

class Events {
    gathering
    eventCount=0
    
    constructor(){
        this.gathering = [new Gathering("Gathering 1", "Demo Gathering", "Lucknow", "Praveen Rao")]
    }

    getTopThreeEvents(){
        const eventsCopy = this.gathering.slice();
        eventsCopy.sort((a, b)=> b.registeredPeoples.length - a.registeredPeoples.length );
        return eventsCopy.slice(0, 3);
    }

    getTotalEvents(){
        return this.gathering.length
    }

    registerForEvent(eventId, recipient){
        const index = this.gathering.indexOf(ev => ev.eventId == eventId);
        this.gathering[index].registeredPeoples.push(recipient);
    }

    createEvent(name, description, location, hostedBy){
        this.gathering.push(new Gathering(name, description, location, hostedBy));
    }


}

const event = new Events();

module.exports = event;