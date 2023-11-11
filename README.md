```mysql
CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_peca VARCHAR(255) NOT NULL,
    numero_referencia VARCHAR(50) UNIQUE NOT NULL,
    categoria ENUM('Motor', 'Transmissão', 'Suspensão e Direção', 'Freios', 'Sistema de Escape', 'Sistema Elétrico', 'Sistema de Arrefecimento', 'Interior e Conforto', 'Carroceria e Exterior', 'Pneus e Rodas', 'Fluidos e Lubrificantes', 'Filtros e Elementos Filtrantes') NOT NULL,
    fabricante VARCHAR(100) NOT NULL,
    modelo_compativel VARCHAR(255),
    ano_fabricacao_compativel VARCHAR(20),
    material ENUM('Aço', 'Alumínio', 'Plástico', 'Borracha e Elastômeros', 'Ferro Fundido', 'Cobre e Ligas de Cobre', 'Fibra de Carbono', 'Vidro', 'Cerâmica', 'Compósitos') NOT NULL,
    peso DECIMAL(10, 2),
    dimensoes VARCHAR(50),
    preco DECIMAL(10, 2) NOT NULL,
    estoque_disponivel INT NOT NULL,
    fornecedor VARCHAR(100),
    data_aquisicao DATE NOT NULL,
    data_fabricacao DATE,
    data_vencimento DATE,
    notas_adicionais TEXT
);
```
