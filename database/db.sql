-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               10.5.11-MariaDB - mariadb.org binary distribution
-- Операционная система:         Win64
-- HeidiSQL Версия:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Дамп структуры для таблица laravel.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.categories: ~6 rows (приблизительно)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT IGNORE INTO `categories` (`id`, `parent_id`, `sort`, `name`, `description`, `slug`, `images`, `created_at`, `updated_at`) VALUES
	(1, NULL, 2, 'Поддержка', NULL, '', NULL, '2022-04-08 20:45:37', '2022-04-08 20:45:38'),
	(2, 1, 3, 'Техническая поддержка', 'Обсуждение затруднений с установкой, работой и соединением игрового клиента.', 'test-2', NULL, '2022-04-08 20:45:44', '2022-04-08 20:45:44'),
	(3, NULL, 1, 'Сообщество', NULL, NULL, NULL, '2022-04-16 11:25:21', '2022-04-16 11:25:21'),
	(4, 3, 2, 'Объявления', 'Ознакомьтесь с официальными новостями, включающие новости игры, списки изменений и сообщения от разработчиков.', 'test-2', NULL, '2022-04-16 11:26:27', '2022-04-16 11:26:28'),
	(5, 3, 3, 'Общие темы', 'Общайтесь с другими игроками.', 'test-2', NULL, '2022-04-16 11:27:33', '2022-04-16 11:27:34'),
	(6, 4, 1, 'Жизнь сообщества', NULL, NULL, NULL, '2022-04-16 20:10:09', '2022-04-16 20:10:10');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.characters
