export class TodoList{
    constructor(){
        this.loadLocalStorage();
    }

    newTodo( todo ){
        this.todos.push( todo );
        this.saveLocalStorage();
    }

    deleteTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveLocalStorage();
    }
    //Test

    toggleTodo( id ){
        for( const todo of this.todos){
            //console.log( id, todo.id );
            if( todo.id == id ){
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            } 
        }
    }

    deleteAllCompleted(){
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveLocalStorage();
    }

    saveLocalStorage(){
        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );
    }

    loadLocalStorage(){

        this.todos = ( localStorage.getItem( 'todo' ) ) 
        ? JSON.parse( localStorage.getItem( 'todo' ) ) 
        : [];        
    }
}