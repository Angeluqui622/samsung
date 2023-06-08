-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2023 a las 21:47:10
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratorio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `PrimerApellido` varchar(20) NOT NULL,
  `SegundoApellido` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Loginn` varchar(20) NOT NULL,
  `Contraseña` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Nombre`, `PrimerApellido`, `SegundoApellido`, `Email`, `Loginn`, `Contraseña`) VALUES
(18, 'Ángela', 'Fernández', 'Cambronero', 'agecamfe@hotmail.com', 'sasa', 'sdsdsd'),
(37, 'Ángela', 'Fernández', 'Cambronero', 'xdzxmfe@hotmail.com', 'xzczxc', 'asdadadd'),
(38, 'Pepa', 'Gonzalez', 'De la Cruz', 'gonza@hotmail.com', 'Hola', 'nose'),
(39, 'Lola', 'Lolita', 'Lolailo', 'loli@hotmail.com', '123', '4567'),
(41, 'Ángela', 'Fernández', 'Cambronero', 'agecannedmfe@hotmail', 'Ader', 'Asdfg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
