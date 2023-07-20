import java.util.ArrayList;

class Contato {
    private String nome;
    private String telefone;

    public Contato(String nome, String telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public String getTelefone() {
        return telefone;
    }

    @Override
    public String toString() {
        return nome + " - " + telefone;
    }
}

class Agenda {
    private ArrayList<Contato> contatos;

    public Agenda() {
        contatos = new ArrayList<>();
    }

    public void adicionarContato(Contato contato) {
        contatos.add(contato);
    }

    public void removerContato(Contato contato) {
        contatos.remove(contato);
    }

    public ArrayList<Contato> listarContatos() {
        return contatos;
    }
}

public class Main {
    public static void main(String[] args) {
        Agenda agenda = new Agenda();

        Contato contato1 = new Contato("João", "111111111");
        Contato contato2 = new Contato("Maria", "222222222");
        Contato contato3 = new Contato("Carlos", "333333333");

        agenda.adicionarContato(contato1);
        agenda.adicionarContato(contato2);
        agenda.adicionarContato(contato3);

        ArrayList<Contato> contatos = agenda.listarContatos();
        for (Contato contato : contatos) {
            System.out.println(contato);
        }
    }
}
