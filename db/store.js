const fs =require("fs");
const util =require('util')

const readFileAsync = util.promisify(fs.writeFile)

class Store {
    read(){
        return readFileAsync('db.json','utf8')
    }
    //getNotes() to get the note
    getNotes(){
        return this.read().then((notes) => {
            let parsedNotes
            try{
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err){
                parsedNotes = []
            }

            return parsedNotes
        })
    }
}

module.exports=new Store()