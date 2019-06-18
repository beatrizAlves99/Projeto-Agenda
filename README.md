# Projeto Agenda de Contatos

## Instruções de compilação

__Tecnologias usadas:__ 
`Spring Boot`, `Angular 2`, `PostgreSQL`, `Bootstrap 4`.

__API REST com Spring Boot:__ No arquivo *application.properties*(\src\main\resources) modifique o nome de usuario e a senha para as suas configurações pessoais. O nome do banco deve ser Agenda.
```
spring.datasource.url=jdbc:postgresql://localhost:5432/Agenda 
spring.datasource.username=user
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.temp.use_jdbc_metadata_defaults = false
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL9Dialect

```

Após rodar o projeto pela primeira vez, altere a propriedade *spring.jpa.hibernate.ddl-auto=* de `create` para `none`, assim o projeto não recria o banco toda vez que for executado.  

Para compilar a API, basta executar o arquivo main no pacote *br.gov.rn.parnamirim.agendatelefone*.

__Front-End com Angular:__ Em primeiro lugar execute o comando `npm install` para fazer o download dos pacotes node que foram usados no projeto, em seguida você pode executar o comando `ng serve` para rodar o projeto. Atenção em abrir o terminal na pasta raiz da aplicação Angular antes de executar os comandos mencionados.

__Rodando o projeto por completo:__ Para que o projeto esteja funcionando em plenas condições, primeiro deve-se subir o servidor postgresSQL no seu computador, em seguida a API REST e por fim a aplicação Angular.

## URLs das aplicações: 

__Angular:__   <http://localhost:4200>

__API REST:__  <http://localhost:8080/contatos>


