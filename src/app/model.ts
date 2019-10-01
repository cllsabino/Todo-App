export class Model{
    user;
    items;
    constructor(){
        this.user = "Carlos";
        this.items = [];
    }
}
export class TodoItem{
    action;
    done;
    constructor(action, done){
        this.action=action;
        this.done=done;
    }

}