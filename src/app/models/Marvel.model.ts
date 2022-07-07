export class MarvelModel{
    id: number = 0;
    name: string = "";
    description: string = "";
    modified: Date = new Date;
    thumbnail: {path: string, extension: string} = { path: "", extension: ""};
}