CREATE TABLE IF NOT EXISTS `characters` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `account` bigint(20) DEFAULT NULL,
  `index` int(11) NOT NULL DEFAULT 1,
  `guid` bigint(20) DEFAULT NULL,
  `isActive` int(11) NOT NULL,
  `name` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` smallint(6) NOT NULL,
  `class_text` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_key` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `race` smallint(6) NOT NULL,
  `race_text` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `race_key` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` smallint(6) NOT NULL,
  `level` int(11) NOT NULL,
  `realmId` int(11) NOT NULL DEFAULT 0,
  `totaltime` int(11) NOT NULL DEFAULT 0,
  `logout_time` int(11) NOT NULL DEFAULT 0,
  `totalHonorPoints` int(11) NOT NULL DEFAULT 0,
  `totalKills` int(11) NOT NULL DEFAULT 0,
  `health` int(11) NOT NULL DEFAULT 0,
  `power1` int(11) NOT NULL DEFAULT 0,
  `power2` int(11) NOT NULL DEFAULT 0,
  `power3` int(11) NOT NULL DEFAULT 0,
  `power4` int(11) NOT NULL DEFAULT 0,
  `power5` int(11) NOT NULL DEFAULT 0,
  `power6` int(11) NOT NULL DEFAULT 0,
  `power7` int(11) NOT NULL DEFAULT 0,
  `chosenTitle` int(11) NOT NULL DEFAULT 0,
  `talentGroupsCount` int(11) NOT NULL DEFAULT 0,
  `activeTalentGroup` int(11) NOT NULL DEFAULT 0,
  `realmName` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `realmSlug` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faction` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faction_text` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guildId` int(11) DEFAULT NULL,
  `guildName` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guildUrl` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `characters_name_fulltext` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.characters: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT IGNORE INTO `characters` (`id`, `account`, `index`, `guid`, `isActive`, `name`, `class`, `class_text`, `class_key`, `race`, `race_text`, `race_key`, `gender`, `level`, `realmId`, `totaltime`, `logout_time`, `totalHonorPoints`, `totalKills`, `health`, `power1`, `power2`, `power3`, `power4`, `power5`, `power6`, `power7`, `chosenTitle`, `talentGroupsCount`, `activeTalentGroup`, `realmName`, `realmSlug`, `faction`, `faction_text`, `guildId`, `guildName`, `guildUrl`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 1, 1, 'weefef', 1, 'Друид', '1', 1, '1', '1', 1, 60, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Test Server', 'test-server', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `idea_id` bigint(20) unsigned NOT NULL,
  `status_id` bigint(20) unsigned NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `spam_reports` int(11) NOT NULL DEFAULT 0,
  `is_status_update` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_user_id_foreign` (`user_id`),
  KEY `comments_idea_id_foreign` (`idea_id`),
  KEY `comments_status_id_foreign` (`status_id`),
  CONSTRAINT `comments_idea_id_foreign` FOREIGN KEY (`idea_id`) REFERENCES `ideas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`),
  CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.comments: ~30 rows (приблизительно)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT IGNORE INTO `comments` (`id`, `user_id`, `idea_id`, `status_id`, `body`, `spam_reports`, `is_status_update`, `created_at`, `updated_at`) VALUES
	(1, 8, 2, 1, 'Test Comments', 0, 0, '2022-04-08 23:19:08', '2022-04-08 23:19:08'),
	(2, 8, 2, 1, 'ewe wefwef', 0, 0, '2022-04-08 20:42:19', '2022-04-08 20:42:19'),
	(3, 8, 2, 1, 'ew wefwef ewfwef', 0, 0, '2022-04-08 20:57:05', '2022-04-08 20:57:05'),
	(4, 8, 2, 3, 'No comment was added.', 0, 1, '2022-04-08 21:02:07', '2022-04-08 21:02:07'),
	(5, 8, 2, 2, 'No comment was added.', 0, 1, '2022-04-09 05:55:16', '2022-04-09 05:55:16'),
	(6, 8, 3, 4, 'ef', 0, 1, '2022-04-09 06:59:58', '2022-04-09 06:59:58'),
	(7, 8, 3, 1, 'fewe wef wef', 0, 0, '2022-04-09 07:26:32', '2022-04-09 07:26:32'),
	(8, 8, 3, 2, 'No comment was added.', 0, 1, '2022-04-09 08:51:28', '2022-04-09 08:51:28'),
	(9, 8, 3, 3, 'уйцаас', 0, 1, '2022-04-09 08:51:53', '2022-04-09 08:51:53'),
	(10, 8, 3, 1, 'цуа цуа цуа', 0, 0, '2022-04-09 08:52:02', '2022-04-09 08:52:02'),
	(11, 8, 3, 1, 'ewfwefwef', 0, 0, '2022-04-09 08:57:01', '2022-04-09 08:57:01'),
	(12, 8, 3, 1, 'qwd qwd qwdqwd', 0, 0, '2022-04-09 09:06:53', '2022-04-09 09:06:53'),
	(13, 8, 4, 1, 'wef wef wefwef', 0, 0, '2022-04-09 09:25:29', '2022-04-09 09:25:29'),
	(14, 8, 4, 1, 'цуа цуа цуацу ацу', 0, 0, '2022-04-09 10:52:18', '2022-04-09 10:52:18'),
	(15, 8, 4, 1, 'цуа цуацуа', 0, 0, '2022-04-09 11:42:22', '2022-04-09 11:42:22'),
	(16, 8, 4, 1, 'qwefwe wefwef', 0, 0, '2022-04-09 12:18:25', '2022-04-09 12:18:25'),
	(17, 8, 4, 1, 'wef wef wefwef', 0, 0, '2022-04-09 13:04:34', '2022-04-09 13:04:34'),
	(18, 8, 5, 1, 'r4yr 3rg 3g3g', 0, 0, '2022-04-09 16:13:28', '2022-04-11 12:51:47'),
	(19, 8, 5, 2, 'No comment was added.', 0, 1, '2022-04-11 07:05:26', '2022-04-11 07:05:26'),
	(20, 8, 5, 1, 'erg erg', 0, 0, '2022-04-11 15:30:59', '2022-04-11 15:30:59'),
	(21, 8, 4, 1, 'ewrfwewfe', 0, 0, '2022-04-16 14:51:45', '2022-04-16 14:51:45'),
	(22, 8, 4, 1, 'qwf qwf qwqwfqw qwfq wfqw', 0, 0, '2022-04-16 15:09:01', '2022-04-16 15:09:01'),
	(23, 8, 4, 1, 'Проверка', 0, 0, '2022-04-16 15:24:10', '2022-04-16 15:24:10'),
	(24, 8, 4, 1, 'we wef wef', 0, 0, '2022-04-16 15:43:24', '2022-04-16 15:43:24'),
	(25, 8, 12, 1, 'Ответил типа', 0, 0, '2022-04-16 19:14:17', '2022-04-16 19:14:17'),
	(28, 8, 12, 5, 'No comment was added.', 0, 1, '2022-04-17 07:57:59', '2022-04-17 07:57:59'),
	(29, 8, 12, 1, 'No comment was added.', 0, 1, '2022-04-17 11:06:27', '2022-04-17 11:06:27'),
	(30, 8, 12, 5, 'No comment was added.', 0, 1, '2022-04-17 11:06:33', '2022-04-17 11:06:33'),
	(31, 8, 4, 5, 'No comment was added.', 0, 1, '2022-04-17 11:53:10', '2022-04-17 11:53:10'),
	(40, 9, 11, 1, 'efwefew', 0, 0, '2022-04-17 14:01:26', '2022-04-17 14:01:26');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.failed_jobs: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.gifts
