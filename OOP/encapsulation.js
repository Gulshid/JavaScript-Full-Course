class Bank{
    // balance = 50000; // public Access Specifier
    #balance = 50000; // private Access Specifier

    showbalance(){
        console.log(this.#balance);
    }
}


const bank_1 = new Bank();
bank_1.showbalance();
// bank_1.#balance;



/*
Lecture # 59
    Topic : Encapsulation in JavaScript

    Encapsulation:
        Encapsulation means hiding data and allowing access only through methods/function.
        It is used for:
           * security 
           * protecting data
           * preventing direct changes
        
        */