# Projeto Agenda de Contatos

## Instruções de compilação

__Tecnologias usadas:__ 
`Spring Boot`, `Angular 2`, `PostgreSQL`, `Bootstrap 4`.

__API REST com Spring Boot:__ No arquivo *application.properties* modifique o nome de usuario e a senha para as suas configurações pessoais. O nome do banco deve ser Agenda.
```
spring.datasource.url=jdbc:postgresql://localhost:5432/Agenda
spring.datasource.username=user
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.temp.use_jdbc_metadata_defaults = false
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL9Dialect

```

Para compilar a API, basta executar o arquivo main no pacote *br.gov.rn.parnamirim*.

__Front-End com Angular:__ Em primeiro lugar execute o comando `npm install` para fazer o download dos pacotes node que foram usados no projeto, em seguida você pode executar o comando `ng serve` para rodar o projeto. Atenção em abrir o terminal na pasta raiz da aplicação Angular antes de executar os comandos mencionados.



