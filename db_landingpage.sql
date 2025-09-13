-- MySQL dump 10.13  Distrib 8.0.43, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: db_landingpage
-- ------------------------------------------------------
-- Server version	8.0.43-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about_points`
--

DROP TABLE IF EXISTS `about_points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_points` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_points`
--

LOCK TABLES `about_points` WRITE;
/*!40000 ALTER TABLE `about_points` DISABLE KEYS */;
INSERT INTO `about_points` VALUES (1,'/storage/2025-09/UApiqxka7BaVyBVHJHUHO5K1hwq3h8KqBWRlgTjt.png','Integrity','<p>We are committed to acting honestly, fairly and ethically in every aspect of our business.</p>','2025-09-12 10:13:53','2025-09-12 10:13:53'),(2,'/storage/2025-09/O0LNRvDksHLx0Q9jHsW6cwehJb9VLZgDlPPdZKzo.png','Quality','<p>Deliver high-quality solutions that meet or exceed customer expectations.</p>','2025-09-12 10:15:19','2025-09-12 10:15:19'),(3,'/storage/2025-09/T7dHwioX0rKMoc6kVm1ODgbd5AP91QBEaq1npDoN.png','Collaboration','<p>Strive to build close and sustainable partnership relationships with customers and business partners.</p>','2025-09-12 10:16:02','2025-09-12 10:16:44'),(4,'/storage/2025-09/pvwcc4E8I5y4auoD1Ag1pczdpnmn3Wg0q0OYV0MM.png','Innovation','<p>Constantly looking for innovative solutions that can increase efficiency and effectiveness.</p>','2025-09-12 10:16:23','2025-09-12 10:16:52');
/*!40000 ALTER TABLE `about_points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `abouts`
--

DROP TABLE IF EXISTS `abouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `abouts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `abouts`
--

LOCK TABLES `abouts` WRITE;
/*!40000 ALTER TABLE `abouts` DISABLE KEYS */;
INSERT INTO `abouts` VALUES (1,'/storage/2025-09/oJ8PcJgaZs4iorKMI77AdolLqWH4aA4aH0Fd1JUm.png','About Horizon Tech','<p><strong>Horizon Tech</strong> is a digital technology company specializing in software development, web solutions, and IT services.We help businesses adapt to the digital era through innovative, efficient, and high-quality solutions.Our professional team is dedicated to delivering modern digital experiences that drive growth and engagement.</p>','2025-09-12 10:10:34','2025-09-12 19:04:41');
/*!40000 ALTER TABLE `abouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `actions_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES (2,'create'),(4,'delete'),(1,'read'),(3,'update');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_titles`
--

DROP TABLE IF EXISTS `blog_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_titles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_titles`
--

LOCK TABLES `blog_titles` WRITE;
/*!40000 ALTER TABLE `blog_titles` DISABLE KEYS */;
INSERT INTO `blog_titles` VALUES (1,'FROM THE BLOG','<p>Learn how to grow your business with our expert advice.</p>','2025-09-12 10:18:48','2025-09-12 19:31:09');
/*!40000 ALTER TABLE `blog_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,1,'Digital Transformation for SMEs','2025-09-digital-transformation-for-smes','/storage/2025-09/FYg8Br3F8QKliPHXFxD94hkvQoIBxLqTreUITLbW.png','<p>Digital transformation is no longer optional for small and medium enterprises (SMEs).This article explores practical strategies for leveraging technology to improve operations, reach new customers, and increase revenue.Learn how cloud solutions, online marketing, and automated systems can elevate your business efficiency and competitiveness.</p>',1,'2025-09-12 10:20:14','2025-09-12 19:05:10'),(2,2,'Web Development Trends 2025','2025-09-web-development-trends-2025','/storage/2025-09/Llt0ysIcI7Bx5fPssv3qjNcltGMLJfObKIm4vhXI.png','<p>The web development landscape is constantly evolving. From AI-driven interfaces to modern frameworks and serverless architectures, this post highlights the trends that will dominate 2025.<br>Stay ahead of the competition by understanding emerging tools, design principles, and coding practices.</p>',1,'2025-09-12 10:20:53','2025-09-12 19:05:19'),(3,3,'Maximizing Productivity with Tools','2025-09-maximizing-productivity-with-tools','/storage/2025-09/A9MrYhFRW48dNQqi3ryFmkK1j8rSX8zaftinTaky.png','<p>Effective teamwork relies on the right digital tools. In this post, we review collaboration platforms that streamline communication, task management, and file sharing.<br>Discover how businesses can enhance productivity, reduce errors, and improve remote team coordination using modern software solutions.</p>',1,'2025-09-12 10:21:44','2025-09-12 19:05:32'),(4,4,'Building a Professional Website','2025-09-building-a-professional-website','/storage/2025-09/fuzu2N3jOJujpTZmC2wVOhqlhBYgfyo6D6xfeJeG.png','<p>Your website is often the first impression customers have of your business.This article explains why a professionally designed website is crucial for building brand credibility and recognition.<br>We also discuss best practices for design, user experience, content strategy, and search engine optimization (SEO).</p>',1,'2025-09-12 10:22:14','2025-09-12 19:05:42'),(5,1,'AI in Modern Business','2025-09-ai-in-modern-business','/storage/2025-09/oQOtjTaTBV6EzIFQ9SnnOJsagLjokVKQvuyHa0Sr.png','<p>Explore how artificial intelligence (AI) is transforming modern business operations. From automating routine tasks to providing actionable insights, AI helps companies increase efficiency, reduce costs, and make smarter decisions. Learn practical ways to implement AI solutions in your organization.</p>',1,'2025-09-12 10:23:04','2025-09-12 19:28:08');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_blogs`
--

DROP TABLE IF EXISTS `category_blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_blogs`
--

LOCK TABLES `category_blogs` WRITE;
/*!40000 ALTER TABLE `category_blogs` DISABLE KEYS */;
INSERT INTO `category_blogs` VALUES (1,'Software Development','2025-09-12 10:17:22','2025-09-12 10:17:22'),(2,'IT Network','2025-09-12 10:17:49','2025-09-12 10:17:49'),(3,'Cloud Computing','2025-09-12 10:17:59','2025-09-12 10:17:59'),(4,'Security Network','2025-09-12 10:18:08','2025-09-12 10:18:08');
/*!40000 ALTER TABLE `category_blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'david','beckham','david@gmail.com','08123456789','Salam Kenal dari saya','2025-09-12 10:34:15','2025-09-12 10:34:15');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introductions`
--

DROP TABLE IF EXISTS `introductions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `introductions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introductions`
--

LOCK TABLES `introductions` WRITE;
/*!40000 ALTER TABLE `introductions` DISABLE KEYS */;
INSERT INTO `introductions` VALUES (1,'/storage/2025-09/jsVZiFMLl8F1O3Je2TPwvy1c2XNjZm2l5z82HGx7.png','Your new digital experience with Horizon Tech','<h3>We are team of talented designers making websites with any program language</h3>','2025-09-12 10:06:08','2025-09-12 17:40:41');
/*!40000 ALTER TABLE `introductions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_setttings`
--

DROP TABLE IF EXISTS `main_setttings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_setttings`
--

LOCK TABLES `main_setttings` WRITE;
/*!40000 ALTER TABLE `main_setttings` DISABLE KEYS */;
INSERT INTO `main_setttings` VALUES (1,'/storage/2025-09/Wr39tH9AtJ3Ca6Pnq53Uy4oM7epSAWkmnfDtmCuu.png','Horizon Tech','Horizon Tech','Horizon Tech','/storage/2025-09/737eCagkePKG08aIsiEIpgscE6VKm4PrGISZKBSk.png','2025-09-12 10:04:57','2025-09-12 17:40:16');
/*!40000 ALTER TABLE `main_setttings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_sosials`
--

DROP TABLE IF EXISTS `media_sosials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media_sosials` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_sosials`
--

LOCK TABLES `media_sosials` WRITE;
/*!40000 ALTER TABLE `media_sosials` DISABLE KEYS */;
INSERT INTO `media_sosials` VALUES (1,'Facebook','https://www.facebook.com','/storage/2025-09/CnLzliXivCA5LqVBDQxZ57qseLPSvHAh56VZWK9w.png','2025-09-12 10:31:47','2025-09-12 10:31:47'),(2,'Instagram','https://www.instagram.com','/storage/2025-09/SEFj6LraCA3Vz46wSmAgYSdKLXMJWS4tTWIBNEJk.png','2025-09-12 10:32:03','2025-09-12 10:32:03'),(3,'Twitter','https://twitter.com','/storage/2025-09/mwG0hj89iM7yJA1uOau5cNp95HBu1XrvdDpCabsF.png','2025-09-12 10:32:20','2025-09-12 10:32:20'),(4,'Youtube','https://www.youtube.com','/storage/2025-09/cjnrnjOkJXdHdZFFjy17fhzM8Tgj30TCKyHmLEXf.png','2025-09-12 10:32:46','2025-09-12 10:32:46');
/*!40000 ALTER TABLE `media_sosials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2024_02_23_040421_create_permission_tables',1),(6,'2024_02_23_091016_create_main_setttings_table',1),(7,'2024_02_26_063725_create_introductions_table',1),(8,'2024_02_26_074812_create_abouts_table',1),(9,'2024_02_26_092650_create_about_points_table',1),(10,'2024_02_27_030630_create_category_blogs_table',1),(11,'2024_02_27_040804_create_blogs_table',1),(12,'2024_02_28_015624_create_services_table',1),(13,'2024_02_28_030724_create_products_table',1),(14,'2024_02_28_063002_create_sosial_medias_table',1),(15,'2024_02_29_062525_create_actions_table',1),(16,'2024_02_29_070850_create_modules_table',1),(17,'2024_02_29_070905_create_module_actions_table',1),(18,'2024_03_01_040149_create_blog_titles_table',1),(19,'2024_03_01_042304_create_service_titles_table',1),(20,'2024_03_01_042655_create_product_titles_table',1),(21,'2024_03_01_063649_create_media_sosials_table',1),(22,'2024_03_05_081316_create_pages_table',1),(23,'2025_09_12_124012_create_contacts_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
INSERT INTO `model_has_roles` VALUES (1,'App\\Models\\User',1);
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module_actions`
--

DROP TABLE IF EXISTS `module_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_actions` (
  `module_id` bigint unsigned NOT NULL,
  `action_id` bigint unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module_actions`
--

LOCK TABLES `module_actions` WRITE;
/*!40000 ALTER TABLE `module_actions` DISABLE KEYS */;
INSERT INTO `module_actions` VALUES (1,1),(2,1),(2,2),(2,3),(2,4),(3,1),(3,2),(3,3),(3,4),(4,1),(4,2),(4,3),(4,4),(5,1),(5,2),(5,3),(5,4),(6,1),(6,2),(6,3),(6,4),(7,1),(7,2),(7,3),(7,4),(8,1),(8,2),(8,3),(8,4),(9,1),(9,2),(9,3),(9,4),(10,1),(10,2),(10,3),(10,4),(11,1),(11,2),(11,3),(11,4),(12,1),(12,2),(12,3),(12,4),(13,1),(13,2),(13,3),(13,4),(14,1),(14,2),(14,3),(14,4),(15,1),(15,2),(15,3),(15,4),(16,1),(16,2),(16,3),(16,4),(17,1),(17,2),(17,3),(17,4),(18,1),(18,2),(18,3),(18,4),(19,1);
/*!40000 ALTER TABLE `module_actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `modules_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (1,'Dashboard','dashboard'),(2,'Setting','setting'),(3,'Introduction','introduction'),(4,'About','about'),(5,'About Point','about-point'),(6,'Category Blog','category-blog'),(7,'Blog Title','blog-title'),(8,'Blog','blog'),(9,'Service Title','service-title'),(10,'Service','service'),(11,'Product Title','product-title'),(12,'Product','product'),(13,'Sosial Media','sosial-media'),(14,'Action','action'),(15,'Role','role'),(16,'User','user'),(17,'Module','module'),(18,'Page','page'),(19,'Contact','contact');
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'read-dashboard','web','2025-09-12 09:19:59','2025-09-12 09:19:59'),(2,'read-setting','web','2025-09-12 09:20:00','2025-09-12 09:20:00'),(3,'create-setting','web','2025-09-12 09:20:00','2025-09-12 09:20:00'),(4,'update-setting','web','2025-09-12 09:20:01','2025-09-12 09:20:01'),(5,'delete-setting','web','2025-09-12 09:20:02','2025-09-12 09:20:02'),(6,'read-introduction','web','2025-09-12 09:20:03','2025-09-12 09:20:03'),(7,'create-introduction','web','2025-09-12 09:20:03','2025-09-12 09:20:03'),(8,'update-introduction','web','2025-09-12 09:20:04','2025-09-12 09:20:04'),(9,'delete-introduction','web','2025-09-12 09:20:05','2025-09-12 09:20:05'),(10,'read-about','web','2025-09-12 09:20:05','2025-09-12 09:20:05'),(11,'create-about','web','2025-09-12 09:20:06','2025-09-12 09:20:06'),(12,'update-about','web','2025-09-12 09:20:06','2025-09-12 09:20:06'),(13,'delete-about','web','2025-09-12 09:20:07','2025-09-12 09:20:07'),(14,'read-about-point','web','2025-09-12 09:20:08','2025-09-12 09:20:08'),(15,'create-about-point','web','2025-09-12 09:20:08','2025-09-12 09:20:08'),(16,'update-about-point','web','2025-09-12 09:20:09','2025-09-12 09:20:09'),(17,'delete-about-point','web','2025-09-12 09:20:09','2025-09-12 09:20:09'),(18,'read-category-blog','web','2025-09-12 09:20:10','2025-09-12 09:20:10'),(19,'create-category-blog','web','2025-09-12 09:20:10','2025-09-12 09:20:10'),(20,'update-category-blog','web','2025-09-12 09:20:11','2025-09-12 09:20:11'),(21,'delete-category-blog','web','2025-09-12 09:20:11','2025-09-12 09:20:11'),(22,'read-blog-title','web','2025-09-12 09:20:12','2025-09-12 09:20:12'),(23,'create-blog-title','web','2025-09-12 09:20:12','2025-09-12 09:20:12'),(24,'update-blog-title','web','2025-09-12 09:20:13','2025-09-12 09:20:13'),(25,'delete-blog-title','web','2025-09-12 09:20:13','2025-09-12 09:20:13'),(26,'read-blog','web','2025-09-12 09:20:14','2025-09-12 09:20:14'),(27,'create-blog','web','2025-09-12 09:20:14','2025-09-12 09:20:14'),(28,'update-blog','web','2025-09-12 09:20:15','2025-09-12 09:20:15'),(29,'delete-blog','web','2025-09-12 09:20:15','2025-09-12 09:20:15'),(30,'read-service-title','web','2025-09-12 09:20:16','2025-09-12 09:20:16'),(31,'create-service-title','web','2025-09-12 09:20:16','2025-09-12 09:20:16'),(32,'update-service-title','web','2025-09-12 09:20:17','2025-09-12 09:20:17'),(33,'delete-service-title','web','2025-09-12 09:20:17','2025-09-12 09:20:17'),(34,'read-service','web','2025-09-12 09:20:18','2025-09-12 09:20:18'),(35,'create-service','web','2025-09-12 09:20:18','2025-09-12 09:20:18'),(36,'update-service','web','2025-09-12 09:20:19','2025-09-12 09:20:19'),(37,'delete-service','web','2025-09-12 09:20:19','2025-09-12 09:20:19'),(38,'read-product-title','web','2025-09-12 09:20:20','2025-09-12 09:20:20'),(39,'create-product-title','web','2025-09-12 09:20:20','2025-09-12 09:20:20'),(40,'update-product-title','web','2025-09-12 09:20:21','2025-09-12 09:20:21'),(41,'delete-product-title','web','2025-09-12 09:20:21','2025-09-12 09:20:21'),(42,'read-product','web','2025-09-12 09:20:22','2025-09-12 09:20:22'),(43,'create-product','web','2025-09-12 09:20:22','2025-09-12 09:20:22'),(44,'update-product','web','2025-09-12 09:20:23','2025-09-12 09:20:23'),(45,'delete-product','web','2025-09-12 09:20:24','2025-09-12 09:20:24'),(46,'read-sosial-media','web','2025-09-12 09:20:24','2025-09-12 09:20:24'),(47,'create-sosial-media','web','2025-09-12 09:20:25','2025-09-12 09:20:25'),(48,'update-sosial-media','web','2025-09-12 09:20:25','2025-09-12 09:20:25'),(49,'delete-sosial-media','web','2025-09-12 09:20:26','2025-09-12 09:20:26'),(50,'read-action','web','2025-09-12 09:20:27','2025-09-12 09:20:27'),(51,'create-action','web','2025-09-12 09:20:27','2025-09-12 09:20:27'),(52,'update-action','web','2025-09-12 09:20:28','2025-09-12 09:20:28'),(53,'delete-action','web','2025-09-12 09:20:28','2025-09-12 09:20:28'),(54,'read-role','web','2025-09-12 09:20:29','2025-09-12 09:20:29'),(55,'create-role','web','2025-09-12 09:20:29','2025-09-12 09:20:29'),(56,'update-role','web','2025-09-12 09:20:29','2025-09-12 09:20:29'),(57,'delete-role','web','2025-09-12 09:20:30','2025-09-12 09:20:30'),(58,'read-user','web','2025-09-12 09:20:30','2025-09-12 09:20:30'),(59,'create-user','web','2025-09-12 09:20:31','2025-09-12 09:20:31'),(60,'update-user','web','2025-09-12 09:20:31','2025-09-12 09:20:31'),(61,'delete-user','web','2025-09-12 09:20:32','2025-09-12 09:20:32'),(62,'read-module','web','2025-09-12 09:20:32','2025-09-12 09:20:32'),(63,'create-module','web','2025-09-12 09:20:33','2025-09-12 09:20:33'),(64,'update-module','web','2025-09-12 09:20:34','2025-09-12 09:20:34'),(65,'delete-module','web','2025-09-12 09:20:34','2025-09-12 09:20:34'),(66,'read-page','web','2025-09-12 09:20:35','2025-09-12 09:20:35'),(67,'create-page','web','2025-09-12 09:20:35','2025-09-12 09:20:35'),(68,'update-page','web','2025-09-12 09:20:35','2025-09-12 09:20:35'),(69,'delete-page','web','2025-09-12 09:20:36','2025-09-12 09:20:36'),(70,'read-contact','web','2025-09-12 09:20:37','2025-09-12 09:20:37');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_titles`
--

DROP TABLE IF EXISTS `product_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_titles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_titles`
--

LOCK TABLES `product_titles` WRITE;
/*!40000 ALTER TABLE `product_titles` DISABLE KEYS */;
INSERT INTO `product_titles` VALUES (1,'PRODUCT','<p>We are crafting designs with outstanding design solution</p>','2025-09-12 10:27:19','2025-09-12 19:31:34');
/*!40000 ALTER TABLE `product_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'/storage/2025-09/PcnSL34eQgYwZhe2f3R8s1Wapi2HzMevmfFGaRxb.png','Company Profile Website','dashboard-bandung','<ul><li>A sleek, responsive, and fully customizable website to showcase your business identity.<br>Features include modern design, mobile optimization, easy navigation, and seamless integration with social media and contact forms.</li></ul>','2025-09-12 10:28:32','2025-09-12 19:23:55'),(2,'/storage/2025-09/iYrEZHrzWu3ygbp6bBnesFwqfUu7fkKQHIUsUROM.png','Point of Sale (POS) System','dashboard-medan','<p>A comprehensive POS solution designed for retailers and restaurants. Manage transactions efficiently, generate real-time sales reports, integrate with inventory, and accept multiple payment methods to streamline operations.</p>','2025-09-12 10:29:26','2025-09-12 19:24:02'),(3,'/storage/2025-09/Ftk3TJehcW6MSpWCwjZqoAMR2NVXLl0B73O6eARB.png','Stock Management System','dashboard-palembang','<p>Efficiently track inventory levels, product movements, and supply chain operations.<br>Minimize stock shortages and overstock issues, automate reporting, and gain insights into product performance and demand trends.</p>','2025-09-12 10:29:44','2025-09-12 19:24:12'),(4,'/storage/2025-09/ma86elmPWaujZmTMI5W6zUNEW8WUClZ3ARC9pCd1.png','E-Learning Platform','dashboard-surabaya','<p>An interactive learning platform for schools, corporate training, or online courses.<br>Features include video lessons, quizzes, certificates, discussion boards, and analytics to monitor student performance.</p>','2025-09-12 10:30:21','2025-09-12 19:24:19'),(5,'/storage/2025-09/NdtRMafj5RddhExMDk4ckT42ssf0NG0BruVMTU5J.png','Custom Web Applications','custom-web-applications','<p>Tailored software solutions built to meet your specific business needs. From booking systems to workflow automation, we develop scalable and secure applications that enhance productivity and solve unique challenges.</p>','2025-09-12 19:24:57','2025-09-12 19:24:57');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
INSERT INTO `role_has_permissions` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(44,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1),(51,1),(52,1),(53,1),(54,1),(55,1),(56,1),(57,1),(58,1),(59,1),(60,1),(61,1),(62,1),(63,1),(64,1),(65,1),(66,1),(67,1),(68,1),(69,1),(70,1);
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'developer','web','2025-09-12 09:19:58','2025-09-12 09:19:58');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_titles`
--

DROP TABLE IF EXISTS `service_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_titles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_titles`
--

LOCK TABLES `service_titles` WRITE;
/*!40000 ALTER TABLE `service_titles` DISABLE KEYS */;
INSERT INTO `service_titles` VALUES (1,'SERVICES','<p>Our Information Technology Services are designed to provide solutions tailored to your specific needs. From innovative software development, reliable system maintenance, to high information security, we are committed to being a leader in providing IT solutions that inspire and empower.</p>','2025-09-12 10:23:52','2025-09-12 10:23:52');
/*!40000 ALTER TABLE `service_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'/storage/2025-09/VQc7qH1ZPOcLxdaDvqMQ4Dbxm32mU9TImEIO1Cug.png','Web Development','software-development','<p>End-to-end website development for businesses, organizations, and startups.<br>We combine modern design principles, responsive layouts, and robust coding practices to create fast, secure, and user-friendly websites.</p>','2025-09-12 10:25:25','2025-09-12 19:06:35'),(2,'/storage/2025-09/QaqnVGdXH46wzeNqlJHWkdW4tCqgNwIjFj6qxDyX.png','Mobile App Development','network-and-infrastructure','<p>Develop high-quality mobile applications for Android and iOS platforms.<br>Our apps are designed to engage users, improve customer experience, and integrate seamlessly with existing systems.</p>','2025-09-12 10:26:00','2025-09-12 19:06:42'),(3,'/storage/2025-09/wbZfJ942JklRMksx7UI4tgLqxwDAAJpLJSvgf5oU.png','UI/UX Design','information-security','<p>Creating visually appealing and intuitive interfaces that enhance user experience.<br>We focus on design that is not only beautiful but also functional, ensuring that users can navigate easily and complete actions efficiently.</p>','2025-09-12 10:26:26','2025-09-12 19:06:50'),(4,'/storage/2025-09/jbQXW6snKE5P4CJ4hh9vzOmwmpVrPlgnuxFQvjjm.png','IT Consulting','it-consulting','<p>Expert guidance to optimize your technology usage and digital transformation strategy.<br>From system audits to technology roadmaps, we provide solutions that reduce costs, increase efficiency, and align IT with business goals.</p>','2025-09-12 10:26:49','2025-09-12 19:06:58');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sosial_medias`
--

DROP TABLE IF EXISTS `sosial_medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sosial_medias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sosial_medias`
--

LOCK TABLES `sosial_medias` WRITE;
/*!40000 ALTER TABLE `sosial_medias` DISABLE KEYS */;
/*!40000 ALTER TABLE `sosial_medias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Developer','developer@developer.com','2023-07-02 19:06:55','$2y$10$EJpipNer5uW1GLvgtBPWkewnmNrwTbJMbUike8dTRU1k2TPWRNali',NULL,'2025-09-12 09:19:59','2025-09-12 09:19:59');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-13 10:14:52
