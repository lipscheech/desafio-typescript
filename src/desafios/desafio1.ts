// Como podemos rodar isso em um arquivo .ts sem causar erros?

export interface Employee{
    name: string;
    code: number;

}

let employee!: Employee;

employee.code = 10;
employee.name = "John";