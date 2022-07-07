export class ArticleModel{

    author: string = "";
    title: string = "";
    description: string = "";
    publishedAt: string = "";
    source: {id: string, name: string} = {id: "", name: ""}
    content: string = "";
    url: string = "";
    urlToImage: string = "";
}