CREATE TABLE IF NOT EXISTS `gifts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `item` bigint(20) DEFAULT NULL,
  `countItem` bigint(20) NOT NULL DEFAULT 1,
  `title` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.gifts: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT IGNORE INTO `gifts` (`id`, `user_id`, `item`, `countItem`, `title`, `status`, `created_at`, `updated_at`) VALUES
	(2, 8, 188942, 1, 'Взор вечного пехотинца', 0, '2022-04-13 17:55:29', '2022-04-13 17:55:29');
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.histories
CREATE TABLE IF NOT EXISTS `histories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `services` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `servicesKey` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.histories: ~9 rows (приблизительно)
/*!40000 ALTER TABLE `histories` DISABLE KEYS */;
INSERT IGNORE INTO `histories` (`id`, `user_id`, `services`, `servicesKey`, `title`, `price`, `status`, `order_id`, `created_at`, `updated_at`) VALUES
	(3, 1, 'balance', 'FreeKassa', 'Пополнение баланса', 10, 1, 1648034674, '2022-03-23 11:24:34', '2022-03-23 11:24:34'),
	(4, 1, 'balance', 'Enot', 'Пополнение баланса', 10, 1, 1648034963, '2022-03-23 11:29:23', '2022-03-23 11:29:23'),
	(5, 8, 'balance', 'FreeKassa', 'Пополнение баланса', 188, 0, 1648039190, '2022-03-23 12:39:50', '2022-03-23 12:39:50'),
	(6, 8, 'balance', 'FreeKassa', 'Пополнение баланса', 500, 0, 1648039558, '2022-03-23 12:45:58', '2022-03-23 12:45:58'),
	(7, 8, 'balance', 'Enot', 'Пополнение баланса', 500, 0, 1648039570, '2022-03-23 12:46:10', '2022-03-23 12:46:10'),
	(8, 8, 'balance', 'PayPal', 'Пополнение баланса', 100, 0, 1648040629, '2022-03-23 13:03:49', '2022-03-23 13:03:49'),
	(9, 8, 'balance', 'PayPal', 'Пополнение баланса', 100, 0, 1648040638, '2022-03-23 13:03:58', '2022-03-23 13:03:58'),
	(10, 8, 'balance', 'PayPal', 'Пополнение баланса', 100, 0, 1648040664, '2022-03-23 13:04:24', '2022-03-23 13:04:24'),
	(11, 8, 'balance', 'PayPal', 'Пополнение баланса', 100, 0, 1648042079, '2022-03-23 13:27:59', '2022-03-23 13:27:59');
/*!40000 ALTER TABLE `histories` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.ideas
CREATE TABLE IF NOT EXISTS `ideas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `category_id` bigint(20) unsigned NOT NULL,
  `status_id` bigint(20) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `spam_reports` int(11) NOT NULL DEFAULT 0,
  `views` int(11) NOT NULL DEFAULT 0,
  `closed` int(11) NOT NULL DEFAULT 0,
  `pinned` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ideas_user_id_foreign` (`user_id`),
  KEY `ideas_category_id_foreign` (`category_id`),
  KEY `ideas_status_id_foreign` (`status_id`),
  CONSTRAINT `ideas_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `ideas_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`),
  CONSTRAINT `ideas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.ideas: ~12 rows (приблизительно)
/*!40000 ALTER TABLE `ideas` DISABLE KEYS */;
INSERT IGNORE INTO `ideas` (`id`, `user_id`, `category_id`, `status_id`, `title`, `slug`, `description`, `spam_reports`, `views`, `closed`, `pinned`, `created_at`, `updated_at`) VALUES
	(1, 8, 2, 1, 'Test Topic', 'test-topic', 'Test Topic Created', 0, 0, 0, 0, '2022-04-08 20:46:14', '2022-04-08 20:46:15'),
	(2, 8, 2, 2, 'Laravel', 'laravel', 'Laravel Error', 0, 0, 0, 0, '2022-04-08 22:21:55', '2022-04-09 05:55:16'),
	(3, 8, 4, 3, 'ewfewfw wef', 'test-topic', 'wefwe wefwef', 0, 5, 0, 0, '2022-04-09 06:55:53', '2022-04-17 08:35:50'),
	(4, 8, 4, 5, 'wefwg weg', 'test-topic', 'we wegwegweg', 0, 37, 0, 1, '2022-04-09 09:25:17', '2022-04-17 11:53:10'),
	(5, 8, 5, 2, '3trfw', 'test-topic', 'grewgrg', 0, 0, 0, 0, '2022-04-09 14:33:10', '2022-04-11 12:51:40'),
	(6, 8, 3, 1, 'efwefwef', NULL, 'wefwewef', 0, 0, 0, 0, '2022-04-16 16:03:39', '2022-04-16 16:03:39'),
	(7, 8, 5, 1, 'wefwefwe', NULL, 'wefwefwwef', 0, 0, 0, 0, '2022-04-16 16:03:59', '2022-04-16 16:03:59'),
	(8, 8, 1, 1, 'Test Topic', NULL, 'Test Topic', 0, 0, 0, 0, '2022-04-16 16:06:26', '2022-04-16 16:06:26'),
	(9, 8, 5, 1, 'Test Topic', NULL, 'Test Topic', 0, 0, 0, 0, '2022-04-16 16:06:41', '2022-04-16 16:06:41'),
	(10, 8, 5, 1, 'ewfwefwef', NULL, 'wefwefwef', 0, 0, 0, 0, '2022-04-16 16:35:24', '2022-04-16 16:35:24'),
	(11, 8, 5, 1, 'efwefwef', NULL, 'wefwe wef wefwef', 0, 9, 0, 0, '2022-04-16 16:38:50', '2022-04-17 14:01:26'),
	(12, 8, 4, 5, 'Новая тема', NULL, 'Новая тема', 0, 39, 0, 0, '2022-04-16 19:13:55', '2022-04-17 11:06:33'),
	(15, 8, 4, 1, 'wefwef', NULL, 'wefwef', 0, 1, 0, 0, '2022-04-17 16:12:51', '2022-04-17 16:12:51');
