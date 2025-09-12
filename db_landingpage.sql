-- -------------------------------------------------------------
-- -------------------------------------------------------------
-- TablePlus 1.2.8
--
-- https://tableplus.com/
--
-- Database: mysql
-- Generation Time: 2025-09-13 00:37:01.033157
-- -------------------------------------------------------------

DROP TABLE `db_company`.`about_points`;


CREATE TABLE `about_points` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`abouts`;


CREATE TABLE `abouts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`actions`;


CREATE TABLE `actions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `actions_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`blog_titles`;


CREATE TABLE `blog_titles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`blogs`;


CREATE TABLE `blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_blogs` bigint unsigned DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `blogs_category_blogs_foreign` (`category_blogs`),
  CONSTRAINT `blogs_category_blogs_foreign` FOREIGN KEY (`category_blogs`) REFERENCES `category_blogs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`category_blogs`;


CREATE TABLE `category_blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`contacts`;


CREATE TABLE `contacts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`failed_jobs`;


CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`introductions`;


CREATE TABLE `introductions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`main_setttings`;


CREATE TABLE `main_setttings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `logo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `favicon` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`media_sosials`;


CREATE TABLE `media_sosials` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`migrations`;


CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`model_has_permissions`;


CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`model_has_roles`;


CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`module_actions`;


