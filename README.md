# API para cadastro de produtos de autopeças

API para integração com aplicativo android para matéria de dispositivos móveis FANAP

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
[GET] http://localhost:3000/api.autopecas/produto-dao/getId?id=[id do produto]
[GET] http://localhost:3000/api.autopecas/produto-dao/getAll
[POST] http://localhost:3000/api.autopecas/produto-dao/create
[PUT] http://localhost:3000/api.autopecas/produto-dao/update/[id do produto]
[DELETE] http://localhost:3000/api.autopecas/produto-dao/delete/[id do produto]
```

### COLLECTION POSTMAN

Para usar e testas as API's no postman, importe a collection localizada na pasta descrita abaixo.

```sh
postman\api-android.postman_collection.json
```
