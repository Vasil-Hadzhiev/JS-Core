class MailBox {
    constructor(){
        this._messages = [];
    }

    get messageCount(){
        return this._messages.length;
    }

    addMessage(subject, text){
        this._messages.push({subject, text});

        return this;
    }

    deleteAllMessages(){
        this._messages.length = 0;
    }

    findBySubject(substr){
        return this._messages.filter(m => m.subject.includes(substr));
    }

    toString(){
        if (this._messages.length === 0){
            return ' * (empty mailbox)';
        }

        let result = '';

        for (let msg of this._messages) {
            result += ` * [${msg.subject}] ${msg.text}\n`;
        }

        return result;
    }
}