-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Nov-2023 às 20:39
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `autopecas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome_peca` varchar(255) NOT NULL,
  `numero_referencia` varchar(50) NOT NULL,
  `categoria` enum('Motor','Transmissão','Suspensão e Direção','Freios','Sistema de Escape','Sistema Elétrico','Sistema de Arrefecimento','Interior e Conforto','Carroceria e Exterior','Pneus e Rodas','Fluidos e Lubrificantes','Filtros e Elementos Filtrantes') NOT NULL,
  `fabricante` varchar(100) NOT NULL,
  `modelo_compativel` varchar(255) DEFAULT NULL,
  `ano_fabricacao_compativel` varchar(20) DEFAULT NULL,
  `material` enum('Aço','Alumínio','Plástico','Borracha e Elastômeros','Ferro Fundido','Cobre e Ligas de Cobre','Fibra de Carbono','Vidro','Cerâmica','Compósitos') NOT NULL,
  `peso` decimal(10,2) DEFAULT NULL,
  `dimensoes` varchar(50) DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `estoque_disponivel` int(11) NOT NULL,
  `fornecedor` varchar(100) DEFAULT NULL,
  `data_aquisicao` date NOT NULL,
  `data_fabricacao` date DEFAULT NULL,
  `data_vencimento` date DEFAULT NULL,
  `notas_adicionais` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nome_peca`, `numero_referencia`, `categoria`, `fabricante`, `modelo_compativel`, `ano_fabricacao_compativel`, `material`, `peso`, `dimensoes`, `preco`, `estoque_disponivel`, `fornecedor`, `data_aquisicao`, `data_fabricacao`, `data_vencimento`, `notas_adicionais`) VALUES
(1, 'Amortecedor Dianteiro Atualizado', '123456', 'Suspensão e Direção', 'Fabricante XYZ Atualizado', 'Modelo ABC Atualizado', '2022-2023 Atualizado', '', '6.00', '25x12x6 Atualizado', '109.99', 90, 'Fornecedor ABC Atualizado', '2023-01-01', '2022-12-01', NULL, 'Produto atualizado'),
(2, 'Filtro de Óleo', '345678', 'Filtros e Elementos Filtrantes', 'Fabricante XYZ', 'Modelo XYZ', '2020-2022', 'Plástico', '0.30', '10x5x5', '19.99', 30, 'Fornecedor ABC', '2023-03-10', '2023-02-01', '2024-02-01', 'Produto com validade'),
(5, 'Pastilhas de Freio', '789012', 'Freios', 'Fabricante ABC', 'Todos', '2020-2023', 'Ferro Fundido', '1.20', '15x8x3', '49.99', 50, 'Fornecedor XYZ', '2023-02-15', '2023-01-01', NULL, 'Produto de alta durabilidade');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero_referencia` (`numero_referencia`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
