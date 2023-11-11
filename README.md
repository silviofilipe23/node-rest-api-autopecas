# API PARA CADASTRO DE PRODUTOS DE AUTOPEÇAS

API para integração com aplicativo android para matéria de dispositivos móveis

## Instruções

### Banco de dados

Após realizar a inicialização de um servidor mysql local, execute o script SQL que está localizado na pasta sql.

```file
sql\autopecas.sql
```

### API

Para instalar os pacotes e bibliotecas execute o comando abaixo.

```sh
npm install
```

Para subir a API execute o comando abaixo.

```sh
node server.js
```

Os seguintes serviços estaram disponíveis para uso:

```url
http://localhost:3000/api.autopecas/produto-dao/create
http://localhost:3000/api.autopecas/produto-dao/getId?id=[id do produto]
http://localhost:3000/api.autopecas/produto-dao/getAll
http://localhost:3000/api.autopecas/produto-dao/update/[id do produto]
http://localhost:3000/api.autopecas/produto-dao/delete/[id do produto]
```

### COLLECTION POSTMAN

Para usar e testas as API's no postman, importe a collection localizada na pasta descrita abaixo.

```sh
postman\api-android.postman_collection.json
```
