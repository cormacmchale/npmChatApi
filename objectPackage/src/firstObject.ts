export class returnWords {

    objectName: string;

    constructor(name: string) {
            this.objectName = name;
    }
    gethello() : string {
        return "hello";
    }
    getGoodbye() : string{
        return "Goodbye";
    }
    getSuccess(): string
    {
        return "Success";
    }
}