/*!40000 ALTER TABLE `ideas` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.keys
CREATE TABLE IF NOT EXISTS `keys` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` smallint(6) NOT NULL DEFAULT 0 COMMENT '0 - item, 1 - votes, 2 - money',
  `key` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item` bigint(20) DEFAULT NULL,
  `countItem` smallint(6) DEFAULT 1,
  `votes` smallint(6) DEFAULT NULL,
  `money` smallint(6) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.keys: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `keys` DISABLE KEYS */;
INSERT IGNORE INTO `keys` (`id`, `type`, `key`, `title`, `item`, `countItem`, `votes`, `money`, `status`, `created_at`, `updated_at`) VALUES
	(1, 2, 'o3Nm-XfcU-lMkh-0Q0C', 'Взор вечного пехотинца', 188942, 1, 250, 500, 1, '2022-04-13 17:55:40', '2022-04-13 18:23:37');
/*!40000 ALTER TABLE `keys` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.menus
CREATE TABLE IF NOT EXISTS `menus` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `new_menu` int(11) DEFAULT NULL,
  `route` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.menus: ~17 rows (приблизительно)
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT IGNORE INTO `menus` (`id`, `name`, `url`, `parent_id`, `order`, `new_menu`, `route`, `parameters`, `created_at`, `updated_at`) VALUES
	(15, '{"en":"Game","ru":"Игра"}', NULL, NULL, 1, NULL, NULL, '', '2021-07-30 10:34:32', '2021-08-11 14:58:12'),
	(18, '{"en":"Forums","ru":"Форум"}', NULL, NULL, 3, NULL, 'idea.index', NULL, '2021-07-30 13:00:46', '2021-08-11 14:57:58'),
	(21, '{"en":"News","ru":"Новости"}', NULL, NULL, 2, NULL, 'web.post.index', NULL, '2021-08-11 14:57:52', '2021-08-11 14:58:12'),
	(47, '{"en":"Gameplay","ru":"Игровой процесс"}', NULL, 15, 1, NULL, NULL, NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(48, '{"en":"Guides & Information","ru":"Информация и руководства"}', NULL, 15, 2, NULL, NULL, NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(49, '{"en":"Competitive","ru":"Соревновательная игра"}', NULL, 15, 3, NULL, NULL, NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(50, '{"en":"Expansions","ru":"Загрузить"}', NULL, 15, 4, NULL, NULL, NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(51, '{"en":"Races","ru":"Расы"}', NULL, 47, 1, NULL, 'game.race', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(52, '{"en":"Realm Status","ru":"Состояние игровых миров"}', NULL, 48, 1, NULL, 'status', '{"server" : "eu"}', '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(53, '{"en":"PvP Leaderboards","ru":"Рейтинги PvP"}', NULL, 49, 3, NULL, 'pvp.leaderboards', '{"type":"3v3"}', '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(54, '{"en":"Legion","ru":"Legion"}', NULL, 50, 1, NULL, 'game.realm', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(55, '{"en":"Classes","ru":"Классы"}', NULL, 47, 2, NULL, 'game.classes', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(56, '{"en":"Talents","ru":"Калькулятор талантов"}', NULL, 47, 2, NULL, 'game.classes', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(57, '{"en":"Recruit A Friend","ru":"Пригласить друга"}', NULL, 48, 2, NULL, 'game.realm', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(58, '{"en":"New to WoW","ru":"Начинающие игроки в WoW"}', NULL, 48, 3, NULL, 'game.realm', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(59, '{"en":"Returning Players","ru":"Продолжающие игру"}', NULL, 48, 4, NULL, 'game.realm', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(60, '{"en":"Mythic Raid Hall of Fame","ru":"Зал славы эпохальных рейдеров"}', NULL, 49, 1, NULL, 'game.realm', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33'),
	(61, '{"en":"Mythic Keystone Dungeon Leaderboards","ru":"Рейтинги подземелий с эпохальным ключом"}', NULL, 49, 2, NULL, 'game.realm', NULL, '2022-03-20 20:09:32', '2022-03-20 20:09:33');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.migrations: ~21 rows (приблизительно)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT IGNORE INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
	(4, '2019_08_19_000000_create_failed_jobs_table', 1),
	(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(6, '2022_03_20_091542_create_sessions_table', 1),
	(7, '2022_03_20_132712_create_account_user', 2),
	(8, '2022_03_20_164218_create_menus_table', 3),
	(9, '2022_03_20_173145_create_posts_table', 4),
	(10, '2022_03_23_063326_update_users_table', 5),
	(11, '2022_03_23_111455_create_histories_table', 6),
	(12, '2022_03_23_144413_create_gifts_table', 7),
	(13, '2022_03_23_151452_create_outputs_table', 8),
	(14, '2022_03_24_093324_create_votes_table', 9),
	(15, '2022_03_28_132059_create_video_panes_table', 10),
	(16, '2022_03_28_132421_create_video_pane_contents_table', 10),
	(17, '2022_03_30_180251_create_characters_table', 11),
	(22, '2021_02_24_012947_create_statuses_table', 12),
	(23, '2021_02_25_012947_create_categories_table', 12),
	(24, '2021_02_26_012947_create_ideas_table', 12),
	(25, '2021_03_05_061517_create_votes_table', 13),
	(26, '2021_05_04_065809_create_comments_table', 13),
	(27, '2021_05_26_024309_create_notifications_table', 13),
	(29, '2022_04_13_144902_create_keys_table', 14);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.mmotop_votes
CREATE TABLE IF NOT EXISTS `mmotop_votes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `votes_id` bigint(20) DEFAULT NULL,
  `voted_at` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `balance` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vote` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `complete` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.mmotop_votes: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `mmotop_votes` DISABLE KEYS */;
