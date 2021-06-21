export class Todo{

    constructor( task ){
        this.task       = task;
        this.id         =  new Date().getTime(); // 1283871263
        this.completed  = false;
        this.created    = new Date();
    }
    
}