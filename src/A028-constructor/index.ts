// singleton - GoF

export class Database{
    private static database: Database;

    private constructor(
        private host:string, 
        private user:string, 
        private password:string
    ){}

    
    connect():void{
        console.log(`Conectado: ${this.host}, ${this.user}`)
    }

    static getDatabase(
        host:string, 
        user:string, 
        password:string
    ):Database{
        if(Database.database){
            console.log('retornando instancia ja criada')
            return Database.database}

        console.log('criando nova instancia')
        Database.database = new Database(host, user, password)
        return Database.database
    }
}


const db1 = Database.getDatabase('localhost', 'root', '123')
db1.connect()

const db2 = Database.getDatabase('localhost', 'root2', '123')
db2.connect()

console.log(db1 === db2)