/*!40000 ALTER TABLE `mmotop_votes` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.notifications
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) unsigned NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.notifications: ~21 rows (приблизительно)
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT IGNORE INTO `notifications` (`id`, `type`, `notifiable_type`, `notifiable_id`, `data`, `read_at`, `created_at`, `updated_at`) VALUES
	('08e0421c-46b7-4f36-b456-14d2723105c5', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":10,"comment_body":"\\u0446\\u0443\\u0430 \\u0446\\u0443\\u0430 \\u0446\\u0443\\u0430","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":3,"idea_slug":null,"idea_title":"ewfewfw wef"}', '2022-04-09 08:52:08', '2022-04-09 08:52:02', '2022-04-09 08:52:08'),
	('0f359df9-4799-4a6e-8549-3befec42f98d', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":3,"comment_body":"ew wefwef ewfwef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":2,"idea_slug":"laravel","idea_title":"Laravel"}', '2022-04-08 20:59:26', '2022-04-08 20:57:05', '2022-04-08 20:59:26'),
	('13a3fa73-f0c6-4d14-815f-e55adf925adf', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":25,"comment_body":"\\u041e\\u0442\\u0432\\u0435\\u0442\\u0438\\u043b \\u0442\\u0438\\u043f\\u0430","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":12,"idea_slug":null,"idea_title":"\\u041d\\u043e\\u0432\\u0430\\u044f \\u0442\\u0435\\u043c\\u0430"}', NULL, '2022-04-16 19:14:17', '2022-04-16 19:14:17'),
	('1720085b-8332-40c3-a2ba-10167a1efa7a', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":17,"comment_body":"wef wef wefwef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":4,"idea_slug":null,"idea_title":"wefwg weg"}', '2022-04-09 13:18:28', '2022-04-09 13:04:35', '2022-04-09 13:18:28'),
	('1a10e625-73c8-4f4a-83c0-9015410cdb90', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":2,"comment_body":"ewe wefwef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":2,"idea_slug":"laravel","idea_title":"Laravel"}', '2022-04-08 20:59:26', '2022-04-08 20:42:20', '2022-04-08 20:59:26'),
	('235dcfe3-5b12-42e6-8c10-91aab8c6f2a9', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":35,"comment_body":"wef wefwef","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":14,"idea_slug":null,"idea_title":"\\u041d\\u043e\\u0432\\u0430\\u044f \\u0442\\u0435\\u043c\\u0430 3"}', NULL, '2022-04-17 13:06:05', '2022-04-17 13:06:05'),
	('3431c511-c94f-4a3a-bb79-43d625572dee', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":32,"comment_body":"24wrgwr","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":13,"idea_slug":null,"idea_title":"\\u041d\\u043e\\u0432\\u0430\\u044f \\u0442\\u0435\\u043c\\u0430 2"}', NULL, '2022-04-17 12:46:15', '2022-04-17 12:46:15'),
	('418c44bc-05b1-4f68-a678-821a4a90d33e', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":12,"comment_body":"qwd qwd qwdqwd","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":3,"idea_slug":null,"idea_title":"ewfewfw wef"}', '2022-04-09 09:06:56', '2022-04-09 09:06:53', '2022-04-09 09:06:56'),
	('5b2f1b52-ff02-47c3-8fd6-d1bf85fa6584', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":23,"comment_body":"\\u041f\\u0440\\u043e\\u0432\\u0435\\u0440\\u043a\\u0430","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":4,"idea_slug":"test-topic","idea_title":"wefwg weg"}', NULL, '2022-04-16 15:24:10', '2022-04-16 15:24:10'),
	('65be95c1-53a1-47c8-9050-be1b0d4be1f3', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":13,"comment_body":"wef wef wefwef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":4,"idea_slug":null,"idea_title":"wefwg weg"}', '2022-04-09 09:25:39', '2022-04-09 09:25:29', '2022-04-09 09:25:39'),
	('6b21d674-6d28-4b1e-850f-40215e3b2786', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":40,"comment_body":"efwefew","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":11,"idea_slug":null,"idea_title":"efwefwef"}', NULL, '2022-04-17 14:01:26', '2022-04-17 14:01:26'),
	('7ef14437-2b1a-4ade-9af0-08cf9742b910', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":22,"comment_body":"qwf qwf qwqwfqw qwfq wfqw","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":4,"idea_slug":"test-topic","idea_title":"wefwg weg"}', NULL, '2022-04-16 15:09:01', '2022-04-16 15:09:01'),
	('85d0f550-413d-485d-ae0e-0bee0c340514', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":34,"comment_body":"wewefwef","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":14,"idea_slug":null,"idea_title":"\\u041d\\u043e\\u0432\\u0430\\u044f \\u0442\\u0435\\u043c\\u0430 3"}', NULL, '2022-04-17 13:05:17', '2022-04-17 13:05:17'),
	('8e7cbb4c-ac15-4514-aaaf-8ffb291449da', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":18,"comment_body":"r4yr 3rg 3g3g","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":5,"idea_slug":null,"idea_title":"3trfw"}', '2022-04-11 07:18:56', '2022-04-09 16:13:28', '2022-04-11 07:18:56'),
	('8ebaa1b7-2cf0-4478-9dd5-12494d272a7a', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":11,"comment_body":"ewfwefwef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":3,"idea_slug":null,"idea_title":"ewfewfw wef"}', '2022-04-09 09:05:04', '2022-04-09 08:57:01', '2022-04-09 09:05:04'),
	('9f1bed9c-e9dd-4542-9f61-e2357ddc16c2', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":24,"comment_body":"we wef wef","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":4,"idea_slug":"test-topic","idea_title":"wefwg weg"}', NULL, '2022-04-16 15:43:24', '2022-04-16 15:43:24'),
	('a8032a33-e219-4693-b021-557c38cd0fd9', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":7,"comment_body":"fewe wef wef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":3,"idea_slug":null,"idea_title":"ewfewfw wef"}', '2022-04-09 08:50:03', '2022-04-09 07:26:32', '2022-04-09 08:50:03'),
	('a8b316a5-0d43-4495-9577-c5a7d4149972', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":15,"comment_body":"\\u0446\\u0443\\u0430 \\u0446\\u0443\\u0430\\u0446\\u0443\\u0430","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":4,"idea_slug":null,"idea_title":"wefwg weg"}', '2022-04-09 12:09:07', '2022-04-09 11:42:22', '2022-04-09 12:09:07'),
	('afc36722-4805-468a-ba1f-2cf6c00c4cc9', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":38,"comment_body":"rgrg","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":13,"idea_slug":null,"idea_title":"\\u041d\\u043e\\u0432\\u0430\\u044f \\u0442\\u0435\\u043c\\u0430 2"}', NULL, '2022-04-17 13:08:37', '2022-04-17 13:08:37'),
	('b22879c4-9a73-4675-97ab-fa30bf5ae8e8', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":20,"comment_body":"erg erg","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":5,"idea_slug":null,"idea_title":"3trfw"}', '2022-04-11 16:47:20', '2022-04-11 15:30:59', '2022-04-11 16:47:20'),
	('bd8d1b5a-c0de-4092-9254-cb2d48f57ea6', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":16,"comment_body":"qwefwe wefwef","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":4,"idea_slug":null,"idea_title":"wefwg weg"}', '2022-04-09 13:01:16', '2022-04-09 12:18:25', '2022-04-09 13:01:16'),
	('e94fd01c-cfec-4b81-99f1-90ea34d3a9cd', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":21,"comment_body":"ewrfwewfe","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":4,"idea_slug":"test-topic","idea_title":"wefwg weg"}', NULL, '2022-04-16 14:51:46', '2022-04-16 14:51:46'),
	('ea812a7e-343c-4171-86db-b658912ff5fc', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":14,"comment_body":"\\u0446\\u0443\\u0430 \\u0446\\u0443\\u0430 \\u0446\\u0443\\u0430\\u0446\\u0443 \\u0430\\u0446\\u0443","user_avatar":"https:\\/\\/www.gravatar.com\\/avatar\\/7322d10fbd67b0d97c1ac39a7f030119?s=200&d=https:\\/\\/s3.amazonaws.com\\/laracasts\\/images\\/forum\\/avatars\\/default-avatar-6.png","user_name":"Thanos","idea_id":4,"idea_slug":null,"idea_title":"wefwg weg"}', '2022-04-09 12:09:07', '2022-04-09 10:52:19', '2022-04-09 12:09:07'),
	('fe423b70-473e-45ca-9052-e947b36d0ba1', 'App\\Notifications\\CommentAdded', 'App\\Models\\User', 8, '{"comment_id":36,"comment_body":"ewf wefw wef","user_avatar":"http:\\/\\/wowlegions.loc\\/storage\\/profile-photos\\/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif","user_name":"Thanos","idea_id":14,"idea_slug":null,"idea_title":"\\u041d\\u043e\\u0432\\u0430\\u044f \\u0442\\u0435\\u043c\\u0430 3"}', NULL, '2022-04-17 13:06:24', '2022-04-17 13:06:24');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.outputs
CREATE TABLE IF NOT EXISTS `outputs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `services` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `servicesKey` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wallet` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summa` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.outputs: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `outputs` DISABLE KEYS */;
/*!40000 ALTER TABLE `outputs` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.password_resets: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.personal_access_tokens: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` bigint(20) NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keywords` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `featured` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `name` (`name`,`excerpt`,`body`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.posts: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT IGNORE INTO `posts` (`id`, `author_id`, `name`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `featured`, `created_at`, `updated_at`) VALUES
	(60, 8, '{"en":"Test News","ru":"Проверка новости"}', '{"en":"qefweg"}', '{"en":"<p>Test News</p>","ru":"<p>Проверка новости</p>"}', 'post/jEdLvFFZhGYxaBg0cjWN7goImIYJ7psYncb8zb2X.jpg', 'test-news', '{"en":"Test News"}', '{"en":"Test News"}', 'PUBLISHED', 0, '2022-03-12 12:47:46', '2022-03-26 16:03:12'),
	(61, 8, '{"en":"ewfwef","ru":"\\u041f\\u0432\\u043f\\u043c\\u0446\\u0443"}', '{"en":"wefwef","ru":"\\u0446\\u0443\\u043f\\u0446\\u0443\\u043f"}', '{"en":"wefwef","ru":"\\u0443\\u0446\\u043f\\u0430\\u0446\\u0443\\u043f"}', 'post/kZySsKJ2WOPDvDjtKcl7BSj06CiJuhQGoSW1ZGpn.jpg', 'pvpmcu', '{"en":"ewfwef","ru":"\\u041f\\u0432\\u043f\\u043c\\u0446\\u0443"}', '{"en":"ewfwef","ru":"\\u041f\\u0432\\u043f\\u043c\\u0446\\u0443"}', 'PUBLISHED', 0, '2022-03-26 16:01:07', '2022-04-09 06:23:58');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.sessions: ~7 rows (приблизительно)
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT IGNORE INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('2Dx2DzM8asXzGeG8ugvX48qhAcwR4c2i4BtGHynA', 8, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiREdaUkZmWmhCemdzQThqT3lZUGVJZWp6UGdENEJUTFR1MmZ0ZG5oUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydS9vdmVydmlldyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjg7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkQ2t2Y0o1WE9KUzJwVG16enNuSXZwdVZROTkxWnMyeTAvRnZST0FsTUQwY3cxRDUxLmxndU8iO30=', 1650556722),
	('62pVWUzCnJLkmkwbFoW3F6rWPdRTVmWxoyct3Xyu', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZTZndGlVWUpWd0UxUGh4eGtCVVl4eXhKN2h1dUl5eDFxbVlyMmFoRiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1650548711),
	('bYabk0kStPiScvTWfg3qK2eUIenQmqDcG8SDb5oP', 8, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiR0RrbktmRENXMDZQamp0UUhHZG1OUGdDbDgxeUg4dGc2c0E1U0ZpMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjg7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkQ2t2Y0o1WE9KUzJwVG16enNuSXZwdVZROTkxWnMyeTAvRnZST0FsTUQwY3cxRDUxLmxndU8iO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkQ2t2Y0o1WE9KUzJwVG16enNuSXZwdVZROTkxWnMyeTAvRnZST0FsTUQwY3cxRDUxLmxndU8iO30=', 1650390025),
	('Ct50YskX9qWXr91jnyCrBxDxnFuiyEcPBlWGeSJ2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSlJVM1R5bmhHOW1DYUZ6WG1pb1lSbkh4a1NVZTh3QU1PWkRMeE45TiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1650524755),
	('V1VBen8u5p3etPmJZ05PO8dsnUL5oukWZZmIx1eZ', 8, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 Edg/100.0.1185.39', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiWlN3UzBQenM5NUVzSjhHNGVQMVo2TFViNUY5TGVSSVE0MVVoNFo0WCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydS9mb3J1bXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM6InVybCI7YTowOnt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6ODtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJENrdmNKNVhPSlMycFRtenpzbkl2cHVWUTk5MVpzMnkwL0Z2Uk9BbE1EMGN3MUQ1MS5sZ3VPIjt9', 1650216142),
	('XM6OdFXfVM7YvsD5Kvudr69Y7iXagVQ7pLIuK78a', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 Edg/100.0.1185.39', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVjZiZHF5b09ScVdwb3FnQ2ZyUXh6MkRGenJJNWEwNVhDT2VnVUFsaSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydS9mb3J1bXMiO319', 1650216385),
	('YEYS9ymp7N3OVMnoH9Yvqs3qmFClI1J6qXlZkSRX', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWklzelVOc1h0MGtlQkZnV0JDSWUwbVFUNDVlaW55Tm1zVWlLekxlaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly93b3dsZWdpb25zLmxvYy9ydS9mb3J1bXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1650353089);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.statuses
CREATE TABLE IF NOT EXISTS `statuses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.statuses: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT IGNORE INTO `statuses` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Open', '2022-04-08 19:15:38', '2022-04-08 19:15:39'),
	(2, 'Considering', '2022-04-01 16:09:13', '2022-04-01 16:09:13'),
	(3, 'In Progress', '2022-04-01 16:09:13', '2022-04-01 16:09:13'),
	(4, 'Implemented', '2022-04-01 16:09:13', '2022-04-01 16:09:13'),
	(5, 'Closed', '2022-04-01 16:09:13', '2022-04-01 16:09:13');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL DEFAULT 0,
  `account_id` bigint(20) DEFAULT 0,
  `balances` bigint(20) DEFAULT 0,
  `votes` bigint(20) unsigned DEFAULT 0,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `month` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) unsigned DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.users: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT IGNORE INTO `users` (`id`, `type`, `account_id`, `balances`, `votes`, `name`, `first_name`, `last_name`, `country`, `day`, `month`, `year`, `phone_number`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
	(8, 4, 7, 15000, 1000, 'Thanos', 'Игорь', 'Козлов', 'RUS', '13', '04', '1994', '+79607295618', 'fanaticus3@gmail.com', '2022-03-24 11:03:00', '$2y$10$CkvcJ5XOJS2pTmzzsnIvpuVQ991Zs2y0/FvROAlMD0cw1D51.lguO', NULL, NULL, 'dxzPhSQkieMDVPoYpgQoVTB5DoWQQg1rFQVSRv1Q4V5NImmb3X7RJUEzuhcw', NULL, 'profile-photos/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif', '2022-03-20 13:36:24', '2022-04-16 05:34:52'),
	(9, 4, 7, 15000, 1000, 'Titan', 'Игорь', 'Козлов', 'RUS', '13', '04', '1994', '+79607295618', 'fannaticus3@gmail.com', '2022-03-24 11:03:00', '$2y$10$CkvcJ5XOJS2pTmzzsnIvpuVQ991Zs2y0/FvROAlMD0cw1D51.lguO', NULL, NULL, 'dxzPhSQkieMDVPoYpgQoVTB5DoWQQg1rFQVSRv1Q4V5NImmb3X7RJUEzuhcw', NULL, 'profile-photos/j74JCUfa7yy3v15YigB8qHLbkRRICRLPBneAk1UA.gif', '2022-03-20 13:36:24', '2022-04-16 05:34:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.video_panes
CREATE TABLE IF NOT EXISTS `video_panes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `video` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_images` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.video_panes: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `video_panes` DISABLE KEYS */;
INSERT IGNORE INTO `video_panes` (`id`, `video`, `images`, `phone_images`, `created_at`, `updated_at`) VALUES
	(1, 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/78/78LC0HRQHTBL1645217941432.mp4', 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/S6TGYRB8STLH1623254306716.jpg', 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/0JFDRGOV8UTV1623254306639.jpg', '2022-03-28 16:38:58', '2022-03-28 16:38:59');
/*!40000 ALTER TABLE `video_panes` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.video_pane_contents
CREATE TABLE IF NOT EXISTS `video_pane_contents` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_one` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_one_title` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_two` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_two_title` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_tree` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_tree_title` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.video_pane_contents: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `video_pane_contents` DISABLE KEYS */;
INSERT IGNORE INTO `video_pane_contents` (`id`, `title`, `body`, `url_one`, `url_one_title`, `url_two`, `url_two_title`, `url_tree`, `url_tree_title`, `created_at`, `updated_at`) VALUES
	(1, '{"en":"Shadowlands Season 3 is Now Live!","ru":"3-й сезон Shadowlands начался!"}', '{"en":"The fight against the Jailer and his forces continues in this last chapter of the ongoing saga. Experience the all-new Sepulcher of the First Ones raid, a new PvP and Mythic Keystone Dungeon season, and more!","ru":"Борьба против Тюремщика и его прислужников продолжается в заключительной главе саги. Участвуйте в новом рейде «Гробница Предвечных», сражайтесь в новом сезоне PvP и подземелий с эпохальным ключом — и так далее!"}', '#', '{"en":"Explore Shadowlands","ru":"Исследовать Темные Земли"}', '#', '{"en":"Raid Schedule","ru":"График открытия рейда"}', '#', '{"en":"Subscribe Now","ru":"Оформить подписку"}', '2022-03-28 16:46:43', '2022-03-28 16:46:44');
/*!40000 ALTER TABLE `video_pane_contents` ENABLE KEYS */;

-- Дамп структуры для таблица laravel.votes
CREATE TABLE IF NOT EXISTS `votes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `idea_id` bigint(20) unsigned DEFAULT NULL,
  `comment_id` bigint(20) unsigned DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `votes_idea_id_user_id_unique` (`idea_id`,`user_id`),
  UNIQUE KEY `votes_comment_id_user_id_unique` (`comment_id`,`user_id`) USING BTREE,
  KEY `votes_user_id_foreign` (`user_id`),
  CONSTRAINT `votes_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `votes_idea_id_foreign` FOREIGN KEY (`idea_id`) REFERENCES `ideas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `votes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel.votes: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT IGNORE INTO `votes` (`id`, `idea_id`, `comment_id`, `user_id`, `created_at`, `updated_at`) VALUES
	(59, 12, NULL, 8, '2022-04-17 10:47:48', '2022-04-17 10:47:48'),
	(60, NULL, 25, 8, '2022-04-17 10:58:04', '2022-04-17 10:58:04');
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
