export class Note {

    
    constructor(
        
        public id:number = 0,
        public message:string = "default",
        public dateCreated:Date = new Date(),
        public dateUpdated:Date = new Date(), 
        
    ){}
}
