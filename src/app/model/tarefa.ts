export class Tarefa {
    public id: number;
    public titulo: string;
    public descricao: string;
    public categoria: string;
    public data: Date;
    public concluida: boolean;

    constructor(id: number, titulo: string, descricao: string, categoria: string, data: Date, concluida: boolean) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
      this.categoria = categoria;
      this.data = data;
      this.concluida = concluida;
  }
}
