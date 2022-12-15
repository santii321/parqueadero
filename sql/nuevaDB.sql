-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 03:12:50
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parqueadero`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `documento` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `documento`, `correo`, `direccion`, `telefono`, `createdAt`, `updatedAt`) VALUES
(1, 'jshdjsj', '1162663', 'hdwsjsjsj', 'jsdsjsj', '273737', '2022-12-13', '2022-12-13'),
(2, 'kwqkwkwk', '353535', 'hsjsjd', 'jsjdjdj', '17363', '2022-12-13', '2022-12-13'),
(3, 'kkkkkq', '273737', 'jdjdjd', '838383j', '283737', '2022-12-13', '2022-12-13'),
(4, 'kkkkkq', '273737', 'jdjdjd', '838383j', '283737', '2022-12-13', '2022-12-13'),
(5, 'kkkkkq', '273737', 'jdjdjd', '838383j', '283737', '2022-12-13', '2022-12-13'),
(6, 'kskssksk', '2837373', 'sjsjsjsj', '38373737', 'isisidkd', '2022-12-13', '2022-12-13'),
(7, 'msdjsjk', '373737', 'jdjddjdj', '288383', '38833', '2022-12-13', '2022-12-13'),
(8, 'jkskk', '3837464', 'jsjsjs', '83883', '84874747', '2022-12-13', '2022-12-13'),
(9, 'jsjsjs', '474774', 'jsjxks', 'jdjdjd', '233', '2022-12-13', '2022-12-13'),
(10, 'kkkkddk', '3444', 'jdnj', 'kdkdk', '333', '2022-12-14', '2022-12-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `placas`
--

CREATE TABLE `placas` (
  `id` int(11) NOT NULL,
  `placa` varchar(255) NOT NULL,
  `estado` enum('0','1') DEFAULT '0',
  `fecha_ingreso` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_salida` datetime DEFAULT current_timestamp(),
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `placas`
--

INSERT INTO `placas` (`id`, `placa`, `estado`, `fecha_ingreso`, `fecha_salida`, `createdAt`, `updatedAt`) VALUES
(1, 'fcm005', '1', '2022-12-15 01:34:25', '2022-12-15 02:09:31', '2022-12-15', '2022-12-15'),
(2, 'trx098', '0', '2022-12-15 02:09:50', '2022-12-15 02:09:50', '2022-12-15', '2022-12-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `cantidad` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `imagen`, `precio`, `cantidad`, `createdAt`, `updatedAt`) VALUES
(1, 'Casco Shoe', 'Para mayor seguridad', 'https://www.shoeicorver.com/img/cascos/01-img-shoei-casco-moto-xspirit3.png', 350000, 20, '2022-12-15', '2022-12-15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `placas`
--
ALTER TABLE `placas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `placas`
--
ALTER TABLE `placas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