CREATE TABLE `module_actions` (
  `module_id` bigint unsigned NOT NULL,
  `action_id` bigint unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`modules`;


CREATE TABLE `modules` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `modules_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`pages`;


CREATE TABLE `pages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`password_reset_tokens`;


CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`permissions`;


CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`personal_access_tokens`;


CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`product_titles`;


CREATE TABLE `product_titles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`products`;


CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`role_has_permissions`;


CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`roles`;


CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`service_titles`;


CREATE TABLE `service_titles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`services`;


CREATE TABLE `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`sosial_medias`;


CREATE TABLE `sosial_medias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE `db_company`.`users`;


CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `db_company`.`about_points` (`id`, `image`, `title`, `body`, `created_at`, `updated_at`) VALUES 
(1, '/storage/2025-09/dBjmslVbQPCM3RWwoMiy9xG1WQ4yFpOyZPKqZ5DG.png', 'Integrity', '<p>We are committed to acting honestly, fairly and ethically in every aspect of our business.</p>', '2024-03-12 06:15:14', '2025-09-11 17:00:14'),
(2, '/storage/2025-09/dJZULfL2DbyKVlH72hUP2OpxAICH7irx5Xe8tOIu.png', 'Quality', '<p>Deliver high-quality solutions that meet or exceed customer expectations.</p>', '2024-03-12 06:15:46', '2025-09-11 17:00:51'),
(3, 'https://storage.tukode.shop/marsindo-web/public/2024-03/aRXFds08JmQjNX16MHEEOshDxfcabrwyA1Vvl0Ol.png', 'Collaboration', '<p>Strive to build close and sustainable partnership relationships with customers and business partners.</p>', '2024-03-12 06:16:12', '2024-03-12 06:16:12'),
(4, 'https://storage.tukode.shop/marsindo-web/public/2024-03/xon97SfDvVFzbEnHm3ucTCzRywyPmWsqQ4T50RcX.png', 'Innovation', '<p>Constantly looking for innovative solutions that can increase efficiency and effectiveness.</p>', '2024-03-12 06:16:56', '2024-03-12 06:16:56');

INSERT INTO `db_company`.`abouts` (`id`, `image`, `title`, `body`, `created_at`, `updated_at`) VALUES (1, '/storage/2025-09/I8N9P2ZKuoV2w0x2qB0HpRiRh3XJlijlzmkfMbbX.jpg', 'About PT. ABC', '<p>PT. ABC Indonesia is a company founded with a commitment to providing leading solutions in the field of Information Technology. Since our founding, we have focused on developing innovative solutions that meet customer needs by providing significant added value.</p>', '2024-03-12 06:14:18', '2025-09-11 16:36:06');

INSERT INTO `db_company`.`actions` (`id`, `name`) VALUES 
(2, 'create'),
(4, 'delete'),
(1, 'read'),
(3, 'update');

INSERT INTO `db_company`.`blog_titles` (`id`, `title`, `body`, `created_at`, `updated_at`) VALUES (1, 'From the blog', '<p>Learn how to grow your business with our expert advice.<br>&nbsp;</p>', '2024-03-12 06:30:45', '2024-03-12 06:30:45');

INSERT INTO `db_company`.`blogs` (`id`, `category_blogs`, `title`, `slug`, `image`, `body`, `is_published`, `created_at`, `updated_at`) VALUES 
(1, 1, 'Numero Uno', '2025-09-numero-uno', '/storage/2025-09/O6gbqFQ44p2jsLwqnRuHhWh09pijL7xN4KCKcvus.jpg', '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>', 1, '2024-03-12 06:32:46', '2025-09-11 16:38:40'),
(2, 2, 'Aloha', '2025-09-aloha', '/storage/2025-09/3XlbNhUpq1Jiy8PLm75alIPPK8keWB1WhkjvfHCq.jpg', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', 1, '2024-03-12 06:33:51', '2025-09-11 16:39:39'),
(3, 3, 'Namaste', '2025-09-namaste', '/storage/2025-09/kknR3Z7OCYDSQfGHJquX6aKQLRrABErgDGc9IGMc.jpg', '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>', 1, '2024-03-12 06:34:34', '2025-09-11 16:39:48'),
(4, 4, 'Welcome', '2025-09-welcome', '/storage/2025-09/26AhrlB6BuTRiZSApLDh1grP7xu9TsHPTq2nm0Pb.jpg', '<p>Welcome "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>', 1, '2024-03-12 06:35:30', '2025-09-11 16:39:58'),
(5, 3, 'Selamat Datang Pahlawan', '2025-09-selamat-datang-pahlawan', '/storage/2025-09/eRWXwTTVca58fBgmq4pqgUVpwNurq11Fqr13V4pE.jpg', '<p>1"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>', 1, '2024-03-12 06:35:50', '2025-09-11 16:57:09');

INSERT INTO `db_company`.`category_blogs` (`id`, `name`, `created_at`, `updated_at`) VALUES 
(1, 'Software Development', '2024-03-12 06:25:02', '2024-03-12 06:25:02'),
(2, 'IT Network', '2024-03-12 06:25:11', '2024-03-12 06:25:11'),
(3, 'Cloud Computing', '2024-03-12 06:25:21', '2024-03-12 06:25:21'),
(4, 'Security Network', '2024-03-12 06:25:34', '2024-03-12 06:25:34');

INSERT INTO `db_company`.`contacts` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `message`, `created_at`, `updated_at`) VALUES 
(1, 'test', 'test', 'test@gmail.com', '12313', 'asdfasdf', '2025-09-12 12:44:16', '2025-09-12 12:44:16'),
(2, 'David', 'Beckham', 'david@gmail.com', '1231231', 'ini saya ngetest kirim email', '2025-09-12 13:25:55', '2025-09-12 13:25:55'),
(3, 'david', 'Beckham', 'david@gmail.com', 'asdfa', 'asdfasdasdf', '2025-09-12 13:31:25', '2025-09-12 13:31:25'),
(4, 'david', 'Beckham', 'david@gmail.com', 'asdfa', 'asdfasdasdf', '2025-09-12 13:32:18', '2025-09-12 13:32:18'),
(5, 'david', 'Beckham', 'david@gmail.com', 'asdfa', 'asdfasdasdf', '2025-09-12 13:34:11', '2025-09-12 13:34:11'),
(6, 'Tina', 'Bunga', 'tina@gmail.com', '12345678', 'asdfasdfa', '2025-09-12 13:44:14', '2025-09-12 13:44:14'),
(7, 'andi', 'bagus', 'andi@gmail.com', '123123123', 'asdfasdfasdf', '2025-09-12 13:55:31', '2025-09-12 13:55:31'),
(8, 'bagus', 'jaka', 'jaka@gmail.com', '242342', 'asdfasdfasdf', '2025-09-12 13:56:22', '2025-09-12 13:56:22');

INSERT INTO `db_company`.`introductions` (`id`, `image`, `title`, `body`, `created_at`, `updated_at`) VALUES (1, '/storage/2025-09/9ep6ZTNqnzWspxw2kblD71STs8X5wcQP95urtZEX.png', 'Your new digital experience with PT ABC', '<h2>We are team of talented designers making websites with any program language</h2>', '2024-03-12 06:13:35', '2025-09-11 16:38:51');

INSERT INTO `db_company`.`main_setttings` (`id`, `logo`, `title`, `meta_description`, `meta_keywords`, `favicon`, `created_at`, `updated_at`) VALUES (1, '/storage/2025-09/bw17N5YjVduD2hNTw9JhW8T1XNIq4svevVHd58JH.png', 'PT. ABC', 'PT. ABC', 'PT. ABC', '/storage/2025-09/J5ElZwdgtFIFvejRoMAXy1OKf86op5JBRRAvWSoX.png', '2024-03-12 06:12:46', '2025-09-12 14:19:03');

INSERT INTO `db_company`.`media_sosials` (`id`, `name`, `link`, `image`, `created_at`, `updated_at`) VALUES 
(1, 'Facebook', 'https://www.facebook.com', '/storage/2025-09/sRi0l0KyJw1UoxfUC1IDX3y5qIOJL4h5Lj2AE2Nk.png', '2024-03-12 06:50:15', '2025-09-11 16:51:25'),
(2, 'Instagram', 'https://www.instagram.com', '/storage/2025-09/7QFMGFLGMqWSsuMZmYGLSzObxGZ7fQRqdYlBxlTw.png', '2024-03-12 06:50:53', '2025-09-11 16:51:34'),
(3, 'Twitter', 'https://twitter.com', '/storage/2025-09/G9Xtwl0IZREJyyKBM5t3jxBgJ61EHSZyf11qDVFg.png', '2024-03-12 06:51:41', '2025-09-11 16:52:55'),
(4, 'Youtube', 'https://www.youtube.com', '/storage/2025-09/9ucgR6RlcvFro3rmnvsyZEYtAUdNnTVlvFIctAck.png', '2024-03-12 06:53:11', '2025-09-11 16:51:51');

INSERT INTO `db_company`.`migrations` (`id`, `migration`, `batch`) VALUES 
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_02_23_040421_create_permission_tables', 1),
(6, '2024_02_23_091016_create_main_setttings_table', 1),
(7, '2024_02_26_063725_create_introductions_table', 1),
(8, '2024_02_26_074812_create_abouts_table', 1),
(9, '2024_02_26_092650_create_about_points_table', 1),
(10, '2024_02_27_030630_create_category_blogs_table', 1),
(11, '2024_02_27_040804_create_blogs_table', 1),
(12, '2024_02_28_015624_create_services_table', 1),
(13, '2024_02_28_030724_create_products_table', 1),
(14, '2024_02_28_063002_create_sosial_medias_table', 1),
(15, '2024_02_29_062525_create_actions_table', 1),
(16, '2024_02_29_070850_create_modules_table', 1),
(17, '2024_02_29_070905_create_module_actions_table', 1),
(18, '2024_03_01_040149_create_blog_titles_table', 1),
(19, '2024_03_01_042304_create_service_titles_table', 1),
(20, '2024_03_01_042655_create_product_titles_table', 1),
(21, '2024_03_01_063649_create_media_sosials_table', 1),
(22, '2024_03_05_081316_create_pages_table', 1),
(24, '2025_09_12_124012_create_contacts_table', 2);

INSERT INTO `db_company`.`model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES (1, 'App\\Models\\User', 1);

INSERT INTO `db_company`.`module_actions` (`module_id`, `action_id`) VALUES 
(1, 1),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(11, 1),
(11, 2),
(11, 3),
(11, 4),
(12, 1),
(12, 2),
(12, 3),
(12, 4),
(13, 1),
(13, 2),
(13, 3),
(13, 4),
(14, 1),
(14, 2),
(14, 3),
(14, 4),
(15, 1),
(15, 2),
(15, 3),
(15, 4),
(16, 1),
(16, 2),
(16, 3),
(16, 4),
(17, 1),
(17, 2),
(17, 3),
(17, 4),
(18, 1),
(18, 2),
(18, 3),
(18, 4),
(19, 1);

INSERT INTO `db_company`.`modules` (`id`, `name`, `slug`) VALUES 
(1, 'Dashboard', 'dashboard'),
(2, 'Setting', 'setting'),
(3, 'Introduction', 'introduction'),
(4, 'About', 'about'),
(5, 'About Point', 'about-point'),
(6, 'Category Blog', 'category-blog'),
(7, 'Blog Title', 'blog-title'),
(8, 'Blog', 'blog'),
(9, 'Service Title', 'service-title'),
(10, 'Service', 'service'),
(11, 'Product Title', 'product-title'),
(12, 'Product', 'product'),
(13, 'Sosial Media', 'sosial-media'),
(14, 'Action', 'action'),
(15, 'Role', 'role'),
(16, 'User', 'user'),
(17, 'Module', 'module'),
(18, 'Page', 'page'),
(19, 'Contact', 'contact');

INSERT INTO `db_company`.`pages` (`id`, `title`, `description`, `slug`, `body`, `is_published`, `created_at`, `updated_at`) VALUES 
(7, 'Client', 'Client', 'client', '<p>Clientaasdfasdfasdfasd</p>', 1, '2024-03-13 04:29:43', '2024-03-13 04:29:43'),
(9, 'Humas Polda Jateng', 'Humas Polda Jateng', 'humas-polda-jateng', '<p>Humas Polda Jateng</p>', 1, '2024-03-13 04:40:50', '2024-03-13 04:41:08');

INSERT INTO `db_company`.`permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES 
(1, 'read-dashboard', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(2, 'read-setting', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(3, 'create-setting', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(4, 'update-setting', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(5, 'delete-setting', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(6, 'read-introduction', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(7, 'create-introduction', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(8, 'update-introduction', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(9, 'delete-introduction', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(10, 'read-about', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(11, 'create-about', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(12, 'update-about', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26'),
(13, 'delete-about', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(14, 'read-about-point', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(15, 'create-about-point', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(16, 'update-about-point', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(17, 'delete-about-point', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(18, 'read-category-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(19, 'create-category-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(20, 'update-category-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(21, 'delete-category-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(22, 'read-blog-title', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(23, 'create-blog-title', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(24, 'update-blog-title', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(25, 'delete-blog-title', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(26, 'read-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(27, 'create-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(28, 'update-blog', 'web', '2024-03-12 06:09:27', '2024-03-12 06:09:27'),
(29, 'delete-blog', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(30, 'read-service-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(31, 'create-service-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(32, 'update-service-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(33, 'delete-service-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(34, 'read-service', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(35, 'create-service', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(36, 'update-service', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(37, 'delete-service', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(38, 'read-product-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(39, 'create-product-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(40, 'update-product-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(41, 'delete-product-title', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(42, 'read-product', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(43, 'create-product', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(44, 'update-product', 'web', '2024-03-12 06:09:28', '2024-03-12 06:09:28'),
(45, 'delete-product', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(46, 'read-sosial-media', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(47, 'create-sosial-media', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(48, 'update-sosial-media', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(49, 'delete-sosial-media', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(50, 'read-action', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(51, 'create-action', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(52, 'update-action', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(53, 'delete-action', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(54, 'read-role', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(55, 'create-role', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(56, 'update-role', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(57, 'delete-role', 'web', '2024-03-12 06:09:29', '2024-03-12 06:09:29'),
(58, 'read-user', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(59, 'create-user', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(60, 'update-user', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(61, 'delete-user', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(62, 'read-module', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(63, 'create-module', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(64, 'update-module', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(65, 'delete-module', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(66, 'read-page', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(67, 'create-page', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(68, 'update-page', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(69, 'delete-page', 'web', '2024-03-12 06:09:30', '2024-03-12 06:09:30'),
(70, 'read-contact', 'web', '2025-09-12 12:59:55', '2025-09-12 12:59:55');

INSERT INTO `db_company`.`product_titles` (`id`, `title`, `body`, `created_at`, `updated_at`) VALUES (1, 'Product', '<p>We are crafting designs with outstanding design solution</p><p>&nbsp;</p><p><br>&nbsp;</p>', '2024-03-12 06:46:52', '2024-03-12 06:46:52');

INSERT INTO `db_company`.`products` (`id`, `image`, `title`, `slug`, `body`, `created_at`, `updated_at`) VALUES 
(1, '/storage/2025-09/o3ZB2TpJ3gAUy0YbjLxQh6vKfSkDgzKV97sd7WKN.jpg', 'Dashboard Aceh', 'dashboard-aceh', '<p>Dashboard Aceh &nbsp;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '2024-03-12 06:47:37', '2025-09-11 16:54:59'),
(2, '/storage/2025-09/PYsxxr15Kg9pPpETbc502Roxj6uXtzLqdUTd1RvY.jpg', 'Dashboard Medan', 'dashboard-medan', '<p>Dashboard Medan &nbsp;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '2024-03-12 06:48:04', '2025-09-11 16:55:24'),
(3, '/storage/2025-09/IeorkHnsv0i65crVPzBAmQJNoPpuEwdeuwOT0DTw.jpg', 'Dashboard Pekanbaru', 'dashboard-pekanbaru', '<p>Dashboard Pekanbaru &nbsp;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '2024-03-12 06:48:29', '2025-09-11 16:55:49'),
(4, '/storage/2025-09/L6DdcNvFtWZ5qqJITZCo7DrkknrrO7U4npx6557R.jpg', 'Dashboard Bandarlampung', 'dashboard-bandarlampung', '<p>Dashboard Pekanbaru &nbsp;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '2024-03-12 06:48:56', '2025-09-11 16:55:59');

INSERT INTO `db_company`.`role_has_permissions` (`permission_id`, `role_id`) VALUES 
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 1),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(58, 1),
(59, 1),
(60, 1),
(61, 1),
(62, 1),
(63, 1),
(64, 1),
(65, 1),
(66, 1),
(67, 1),
(68, 1),
(69, 1),
(70, 1);

INSERT INTO `db_company`.`roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES (1, 'developer', 'web', '2024-03-12 06:09:26', '2024-03-12 06:09:26');

INSERT INTO `db_company`.`service_titles` (`id`, `title`, `body`, `created_at`, `updated_at`) VALUES (1, 'SERVICES', '<p>Our Information Technology Services are designed to provide solutions tailored to your specific needs. From innovative software development, reliable system maintenance, to high information security, we are committed to being a leader in providing IT solutions that inspire and empower.</p>', '2024-03-12 06:37:48', '2024-03-12 06:37:48');

INSERT INTO `db_company`.`services` (`id`, `image`, `title`, `slug`, `body`, `created_at`, `updated_at`) VALUES 
(1, '/storage/2025-09/H0H8eBLlOY4rxwrhXQm0GOFipjqcXilhrvNYCflz.png', 'Software Development', 'software-development', '<p>Our development team consists of experts dedicated to creating innovative and reliable software solutions.</p>', '2024-03-12 06:38:27', '2025-09-11 16:40:34'),
(2, '/storage/2025-09/gTRZ2897URNWWHGPbislMyBDusPz21mKeVkSSqbB.png', 'Network and Infrastructure', 'network-and-infrastructure', '<p>Delivering scalable and secure network and infrastructure solutions to support business growth.</p>', '2024-03-12 06:38:59', '2025-09-11 16:41:10'),
(3, '/storage/2025-09/sFT2DASXtklFjR42xXneBqfnCfALPmLYwsVjtu96.png', 'Information Security', 'information-security', '<p>Provides high-level security measures to protect customers'' valuable data and information.</p><p>&nbsp;</p>', '2024-03-12 06:39:33', '2025-09-11 16:41:43'),
(4, '/storage/2025-09/4obowTqJ6aOtqpsoGddtkk2H86rUx6PZXVkGqiTR.png', 'IT Consulting', 'it-consulting', '<p>Provide IT consulting services focused on clients'' business needs and goals.</p><p>&nbsp;</p>', '2024-03-12 06:40:51', '2025-09-11 16:41:51');

INSERT INTO `db_company`.`users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES (1, 'Developer', 'developer@developer.com', '2023-07-03 02:06:55', '$2y$10$CJYQgqYzt3R.FLhpOBHqx..06bu04LqSE1h1YbOYpfwSJEKCXI4JS', NULL, '2024-03-12 06:09:26', '2024-03-12 06:09:26');

